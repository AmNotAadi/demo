import { NextRequest, NextResponse } from 'next/server'
import { getFirestore } from 'firebase-admin/firestore'
import admin from '@/lib/firebase-admin'

const db = getFirestore(admin)

export async function GET(request: NextRequest) {
  // Enable CORS
  const headers = new Headers()
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  headers.set('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') {
    return new NextResponse('', { status: 204, headers })
  }

  const { searchParams } = new URL(request.url)
  const demoId = searchParams.get('demoId')

  if (!demoId) {
    return NextResponse.json({ error: 'Demo ID is required' }, { status: 400, headers })
  }

  try {
    // Record the view
    await db.collection('demo_views').add({
      demoId,
      viewedAt: Date.now(),
      viewerAgent: request.headers.get('User-Agent') || '',
      viewerIpHash: request.ip ? request.ip.substring(0, 8) : ''
    })

    return NextResponse.json({ success: true }, { headers })
  } catch (error) {
    console.error('Error recording view:', error)
    return NextResponse.json({ error: 'Failed to record view' }, { status: 500, headers })
  }
}
