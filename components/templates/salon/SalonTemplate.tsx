import { DemoData } from '@/types/demo'

interface SalonTemplateProps {
  demo: DemoData
}

export default function SalonTemplate({ demo }: SalonTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            {demo.businessName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600">
            {demo.tagline || 'Beauty & Wellness'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-lg transition-colors"
              style={{ backgroundColor: demo.theme.primaryColor }}
            >
              Book Appointment
            </button>
            <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-lg text-lg transition-colors">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Hair Styling', price: '$65+', description: 'Cut, color, and styling', icon: '💇‍♀️' },
              { name: 'Hair Color', price: '$85+', description: 'Professional coloring', icon: '🎨' },
              { name: 'Facial Treatment', price: '$75+', description: 'Rejuvenating skincare', icon: '✨' },
              { name: 'Manicure', price: '$35+', description: 'Nail care and art', icon: '💅' },
              { name: 'Pedicure', price: '$45+', description: 'Foot care and polish', icon: '🦶' },
              { name: 'Massage', price: '$80+', description: 'Relaxing therapy', icon: '💆‍♀️' },
              { name: 'Eyebrows', price: '$25+', description: 'Shaping and tinting', icon: '👁️' },
              { name: 'Makeup', price: '$55+', description: 'Professional application', icon: '💄' }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <span className="text-lg font-bold text-primary-600">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylist Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Stylists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', specialty: 'Hair Color Specialist', experience: '8 years', image: '👩‍🦱' },
              { name: 'Maria Rodriguez', specialty: 'Facial Treatments', experience: '6 years', image: '👩‍🦳' },
              { name: 'Emily Chen', specialty: 'Nail Art Expert', experience: '5 years', image: '👩‍🦲' }
            ].map((stylist, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-6xl mb-4">{stylist.image}</div>
                <h3 className="text-xl font-semibold mb-2">{stylist.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{stylist.specialty}</p>
                <p className="text-gray-600">{stylist.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Easy Booking</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Service', description: 'Select from our menu of services' },
              { step: '2', title: 'Pick Stylist', description: 'Choose your preferred professional' },
              { step: '3', title: 'Select Time', description: 'Find a time that works for you' },
              { step: '4', title: 'Confirm', description: 'Book your appointment instantly' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: demo.theme.primaryColor }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Beauty Basics', 
                price: '$120', 
                services: ['Haircut & Style', 'Manicure', 'Eyebrow Shaping'],
                popular: false
              },
              { 
                name: 'Complete Glow', 
                price: '$180', 
                services: ['Hair Color', 'Facial Treatment', 'Manicure & Pedicure'],
                popular: true
              },
              { 
                name: 'Luxury Experience', 
                price: '$250', 
                services: ['Full Hair Service', 'Facial Treatment', 'Massage', 'Makeup'],
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${pkg.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''}`}>
                <h3 className="text-2xl font-bold text-center mb-4">{pkg.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600">/package</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular 
                      ? 'text-white' 
                      : 'border-2 border-gray-300 hover:border-primary-500'
                  }`}
                  style={{ 
                    backgroundColor: pkg.popular ? demo.theme.primaryColor : 'transparent',
                    color: pkg.popular ? 'white' : 'inherit'
                  }}
                >
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">456 Beauty Lane<br />Your City, ST 12345</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">(555) 987-6543</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">book@{demo.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Hours</h2>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
                  { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{demo.businessName}</h3>
          <p className="text-gray-400 mb-6">Beauty & Wellness</p>
          <div className="text-sm text-gray-500">
            Demo Website By Regrowth
          </div>
        </div>
      </footer>
    </div>
  )
}
