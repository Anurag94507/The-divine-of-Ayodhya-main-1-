import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import PageLayout from '../components/PageLayout';
import { Utensils, Clock, MapPin, Sparkles, CheckCircle, Star, Award, Coffee } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface RestaurantItem {
  id: number;
  name: string;
  cuisine: string;
  category: 'Fine Dining' | 'Rooftop & Riverfront' | 'Heritage Awadhi' | 'Café & Bakery' | 'Regional Indian';
  rating: number;
  priceRange: '₹₹ (Moderate)' | '₹₹₹ (Premium)' | '₹ (Budget-Friendly)';
  hours: string;
  address: string;
  description: string;
  image: string;
  specialties: string[];
}

const restaurantsList: RestaurantItem[] = [
  {
    id: 1,
    name: 'Tulsi Pure Veg Restaurant',
    cuisine: 'North & South Indian, Chinese',
    category: 'Regional Indian',
    rating: 4.8,
    priceRange: '₹₹ (Moderate)',
    hours: '8:00 AM - 10:30 PM',
    address: 'Civil Lines, Near Ayodhya Cantt, Ayodhya',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    description: 'Modern, vibrant vegetarian eatery famous for crispy paper dosas, rich paneer curries, sizzling starters, and fresh fruit mocktails.',
    specialties: ['Paneer Butter Masala', 'Mysore Masala Dosa', 'Dal Makhani', 'Gulab Jamun with Ice Cream']
  },
  {
    id: 2,
    name: 'Sarayu Terrace Rooftop Dining',
    cuisine: 'Fusion Vegetarian & Continental',
    category: 'Rooftop & Riverfront',
    rating: 4.9,
    priceRange: '₹₹₹ (Premium)',
    hours: '11:00 AM - 11:00 PM',
    address: 'Ram Ki Paidi Promenade, Sarayu Riverfront, Ayodhya',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
    description: 'Breathtaking open-air terrace restaurant overlooking the sacred Sarayu River with evening lighting, wood-fired artisan pizzas, and fusion chaats.',
    specialties: ['Wood-Fired Pizza', 'Sarayu Sunset Mocktail', 'Tandoori Platter', 'Artisan Pasta']
  },
  {
    id: 3,
    name: 'Ayodhya Heritage Royal Kitchen',
    cuisine: 'Authentic Royal Awadhi (Pure Veg)',
    category: 'Heritage Awadhi',
    rating: 4.8,
    priceRange: '₹₹ (Moderate)',
    hours: '10:00 AM - 10:00 PM',
    address: 'Heritage Corridor, Near Dashrath Mahal, Ayodhya',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    description: 'Preserving centuried royal Nawabi recipes reimagined in pure vegetarian avatar. Enjoy fragrant veg biryanis, kebabs, and creamy gravies.',
    specialties: ['Awadhi Dum Biryani', 'Galouti Kebab (Veg)', 'Shahi Tukda', 'Kesar Thandai']
  },
  {
    id: 4,
    name: 'Yatra Spiritual Café & Bakery',
    cuisine: 'Espresso Coffee, Bakery & Light Meals',
    category: 'Café & Bakery',
    rating: 4.7,
    priceRange: '₹ (Budget-Friendly)',
    hours: '7:30 AM - 10:30 PM',
    address: 'Dharampath Shopping Plaza, Ayodhya',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop',
    description: 'Cozy modern café with fast Wi-Fi, handcrafted coffees, artisanal baked pastries, grilled panini sandwiches, and serene reading corners.',
    specialties: ['Artisan Cappuccino', 'Eggless Blueberry Cheesecake', 'Grilled Herb Paneer Sandwich', 'Cold Brew']
  },
  {
    id: 5,
    name: "Raghav's Fine Dining",
    cuisine: 'Gourmet Multi-Cuisine Vegetarian',
    category: 'Fine Dining',
    rating: 4.9,
    priceRange: '₹₹₹ (Premium)',
    hours: '12:00 PM - 11:00 PM',
    address: 'Ram Path Avenue, Ayodhya',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    description: 'Elite dining destination featuring exquisite chandelier interiors, gold-leaf tableware, private family dining chambers, and curated gourmet thalis.',
    specialties: ['Maharaja Gold Thali', 'Paneer Lababdar', 'Stuffed Kulchas', 'Rasmalai Mousse']
  },
  {
    id: 6,
    name: 'Saffron Spice Regional House',
    cuisine: 'Pan-Indian Regional Delicacies',
    category: 'Regional Indian',
    rating: 4.6,
    priceRange: '₹₹ (Moderate)',
    hours: '11:00 AM - 10:30 PM',
    address: 'National Highway Link Road, Ayodhya',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800&auto=format&fit=crop',
    description: 'Celebrating the incredible culinary diversity of India with authentic Rajasthani Dal Baati, Gujarati Thalis, and South Indian delicacies under one roof.',
    specialties: ['Rajasthani Dal Baati Churma', 'Gujarati Undhiyu & Puri', 'Malabar Parotta Curry (Veg)', 'Kolkata Rasgulla']
  }
];

