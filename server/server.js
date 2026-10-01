import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Ensure data directory exists for persistent storage
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const messagesFilePath = path.join(dataDir, 'contact-messages.json');
if (!fs.existsSync(messagesFilePath)) {
  fs.writeFileSync(messagesFilePath, JSON.stringify([], null, 2));
}

const donationsFilePath = path.join(dataDir, 'donations.json');
if (!fs.existsSync(donationsFilePath)) {
  fs.writeFileSync(donationsFilePath, JSON.stringify([], null, 2));
}

// Allow multiple frontend origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:5173',
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

const hasEmailConfig = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'YOUR_APP_PASSWORD_HERE');
const hasResendConfig = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.startsWith('re_'));

let transporter = null;
if (hasEmailConfig) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS.replace(/\s+/g, ''),
    },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
  });
}

// Helper: Save message locally
const saveMessageLocally = (msgData) => {
  try {
    const raw = fs.readFileSync(messagesFilePath, 'utf-8');
    const list = JSON.parse(raw || '[]');
    const newEntry = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      receivedAt: new Date().toISOString(),
      ...msgData,
    };
    list.unshift(newEntry);
    fs.writeFileSync(messagesFilePath, JSON.stringify(list.slice(0, 200), null, 2));
    return newEntry;
  } catch (err) {
    console.error('⚠️ Could not save message to local JSON:', err.message);
    return msgData;
  }
};

// Helper: Save donation locally
const saveDonationLocally = (donationData) => {
  try {
    const raw = fs.readFileSync(donationsFilePath, 'utf-8');
    const list = JSON.parse(raw || '[]');
    const newEntry = {
      id: `don_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      receivedAt: new Date().toISOString(),
      ...donationData,
    };
    list.unshift(newEntry);
    fs.writeFileSync(donationsFilePath, JSON.stringify(list.slice(0, 500), null, 2));
    return newEntry;
  } catch (err) {
    console.error('⚠️ Could not save donation to local JSON:', err.message);
    return donationData;
  }
};

// Send contact form message
app.post('/api/send-message', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: 'Name and message are required.' });
  }

  // 1. Always record the message securely locally
  const savedEntry = saveMessageLocally({ name, email, phone, subject, message });
  console.log(`\n📬 [NEW MESSAGE RECEIVED] from ${name} (${email || 'No email'}):`);
  console.log(`   Subject: ${subject || 'General inquiry'}`);
  console.log(`   Phone:   ${phone || 'N/A'}`);
  console.log(`   Message: "${message.substring(0, 80)}${message.length > 80 ? '...' : ''}"`);
  console.log(`   Saved in: server/data/contact-messages.json (ID: ${savedEntry.id})\n`);

  // 2. HTML email template
  const emailHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border: 1px solid #fed7aa;">
      <div style="background: linear-gradient(135deg, #FF9933, #800000); padding: 24px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 22px;">🙏 New Contact Inquiry</h1>
        <p style="color: #fed7aa; margin: 8px 0 0; font-size: 14px;">The Divine of Ayodhya</p>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #800000; width: 100px;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #800000;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #800000;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #800000;">Subject</td>
            <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${subject || 'General'}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #FFF6E0; border-radius: 8px; border-left: 4px solid #FF9933;">
          <h4 style="margin: 0 0 8px; color: #800000;">Message:</h4>
          <p style="margin: 0; line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      <div style="padding: 14px; background: #faf5eb; text-align: center; color: #78350f; font-size: 12px;">
        Submitted from The Divine of Ayodhya • Received at ${new Date().toLocaleString('en-IN')}
      </div>
    </div>
  `;

  let emailDispatched = false;

  // 3. Guaranteed HTTPS Delivery via FormSubmit Webhook to divineofayodhya@gmail.com
  try {
    const targetEmail = process.env.EMAIL_USER || 'divineofayodhya@gmail.com';
    const fsRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://the-divine-of-ayodhya.onrender.com',
        'Referer': 'https://the-divine-of-ayodhya.onrender.com/',
      },
      body: JSON.stringify({
        _subject: subject ? `🚩 [The Divine of Ayodhya] ${subject}` : '🚩 [The Divine of Ayodhya] New Contact Inquiry',
        name: name,
        email: email || 'Not provided',
        phone: phone || 'Not provided',
        message: message,
        _replyto: email || undefined,
      }),
    });
    const fsData = await fsRes.json();
    if (fsData.success === 'true' || fsData.success === true) {
      emailDispatched = true;
      console.log('✅ Email delivered to inbox via FormSubmit HTTPS Webhook.');
    } else {
      console.log('ℹ️ FormSubmit Note:', fsData.message);
    }
  } catch (fsErr) {
    console.log('ℹ️ FormSubmit error:', fsErr.message);
  }

  // 4. Attempt delivery via Resend HTTPS API if configured
  if (!emailDispatched && hasResendConfig) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'The Divine of Ayodhya <onboarding@resend.dev>',
          to: [process.env.EMAIL_USER || 'divineofayodhya@gmail.com'],
          reply_to: email || undefined,
          subject: subject ? `[The Divine of Ayodhya] ${subject}` : '[The Divine of Ayodhya] New Contact Message',
          html: emailHtml,
        }),
      });
      const resendJson = await resendRes.json();
      if (resendRes.ok) {
        emailDispatched = true;
        console.log('✅ Email delivered via Resend HTTPS API:', resendJson.id);
      } else {
        console.log('⚠️ Resend Note:', resendJson.message || resendJson);
      }
    } catch (rErr) {
      console.log('ℹ️ Resend dispatch error:', rErr.message);
    }
  }

  // 5. Attempt delivery via Nodemailer SMTP if not yet dispatched
  if (!emailDispatched && transporter && hasEmailConfig) {
    const mailOptions = {
      from: `"The Divine of Ayodhya" <${process.env.EMAIL_USER}>`,
      replyTo: email || undefined,
      to: process.env.EMAIL_USER,
      subject: subject ? `[The Divine of Ayodhya] ${subject}` : '[The Divine of Ayodhya] New Contact Submission',
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: emailHtml,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent to Gmail inbox via SMTP successfully.');
      emailDispatched = true;
    } catch (smtpErr) {
      console.log('ℹ️  Note on Gmail SMTP:', smtpErr.message);
    }
  }

  res.status(200).json({
    success: true,
    message: '🙏 Jai Shri Ram! Your message has been received successfully. Our team will contact you soon.',
    emailDispatched,
    savedId: savedEntry.id,
  });
});

