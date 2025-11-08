import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import axios from 'axios'
import * as cloudinary from 'cloudinary'

// Initialize Firebase Admin
admin.initializeApp()

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const db = admin.firestore()

// Business type templates
const BUSINESS_TEMPLATES = {
  gym: {
    heroTitle: 'Transform Your Body',
    heroSubtitle: 'Professional fitness training for all levels',
    services: [
      { name: 'Personal Training', description: 'One-on-one fitness coaching' },
      { name: 'Group Classes', description: 'High-energy group workouts' },
      { name: 'Nutrition Counseling', description: 'Personalized meal plans' },
      { name: 'Equipment Training', description: 'Learn proper form and technique' }
    ],
    unsplashQuery: 'gym fitness workout'
  },
  restaurant: {
    heroTitle: 'Culinary Excellence',
    heroSubtitle: 'Fine dining experience with fresh ingredients',
    services: [
      { name: 'Fine Dining', description: 'Elegant multi-course meals' },
      { name: 'Wine Selection', description: 'Curated wine pairings' },
      { name: 'Private Events', description: 'Special occasions and celebrations' },
      { name: 'Chef Specials', description: 'Seasonal and signature dishes' }
    ],
    unsplashQuery: 'restaurant fine dining food'
  },
  cafe: {
    heroTitle: 'Coffee & Community',
    heroSubtitle: 'Artisanal coffee in a cozy atmosphere',
    services: [
      { name: 'Artisan Coffee', description: 'Freshly roasted specialty beans' },
      { name: 'Pastries', description: 'Fresh baked goods daily' },
      { name: 'Light Meals', description: 'Healthy breakfast and lunch options' },
      { name: 'WiFi Workspace', description: 'Perfect for remote work' }
    ],
    unsplashQuery: 'coffee cafe cozy atmosphere'
  },
  jewelry: {
    heroTitle: 'Timeless Elegance',
    heroSubtitle: 'Handcrafted jewelry for special moments',
    services: [
      { name: 'Custom Design', description: 'Personalized jewelry creation' },
      { name: 'Engagement Rings', description: 'Symbols of eternal love' },
      { name: 'Repair Services', description: 'Expert jewelry restoration' },
      { name: 'Appraisals', description: 'Professional valuation services' }
    ],
    unsplashQuery: 'jewelry luxury elegant rings'
  },
  salon: {
    heroTitle: 'Beauty & Wellness',
    heroSubtitle: 'Professional beauty services and treatments',
    services: [
      { name: 'Hair Styling', description: 'Cut, color, and styling services' },
      { name: 'Skincare', description: 'Facial treatments and skincare' },
      { name: 'Manicures', description: 'Nail care and nail art' },
      { name: 'Massage', description: 'Relaxing therapeutic treatments' }
    ],
    unsplashQuery: 'salon beauty spa wellness'
  }
}

// Generate demo ID
function generateDemoId(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

// Fetch image from Unsplash
async function fetchUnsplashImage(query: string): Promise<string> {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query,
        orientation: 'landscape',
        w: 1200,
        h: 600
      },
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    })
    return response.data.urls.regular
  } catch (error) {
    console.error('Failed to fetch Unsplash image:', error)
    // Fallback to placeholder
    return `https://via.placeholder.com/1200x600/cccccc/666666?text=${encodeURIComponent(query)}`
  }
}

