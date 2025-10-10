# 🚀 Deployment Guide - Regrowth Demo Builder

This guide will walk you through deploying the Regrowth Demo Builder to Vercel (recommended) or any other hosting platform.

---

## 📋 Prerequisites

Before deploying, make sure you have:

- ✅ A GitHub account
- ✅ A Vercel account (free tier is fine) - [Sign up here](https://vercel.com/signup)
- ✅ Git installed on your computer
- ✅ This project code ready

---

## 🎯 Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js applications and offers a generous free tier.

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/new)
   - Name it `regrowth-demo-builder`
   - Make it public or private (your choice)
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub:**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Regrowth Demo Builder"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/regrowth-demo-builder.git
   
   # Push to GitHub
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account

2. **Import Your Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository `regrowth-demo-builder`
   - Click "Import"

3. **Configure Your Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Environment Variables (Optional):**
   Since we're using local storage, you don't need any environment variables right now!
   
   But if you want to add Firebase or Cloudinary later:
   - Click "Environment Variables"
   - Add each variable from `.env.example`

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - 🎉 Your app is live!

### Step 3: Get Your Live URL

After deployment, Vercel will give you a URL like:
```
https://regrowth-demo-builder-xxxx.vercel.app
```

You can also:
- Add a custom domain in Vercel settings
- Share this URL with your team
- Access it from anywhere!

---

## 🔧 Option 2: Deploy to Netlify

1. **Push code to GitHub** (same as Step 1 above)

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/login with GitHub

3. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repo

4. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

5. **Deploy:**
   - Click "Deploy site"
   - Wait for build to complete

---

## 🌐 Option 3: Deploy to Your Own Server (VPS/Cloud)

If you have your own server (AWS, DigitalOcean, etc.):

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx (optional, for reverse proxy)

### Steps:

1. **Clone your repository on the server:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/regrowth-demo-builder.git
   cd regrowth-demo-builder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Start the application:**
   ```bash
   # Using npm
   npm start
   
   # OR using PM2 (recommended for production)
   npm install -g pm2
   pm2 start npm --name "regrowth-demo" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx (optional):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Access your app:**
   - Visit your server's IP or domain
   - Example: `http://your-server-ip:3000`

---

## ✅ Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Home page loads (`/`)
- [ ] Dashboard loads (`/app`)
- [ ] Create demo page works (`/app/create`)
- [ ] Can create a demo successfully
- [ ] Demo preview page works (`/d/[demoId]`)
- [ ] All 5 business templates render correctly:
  - [ ] Gym template
  - [ ] Restaurant template
  - [ ] Cafe template
  - [ ] Jewelry template
  - [ ] Salon template
- [ ] Form inputs are visible and editable
- [ ] Color picker works
- [ ] Live preview works
- [ ] Demos are saved in browser local storage

---

## 🔐 Security Notes (For Production)

Since we're using local storage (browser-based), this is perfect for:
- ✅ Demo purposes
- ✅ Testing with teams
- ✅ Client presentations
- ✅ Internal sales tools

**Important Notes:**
- Data is stored in the user's browser only
- Each user has their own separate demo library
- Demos are NOT shared between users or devices
- Clearing browser data will delete demos
- Perfect for privacy and quick demos!

---

## 🎨 Customization Options

After deployment, you can customize:

1. **Domain Name:**
   - Add a custom domain in Vercel/Netlify settings
   - Example: `demos.regrowth.com`

2. **Branding:**
   - Update logo in `/public`
   - Change colors in `tailwind.config.js`
   - Update metadata in `app/layout.tsx`

3. **Templates:**
   - Modify templates in `/components/templates/`
   - Add new business types
   - Customize existing designs

---

## 🆘 Troubleshooting

### Build Fails on Vercel/Netlify

**Error:** `Module not found` or `Cannot resolve`

**Solution:**
```bash
# Locally, delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build  # Test build locally

# Then commit and push again
git add .
git commit -m "Fix dependencies"
git push
```

### Page Shows 404 Error

**Solution:**
- Make sure you're using the correct URL format
- Demo URLs should be: `/d/[demoId]` not `/demo/[demoId]`
- Check `vercel.json` is properly configured

### Demos Not Saving

**Solution:**
- Check browser console for errors (F12)
- Make sure you're not in private/incognito mode
- Check browser storage isn't full
- Try a different browser

### Live Preview Not Showing

**Solution:**
- Click "Show Preview" button in create form
- Make sure you've entered business name
- Check browser console for errors

---

## 📞 Support

If you encounter any issues:

1. Check the browser console (F12) for errors
2. Check Vercel/Netlify build logs
3. Review this guide again
4. Check GitHub issues

---

## 🎉 You're Done!

Your Regrowth Demo Builder is now live and ready to create amazing demo websites!

**Next Steps:**
- Share the URL with your sales team
- Create your first demo
- Customize templates to match your brand
- Add custom domains if needed

**Your live URLs:**
- 🏠 **Home:** `https://your-app.vercel.app/`
- 📊 **Dashboard:** `https://your-app.vercel.app/app`
- ✨ **Create Demo:** `https://your-app.vercel.app/app/create`

Happy building! 🚀

