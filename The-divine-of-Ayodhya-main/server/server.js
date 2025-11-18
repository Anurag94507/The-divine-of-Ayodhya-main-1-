import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const app = express();
const port = process.env.PORT || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';

// Middleware
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:3001', 'http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Email Transporter Setup
const EMAIL_USER = process.env.EMAIL_USER || 'divineofayodhya@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'eqqlqavdidkaeimb';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});


// Send contact form message to email
app.post('/api/send-message', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: 'Name and message are required.' });
  }

  try {
    const msgData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      subject,
      message
    };
    
    // Save message to messages.json file
    const messagesFile = path.join(__dirname, 'messages.json');
    let messages = [];
    
    if (fs.existsSync(messagesFile)) {
      const fileContent = fs.readFileSync(messagesFile, 'utf-8');
      messages = JSON.parse(fileContent || '[]');
    }
    
    messages.push(msgData);
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
    
    console.log('✅ Message saved to messages.json:', msgData);
    
    // Attempt to send email (optional, won't break if it fails)
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER, // Must match the authenticated email account
        to: 'divineofayodhya@gmail.com',
        replyTo: email || 'no-reply@example.com', // User's email in reply-to
        subject: subject || 'New Contact Form Submission',
        text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
      };
      await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully from:', process.env.EMAIL_USER);
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError.message);
    }
    
    res.status(200).json({ success: true, message: 'Your message has been received!' });
  } catch (error) {
    console.error('❌ Error processing message:', error);
    res.status(500).json({ success: false, error: 'Failed to process message. Please try again later.' });
  }
});

// Donation Endpoints
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    
    console.log('[Backend] Create order request received with amount:', amount);
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    
    // Create order using real Razorpay API
    const order = await razorpay.orders.create({
      amount: amount, // Amount in paise
      currency: 'INR',
      receipt: 'receipt_' + Date.now(),
    });
    
    console.log('[Backend] Order created with Razorpay:', order);
    
    res.json({
      order_id: order.id,
      id: order.id,
      entity: 'order',
      amount: order.amount,
      currency: order.currency,
      status: order.status,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Could not create order', details: error.message });
  }
});

app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    console.log('[Backend] Verify payment request received:', {
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      signature: razorpay_signature
    });
    
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ status: 'failed', error: 'Missing payment details' });
    }
    
    // Verify the payment signature using crypto (imported at top)
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
    
    console.log('[Backend] Generated signature:', generatedSignature);
    console.log('[Backend] Received signature:', razorpay_signature);
    
    if (generatedSignature === razorpay_signature) {
      console.log('✅ Payment signature verified successfully!');
      
      // Save payment record
      const paymentRecord = {
        timestamp: new Date().toISOString(),
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
        status: 'verified'
      };
      
      const paymentsFile = path.join(__dirname, 'payments.json');
      let payments = [];
      
      if (fs.existsSync(paymentsFile)) {
        const fileContent = fs.readFileSync(paymentsFile, 'utf-8');
        payments = JSON.parse(fileContent || '[]');
      }
      
      payments.push(paymentRecord);
      fs.writeFileSync(paymentsFile, JSON.stringify(payments, null, 2));
      
      console.log('✅ Payment saved to payments.json');
      
      res.json({ status: 'success', message: 'Payment verified successfully' });
    } else {
      console.error('❌ Payment signature verification failed!');
      res.status(400).json({ status: 'failed', error: 'Invalid payment signature' });
    }
  } catch (error) {
    console.error('❌ Error verifying payment:', error);
    res.status(500).json({ status: 'failed', error: 'Payment verification failed' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to The Divine of Ayodhya API', status: 'running', port: port });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`🚀 Contact API with email running at http://localhost:${port}`);
  console.log('═══════════════════════════════════════');
  console.log('📧 EMAIL CONFIGURATION:');
  console.log('USER:', process.env.EMAIL_USER);
  console.log('PASS:', process.env.EMAIL_PASS ? '✅ Loaded' : '❌ Missing');
  console.log('═══════════════════════════════════════');
});
console.log('USER (at startup):', process.env.EMAIL_USER);
console.log('PASS (at startup):', process.env.EMAIL_PASS ? 'Loaded ✅' : 'Missing ❌');

