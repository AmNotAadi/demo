import { DemoData } from '@/types/demo'

interface RestaurantTemplateProps {
  demo: DemoData
}

export default function RestaurantTemplate({ demo }: RestaurantTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            {demo.businessName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {demo.tagline || 'Culinary Excellence Awaits'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-lg transition-colors"
              style={{ backgroundColor: demo.theme.primaryColor }}
            >
              Make Reservation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg text-lg transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-serif">About Our Kitchen</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe in the power of fresh, locally-sourced ingredients to create 
                unforgettable dining experiences. Our chef brings years of culinary expertise 
                to every dish we serve.
              </p>
              <p className="text-lg text-gray-600">
                From farm to table, we ensure that every ingredient meets our high standards 
                for quality and sustainability.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Chef's Kitchen Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Truffle Pasta', price: '$28', description: 'House-made pasta with wild mushrooms and truffle oil' },
              { name: 'Wagyu Steak', price: '$65', description: 'Premium Wagyu beef with seasonal vegetables' },
              { name: 'Lobster Risotto', price: '$42', description: 'Creamy risotto with fresh Maine lobster' },
              { name: 'Chocolate Soufflé', price: '$16', description: 'Warm chocolate soufflé with vanilla ice cream' },
              { name: 'Wine Pairing', price: '$25', description: 'Sommelier-selected wines to complement your meal' },
              { name: 'Chef\'s Special', price: 'Market', description: 'Ask your server about today\'s special creation' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-bold text-primary-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif">Wine Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Red Wines</h3>
              <div className="space-y-4">
                {['Cabernet Sauvignon', 'Pinot Noir', 'Merlot', 'Syrah'].map((wine, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">{wine}</span>
                    <span className="text-gray-600">$12-18/glass</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">White Wines</h3>
              <div className="space-y-4">
                {['Chardonnay', 'Sauvignon Blanc', 'Riesling', 'Pinot Grigio'].map((wine, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">{wine}</span>
                    <span className="text-gray-600">$10-16/glass</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif">Private Events</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Host your special occasions in our elegant dining room. 
            We offer customized menus and wine pairings for groups of 10-50 guests.
          </p>
          <button 
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-lg transition-colors"
            style={{ backgroundColor: demo.theme.primaryColor }}
          >
            Plan Your Event
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-serif">{demo.businessName}</h3>
          <p className="text-gray-400 mb-6">Fine dining at its finest</p>
          <div className="text-sm text-gray-500">
            Demo Website By Regrowth
          </div>
        </div>
      </footer>
    </div>
  )
}
