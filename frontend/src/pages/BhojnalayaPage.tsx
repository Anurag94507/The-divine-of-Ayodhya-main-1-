import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import PageLayout from '../components/PageLayout';
import { Utensils, Clock, MapPin, Sparkles, CheckCircle2, Star, ShieldCheck, Heart } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

interface Bhojnalaya {
  id: number;
  name: string;
  type: 'Traditional Thali' | 'Trust / Seva Rasoi' | 'Awadhi Sattvic' | 'Prasad Dining';
  price: string;
  rating: number;
  hours: string;
  description: string;
  address: string;
  image: string;
  specialties: string[];
  features: string[];
}

const bhojnalayas: Bhojnalaya[] = [
  {
    id: 1,
    name: 'Aman Chandra Bhojnalaya',
    type: 'Traditional Thali',
    price: '₹120 - ₹180 per thali',
    rating: 4.8,
    hours: '10:30 AM - 10:00 PM',
    description: 'Renowned for authentic Awadhi thali meals prepared in pure desi ghee with complimentary unlimited refills of dal, kadhi, and hot phulkas.',
    address: 'Shringarhat, Opposite Petrol Pump, Ayodhya',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop',
    specialties: ['Special Awadhi Thali', 'Desi Ghee Kheer', 'Bedmi Puri Sabzi', 'Langar Dal'],
    features: ['100% Pure Veg', 'Unlimited Thali', 'Desi Ghee Preparation', 'AC Dining Hall']
  },
  {
    id: 2,
    name: 'Ram Rasoi (Mahavir Mandir Trust)',
    type: 'Trust / Seva Rasoi',
    price: 'Free / Prasad Seva',
    rating: 4.9,
    hours: '11:00 AM - 3:30 PM',
    description: 'Famous free prasad rasoi served by Shri Mahavir Mandir Trust where thousands of devotees are served delicious Govindbhog rice, dal, and sweets with devotion.',
    address: 'Near Ram Janmabhoomi Complex, Ayodhya',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    specialties: ['Govindbhog Rice Prasad', 'Maa Sita Kheer', 'Panchamrit', 'Satvik Sabzi'],
    features: ['Devotee Seva', 'Clean Hygiene', 'Pangat Seating Available', 'Free For Pilgrims']
  },
  {
    id: 3,
    name: 'Sarayu Bhog Bhojnalaya',
    type: 'Awadhi Sattvic',
    price: '₹100 - ₹220 per person',
    rating: 4.7,
    hours: '7:00 AM - 10:30 PM',
    description: 'Picturesque riverside location serving piping hot litti chokha, authentic kachori-jalebi breakfast, and wholesome lunch platters.',
    address: 'Sarayu Ghat Road, Ram Ki Paidi, Ayodhya',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    specialties: ['Baati Chokha with Ghee', 'Special Dahi Vada', 'Sarayu Malpua', 'Clay Pot Rabri Lassi'],
    features: ['Riverfront View', 'Breakfast Specials', 'Pure Mustard Oil & Ghee', 'Takeaway Packing']
  },
  {
    id: 4,
    name: 'Sita Rasoi Bhojnalaya',
    type: 'Prasad Dining',
    price: '₹90 - ₹150 per meal',
    rating: 4.8,
    hours: '11:00 AM - 9:30 PM',
    description: 'Sacred sattvic recipes inspired by ancient Mithila and Awadh culinary traditions, cooked strictly without onion or garlic.',
    address: 'Temple Road, Near Janaki Mahal, Ayodhya',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    specialties: ['Mithila Style Thali', 'Makhan Mishri', 'Moong Dal Khichdi', 'Sweet Daliya'],
    features: ['No Onion / No Garlic', 'Sattvic Certified', 'Healthy & Light', 'Family Friendly']
  },
  {
    id: 5,
    name: 'Ayodhya Prasad Rasoi',
    type: 'Prasad Dining',
    price: '₹80 - ₹140 per thali',
    rating: 4.6,
    hours: '8:00 AM - 10:00 PM',
    description: 'Simple, nourishing, and spiritually cooked temple-style meals favored by sadhus and pilgrim families alike.',
    address: 'Near Hanuman Garhi Temple Stairway, Ayodhya',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop',
    specialties: ['Desi Ghee Halwa', 'Kadhi Pakora', 'Poha & Jalebi', 'Bikaneri Besan Laddoo'],
    features: ['Quick Service', 'Traditional Taste', 'Hygienic Kitchen', 'Token System']
  },
  {
    id: 6,
    name: 'Raghav Bhojnalaya & Thali House',
    type: 'Traditional Thali',
    price: '₹110 - ₹190 per person',
    rating: 4.7,
    hours: '10:00 AM - 11:00 PM',
    description: 'Popular dining hall known for unlimited thalis featuring 4 vegetable curries, dal tadka, fresh tawa rotis, papad, salad, and dessert.',
    address: 'Main Market Square, Ram Path, Ayodhya',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
    specialties: ['Executive Royal Thali', 'Kadhi Chawal', 'Paneer Awadhi', 'Gulab Jamun'],
    features: ['Unlimited Servings', 'Fast Seating', 'AC Hall', 'Card & UPI Accepted']
  }
];

