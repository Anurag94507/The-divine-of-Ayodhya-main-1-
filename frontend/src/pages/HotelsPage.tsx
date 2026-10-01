import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import PageLayout from '../components/PageLayout';
import { Hotel, Star, MapPin, Wifi, Car, Coffee, ShieldCheck, ExternalLink, Sparkles, Phone } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface HotelItem {
  id: number;
  name: string;
  category: 'Luxury' | 'Heritage' | 'Boutique' | 'Comfort';
  stars: number;
  rating: number;
  price: string;
  distance: string;
  description: string;
  address: string;
  image: string;
  bookingUrl: string;
  amenities: string[];
}

const hotelsList: HotelItem[] = [
  {
    id: 1,
    name: 'Cygnett Collection KK Hotel',
    category: 'Luxury',
    stars: 4,
    rating: 4.8,
    price: '₹4,500 - ₹8,500 / night',
    distance: '6 km from Railway Station, 2 km from Airport',
    description: 'Premier upscale hotel offering opulent rooms, world-class multi-cuisine dining, conference halls, and dedicated pilgrimage concierge assistance.',
    address: 'Near Ayodhya International Airport Road, Ayodhya',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f6/e4/51/facade.jpg?w=1200&h=-1&s=1',
    bookingUrl: 'https://www.cygnetthotels.com/cygnett-collection-kk-hotel/unit-overview',
    amenities: ['Free High-Speed WiFi', '24/7 Room Service', 'Pure Veg Multi-Cuisine', 'Airport Shuttle', 'Swimming Pool', 'Fitness Center']
  },
  {
    id: 2,
    name: 'The Ramayana Hotel',
    category: 'Heritage',
    stars: 4,
    rating: 4.7,
    price: '₹5,200 - ₹9,800 / night',
    distance: '2.5 km from Ram Janmabhoomi',
    description: 'Boutique heritage-inspired luxury property adorned with Ramayana murals, landscaped courtyards, and tranquil devotional ambiance.',
    address: 'Mani Parbat Road, Ayodhya',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/67/26/af/caption.jpg?w=1200&h=-1&s=1',
    bookingUrl: 'https://www.theramayana.in/',
    amenities: ['Spiritual Ambiance', 'Ayurvedic Spa', 'Pure Veg Fine Dining', 'Complimentary Breakfast', 'EV Charging', 'Temple Concierge']
  },
  {
    id: 3,
    name: 'Park Inn by Radisson Ayodhya',
    category: 'Luxury',
    stars: 5,
    rating: 4.9,
    price: '₹6,500 - ₹12,000 / night',
    distance: '3.2 km from Ram Mandir',
    description: 'International hospitality standard with contemporary suites, rooftop cafe offering panoramic views of the temple spires, and luxurious banquet facilities.',
    address: 'National Highway 27, Ayodhya',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    bookingUrl: 'https://www.radissonhotels.com/',
    amenities: ['Rooftop Restaurant', 'Valet Parking', 'Smart Key Access', 'Grand Banquet', 'Doctor on Call', 'Express Check-In']
  },
  {
    id: 4,
    name: 'Hotel Shane Awadh',
    category: 'Comfort',
    stars: 3,
    rating: 4.5,
    price: '₹2,200 - ₹4,500 / night',
    distance: '1.2 km from City Bus Stand, 4 km from Mandir',
    description: 'Long-standing, highly reputable hotel in the city center providing cozy air-conditioned rooms, excellent North Indian cuisine, and warm hospitality.',
    address: 'Civil Lines, Near Bus Stand, Faizabad-Ayodhya',
    image: 'https://content.jdmagicbox.com/comp/ayodhya/g6/9999px5278.x5278.220328124633.a6g6/catalogue/hotel-shane-awadh-ayodhya-hotels-rs-1001-to-rs-2000--c2x9w5t5p6.jpg',
    bookingUrl: 'https://www.shaneavadh.in/',
    amenities: ['Central City Location', 'AC Deluxe Rooms', 'In-House Restaurant', '24/7 Front Desk', 'Travel Desk']
  },
  {
    id: 5,
    name: 'Royal Heritage Hotel & Resort',
    category: 'Heritage',
    stars: 4,
    rating: 4.7,
    price: '₹3,800 - ₹7,000 / night',
    distance: '4 km from Saryu Ghat',
    description: 'Palatial architecture inspired by royal Awadh estates with spacious suites, expansive lawns, and authentic hospitality tailored for pilgrimage groups.',
    address: 'NH-28 Bypass Road, Ayodhya',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    bookingUrl: 'https://www.google.com/travel/hotels/ayodhya',
    amenities: ['Lush Green Lawns', 'Spacious Suites', 'Conference Hall', 'Safe Car Parking', 'Buffet Breakfast']
  },
  {
    id: 6,
    name: 'Taraji Resort & Sarayu Retreat',
    category: 'Boutique',
    stars: 4,
    rating: 4.6,
    price: '₹3,500 - ₹6,500 / night',
    distance: 'Riverside near Guptar Ghat',
    description: 'Riverside cottages and wellness resort providing soothing river breezes, yoga sessions, and serene retreats away from city crowds.',
    address: 'Guptar Ghat Road, Ayodhya',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    bookingUrl: 'https://www.google.com/travel/hotels/ayodhya',
    amenities: ['Riverside Cottages', 'Morning Yoga Sessions', 'Organic Sattvic Food', 'Boating Arrangements', 'Garden Dining']
  }
];

