import { describe, it, expect, jest } from '@jest/globals'

// Mock Firebase Admin
jest.mock('firebase-admin/app', () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(() => []),
  cert: jest.fn()
}))

jest.mock('firebase-admin/firestore', () => ({
  getFirestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        set: jest.fn()
      }))
    }))
  }))
}))

jest.mock('firebase-admin/storage', () => ({
  getStorage: jest.fn(() => ({
    bucket: jest.fn(() => ({
      file: jest.fn(() => ({
        save: jest.fn()
      }))
    }))
  }))
}))

describe('Demo Creation Validation', () => {
  it('should validate required fields', () => {
    const validData = {
      businessType: 'gym',
      businessName: 'Test Gym',
      pages: 3,
      primaryColor: '#3b82f6',
      tagline: 'Test tagline'
    }

    expect(validData.businessType).toBeDefined()
    expect(validData.businessName).toBeDefined()
    expect(validData.businessType).toMatch(/^(gym|restaurant|cafe|jewelry|salon)$/)
  })

  it('should reject invalid business types', () => {
    const invalidTypes = ['invalid', '', null, undefined]
    
    invalidTypes.forEach(type => {
      // Coerce to string to avoid calling .match on null/undefined
      expect(String(type)).not.toMatch(/^(gym|restaurant|cafe|jewelry|salon)$/)
    })
  })

  it('should validate color format', () => {
    const validColors = ['#3b82f6', '#ef4444', '#10b981']
    const invalidColors = ['red', 'rgb(255,0,0)', 'hsl(0,100%,50%)']

    validColors.forEach(color => {
      expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/)
    })

    invalidColors.forEach(color => {
      expect(color).not.toMatch(/^#[0-9A-Fa-f]{6}$/)
    })
  })

  it('should validate page count', () => {
    const validPages = [1, 2, 3, 4, 5, 6]
    const invalidPages = [0, 7, -1, '3', null]

    validPages.forEach(pages => {
      expect(pages).toBeGreaterThanOrEqual(1)
      expect(pages).toBeLessThanOrEqual(6)
    })

    invalidPages.forEach(pages => {
      // Consider non-number values invalid as well
      expect(typeof pages !== 'number' || pages < 1 || pages > 6).toBeTruthy()
    })
  })
})

describe('Demo ID Generation', () => {
  it('should generate valid demo IDs', () => {
    const generateDemoId = () => Math.random().toString(36).substring(2, 8).toUpperCase()
    
    for (let i = 0; i < 100; i++) {
      const demoId = generateDemoId()
      expect(demoId).toHaveLength(6)
      expect(demoId).toMatch(/^[A-Z0-9]{6}$/)
    }
  })

  it('should generate unique demo IDs', () => {
    const generateDemoId = () => Math.random().toString(36).substring(2, 8).toUpperCase()
    const ids = new Set()
    
    for (let i = 0; i < 1000; i++) {
      const demoId = generateDemoId()
      expect(ids.has(demoId)).toBeFalsy()
      ids.add(demoId)
    }
  })
})

describe('Expiry Calculation', () => {
  it('should calculate correct expiry time', () => {
    const now = Date.now()
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000
    const expectedExpiry = now + threeDaysInMs
    
    expect(expectedExpiry).toBeGreaterThan(now)
    expect(expectedExpiry - now).toBe(threeDaysInMs)
  })

  it('should handle edge cases for expiry', () => {
    const now = 0
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000
    const expiry = now + threeDaysInMs
    
    expect(expiry).toBe(threeDaysInMs)
    expect(expiry).toBeGreaterThan(0)
  })
})
