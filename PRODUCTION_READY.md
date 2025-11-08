# Quick Deployment Guide

Your Website Builder is now **Firebase-enabled** and ready for production! 🚀

## What Changed?

✅ **Firebase Firestore** - Enabled for storing websites  
✅ **Firebase Storage** - Enabled for storing images  
✅ **Local Storage Fallback** - Works offline if Firebase fails  
✅ **Hybrid Mode** - Data syncs to both Firebase and local storage  

## Before Deploying

### 1. Set Up Firebase (5 minutes)

Follow the detailed guide in `FIREBASE_SETUP.md` to:
- Create a Firebase project
- Enable Firestore Database
- Enable Firebase Storage
- Get your configuration keys

### 2. Add Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

**Important:** Never commit `.env.local` to Git! It's already in `.gitignore`.

### 3. Test Locally

```bash
npm run dev
```

- Create a test website
- Verify data appears in Firebase Console > Firestore
- Verify images appear in Firebase Console > Storage

## Deploy to Vercel (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

### Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Add Environment Variables**
   - Go to your Vercel dashboard
   - Select your project
   - Settings > Environment Variables
   - Add all `NEXT_PUBLIC_FIREBASE_*` variables
   - Click "Redeploy"

## Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Add Environment Variables**
   - Go to Netlify dashboard
   - Site settings > Environment variables
   - Add all `NEXT_PUBLIC_FIREBASE_*` variables
   - Redeploy

## Deploy Firebase Rules

After setting up your Firebase project, deploy the security rules:

```bash
# Install Firebase CLI if not installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (if not done)
firebase init

# Deploy rules
firebase deploy --only firestore:rules,storage:rules
```

## Post-Deployment Checklist

- [ ] Firebase project created and configured
- [ ] Environment variables added to hosting platform
- [ ] Firestore Database enabled and rules deployed
- [ ] Firebase Storage enabled and rules deployed
- [ ] Test website creation in production
- [ ] Test image uploads in production
- [ ] Test website download feature
- [ ] Verify WhatsApp integration works
- [ ] Check Google Maps embedding works

## Testing Your Production Site

1. **Create a Website**
   - Go to `your-domain.com/app/create`
   - Fill in business details
   - Upload images or use URLs
   - Click "Generate Website"

2. **View the Website**
   - Click the external link icon in dashboard
   - Test all sections work
   - Test WhatsApp buttons
   - Test navigation

3. **Download Website**
   - Click download button in dashboard
   - Extract ZIP file
   - Open `index.html` in browser
   - Verify standalone website works

## Monitoring

### Firebase Console
- Monitor usage: Storage, Firestore reads/writes
- Check costs (free tier should cover most usage)
- View uploaded files

### Vercel/Netlify Dashboard
- Monitor site performance
- Check build logs
- View analytics

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Check all environment variables are set correctly
- Restart your development server
- Verify Firebase project is set up correctly

### Images not uploading
- Check Firebase Storage is enabled
- Verify storage bucket name matches `.env.local`
- Check Storage rules allow public writes

### Data not saving
- Check Firestore Database is enabled
- Verify Firestore rules allow public writes
- Check browser console for errors

## Cost Estimate

**Firebase Free Tier:**
- 1GB Firestore storage
- 50K document reads/day
- 20K document writes/day
- 5GB Storage
- 1GB/day downloads

**This supports:**
- ~1,000 websites
- ~50,000 page views/day
- ~5,000 website creations/day

You'll get email alerts before hitting limits.

## Security Notes

Current setup allows **public read/write** for ease of use. For production, consider:

1. **Add Authentication**
   - Use Firebase Auth
   - Restrict writes to authenticated users

2. **Rate Limiting**
   - Add Cloud Functions to prevent abuse
   - Implement CAPTCHA for website creation

3. **Monitoring**
   - Set up Firebase Alerts
   - Monitor unusual activity

## Support

- **Firebase Issues:** Check `FIREBASE_SETUP.md`
- **Deployment Issues:** Check hosting platform docs
- **App Issues:** Check browser console and server logs

---

**Your Website Builder is production-ready!** 🎉

Share your deployment URL and start creating websites!