const HotelsPage = () => {
  const [filter, setFilter] = useState<'All' | 'Luxury' | 'Heritage' | 'Boutique' | 'Comfort'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const filteredHotels = filter === 'All'
    ? hotelsList
    : hotelsList.filter(h => h.category === filter);

  return (
    <PageLayout>
      <div className="page-transition pb-16 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Hotels & Luxury Accommodations" 
          subtitle="Comfortable & Premium Stays in the Sacred City of Ayodhya" 
          backgroundImage="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop"
        />
        
        <div className="container mx-auto px-4 mt-12">
          {/* Header */}
          <section className="max-w-4xl mx-auto mb-12 text-center section-animate">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ayodhya-saffron/10 rounded-full mb-4">
              <Hotel size={16} className="text-ayodhya-saffron" />
              <span className="text-sm font-semibold text-ayodhya-saffron">Premium Hospitality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-4">
              Stay in Comfort & Luxury
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              From international luxury brands to charming heritage properties, Ayodhya now offers world-class hotel accommodations 
              equipped with modern amenities, pure vegetarian gourmet dining, and prompt temple transfer services.
            </p>
            <div className="ornament-wide mt-6" />
          </section>

          {/* Filter Chips */}
          <section className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
            {(['All', 'Luxury', 'Heritage', 'Boutique', 'Comfort'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white shadow-md shadow-orange-200 scale-105'
                    : 'bg-white text-gray-700 border border-orange-200 hover:border-ayodhya-saffron hover:text-ayodhya-saffron'
                }`}
              >
                {cat === 'All' ? '🏨 All Hotels' : `${cat} Hotels`}
              </button>
            ))}
          </section>

          {/* Hotels Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map((hotel) => (
                <div 
                  key={hotel.id} 
                  className="glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border border-orange-100"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-ayodhya-maroon/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
                      <Sparkles size={12} className="text-amber-300" />
                      {hotel.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-amber-600 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      {hotel.rating} ({hotel.stars}★)
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs flex items-center justify-between">
                      <span className="text-amber-300 font-bold">
                        {hotel.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-1 hover:text-ayodhya-saffron transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="text-xs text-ayodhya-saffron font-medium mb-3 flex items-center gap-1">
                      <MapPin size={13} className="flex-shrink-0" />
                      <span>{hotel.distance}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {hotel.description}
                    </p>

                    {/* Amenities list */}
                    <div className="mt-auto pt-4 border-t border-orange-50">
                      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Key Amenities:</h4>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {hotel.amenities.slice(0, 4).map((am, idx) => (
                          <span key={idx} className="bg-orange-50 text-amber-950 border border-orange-200/60 px-2.5 py-1 rounded-md text-xs font-medium">
                            ✓ {am}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <a 
                          href={hotel.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white hover:shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Reserve & Book Online</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Traveler Advisory */}
          <section className="max-w-5xl mx-auto mb-12 p-8 glass-card rounded-3xl border border-orange-100 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-ayodhya-saffron mb-3">
                <Car size={24} />
              </div>
              <h4 className="font-bold text-ayodhya-maroon mb-1">Temple EV Shuttles</h4>
              <p className="text-xs text-gray-500">Most hotels arrange seamless electric golf cart / auto transfers directly to Ram Mandir gates.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-ayodhya-saffron mb-3">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-ayodhya-maroon mb-1">Official ID Required</h4>
              <p className="text-xs text-gray-500">Government photo ID is mandatory for all guests at check-in across all hotels in Ayodhya.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-ayodhya-saffron mb-3">
                <Coffee size={24} />
              </div>
              <h4 className="font-bold text-ayodhya-maroon mb-1">100% Pure Veg Dining</h4>
              <p className="text-xs text-gray-500">All major hotel kitchens in the Ayodhya municipal zone maintain strictly pure vegetarian kitchens.</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default HotelsPage;