// Create demo website
export const createDemo = functions.https.onCall(async (data, context) => {
  // Verify authentication
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated')
  }

  const {
    businessType,
    businessName,
    pages = 3,
    primaryColor = '#3b82f6',
    tagline,
    logoFile
  } = data

  // Validate input
  if (!businessType || !businessName) {
    throw new functions.https.HttpsError('invalid-argument', 'Business type and name are required')
  }

  if (!BUSINESS_TEMPLATES[businessType as keyof typeof BUSINESS_TEMPLATES]) {
    throw new functions.https.HttpsError('invalid-argument', 'Invalid business type')
  }

  const demoId = generateDemoId()
  const template = BUSINESS_TEMPLATES[businessType as keyof typeof BUSINESS_TEMPLATES]
  const now = Date.now()
  const expireAt = now + (3 * 24 * 60 * 60 * 1000) // 3 days

  try {
    // Fetch hero image
    const heroImage = await fetchUnsplashImage(template.unsplashQuery)

    // Upload logo if provided
    let logoUrl = ''
    if (logoFile) {
      try {
        // Convert base64 to buffer for validation (not used, but keeps for potential future use)
        Buffer.from(logoFile, 'base64')
        const logoResult = await cloudinary.v2.uploader.upload(
          `data:image/jpeg;base64,${logoFile}`,
          {
            folder: `regrowth-demos/${demoId}`,
            public_id: 'logo',
            resource_type: 'image',
            format: 'jpg',
            quality: 'auto',
            fetch_format: 'auto'
          }
        )
        logoUrl = logoResult.secure_url
      } catch (error) {
        console.error('Failed to upload logo to Cloudinary:', error)
        // Continue without logo if upload fails
      }
    }

    // Create public demo document
    const publicDemo = {
      demoId,
      businessType,
      businessName,
      tagline: tagline || template.heroSubtitle,
      theme: {
        primaryColor,
        font: 'Inter'
      },
      pages: Array.from({ length: pages }, (_, i) => ({
        slug: i === 0 ? '' : `page-${i + 1}`,
        title: i === 0 ? 'Home' : `Page ${i + 1}`,
        sections: i === 0 ? [
          {
            type: 'hero',
            title: template.heroTitle,
            subtitle: tagline || template.heroSubtitle,
            image: heroImage,
            logo: logoUrl || 'Your logo here'
          },
          {
            type: 'services',
            title: 'Our Services',
            items: template.services
          },
          {
            type: 'testimonials',
            title: 'What Our Customers Say',
            items: [
              { text: 'Excellent service and quality!', author: 'Sarah M.' },
              { text: 'Highly recommend to everyone!', author: 'John D.' },
              { text: 'Outstanding experience!', author: 'Lisa K.' }
            ]
          }
        ] : []
      })),
      images: {
        hero: heroImage,
        gallery: [heroImage] // Add more images as needed
      },
      createdAt: now,
      expireAt
    }

    // Create private metadata
    const privateMeta = {
      demoId,
      createdBy: {
        uid: context.auth.uid,
        email: context.auth.token.email
      },
      formInputs: {
        businessType,
        businessName,
        pages,
        primaryColor,
        tagline,
        logoPath: logoUrl
      },
      createdAt: now,
      deleted: false
    }

    // Save to Firestore
    await db.collection('public_demos').doc(demoId).set(publicDemo)
    await db.collection('private_demo_meta').doc(demoId).set(privateMeta)

    return {
      demoId,
      publicUrl: `https://regrowthdemos.com/d/${demoId}`,
      expiresAt: expireAt
    }

  } catch (error) {
    console.error('Error creating demo:', error)
    throw new functions.https.HttpsError('internal', 'Failed to create demo')
  }
})

// Record demo view
export const recordView = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }

  if (req.method !== 'GET') {
    res.status(405).send('Method not allowed')
    return
  }

  const { demoId } = req.query

  if (!demoId || typeof demoId !== 'string') {
    res.status(400).send('Demo ID is required')
    return
  }

  try {
    // Record the view
    await db.collection('demo_views').add({
      demoId,
      viewedAt: Date.now(),
      viewerAgent: req.get('User-Agent') || '',
      viewerIpHash: req.ip ? req.ip.substring(0, 8) : '' // Hash IP for privacy
    })

    res.status(200).send('View recorded')
  } catch (error) {
    console.error('Error recording view:', error)
    res.status(500).send('Failed to record view')
  }
})

// Cleanup expired demos (scheduled function)
export const cleanupExpiredDemos = functions.pubsub.schedule('0 2 * * *').onRun(async (context) => {
  const now = Date.now()
  
  try {
    // Find expired demos
    const expiredDemos = await db.collection('public_demos')
      .where('expireAt', '<', now)
      .get()

    console.log(`Found ${expiredDemos.size} expired demos to clean up`)

    const batch = db.batch()

    for (const doc of expiredDemos.docs) {
      const demoId = doc.id
      
      // Delete public demo
      batch.delete(doc.ref)
      
      // Delete private metadata
      const privateDoc = await db.collection('private_demo_meta').doc(demoId).get()
      if (privateDoc.exists) {
        batch.delete(privateDoc.ref)
      }
      
      // Delete view records
      const viewsSnapshot = await db.collection('demo_views')
        .where('demoId', '==', demoId)
        .get()
      
      viewsSnapshot.docs.forEach(viewDoc => {
        batch.delete(viewDoc.ref)
      })
      
      // Delete Cloudinary images
      try {
        await cloudinary.v2.api.delete_resources_by_prefix(`regrowth-demos/${demoId}/`)
      } catch (cloudinaryError) {
        console.error(`Failed to delete Cloudinary files for demo ${demoId}:`, cloudinaryError)
      }
    }

    await batch.commit()
    console.log(`Successfully cleaned up ${expiredDemos.size} expired demos`)

  } catch (error) {
    console.error('Error during cleanup:', error)
  }
})
