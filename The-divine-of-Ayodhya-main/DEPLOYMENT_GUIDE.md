# Deployment Guide for The Divine of Ayodhya

## Quick Fix for Current Render Deployment Issue

Your Render service is trying to run old commands. **You must manually update Render settings:**

### Step 1: Update Render Service Settings

1. Go to https://dashboard.render.com
2. Click on your service: **divine-ayodhya-api**
3. Go to **Settings** → **Build & Deploy**
4. Update the following:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Root Directory**: Leave empty (if it shows a root dir, clear it)

5. Scroll down and click **Manual Deploy** or **Deploy latest commit**

### Step 2: Add Environment Variables

1. In the same Settings page, find **Environment**
2. Add these variables (from your `server/.env`):
   ```
   RAZORPAY_KEY_ID=rzp_live_RgUpx3CB4OtecR
   RAZORPAY_KEY_SECRET=6IZTiR07SqXtK6w9NBoz171F
   EMAIL_USER=divineofayodhya@gmail.com
   EMAIL_PASS=eqqlqavdidkaeimb
   PORT=5001
   ```

3. Save and deploy

### Step 3: Get Backend URL

Once deployed successfully:
1. Go to your service page
2. Copy the URL at the top (e.g., `https://divine-ayodhya-api.onrender.com`)

### Step 4: Update Netlify Frontend

1. Go to https://app.netlify.com
2. Select your site
3. Go to **Site Settings** → **Build & deploy** → **Environment**
4. Add/Update variable:
   - **Key**: `VITE_BACKEND_URL`
   - **Value**: `https://divine-ayodhya-api.onrender.com`

5. Go to **Deploys** and click **Trigger deploy** → **Deploy site**

## Alternative: Deploy Everything to Render (Easier)

If Render keeps having issues with subdirectories, use this instead:

### Create New Web Service on Render

1. Go to https://dashboard.render.com
2. Click **New +** → **Web Service**
3. Connect GitHub repo: `Anurag94507/The-divine-of-Ayodhya-main-1-`
4. Configure:
   - **Name**: `divine-ayodhya-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install` (leave as is)
   - **Start Command**: `npm start`
   - **Root Directory**: `server` (IMPORTANT - set this explicitly)

5. Add environment variables (from Step 2 above)
6. Create Web Service

The **Root Directory** setting is the key - it tells Render to work from the `server` folder.

## Manual Testing

To test locally before deploying:

```bash
cd server
npm install
npm start
```

Server should start on `http://localhost:5001`

## Troubleshooting

**Error: "bash: line 1: cd: server: No such file or directory"**
- The build command is trying to cd but the shell doesn't support `&` in Render
- Use `&&` instead: `cd server && npm install`
- Or set **Root Directory** to `server` in settings

**Error: "Missing script: start"**
- The start command is running in wrong directory
- Either set **Root Directory** to `server` or use full path in start command

**Frontend showing 404 after backend deploys**
- Update `VITE_BACKEND_URL` in Netlify environment
- Trigger a new Netlify deploy

