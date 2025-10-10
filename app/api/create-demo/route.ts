import { NextRequest, NextResponse } from 'next/server'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import admin from '@/lib/firebase-admin'
import cloudinary from 'cloudinary'

const db = getFirestore(admin)

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessType, businessName, pages, primaryColor, tagline, logoFile } = body

    // Verify authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const token = authHeader.replace('Bearer ', '')
    const decodedToken = await getAuth(admin).verifyIdToken(token)

    // Validate input
    if (!businessType || !businessName) {
      return NextResponse.json({ error: 'Business type and name are required' }, { status: 400 })
    }

    const BUSINESS_TEMPLATES = {
      gym: { heroTitle: 'Transform Your Body', heroSubtitle: 'Professional fitness training for all levels', unsplashQuery: 'gym fitness workout' },
      restaurant: { heroTitle: 'Culinary Excellence', heroSubtitle: 'Fine dining experience with fresh ingredients', unsplashQuery: 'restaurant fine dining food' },
      cafe: { heroTitle: 'Coffee & Community', heroSubtitle: 'Artisanal coffee in a cozy atmosphere', unsplashQuery: 'coffee cafe cozy atmosphere' },
      jewelry: { heroTitle: 'Timeless Elegance', heroSubtitle: 'Handcrafted jewelry for special moments', unsplashQuery: 'jewelry luxury elegant rings' },
      salon: { heroTitle: 'Beauty & Wellness', heroSubtitle: 'Professional beauty services and treatments', unsplashQuery: 'salon beauty spa wellness' }
    }

    if (!BUSINESS_TEMPLATES[businessType as keyof typeof BUSINESS_TEMPLATES]) {
      return NextResponse.json({ error: 'Invalid business type' }, { status: 400 })
    }

    const demoId = Math.random().toString(36).substring(2, 8).toUpperCase()
    const template = BUSINESS_TEMPLATES[businessType as keyof typeof BUSINESS_TEMPLATES]
    const now = Date.now()
    const expireAt = now + (3 * 24 * 60 * 60 * 1000) // 3 days

    // Fetch hero image from Unsplash
    const unsplashResponse = await fetch(`https://api.unsplash.com/photos/random?query=${template.unsplashQuery}&orientation=landscape&w=1200&h=600`, {
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    })
    
    let heroImage = `https://via.placeholder.com/1200x600/cccccc/666666?text=${encodeURIComponent(template.unsplashQuery)}`
    if (unsplashResponse.ok) {
      const unsplashData = await unsplashResponse.json()
      heroImage = unsplashData.urls.regular
    }

    // Upload logo if provided
    let logoUrl = ''
    if (logoFile) {
      try {
        const logoResult = await cloudinary.uploader.upload(
          logoFile,
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
        primaryColor: primaryColor || '#3b82f6',
        font: 'Inter'
      },
      pages: Array.from({ length: pages || 3 }, (_, i) => ({
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
            items: [
              { name: 'Service 1', description: 'Description of service 1' },
              { name: 'Service 2', description: 'Description of service 2' },
              { name: 'Service 3', description: 'Description of service 3' },
              { name: 'Service 4', description: 'Description of service 4' }
            ]
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
        gallery: [heroImage]
      },
      createdAt: now,
      expireAt
    }

    // Create private metadata
    const privateMeta = {
      demoId,
      createdBy: {
        uid: decodedToken.uid,
        email: decodedToken.email
      },
      formInputs: {
        businessType,
        businessName,
        pages: pages || 3,
        primaryColor: primaryColor || '#3b82f6',
        tagline,
        logoPath: logoUrl
      },
      createdAt: now,
      deleted: false
    }

    // Save to Firestore
    await db.collection('public_demos').doc(demoId).set(publicDemo)
    await db.collection('private_demo_meta').doc(demoId).set(privateMeta)

    return NextResponse.json({
      demoId,
      publicUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://regrowthdemos.com'}/d/${demoId}`,
      expiresAt: expireAt
    })

  } catch (error) {
    console.error('Error creating demo:', error)
    return NextResponse.json({ error: 'Failed to create demo' }, { status: 500 })
  }
}
