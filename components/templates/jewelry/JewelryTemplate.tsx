import { DemoData } from '@/types/demo'

interface JewelryTemplateProps {
  demo: DemoData
}

export default function JewelryTemplate({ demo }: JewelryTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            {demo.businessName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {demo.tagline || 'Timeless Elegance'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-lg transition-colors"
              style={{ backgroundColor: demo.theme.primaryColor }}
            >
              Shop Collection
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg text-lg transition-colors">
              Custom Design
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Engagement Rings', description: 'Symbols of eternal love', image: '💍' },
              { name: 'Necklaces', description: 'Elegant statement pieces', image: '📿' },
              { name: 'Earrings', description: 'Delicate and sophisticated', image: '👂' },
              { name: 'Bracelets', description: 'Timeless wrist adornments', image: '⌚' },
              { name: 'Watches', description: 'Precision and luxury', image: '🕐' },
              { name: 'Custom Pieces', description: 'Designed just for you', image: '✨' }
            ].map((collection, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div className="text-6xl mb-4">{collection.image}</div>
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <button 
                  className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-colors"
                >
                  View Collection
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Custom Design</h3>
              <p className="text-gray-600 mb-6">
                Work with our master jewelers to create a one-of-a-kind piece that tells your story. 
                From concept to completion, we bring your vision to life.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Free consultation</li>
                <li>• 3D design mockups</li>
                <li>• Premium materials</li>
                <li>• Lifetime warranty</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Repair & Restoration</h3>
              <p className="text-gray-600 mb-6">
                Our expert craftsmen can restore your precious jewelry to its original beauty. 
                We handle everything from simple repairs to complete restorations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Ring resizing</li>
                <li>• Stone replacement</li>
                <li>• Chain repair</li>
                <li>• Polishing & cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Award Winning', description: 'Recognized for excellence' },
              { icon: '💎', title: 'Certified Gems', description: 'Authenticity guaranteed' },
              { icon: '🔒', title: 'Secure Shopping', description: 'Safe and protected' },
              { icon: '🚚', title: 'Free Shipping', description: 'On orders over $500' }
            ].map((badge, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appraisal Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif">Professional Appraisals</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get certified appraisals for insurance, estate planning, or resale purposes. 
            Our certified gemologists provide accurate valuations you can trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Insurance Appraisals</h3>
              <p className="text-gray-600 mb-4">Protect your investment with detailed documentation</p>
              <span className="text-lg font-bold text-primary-600">Starting at $75</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Estate Appraisals</h3>
              <p className="text-gray-600 mb-4">Fair market value for estate planning</p>
              <span className="text-lg font-bold text-primary-600">Starting at $100</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Resale Appraisals</h3>
              <p className="text-gray-600 mb-4">Accurate pricing for selling your jewelry</p>
              <span className="text-lg font-bold text-primary-600">Starting at $50</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-serif">{demo.businessName}</h3>
          <p className="text-gray-400 mb-6">Timeless elegance for every occasion</p>
          <div className="text-sm text-gray-500">
            Demo Website By Regrowth
          </div>
        </div>
      </footer>
    </div>
  )
}
