# The Divine of Ayodhya - Backend Server

This is the backend API server for the website. It handles:
- Razorpay payment order creation and verification
- Contact form message handling and email notifications
- CORS-enabled endpoints for the frontend

## Environment Variables Required

Create a `.env` file in this directory with:
```
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5001
```

## Development

```bash
npm install
npm start
```

Server will run on `http://localhost:5001`

## Deployment

### Option 1: Render.com (Free)
1. Push code to GitHub
2. Go to render.com
3. Create new Web Service
4. Connect GitHub repo
5. Set Build command: `npm install`
6. Set Start command: `node server.js`
7. Add environment variables from `.env`

### Option 2: Railway.app
1. Go to railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Configure environment variables
5. Deploy

### Option 3: Heroku
```bash
heroku login
heroku create
git push heroku main
```

## API Endpoints

### Create Order
**POST** `/api/create-order`
```json
{
  "amount": 5000
}
```

### Verify Payment
**POST** `/api/verify-payment`
```json
{
  "razorpay_order_id": "order_xxx",
  "razorpay_payment_id": "pay_xxx",
  "razorpay_signature": "signature_xxx"
}
```

### Send Message
**POST** `/api/send-message`
```json
{
  "name": "John",
  "email": "john@example.com",
  "message": "Hello"
}
```