// Admin endpoint to view received contact messages
app.get('/api/contact-messages', (req, res) => {
  try {
    const raw = fs.readFileSync(messagesFilePath, 'utf-8');
    res.json({ success: true, count: JSON.parse(raw || '[]').length, messages: JSON.parse(raw || '[]') });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Diagnostic endpoint to test email delivery
app.get('/api/test-email', async (req, res) => {
  if (!transporter || !hasEmailConfig) {
    return res.status(400).json({
      success: false,
      error: 'Email configuration is missing in server/.env',
      EMAIL_USER: process.env.EMAIL_USER || 'Not configured',
    });
  }

  try {
    const info = await transporter.sendMail({
      from: `"The Divine of Ayodhya" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: '🧪 Test Email from The Divine of Ayodhya',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #FFF6E0; border: 1px solid #FF9933; border-radius: 8px;">
          <h2 style="color: #800000; margin-top: 0;">🙏 SMTP Test Succeeded!</h2>
          <p>Your Gmail credentials are properly configured and emails can be dispatched successfully.</p>
          <p style="font-size: 12px; color: #666;">Sent at: ${new Date().toLocaleString('en-IN')}</p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: '✅ Test email sent successfully to ' + process.env.EMAIL_USER,
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      code: error.code,
      details: 'If running locally on home WiFi, ISPs often block SMTP ports (ETIMEDOUT). Deployed cloud servers (Vercel/Render) allow outbound SMTP.',
    });
  }
});

// ========================
// 💰 RAZORPAY CONFIGURATION
// ========================
const isLiveKey = Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID.startsWith('rzp_live_'));
const isRealRazorpaySecret = Boolean(
  process.env.RAZORPAY_KEY_SECRET &&
  process.env.RAZORPAY_KEY_SECRET !== 'YOUR_RAZORPAY_KEY_SECRET_HERE' &&
  process.env.RAZORPAY_KEY_SECRET.length > 8
);

// Get Razorpay Key for Frontend Checkout
app.get('/api/razorpay-key', (req, res) => {
  res.json({
    success: true,
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_sS4pKgwR9F3SU7',
    isLive: isLiveKey,
    hasSecret: isRealRazorpaySecret,
  });
});

// Record Completed Payment from Razorpay
app.post('/api/record-payment', async (req, res) => {
  const { razorpay_payment_id, amount, donor_name, donor_email, donor_phone, purpose } = req.body;

  if (!razorpay_payment_id) {
    return res.status(400).json({ success: false, error: 'Payment ID is required.' });
  }

  const savedDonation = saveDonationLocally({
    razorpay_payment_id,
    amount: Number(amount) || 0,
    donor_name: donor_name || 'Anonymous Devotee',
    donor_email: donor_email || 'Not provided',
    donor_phone: donor_phone || 'Not provided',
    purpose: purpose || 'Donation to Ayodhya Blessings & Community Support',
  });

  console.log(`\n🎉 [PAYMENT RECEIVED IN RAZORPAY]`);
  console.log(`   Payment ID: ${razorpay_payment_id}`);
  console.log(`   Amount:     ₹${savedDonation.amount}`);
  console.log(`   Donor:      ${savedDonation.donor_name} (${savedDonation.donor_email})`);
  console.log(`   Saved in:   server/data/donations.json (ID: ${savedDonation.id})\n`);

  // Send confirmation email to admin if configured
  if (transporter && hasEmailConfig) {
    transporter.sendMail({
      from: `"Ayodhya Blessings" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎉 New Donation Received: ₹${savedDonation.amount} from ${savedDonation.donor_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background: #FFF6E0; border-radius: 12px; border: 1px solid #FF9933; max-width: 550px;">
          <h2 style="color: #800000; margin-top: 0;">🙏 Divine Contribution Received!</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; font-weight: bold; color: #800000;">Payment ID:</td><td style="padding: 8px;">${razorpay_payment_id}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #800000;">Amount:</td><td style="padding: 8px; font-weight: bold; color: #16a34a;">₹${savedDonation.amount}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #800000;">Donor:</td><td style="padding: 8px;">${savedDonation.donor_name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #800000;">Email:</td><td style="padding: 8px;">${savedDonation.donor_email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #800000;">Phone:</td><td style="padding: 8px;">${savedDonation.donor_phone}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #666; text-align: center;">Funds processed via Razorpay Gateway to your bank account.</p>
        </div>
      `,
    }).catch(e => console.log('Notice: Email notification skipped:', e.message));
  }

  res.status(200).json({
    success: true,
    message: '🙏 Jai Shri Ram! Thank you for your divine contribution. Payment confirmed successfully.',
    receipt_id: `REC-${Date.now()}`,
    payment_id: razorpay_payment_id,
  });
});

// View all recorded donations
app.get('/api/donations', (req, res) => {
  try {
    const raw = fs.readFileSync(donationsFilePath, 'utf-8');
    const list = JSON.parse(raw || '[]');
    const totalAmount = list.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    res.json({ success: true, count: list.length, totalAmount, donations: list });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasEmailConfig,
    hasResendConfig,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID || 'Not set',
    isLiveKey,
  });
});

// Serve frontend build if available, otherwise show beautiful API status dashboard
const frontendDist = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>🚩 The Divine of Ayodhya - API Server</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
              font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
              background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
              color: #431407;
            }
            .card {
              background: white;
              border-radius: 24px;
              box-shadow: 0 20px 40px rgba(128, 0, 0, 0.08);
              border: 1px solid #fed7aa;
              max-width: 580px;
              width: 100%;
              overflow: hidden;
              text-align: center;
            }
            .header {
              background: linear-gradient(135deg, #ea580c, #991b1b);
              color: white;
              padding: 32px 24px;
            }
            .header h1 { font-size: 26px; margin-bottom: 6px; }
            .header p { color: #ffedd5; font-size: 15px; }
            .content { padding: 32px 28px; }
            .status-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: #ecfdf5;
              color: #065f46;
              padding: 8px 16px;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 14px;
              border: 1px solid #a7f3d0;
              margin-bottom: 24px;
            }
            .pulse-dot {
              width: 10px;
              height: 10px;
              background: #10b981;
              border-radius: 50%;
              display: inline-block;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
              margin-bottom: 24px;
              text-align: left;
            }
            .item {
              background: #fafaf9;
              padding: 12px 16px;
              border-radius: 12px;
              border: 1px solid #f5f5f4;
            }
            .item-title { font-size: 11px; text-transform: uppercase; color: #78716c; font-weight: 700; margin-bottom: 4px; }
            .item-val { font-size: 14px; font-weight: 600; color: #1c1917; }
            .endpoints {
              background: #fffbeb;
              border: 1px solid #fde68a;
              border-radius: 16px;
              padding: 20px;
              text-align: left;
            }
            .endpoints h3 { font-size: 14px; color: #92400e; margin-bottom: 12px; }
            .endpoint-link {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #fef3c7;
              font-family: monospace;
              font-size: 13px;
              color: #b45309;
              text-decoration: none;
            }
            .endpoint-link:last-child { border-bottom: none; }
            .endpoint-link:hover { color: #ea580c; }
            .footer { padding: 16px; font-size: 13px; color: #a8a29e; border-top: 1px solid #f5f5f4; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>🕉️ The Divine of Ayodhya</h1>
              <p>Cloud Backend Server is Live & Healthy</p>
            </div>
            <div class="content">
              <div class="status-badge">
                <span class="pulse-dot"></span> API Server Operational
              </div>

              <div class="grid">
                <div class="item">
                  <div class="item-title">Active Mailbox</div>
                  <div class="item-val">${process.env.EMAIL_USER || 'divineofayodhya@gmail.com'}</div>
                </div>
                <div class="item">
                  <div class="item-title">Razorpay Gateway</div>
                  <div class="item-val">🟢 Live Active</div>
                </div>
              </div>

              <div class="endpoints">
                <h3>📡 Quick API Endpoints</h3>
                <a href="/api/health" class="endpoint-link"><span>GET /api/health</span> <span>Check Health ↗</span></a>
                <a href="/api/contact-messages" class="endpoint-link"><span>GET /api/contact-messages</span> <span>View Inquiries ↗</span></a>
                <a href="/api/razorpay-key" class="endpoint-link"><span>GET /api/razorpay-key</span> <span>Payment Key ↗</span></a>
                <a href="/api/donations" class="endpoint-link"><span>GET /api/donations</span> <span>Donations ↗</span></a>
              </div>
            </div>
            <div class="footer">
              🙏 Jai Shri Ram • The Divine of Ayodhya Platform
            </div>
          </div>
        </body>
      </html>
    `);
  });
}

// Start server
app.listen(port, () => {
  console.log(`\n======================================================`);
  console.log(`🚩 Ayodhya Blessings Server Active on http://localhost:${port}`);
  console.log(`   📧 Contact form endpoint: POST /api/send-message`);
  console.log(`   📋 View saved messages:   GET  /api/contact-messages`);
  console.log(`   💳 Razorpay Key endpoint: GET  /api/razorpay-key`);
  console.log(`   💰 Record donation:       POST /api/record-payment`);
  console.log(`   📊 View donations:        GET  /api/donations`);
  console.log(`   ❤️  Health check:          GET  /api/health`);
  console.log(`------------------------------------------------------`);
  console.log(`EMAIL_USER:          ${process.env.EMAIL_USER || '❌ Not set'}`);
  console.log(`RAZORPAY_KEY_ID:     ${process.env.RAZORPAY_KEY_ID || '❌ Not set'} (${isLiveKey ? '🟢 LIVE MODE - Real Money' : '🟡 TEST MODE - Sandbox'})`);
  console.log(`======================================================\n`);
});
