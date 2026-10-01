import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import PageLayout from '../components/PageLayout';
import { Hotel, Link as LinkIcon, MapPin, CheckCircle, Star, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface Dharmshala {
  id: number;
  name: string;
  category: 'Near Temple' | 'Budget' | 'Riverside' | 'Family';
  price: string;
  rating: number;
  distance: string;
  description: string;
  address: string;
  contact: string;
  image: string;
  facilities: string[];
}

const dharmshalas: Dharmshala[] = [
  {
    id: 1,
    name: 'Shri Ram Dharmshala',
    category: 'Near Temple',
    price: '₹200 - ₹500 / night',
    rating: 4.8,
    distance: '300m from Ram Mandir',
    description: 'Premier pilgrim dharamshala with authentic devotional atmosphere, ultra-clean rooms, and daily community langar.',
    address: 'Near Ram Mandir Gate No. 3, Ayodhya',
    contact: '+91 7800509636',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800&auto=format&fit=crop',
    facilities: ['Free Sattvic Meals', 'Dormitory & AC Rooms', 'Locker Facility', 'Prayer & Satsang Hall', '24/7 Security']
  },
  {
    id: 2,
    name: 'Janaki Saran Dharmshala',
    category: 'Family',
    price: '₹400 - ₹800 / night',
    rating: 4.7,
    distance: '800m from Kanak Bhawan',
    description: 'Family-oriented accommodation with spacious attached-bathroom rooms, serene garden courtyard, and dedicated dining hall.',
    address: 'Saket Colony, Near Kanak Bhawan, Ayodhya',
    contact: '+91 7800509636',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    facilities: ['Family Suites', 'Attached Bathrooms', 'Dining Hall', 'In-house Temple', 'Hot Water 24/7']
  },
  {
    id: 3,
    name: 'Bharat Kund Dharmshala',
    category: 'Budget',
    price: '₹150 - ₹350 / night',
    rating: 4.6,
    distance: 'Adjacent to Bharat Kund',
    description: 'Peaceful hermitage setting surrounded by lush greenery, ideal for devotees seeking tranquil meditation and quietude.',
    address: 'Bharat Kund Road, Ayodhya',
    contact: '+91 7800509636',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    facilities: ['Garden View', 'Meditation Area', 'Subsidized Food', 'Spiritual Library', 'Travel Guidance']
  },
  {
    id: 4,
    name: 'Dashrath Mahal Dharmshala',
    category: 'Near Temple',
    price: '₹500 - ₹1,200 / night',
    rating: 4.9,
    distance: '450m from Dashrath Mahal',
    description: 'Grand royal-architecture dharamshala with modern amenities, air-conditioned rooms, elevator access, and traditional hospitality.',
    address: 'Main Market Road, Near Dashrath Mahal, Ayodhya',
    contact: '+91 7800509636',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    facilities: ['AC Deluxe Rooms', 'Generator Backup', 'Ayurvedic Wellness Desk', 'Wheelchair Accessible', 'Elevator']
  },
  {
    id: 5,
    name: 'Sarayu Kunj Dharmshala',
    category: 'Riverside',
    price: '₹350 - ₹750 / night',
    rating: 4.8,
    distance: 'Overlooking Saryu Ghat',
    description: 'Spectacular riverfront lodging with direct ghat access, offering mesmerizing morning sunrises and evening Maha Aarti views.',
    address: 'Ram Ki Paidi, Sarayu Ghat, Ayodhya',
    contact: '+91 7800509636',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
    facilities: ['River View Balconies', 'Direct Ghat Access', 'Evening Aarti View', 'Tea & Refreshment Counter']
  },
  {
    id: 6,
    name: 'Hanuman Garhi Dharmshala',
    category: 'Near Temple',
    price: '₹250 - ₹600 / night',
    rating: 4.7,
    distance: '200m from Hanuman Garhi',
    description: 'Prime location at the base of Hanuman Garhi hillock with vibrant spiritual surroundings and 24-hour devotee support.',
    address: 'Hanuman Garhi Marg, Ayodhya',
    contact: '+91 7800509636',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    facilities: ['Temple Proximity', '24-Hour Desk', 'Pure Vegetarian Rasoi', 'Luggage Storage', 'Pilgrim Assistance']
  }
];

const DharmshalaPage = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Near Temple' | 'Family' | 'Riverside' | 'Budget'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const filteredList = activeFilter === 'All' 
    ? dharmshalas 
    : dharmshalas.filter(d => d.category === activeFilter);

  return (
    <PageLayout>
      <div className="page-transition pb-16 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Dharmshalas in Ayodhya" 
          subtitle="Sacred Pilgrim Rest Houses & Affordable Stays" 
          backgroundImage="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1600&auto=format&fit=crop"
        />
        
        <div className="container mx-auto px-4 mt-12">
          {/* Introduction Header */}
          <section className="max-w-4xl mx-auto mb-12 text-center section-animate">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ayodhya-saffron/10 rounded-full mb-4">
              <HeartHandshake size={16} className="text-ayodhya-saffron" />
              <span className="text-sm font-semibold text-ayodhya-saffron">Traditional Hospitality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-4">
              Authentic Pilgrim Accommodations
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Dharmshalas in Ayodhya provide clean, peaceful, and highly affordable stays for devotees visiting the birthplace of Lord Ram.
              Experience genuine sattvic living, devotional companionship, and warm seva hospitality.
            </p>
            <div className="ornament-wide mt-6" />
          </section>

          {/* Official Trust Notice Box */}
          <section className="max-w-5xl mx-auto mb-14 p-6 md:p-8 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-2 border-orange-200 rounded-3xl shadow-md section-animate">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ayodhya-saffron to-ayodhya-orange flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ayodhya-maroon">Official Sri Ram Janmabhoomi Teerth Kshetra</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    For official trust accommodation bookings, VIP darshan passes, and live aarti slots, visit the official trust portal.
                  </p>
                </div>
              </div>
              <a 
                href="https://srjbtkshetra.org/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-premium whitespace-nowrap flex items-center gap-2 text-sm shadow-md"
              >
                <LinkIcon size={16} />
                Visit Official Portal
              </a>
            </div>
          </section>

          {/* Category Filter Chips */}
          <section className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {(['All', 'Near Temple', 'Family', 'Riverside', 'Budget'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white shadow-md shadow-orange-200 scale-105'
                    : 'bg-white text-gray-700 border border-orange-200 hover:border-ayodhya-saffron hover:text-ayodhya-saffron'
                }`}
              >
                {cat === 'All' ? '✨ All Stays' : cat}
              </button>
            ))}
          </section>

          {/* Dharmshala Cards Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredList.map((item) => (
                <div 
                  key={item.id} 
                  className="glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border border-orange-100"
                >
                  {/* Image with badges */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-ayodhya-maroon/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
                      <Hotel size={12} />
                      {item.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-amber-600 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      {item.rating}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5">
                      <MapPin size={13} className="text-ayodhya-saffron flex-shrink-0" />
                      <span className="truncate">{item.distance}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-ayodhya-maroon hover:text-ayodhya-saffron transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg self-start mb-3">
                      💰 {item.price}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-4 flex items-start gap-1">
                      <MapPin size={13} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{item.address}</span>
                    </div>

                    {/* Facilities chips */}
                    <div className="mt-auto pt-4 border-t border-orange-50">
                      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Amenities & Seva:</h4>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {item.facilities.map((fac, idx) => (
                          <span 
                            key={idx} 
                            className="bg-orange-50 text-amber-900 border border-orange-200/60 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1"
                          >
                            <CheckCircle size={10} className="text-ayodhya-saffron" />
                            {fac}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <a 
                          href={`tel:${item.contact}`}
                          className="flex-1 py-2.5 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white hover:shadow-md hover:shadow-orange-200 transition-all flex items-center justify-center gap-1.5"
                        >
                          <Phone size={13} />
                          Call & Inquire
                        </a>
                        <a 
                          href="https://srjbtkshetra.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2.5 rounded-xl text-xs font-semibold border border-orange-200 text-ayodhya-maroon hover:bg-orange-50 transition-all flex items-center justify-center"
                          title="View Trust Details"
                        >
                          <LinkIcon size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Guide / Tips Section */}
          <section className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4 flex items-center gap-2">
                📋 Pilgrim Booking Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">1.</span>
                  <span><strong>Carry Government Photo ID:</strong> Aadhaar Card or Voter ID is required for all travelers during check-in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">2.</span>
                  <span><strong>Advance Booking on Festivals:</strong> During Ram Navami, Diwali, and Kartik Purnima, reserve rooms at least 2-4 weeks ahead.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">3.</span>
                  <span><strong>Standard Timings:</strong> Typical check-in is 12:00 PM and check-out is 11:00 AM.</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4 flex items-center gap-2">
                🌸 Sanctity & Ashram Etiquette
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span>Strictly pure sattvic vegetarian environment. No outside non-vegetarian food, tobacco, or alcohol is allowed anywhere on premises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span>Maintain peaceful decorum after 10:00 PM to support early morning temple aarti attendees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span>Dress respectfully conforming to sacred pilgrim traditions.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default DharmshalaPage;
