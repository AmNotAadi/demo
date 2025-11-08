import { generateColorPalette, getContrastColor } from '../../lib/colorUtils'
import Image from 'next/image'
import { TemplateData, TemplateProps } from './GymTemplate'

// Cafe Template - Cozy Grid Layout
export function CafeTemplate({ data }: TemplateProps) {
  const colors = generateColorPalette(data.primaryColor)
  const accentColors = generateColorPalette(data.accentColor || data.primaryColor)
  const textColor = getContrastColor(data.primaryColor)
  const titleFontFamily = (() => {
    switch ((data.titleFont || 'sans').toLowerCase()) {
      case 'serif':
        return 'Georgia, Cambria, "Times New Roman", Times, serif'
      case 'mono':
        return 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      case 'rounded':
        return 'system-ui, ui-rounded, "Segoe UI Rounded", "SF Pro Rounded", "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif'
      case 'display':
        return 'Impact, Haettenschweiler, "Franklin Gothic Bold", "Oswald", "Anton", Arial, sans-serif'
      case 'sans':
      default:
        return '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }
  })()
  
  const bgColor = data.backgroundColor || '#fffbf0'
  const bgOpacity = (data.backgroundOpacity ?? 100) / 100
  const backgroundStyle = {
    backgroundColor: `${bgColor}${Math.round(bgOpacity * 255).toString(16).padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      {/* Cozy Header */}
      <header className="relative bg-white/80 backdrop-blur-md shadow-lg border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              {data.logoUrl && (
                <Image src={data.logoUrl} alt="Logo" height={64} width={64} unoptimized className="h-16 w-auto transition-transform duration-300 hover:scale-110" />
              )}
              <div>
                <h1 className="text-4xl font-bold font-serif" style={{ color: colors.primary, fontFamily: titleFontFamily }}>
                  {data.businessName}
                </h1>
                <p className="text-amber-600 italic text-lg animate-fade-in-up animation-delay-200">
                  {data.tagline || 'Where Every Cup Tells a Story'}
                </p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-300 relative group">
                Menu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: accentColors.primary }}></span>
              </a>
            </nav>
            
            <button 
              className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: accentColors.primary }}
              onClick={() => alert('Ordering online...')}
            >
              <span className="relative z-10">Order Online</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Cozy Atmosphere */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold font-serif leading-tight" style={{ color: colors.primary, fontFamily: titleFontFamily }}>
                  Welcome to {data.businessName}
                </h1>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  {data.tagline || 'Where Every Cup Tells a Story'}
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Step into our cozy haven where the aroma of freshly roasted beans meets warm hospitality. 
                  We're passionate about crafting the perfect cup and creating memorable moments.
                </p>
              </div>
              
              {/* Cafe Stats */}
              <div className="grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>1000+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>50+</div>
                  <div className="text-gray-600 text-sm">Coffee Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>5★</div>
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
                  onClick={() => alert('Viewing our menu...')}
                >
                  <span className="relative z-10">View Menu</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button 
                  className="px-10 py-5 text-xl font-bold border-2 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ 
                    backgroundColor: accentColors.primary,
                    borderColor: accentColors.primary
                  }}
                >
                  Visit Us
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-800">
              {data.heroImageUrl ? (
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src={data.heroImageUrl} alt="Hero" fill unoptimized className="object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"> 
                    {data.tagline || 'Cozy Cafe Interior'}
                  </div>
                </div>
              ) : (
                <div 
                  className="h-[600px] bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                  style={{ backgroundColor: colors.primaryLightest }}
                >
                  Cozy Cafe Interior
                </div>
              )}
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-bounce"
                style={{ backgroundColor: colors.primary }}
              >
                ☕
              </div>
              <div 
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse"
                style={{ backgroundColor: accentColors.primary }}
              >
                Fresh Daily
              </div>
              
              {/* Premium Badge */}
              <div 
                className="absolute top-8 left-8 px-6 py-3 rounded-full text-white font-bold text-sm shadow-lg"
                style={{ backgroundColor: accentColors.primaryDark }}
              >
                🏆 Award Winning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Simplified */}
      <section id="menu" className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
              Our Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handcrafted beverages and fresh pastries made with love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                category: 'Coffee & Espresso',
                icon: '☕',
                description: 'Premium coffee drinks made with expertly roasted beans'
              },
              { 
                category: 'Specialty Drinks',
                icon: '🥤',
                description: 'Unique creations and seasonal favorites'
              },
              { 
                category: 'Fresh Pastries',
                icon: '🥐',
                description: 'Baked daily with the finest ingredients'
              }
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in group" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div 
                  className="h-48 flex flex-col items-center justify-center text-white font-bold text-xl relative overflow-hidden"
                  style={{ backgroundColor: colors.primary }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="relative z-10 text-6xl mb-4">{category.icon}</span>
                  <span className="relative z-10 text-2xl">{category.category}</span>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed text-center">{category.description}</p>
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
                Our Story
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                {data.businessName} is more than just a cafe—it's a community space where 
                people gather, work, and enjoy exceptional coffee. We're passionate about 
                quality and creating a welcoming atmosphere for everyone.
              </p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Every cup is crafted with care and attention to detail, using premium 
                ingredients and time-tested techniques. Come experience the difference 
                that passion and dedication make.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>Premium</div>
                  <div className="text-gray-600">Quality Beans</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>Fresh</div>
                  <div className="text-gray-600">Daily Baked</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>Cozy</div>
                  <div className="text-gray-600">Atmosphere</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: accentColors.primary }}>5★</div>
                  <div className="text-gray-600">Rated</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div 
                className="h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl flex items-center justify-center text-gray-600 text-xl shadow-2xl"
                style={{ backgroundColor: colors.primaryLightest }}
              >
                Coffee Roasting Process
              </div>
              <div 
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl animate-float"
                style={{ backgroundColor: colors.primary }}
              >
                Fresh Daily
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
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-600">We'd love to welcome you to our cozy space</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                  Get in Touch
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
                      <p className="font-semibold text-lg">Address</p>
                      <p className="text-gray-600">123 Coffee Street, Brewville, BV 12345</p>
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
                      <p className="text-gray-600">hello@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
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
                      <p className="font-semibold text-lg">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 6:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sat-Sun: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-400">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>
                  Send us a Message
                </h3>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We\'ll get back to you soon.'); }}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32" placeholder="Your message..."></textarea>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 text-lg font-bold text-white rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="relative z-10">Send Message</span>
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
              <p className="text-gray-300 mb-4">Where every cup tells a story</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">f</div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">t</div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">i</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Fresh Coffee</li>
                <li>Pastries</li>
                <li>WiFi</li>
                <li>Catering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Coffee Street</p>
                <p>Brewville, BV 12345</p>
                <p>(555) 123-4567</p>
                <p>hello@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 {data.businessName}. Website by Regrowth.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}