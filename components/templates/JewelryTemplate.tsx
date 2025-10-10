import { generateColorPalette, getContrastColor } from '../../lib/colorUtils'
import { TemplateData, TemplateProps } from './GymTemplate'

// Jewelry Template - Luxury Showcase Layout
export function JewelryTemplate({ data }: TemplateProps) {
  const colors = generateColorPalette(data.primaryColor)
  const textColor = getContrastColor(data.primaryColor)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Luxury Header */}
      <header className="relative bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              {data.logoUrl && (
                <img src={data.logoUrl} alt="Logo" className="h-16 w-auto transition-transform duration-300 hover:scale-110" />
              )}
              <div>
                <h1 className="text-4xl font-bold font-serif tracking-wide" style={{ color: colors.primary }}>
                  {data.businessName}
                </h1>
                <p className="text-gray-600 italic text-lg animate-fade-in-up animation-delay-200">
                  {data.tagline || 'Timeless Elegance, Exquisite Craftsmanship'}
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#collections" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.primary }}></span>
              </a>
            </nav>
            
            <button 
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: colors.primary }}
              onClick={() => alert('Scheduling appointment...')}
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Luxury Showcase */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold font-serif leading-tight" style={{ color: colors.primary }}>
                  {data.businessName}
                </h1>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {data.tagline || 'Timeless Elegance, Exquisite Craftsmanship'}
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  For over three decades, we have been crafting exceptional jewelry pieces that celebrate 
                  life's most precious moments. Each piece is meticulously designed and handcrafted 
                  to perfection, using only the finest materials.
                </p>
              </div>
              
              {/* Luxury Stats */}
              <div className="grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>30+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>1000+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>5★</div>
                  <div className="text-gray-600 text-sm">Customer Rating</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
                <button 
                  className="px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                  style={{ 
                    backgroundColor: colors.primary, 
                    color: textColor 
                  }}
                  onClick={() => alert('Viewing our collections...')}
                >
                  <span className="relative z-10">View Collections</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="px-10 py-5 text-xl font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  Custom Design
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-800">
              <div 
                className="h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                style={{ backgroundColor: colors.primaryLightest }}
              >
                Luxury Jewelry Display
              </div>
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-bounce"
                style={{ backgroundColor: colors.primary }}
              >
                💎
              </div>
              <div 
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse"
                style={{ backgroundColor: colors.primaryDark }}
              >
                Handcrafted
              </div>
              
              {/* Premium Badge */}
              <div 
                className="absolute top-8 left-8 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg"
                style={{ backgroundColor: colors.primaryDark }}
              >
                ✨ Certified Diamonds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section - Luxury Grid */}
      <section id="collections" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
              Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exquisite pieces crafted with precision and passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Engagement Rings',
                price: 'From $2,500',
                description: 'Symbols of eternal love, crafted with the finest diamonds',
                features: ['Certified Diamonds', 'Custom Settings', 'Lifetime Warranty'],
                image: '💍'
              },
              { 
                name: 'Wedding Bands',
                price: 'From $800',
                description: 'Timeless bands for your special day',
                features: ['Gold & Platinum', 'Custom Engraving', 'Perfect Fit Guarantee'],
                image: '💒'
              },
              { 
                name: 'Necklaces',
                price: 'From $1,200',
                description: 'Elegant pieces to complement any outfit',
                features: ['Pearl & Diamond', 'Chain Options', 'Length Adjustments'],
                image: '📿'
              },
              { 
                name: 'Earrings',
                price: 'From $600',
                description: 'Sparkling accents for every occasion',
                features: ['Stud & Drop Styles', 'Hypoallergenic', 'Secure Clasps'],
                image: '👂'
              },
              { 
                name: 'Bracelets',
                price: 'From $900',
                description: 'Sophisticated wrist adornments',
                features: ['Adjustable Sizing', 'Precious Metals', 'Delicate Chains'],
                image: '📿'
              },
              { 
                name: 'Custom Design',
                price: 'Consultation',
                description: 'Create your perfect piece from scratch',
                features: ['Personal Consultation', '3D Rendering', 'Unlimited Revisions'],
                image: '🎨'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-64 flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ backgroundColor: colors.primaryLightest }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="relative z-10">{item.image}</span>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-white/20 backdrop-blur-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primaryDarkest }}>
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: colors.primary }}></span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    style={{ backgroundColor: colors.primary }}
                    onClick={() => alert(`Viewing ${item.name} collection...`)}
                  >
                    <span className="relative z-10">View Collection</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-8 font-serif" style={{ color: colors.primary }}>
                Our Heritage
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Since 1990, {data.businessName} has been synonymous with exceptional craftsmanship and 
                timeless elegance. Our master jewelers combine traditional techniques with modern 
                innovation to create pieces that will be treasured for generations.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We source our diamonds and precious stones from certified suppliers, ensuring 
                ethical practices and the highest quality. Each piece undergoes rigorous quality 
                control and comes with our comprehensive warranty and lifetime service guarantee.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>100%</div>
                  <div className="text-gray-600">Certified Diamonds</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>Lifetime</div>
                  <div className="text-gray-600">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>5★</div>
                  <div className="text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div 
                className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                style={{ backgroundColor: colors.primaryLightest }}
              >
                Master Jeweler at Work
              </div>
              <div 
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-float"
                style={{ backgroundColor: colors.primary }}
              >
                Handcrafted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
              Visit Our Showroom
            </h2>
            <p className="text-xl text-gray-600">Experience the luxury and beauty of our collection firsthand</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Showroom Address</p>
                      <p className="text-gray-600">123 Jewelers Row, Prestige City, PC 78901</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      📞
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      📧
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-600">info@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      🕒
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Showroom Hours</p>
                      <p className="text-gray-600">Mon-Fri: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sat: 10:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sun: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-400">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                  Schedule Appointment
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll contact you to confirm your appointment.'); }}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interest</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>Engagement Ring Consultation</option>
                        <option>Wedding Band Selection</option>
                        <option>Custom Design</option>
                        <option>Jewelry Repair</option>
                        <option>Appraisal Service</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date</label>
                      <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 text-lg font-bold text-white rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="relative z-10">Schedule Appointment</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif" style={{ color: colors.primary }}>
                {data.businessName}
              </h3>
              <p className="text-gray-300 mb-4">Timeless elegance, exquisite craftsmanship</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">f</div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">t</div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">i</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#collections" className="hover:text-white transition-colors">Engagement Rings</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">Wedding Bands</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">Necklaces</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">Earrings</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Custom Design</li>
                <li>Jewelry Repair</li>
                <li>Appraisal</li>
                <li>Cleaning Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Jewelers Row</p>
                <p>Prestige City, PC 78901</p>
                <p>(555) 123-4567</p>
                <p>info@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 {data.businessName}. Demo Website by Regrowth.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}