const BhojnalayaPage = () => {
  const [filter, setFilter] = useState<'All' | 'Traditional Thali' | 'Trust / Seva Rasoi' | 'Awadhi Sattvic' | 'Prasad Dining'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const filteredItems = filter === 'All'
    ? bhojnalayas
    : bhojnalayas.filter(b => b.type === filter);

  return (
    <PageLayout>
      <div className="page-transition pb-16 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Bhojnalayas in Ayodhya" 
          subtitle="Traditional Sattvic & Pure Vegetarian Divine Dining" 
          backgroundImage="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1600&auto=format&fit=crop"
        />
        
        <div className="container mx-auto px-4 mt-12">
          {/* Header Description */}
          <section className="max-w-4xl mx-auto mb-12 text-center section-animate">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ayodhya-saffron/10 rounded-full mb-4">
              <Utensils size={16} className="text-ayodhya-saffron" />
              <span className="text-sm font-semibold text-ayodhya-saffron">Sattvic Annadaan Tradition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-4">
              Experience Sacred & Wholesome Cuisine
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              In the sacred land of Ayodhya, food is treated not just as a meal, but as <span className="font-semibold text-ayodhya-maroon">Prasad</span> (sacred offering). 
              Bhojnalayas offer 100% pure vegetarian, hygienic, and soul-satisfying traditional recipes cooked with devotion.
            </p>
            <div className="ornament-wide mt-6" />
          </section>

          {/* Sattvic Highlights Banner */}
          <section className="max-w-5xl mx-auto mb-14 grid grid-cols-2 md:grid-cols-4 gap-4 section-animate">
            {[
              { icon: '🌿', title: '100% Pure Veg', desc: 'Strictly Sattvic & Onion/Garlic-free options' },
              { icon: '🧈', title: 'Desi Ghee', desc: 'Cooked with pure cow ghee & fresh ingredients' },
              { icon: '🥣', title: 'Unlimited Thalis', desc: 'Abundant servings with warm hospitality' },
              { icon: '🙏', title: 'Charitable Seva', desc: 'Subsidized & free prasad rasois available' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 text-center border border-orange-100">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <h4 className="font-bold text-ayodhya-maroon text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Filter Tabs */}
          <section className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
            {(['All', 'Traditional Thali', 'Trust / Seva Rasoi', 'Awadhi Sattvic', 'Prasad Dining'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white shadow-md shadow-orange-200 scale-105'
                    : 'bg-white text-gray-700 border border-orange-200 hover:border-ayodhya-saffron hover:text-ayodhya-saffron'
                }`}
              >
                {cat === 'All' ? '🍛 All Dining' : cat}
              </button>
            ))}
          </section>

          {/* Bhojnalaya Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border border-orange-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-ayodhya-maroon/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow">
                      <Sparkles size={12} className="text-amber-300" />
                      {item.type}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-amber-600 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <Star size={13} className="fill-amber-500 text-amber-500" />
                      {item.rating}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1 text-amber-300 font-semibold">
                        💰 {item.price}
                      </span>
                      <span className="flex items-center gap-1 text-gray-200 text-[11px]">
                        <Clock size={11} />
                        {item.hours.split('-')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-2 hover:text-ayodhya-saffron transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="text-xs text-gray-500 mb-4 flex items-start gap-1">
                      <MapPin size={13} className="text-ayodhya-saffron mt-0.5 flex-shrink-0" />
                      <span>{item.address}</span>
                    </div>

                    {/* Features badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.features.map((feat, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-900 border border-amber-200/50 px-2 py-0.5 rounded text-[11px] font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div className="mt-auto pt-4 border-t border-orange-50">
                      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Must-Try Delicacies:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.specialties.map((spec, idx) => (
                          <span key={idx} className="bg-orange-50 text-orange-950 border border-orange-200 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                            <CheckCircle2 size={11} className="text-ayodhya-saffron" />
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

          {/* Cultural Insights & Dining Etiquette */}
          <section className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4 flex items-center gap-2">
                🍛 What is an Authentic Sattvic Thali?
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                A traditional Ayodhya thali is balanced according to Ayurvedic principles, prioritizing easy digestion and mental peace:
              </p>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">1.</span>
                  <span><strong>Desi Ghee Phulkas & Puri:</strong> Hand-rolled wheat breads served steaming hot straight from the tawa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">2.</span>
                  <span><strong>Langar Dal & Kadhi:</strong> Slow-cooked lentil and yogurt curries tempered with hing, cumin, and curry leaves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">3.</span>
                  <span><strong>Seasonal Subzis:</strong> Aloo Gobhi, Pumpkin bhaji, Paneer Awadhi, and spicy Baati Chokha.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">4.</span>
                  <span><strong>Mithai / Kheer:</strong> Traditional milk pudding flavored with green cardamom, saffron, and nuts.</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-4 flex items-center gap-2">
                🙏 Holy Dining Traditions (Pangat Etiquette)
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span><strong>Annam Parabrahma:</strong> In Hindu tradition, grain and food are reverently honored as the supreme divine.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span><strong>Zero Food Wastage:</strong> Always take only what you can finish with gratitude.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span><strong>Pangat Seva:</strong> In ashram rasois, all devotees sit together in equal rows without any distinction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ayodhya-saffron font-bold">•</span>
                  <span><strong>Wash Hands & Feet:</strong> Dedicated washing stations are provided before entering holy dining halls.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default BhojnalayaPage;
