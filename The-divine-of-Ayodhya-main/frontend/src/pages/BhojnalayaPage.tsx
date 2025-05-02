
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const BhojnalayaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bhojnalayaList = [
    {
      id: 1,
      name: 'Aman Chandra Bhojnalaya',
      description: 'Famous for authentic Awadhi cuisine served in traditional style. Known for their thalis and prasad offerings.',
      address: 'Shringarhat, Opposite Petrol Pump, Ayodhya',
      image: '/images/bhojnalaya-1.jpg',
      specialties: ['Sattvic Thali', 'Kheer', 'Puri Sabzi', 'Chaat']
    },
    {
      id: 2,
      name: 'Ram Rasoi Bhojnalaya',
      description: 'A devotee-favorite serving pure vegetarian meals prepared with ghee and traditional spices.',
      address: 'Near Ram Ki Paidi, Ayodhya',
      image: '/images/bhojnalaya-2.jpg',
      specialties: ['Kachori', 'Jalebi', 'Laddoo', 'Paneer dishes']
    },
    {
      id: 3,
      name: 'Sarayu Bhog Bhojnalaya',
      description: 'Located near the Sarayu river, offering riverfront dining with a variety of North Indian dishes.',
      address: 'Sarayu Ghat Road, Ayodhya',
      image: '/images/bhojnalaya-3.jpg',
      specialties: ['Baati Chokha', 'Dahi Vada', 'Malpua', 'Lassi']
    },
    {
      id: 4,
      name: 'Sita Rasoi Bhojnalaya',
      description: 'Named after Goddess Sita, this bhojnalaya specializes in traditional recipes said to be favored by Lord Ram.',
      address: 'Temple Road, Ayodhya',
      image: '/images/bhojnalaya-4.jpg',
      specialties: ['Satvik Thali', 'Makhan Mishri', 'Poha', 'Sweet Daliya']
    },
    {
      id: 5,
      name: 'Ayodhya Prasad Bhojnalaya',
      description: 'Known for serving prasad-style food that is simple, nutritious, and prepared with devotion.',
      address: 'Near Hanuman Garhi, Ayodhya',
      image: '/images/bhojnalaya-5.jpg',
      specialties: ['Panjiri', 'Chana Bhatura', 'Khichdi', 'Halwa']
    },
    {
      id: 6,
      name: 'Raghav Bhojnalaya',
      description: 'A popular spot serving affordable meals with unlimited refills, perfect for pilgrims on a budget.',
      address: 'Main Market Area, Ayodhya',
      image: '/images/bhojnalaya-6.jpg',
      specialties: ['Unlimited Thali', 'Kadhi Chawal', 'Samosa', 'Rabri']
    }
  ];

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Bhojnalaya" 
        subtitle="Traditional Sattvic Dining" 
        backgroundImage="/images/bhojnalaya-banner.jpg"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Experience Sacred Cuisine</h2>
          <p className="text-lg">
            Bhojnalayas in Ayodhya offer pilgrims and visitors the opportunity to experience traditional sattvic cuisine prepared with pure ingredients and devotion. 
            These dining establishments emphasize simplicity, cleanliness, and the spiritual aspect of food as prasad (sacred offering).
          </p>
        </section>
        
        {/* What is a Bhojnalaya */}
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">What is a Bhojnalaya?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                A Bhojnalaya is a traditional Indian dining establishment that serves simple, sattvic (pure vegetarian) food. In pilgrimage sites like Ayodhya, bhojnalayas serve food that is prepared according to ancient culinary traditions, often with a focus on offering prasad-style meals.
              </p>
              <p>
                Many bhojnalayas in Ayodhya operate on a charitable or subsidized basis, making nutritious meals accessible to all pilgrims regardless of their economic status. The food is typically served on traditional leaf plates or steel thalis, and diners sit on the floor in a pangat (row) system.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/bhojnalaya-concept.jpg" 
                alt="Traditional Bhojnalaya Setting" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Bhojnalaya Listings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Popular Bhojnalayas in Ayodhya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bhojnalayaList.map((bhojnalaya) => (
              <div key={bhojnalaya.id} className="card-custom h-full flex flex-col">
                <div className="image-container h-48">
                  <img 
                    src={bhojnalaya.image} 
                    alt={bhojnalaya.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">{bhojnalaya.name}</h3>
                  <p className="text-gray-700 mb-3">{bhojnalaya.description}</p>
                  <p className="text-gray-600 mb-4"><strong>Address:</strong> {bhojnalaya.address}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {bhojnalaya.specialties.map((item, index) => (
                        <li key={index} className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Traditional Dishes */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Traditional Dishes to Try</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Main Courses</h3>
              <ul className="space-y-2">
                <li><strong>Sattvic Thali:</strong> A complete meal with roti, rice, dal, sabzi, raita, and sweet dish.</li>
                <li><strong>Puri Sabzi:</strong> Fluffy puris served with potato curry, a breakfast favorite.</li>
                <li><strong>Kadhi Chawal:</strong> Yogurt-based curry with pakoras served with rice.</li>
                <li><strong>Rajma Chawal:</strong> Kidney beans curry with rice, a wholesome meal.</li>
                <li><strong>Baati Chokha:</strong> Hard wheat rolls served with mashed vegetables, a regional specialty.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Sweets & Snacks</h3>
              <ul className="space-y-2">
                <li><strong>Panjiri:</strong> A nutritious sweet made with flour, nuts, and herbs, often given as prasad.</li>
                <li><strong>Malpua:</strong> Sweet pancakes soaked in sugar syrup, a regional dessert.</li>
                <li><strong>Laddoo:</strong> Sweet round balls made from gram flour, a temple favorite.</li>
                <li><strong>Jalebi:</strong> Deep-fried sweet soaked in sugar syrup, often paired with rabri.</li>
                <li><strong>Samosa & Kachori:</strong> Popular savory snacks filled with spiced potatoes or lentils.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Etiquette & Tips */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Dining Etiquette & Tips</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Respectful Attitude:</strong> Food in bhojnalayas is often considered prasad (sacred offering). Maintain a respectful attitude while dining.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Washing Hands:</strong> Always wash your hands before and after meals. Most bhojnalayas provide washing areas.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Sitting Arrangement:</strong> Be prepared to sit on the floor for meals. Some modern bhojnalayas may offer table seating.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Waste Mindfulness:</strong> Take only what you can eat. Wasting food is considered disrespectful.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Payment System:</strong> Some bhojnalayas operate on a donation basis while others have fixed prices. Inquire before dining.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Peak Hours:</strong> Bhojnalayas can get crowded during lunch hours (12-2 PM). Plan accordingly for a more peaceful experience.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BhojnalayaPage;
