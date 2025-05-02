import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';


import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 5000;
const FRONTEND_URL = 'http://localhost:3000';

// Middleware
app.use(cors({
  origin: FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // ✅ references the .env variable
    pass: process.env.EMAIL_PASS, // ✅ references the .env variable
  },
});


// Send contact form message to email
app.post('/api/send-message', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: 'Name and message are required.' });
  }

  const mailOptions = {
    from: email || 'no-reply@example.com',
    to: 'ayodhyablossom@gmail.com', // 🔔 Where you want to receive messages
    subject: subject || 'New Contact Form Submission',
    text: `
You have a new message from your contact form:

Name: ${name}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully.');
    res.status(200).json({ success: true, message: 'Your message has been sent via email!' });
  } catch (error) {
    console.error('❌ Email failed to send:', error);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Contact API with email running at http://localhost:${port}`);
});
console.log('USER:', process.env.EMAIL_USER);
console.log('PASS:', process.env.EMAIL_PASS ? 'Loaded ✅' : 'Missing ❌');

