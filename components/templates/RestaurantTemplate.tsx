import { generateColorPalette, getContrastColor } from '../../lib/colorUtils'
import { TemplateData, TemplateProps } from './GymTemplate'

// Restaurant Template - Premium Elegant Layout
export function RestaurantTemplate({ data }: TemplateProps) {
  const colors = generateColorPalette(data.primaryColor)
  const textColor = getContrastColor(data.primaryColor)

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Fixed Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 text-white z-50 overflow-y-auto shadow-2xl">
        <div className="p-8">
          {data.logoUrl && (
            <img src={data.logoUrl} alt="Logo" className="h-20 w-auto mb-8 transition-transform duration-300 hover:scale-105" />
          )}
          <h1 className="text-4xl font-bold mb-4 font-serif animate-fade-in-up" style={{ color: colors.primary }}>
            {data.businessName}
          </h1>
          <p className="text-gray-300 mb-8 italic text-lg animate-fade-in-up animation-delay-200">
            {data.tagline || 'Culinary Excellence Meets Warm Hospitality'}
          </p>
          
          <nav className="space-y-3 mb-8 animate-fade-in-up animation-delay-400">
            <a href="#home" className="block py-3 px-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:translate-x-2 relative group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#menu" className="block py-3 px-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:translate-x-2 relative group">
              <span className="relative z-10">Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#chef" className="block py-3 px-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:translate-x-2 relative group">
              <span className="relative z-10">Chef's Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#reservations" className="block py-3 px-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:translate-x-2 relative group">
              <span className="relative z-10">Reservations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="block py-3 px-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:translate-x-2 relative group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          <div className="border-t border-gray-700 pt-6 animate-fade-in-up animation-delay-600">
            <h3 className="font-semibold mb-4 text-lg">Restaurant Hours</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                <span className="font-medium">Tuesday - Thursday</span>
                <span className="text-gray-400">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                <span className="font-medium">Friday - Saturday</span>
                <span className="text-gray-400">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                <span className="font-medium">Sunday</span>
                <span className="text-gray-400">4:00 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 px-3 rounded-lg text-gray-500">
                <span className="font-medium">Monday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="mt-8 animate-fade-in-up animation-delay-800">
            <button 
              className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
              style={{ backgroundColor: colors.primary }}
              onClick={() => alert('Opening reservation system...')}
            >
              <span className="relative z-10">Make Reservation</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Premium Awards Section */}
          <div className="mt-8 animate-fade-in-up animation-delay-1000">
            <h3 className="font-semibold mb-4 text-lg">Awards & Recognition</h3>
            <div className="space-y-3">
              <div className="flex items-center py-2 px-3 rounded-lg bg-gray-800/30">
                <span className="text-2xl mr-3">⭐</span>
                <div>
                  <div className="font-medium">Michelin Star</div>
                  <div className="text-xs text-gray-400">2023</div>
                </div>
              </div>
              <div className="flex items-center py-2 px-3 rounded-lg bg-gray-800/30">
                <span className="text-2xl mr-3">🏆</span>
                <div>
                  <div className="font-medium">Best Fine Dining</div>
                  <div className="text-xs text-gray-400">City Awards 2023</div>
                </div>
              </div>
              <div className="flex items-center py-2 px-3 rounded-lg bg-gray-800/30">
                <span className="text-2xl mr-3">🍷</span>
                <div>
                  <div className="font-medium">Wine Spectator Award</div>
                  <div className="text-xs text-gray-400">2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80">
        {/* Premium Hero Section - Full Width */}
        <section id="home" className="relative h-screen overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            style={{ backgroundColor: colors.primaryDarkest }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: colors.primary }}></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-5 animate-bounce" style={{ backgroundColor: colors.primary }}></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full opacity-5 animate-ping" style={{ backgroundColor: colors.primary }}></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-8">
            <div className="max-w-5xl">
              <div className="space-y-8">
                <h1 className="text-7xl md:text-9xl font-bold mb-8 font-serif animate-fade-in-up leading-tight">
                  {data.businessName}
                </h1>
                <p className="text-3xl md:text-4xl mb-12 font-light italic max-w-4xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
                  {data.tagline || 'Culinary Excellence Meets Warm Hospitality'}
                </p>
                
                {/* Premium Stats */}
                <div className="grid grid-cols-3 gap-12 mb-12 animate-fade-in-up animation-delay-400">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>15+</div>
                    <div className="text-gray-300 text-lg">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>⭐</div>
                    <div className="text-gray-300 text-lg">Michelin Star</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>500+</div>
                    <div className="text-gray-300 text-lg">Happy Guests</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up animation-delay-600">
                  <button 
                    className="px-16 py-6 text-2xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden group"
                    style={{ 
                      backgroundColor: colors.primary, 
                      color: textColor 
                    }}
                    onClick={() => alert('Opening menu...')}
                  >
                    <span className="relative z-10">View Menu</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <button className="px-16 py-6 text-2xl font-bold border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Premium Badge */}
          <div 
            className="absolute top-12 right-12 px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl animate-float"
            style={{ backgroundColor: colors.primary }}
          >
            ⭐ Award Winning
          </div>
        </section>

        {/* Menu Section - Masonry Layout */}
        <section id="menu" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
                Our Menu
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handcrafted dishes featuring locally sourced ingredients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  category: 'Appetizers',
                  items: [
                    { name: 'Truffle Arancini', price: '$18', description: 'Crispy risotto balls with truffle oil and parmesan' },
                    { name: 'Burrata Caprese', price: '$16', description: 'Fresh burrata with heirloom tomatoes and basil' },
                    { name: 'Lobster Bisque', price: '$22', description: 'Rich and creamy soup with fresh herbs' }
                  ]
                },
                { 
                  category: 'Main Courses',
                  items: [
                    { name: 'Wagyu Beef Tenderloin', price: '$65', description: 'Premium cut with roasted vegetables and red wine reduction' },
                    { name: 'Pan-Seared Halibut', price: '$38', description: 'Fresh halibut with lemon butter sauce and seasonal vegetables' },
                    { name: 'Duck Confit', price: '$42', description: 'Slow-cooked duck leg with cherry gastrique' }
                  ]
                },
                { 
                  category: 'Desserts',
                  items: [
                    { name: 'Chocolate Soufflé', price: '$16', description: 'Warm chocolate dessert with vanilla ice cream' },
                    { name: 'Tiramisu', price: '$14', description: 'Classic Italian dessert with espresso and mascarpone' },
                    { name: 'Crème Brûlée', price: '$12', description: 'Vanilla custard with caramelized sugar' }
                  ]
                }
              ].map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div 
                    className="h-16 flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {category.category}
                  </div>
                  <div className="p-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-6 last:mb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold" style={{ color: colors.primaryDarkest }}>
                            {item.name}
                          </h3>
                          <span className="text-lg font-bold" style={{ color: colors.primary }}>
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chef's Story - Split Layout */}
        <section id="chef" className="py-20 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-8 font-serif" style={{ color: colors.primary }}>
                  Meet Our Chef
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Chef Marcus Thompson brings over 15 years of culinary expertise to {data.businessName}. 
                  Trained in Michelin-starred restaurants across Europe, Chef Thompson creates dishes 
                  that celebrate both tradition and innovation.
                </p>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Our commitment to using locally sourced, seasonal ingredients ensures that every 
                  dish tells a story of quality and craftsmanship.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold" style={{ color: colors.primary }}>15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold" style={{ color: colors.primary }}>3</div>
                    <div className="text-gray-600">Michelin Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold" style={{ color: colors.primary }}>50+</div>
                    <div className="text-gray-600">Signature Dishes</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div 
                  className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center text-gray-600 text-lg"
                  style={{ backgroundColor: colors.primaryLightest }}
                >
                  Chef Portrait Photo
                </div>
                <div 
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  Award Winner
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservations - Interactive Form */}
        <section id="reservations" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 font-serif" style={{ color: colors.primary }}>
                Make a Reservation
              </h2>
              <p className="text-xl text-gray-600">Experience fine dining at its best</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={(e) => { e.preventDefault(); alert('Reservation confirmed! We\'ll contact you to confirm details.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <input type="date" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Time</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Time</option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                      <option>9:30 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Party Size</label>
                    <select required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Size</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5 People</option>
                      <option>6 People</option>
                      <option>7+ People</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Occasion</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option>Regular Dining</option>
                      <option>Anniversary</option>
                      <option>Birthday</option>
                      <option>Business Dinner</option>
                      <option>Date Night</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24" placeholder="Any dietary restrictions or special requests..."></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 text-lg font-bold text-white rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: colors.primary }}
                >
                  Reserve Table
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 font-serif">Contact Us</h2>
              <p className="text-xl text-gray-300">We'd love to hear from you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  📍
                </div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-300">123 Fine Dining Ave<br />Your City, ST 12345</p>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  📞
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  📧
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">reservations@{data.businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}