const RestaurantsPage = () => {
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const categories = ['All', 'Fine Dining', 'Rooftop & Riverfront', 'Heritage Awadhi', 'Café & Bakery', 'Regional Indian'];

  const filteredRestaurants = filter === 'All'
    ? restaurantsList
    : restaurantsList.filter(r => r.category === filter);

  return (
    <PageLayout>
      <div className="page-transition pb-16 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Restaurants & Dining" 
          subtitle="Gourmet Vegetarian & Contemporary Dining in Ayodhya" 
          backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
        />
        
        <div className="container mx-auto px-4 mt-12">
          {/* Header */}
          <section className="max-w-4xl mx-auto mb-12 text-center section-animate">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ayodhya-saffron/10 rounded-full mb-4">
              <Utensils size={16} className="text-ayodhya-saffron" />
              <span className="text-sm font-semibold text-ayodhya-saffron">Flavors of Ayodhya</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-4">
              Contemporary & Fine Dining Experiences
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Explore Ayodhya's flourishing culinary landscape, combining centuries of royal Awadhi heritage with rooftop river views, 
              cozy specialty cafés, and gourmet pure vegetarian family restaurants.
            </p>
            <div className="ornament-wide mt-6" />
          </section>

          {/* Filter Chips */}
          <section className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white shadow-md shadow-orange-200 scale-105'
                    : 'bg-white text-gray-700 border border-orange-200 hover:border-ayodhya-saffron hover:text-ayodhya-saffron'
                }`}
              >
                {cat === 'All' ? '🍽️ All Restaurants' : cat}
              </button>
            ))}
          </section>

          {/* Restaurants Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <div 
                  key={restaurant.id} 
                  className="glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border border-orange-100"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-ayodhya-maroon/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
                      <Sparkles size={12} className="text-amber-300" />
                      {restaurant.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-amber-600 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      {restaurant.rating}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs flex items-center justify-between">
                      <span className="text-amber-300 font-semibold">{restaurant.priceRange}</span>
                      <span className="flex items-center gap-1 text-gray-200 text-[11px]">
                        <Clock size={11} />
                        {restaurant.hours}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-1 hover:text-ayodhya-saffron transition-colors">
                      {restaurant.name}
                    </h3>
                    <p className="text-xs font-semibold text-ayodhya-saffron mb-3">
                      🍽️ {restaurant.cuisine}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {restaurant.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-4 flex items-start gap-1">
                      <MapPin size={13} className="text-ayodhya-saffron mt-0.5 flex-shrink-0" />
                      <span>{restaurant.address}</span>
                    </div>

                    {/* Specialties */}
                    <div className="mt-auto pt-4 border-t border-orange-50">
                      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Signature Dishes:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {restaurant.specialties.map((spec, idx) => (
                          <span key={idx} className="bg-orange-50 text-orange-950 border border-orange-200 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                            <CheckCircle size={11} className="text-ayodhya-saffron" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Comparison Box */}
          <section className="max-w-4xl mx-auto mb-16 glass-card p-8 rounded-3xl border border-orange-100">
            <h3 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">
              Restaurants vs. Bhojnalayas: Which to Choose?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-orange-50/70 p-5 rounded-2xl border border-orange-200/50">
                <h4 className="font-bold text-ayodhya-maroon text-base mb-2 flex items-center gap-2">
                  <span>🍛</span> Traditional Bhojnalayas
                </h4>
                <ul className="space-y-2 text-gray-700 text-xs md:text-sm">
                  <li>• Focuses on unlimited, pure sattvic temple thalis</li>
                  <li>• Highly subsidized (₹80 - ₹180) or charitable seva</li>
                  <li>• Authentic spiritual ambiance and pangat seating</li>
                  <li>• Best for: Devotees and budget-conscious pilgrims</li>
                </ul>
              </div>

              <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200/50">
                <h4 className="font-bold text-ayodhya-maroon text-base mb-2 flex items-center gap-2">
                  <span>🍽️</span> Contemporary Restaurants
                </h4>
                <ul className="space-y-2 text-gray-700 text-xs md:text-sm">
                  <li>• Multi-cuisine menus: North/South Indian, Continental, Chaat</li>
                  <li>• Scenic rooftop river views and air-conditioned luxury</li>
                  <li>• Full table service, private dining, and modern cafés</li>
                  <li>• Best for: Families, couples, and leisure tourists</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default RestaurantsPage;
