# Firebase Setup Guide

This guide will help you set up Firebase for your Website Builder to work online.

## Prerequisites

- A Google account
- Node.js installed (already done)
- Firebase CLI (optional, but recommended)

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "regrowth-website-builder")
4. (Optional) Enable Google Analytics
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose **"Start in production mode"** (we'll set rules next)
4. Select a location closest to your users (e.g., `us-central1`)
5. Click "Enable"

### Set Firestore Security Rules

Click on the "Rules" tab and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all demos
    match /demos/{demoId} {
      allow read: if true;
      allow write: if true;  // For now - you can restrict this later
      allow delete: if true;
    }
  }
}
```

Click "Publish" to save the rules.

## Step 3: Enable Firebase Storage

1. In your Firebase project, click "Storage" in the left sidebar
2. Click "Get started"
3. Click "Next" on the security rules dialog
4. Select the same location as Firestore
5. Click "Done"

### Set Storage Security Rules

Click on the "Rules" tab and replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /demos/{allPaths=**} {
      allow read: if true;
      allow write: if true;  // For now - you can restrict this later
    }
  }
}
```

Click "Publish" to save the rules.

## Step 4: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>` (Add app)
5. Enter an app nickname (e.g., "Website Builder")
6. Click "Register app"
7. Copy the `firebaseConfig` object values

## Step 5: Configure Environment Variables

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.local.template`
3. Fill in the values from your Firebase config:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Step 6: Test Locally

1. Stop your development server if running (Ctrl+C)
2. Restart the server:
   ```bash
   npm run dev
   ```
3. Create a test website at http://localhost:3000/app/create
4. Check Firebase Console > Firestore Database to see if data is saved
5. Check Firebase Console > Storage to see if images are uploaded

## Step 7: Deploy to Production

### Option A: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Click "Environment Variables"
   - Add all the `NEXT_PUBLIC_FIREBASE_*` variables
   - Redeploy

### Option B: Deploy to Netlify

1. Build your project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

4. Add environment variables in Netlify dashboard:
   - Go to Site settings > Environment variables
   - Add all the `NEXT_PUBLIC_FIREBASE_*` variables
   - Redeploy

## Step 8: Update Firebase Rules (Production)

Once deployed, update your Firestore rules for better security:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /demos/{demoId} {
      allow read: if true;  // Anyone can read
      allow create: if true;  // Anyone can create
      allow update: if request.auth != null || 
                     resource.data.keys().hasOnly(['views']);  // Only update views publicly
      allow delete: if request.auth != null;  // Only authenticated users can delete
    }
  }
}
```

Update Storage rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /demos/{allPaths=**} {
      allow read: if true;  // Anyone can read
      allow write: if true;  // Anyone can upload - you may want to restrict this
    }
  }
}
```

## Troubleshooting

### "Firebase not configured" error
- Check that `.env.local` exists and has all required variables
- Make sure variables start with `NEXT_PUBLIC_`
- Restart your dev server after adding env variables

### "Permission denied" errors
- Check your Firestore and Storage security rules
- Make sure rules allow public read/write for demos collection

### Images not uploading
- Check Firebase Storage is enabled
- Verify storage bucket name in `.env.local` matches Firebase console
- Check Storage rules allow writes to `/demos/` path

### Websites not saving
- Check Firestore Database is enabled
- Verify the `demos` collection has proper write permissions
- Check browser console for specific error messages

## Cost Considerations

Firebase has a generous free tier:
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Storage**: 5GB storage, 1GB/day downloads
- **Hosting**: 10GB storage, 360MB/day bandwidth

This should be sufficient for hundreds of websites and thousands of views per day.

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Restrict Firebase rules** once you add authentication
3. **Set up billing alerts** in Firebase Console
4. **Monitor usage** in Firebase Console > Usage tab
5. **Enable App Check** for production to prevent abuse

## Next Steps

- ✅ Set up Firebase project
- ✅ Configure environment variables
- ✅ Test locally
- ✅ Deploy to production
- 🔲 Add user authentication (optional)
- 🔲 Set up backup strategy
- 🔲 Monitor usage and costs

## Support

For Firebase-specific issues, check:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com)
- [Stack Overflow - Firebase tag](https://stackoverflow.com/questions/tagged/firebase)

Your Website Builder is now ready for production! 🚀
