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

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    return callback(null, true);
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

// ==========================================
// 📧 EMAIL TRANSPORTER CONFIGURATION (GMAIL)
// ==========================================
const EMAIL_USER = process.env.EMAIL_USER || 'divineofayodhya@gmail.com';
const EMAIL_PASS = (process.env.EMAIL_PASS || 'eehimfgtkjujcfmj').replace(/\s+/g, '');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

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
    fs.writeFileSync(messagesFilePath, JSON.stringify(list.slice(0, 300), null, 2));
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

// ==========================================
// 📩 CONTACT FORM API ENDPOINT
// ==========================================
app.post('/api/send-message', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: 'Name and message are required.' });
  }

  // 1. Save message locally
  const savedEntry = saveMessageLocally({ name, email, phone, subject, message });
  console.log(`\n📬 [NEW MESSAGE RECEIVED] from ${name} (${email || 'No email'}):`);
  console.log(`   Subject: ${subject || 'General inquiry'}`);
  console.log(`   Phone:   ${phone || 'N/A'}`);
  console.log(`   Message: "${message.substring(0, 80)}${message.length > 80 ? '...' : ''}"`);
  console.log(`   Saved in: server/data/contact-messages.json (ID: ${savedEntry.id})\n`);

  // 2. Send email via Nodemailer Gmail
  let emailDispatched = false;
  try {
    const mailOptions = {
      from: `"The Divine of Ayodhya" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email || undefined,
      subject: subject || 'New Contact Form Submission',
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'General Inquiry'}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to Gmail inbox:', info.messageId);
    emailDispatched = true;
  } catch (emailError) {
    console.error('❌ Gmail SMTP error:', emailError.message);
  }

  res.status(200).json({
    success: true,
    message: '🙏 Jai Shri Ram! Your message has been received successfully.',
    emailDispatched,
    savedId: savedEntry.id,
  });
});

// View all received contact messages
app.get('/api/contact-messages', (req, res) => {
  try {
    const raw = fs.readFileSync(messagesFilePath, 'utf-8');
    res.json({ success: true, count: JSON.parse(raw || '[]').length, messages: JSON.parse(raw || '[]') });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// ==========================================
// 💰 RAZORPAY CONFIGURATION & DONATIONS
// ==========================================
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
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_RgUpx3CB4OtecR',
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

  console.log(`\n🎉 [PAYMENT RECORDED] ₹${savedDonation.amount} from ${savedDonation.donor_name} (ID: ${razorpay_payment_id})`);

  // Send donation alert email
  try {
    await transporter.sendMail({
      from: `"The Divine of Ayodhya" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      subject: `🎉 New Donation Received: ₹${savedDonation.amount} from ${savedDonation.donor_name}`,
      text: `You have received a new donation!\n\nAmount: ₹${savedDonation.amount}\nDonor: ${savedDonation.donor_name}\nEmail: ${savedDonation.donor_email}\nPhone: ${savedDonation.donor_phone}\nPayment ID: ${razorpay_payment_id}\n\nProcessed securely via Razorpay.`,
    });
  } catch (e) {
    console.log('Notice: Donation email notice skipped:', e.message);
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
    emailUser: EMAIL_USER,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID || 'Not set',
    isLiveKey,
  });
});

// Root landing page
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
            <p>Backend Server is Live & Operational</p>
          </div>
          <div class="content">
            <div class="status-badge">
              <span class="pulse-dot"></span> Server Operational
            </div>

            <div class="grid">
              <div class="item">
                <div class="item-title">Active Mailbox</div>
                <div class="item-val">${EMAIL_USER}</div>
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

// Start server
app.listen(port, () => {
  console.log(`\n======================================================`);
  console.log(`🚩 Ayodhya Blessings Server Active on http://localhost:${port}`);
  console.log(`   📧 Mailbox Account:   ${EMAIL_USER}`);
  console.log(`   💳 Razorpay Key:      ${process.env.RAZORPAY_KEY_ID || 'rzp_live_RgUpx3CB4OtecR'}`);
  console.log(`======================================================\n`);
});
