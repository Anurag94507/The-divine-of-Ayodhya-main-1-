
import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const RestaurantsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const restaurantList = [
    {
      id: 1,
      name: 'Tulsi Restaurant',
      description: 'Modern vegetarian restaurant offering a diverse menu of North and South Indian dishes with contemporary presentation.',
      address: 'Civil Lines, Ayodhya',
      image: '/images/restaurant-1.jpg',
      cuisine: 'North & South Indian',
      priceRange: 'Moderate',
      hours: '8:00 AM - 10:30 PM',
      specialties: ['Paneer dishes', 'Dosa varieties', 'Thali', 'Desserts']
    },
    {
      id: 2,
      name: 'Sarayu Terrace',
      description: 'Rooftop restaurant with stunning views of the Sarayu River, serving a mix of traditional and fusion vegetarian cuisine.',
      address: 'Near Sarayu Ghat, Ayodhya',
      image: '/images/restaurant-2.jpg',
      cuisine: 'Fusion Vegetarian',
      priceRange: 'Premium',
      hours: '11:00 AM - 11:00 PM',
      specialties: ['River view dining', 'Wood-fired pizzas', 'Fusion chaats', 'Designer beverages']
    },
    {
      id: 3,
      name: 'Ayodhya Heritage Kitchen',
      description: 'Restaurant specializing in preserving and serving ancient Awadhi recipes that have been part of the region for centuries.',
      address: 'Heritage Lane, Ayodhya',
      image: '/images/restaurant-3.jpg',
      cuisine: 'Traditional Awadhi',
      priceRange: 'Moderate',
      hours: '10:00 AM - 9:30 PM',
      specialties: ['Awadhi Thali', 'Thandai', 'Traditional sweets', 'Seasonal specials']
    },
    {
      id: 4,
      name: 'Yatra Café',
      description: 'Contemporary café offering light meals, sandwiches, and beverages in a relaxed atmosphere with Wi-Fi access.',
      address: 'Shopping Complex, Ayodhya',
      image: '/images/restaurant-4.jpg',
      cuisine: 'Café & Light Meals',
      priceRange: 'Budget-friendly',
      hours: '7:30 AM - 10:00 PM',
      specialties: ['Coffee varieties', 'Sandwiches', 'Pasta', 'Baked goods']
    },
    {
      id: 5,
      name: "Raghav's Fine Dining",
      description: 'Upscale restaurant serving premium vegetarian cuisine with elegant ambiance and professional service.',
      address: 'Ram Path, Ayodhya',
      image: '/images/restaurant-5.jpg',
      cuisine: 'Multi-cuisine Vegetarian',
      priceRange: 'Premium',
      hours: '12:00 PM - 11:00 PM',
      specialties: ['Gourmet thalis', 'International cuisine', 'Mocktail bar', 'Private dining']
    },
    {
      id: 6,
      name: 'Saffron Spice',
      description: 'Restaurant focusing on the rich diversity of Indian regional cuisines, offering dishes from various states.',
      address: 'Main Road, Ayodhya',
      image: '/images/restaurant-6.jpg',
      cuisine: 'Regional Indian',
      priceRange: 'Moderate',
      hours: '11:00 AM - 10:00 PM',
      specialties: ['Bengali sweets', 'Rajasthani thali', 'Gujarati thali', 'Kerala dishes']
    }
  ];

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Restaurants" 
        subtitle="Modern Dining Options in Ayodhya" 
        backgroundImage="/images/restaurant-banner.jpg"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Contemporary Dining Experiences</h2>
          <p className="text-lg">
            While Ayodhya is known for its traditional bhojnalayas, the city also offers a variety of modern restaurants catering to diverse tastes and preferences. 
            From casual cafés to fine dining establishments, these restaurants combine traditional flavors with contemporary presentation and ambiance.
          </p>
        </section>
        
        {/* Restaurant Listings */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Top Restaurants in Ayodhya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantList.map((restaurant) => (
              <div key={restaurant.id} className="card-custom h-full flex flex-col">
                <div className="image-container h-48">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">{restaurant.name}</h3>
                  <p className="text-gray-700 mb-3">{restaurant.description}</p>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                    <p className="text-gray-600"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                    <p className="text-gray-600"><strong>Price:</strong> {restaurant.priceRange}</p>
                    <p className="text-gray-600 col-span-2"><strong>Hours:</strong> {restaurant.hours}</p>
                    <p className="text-gray-600 col-span-2"><strong>Address:</strong> {restaurant.address}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((item, index) => (
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
        
        {/* Restaurant vs Bhojnalaya */}
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Restaurants vs. Bhojnalayas</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-ayodhya-maroon text-white">
                  <th className="py-3 px-4 text-left">Aspect</th>
                  <th className="py-3 px-4 text-left">Restaurants</th>
                  <th className="py-3 px-4 text-left">Bhojnalayas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Ambiance</td>
                  <td className="py-3 px-4">Modern, diverse themes, comfortable seating</td>
                  <td className="py-3 px-4">Traditional, simple, often communal seating</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 font-medium">Menu</td>
                  <td className="py-3 px-4">Extensive, diverse cuisines, fusion options</td>
                  <td className="py-3 px-4">Limited, traditional dishes, thali-centric</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Price</td>
                  <td className="py-3 px-4">Moderate to premium</td>
                  <td className="py-3 px-4">Affordable, sometimes donation-based</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-4 font-medium">Service Style</td>
                  <td className="py-3 px-4">Table service, modern amenities</td>
                  <td className="py-3 px-4">Self-service or basic service</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Experience</td>
                  <td className="py-3 px-4">Leisure dining, social atmosphere</td>
                  <td className="py-3 px-4">Spiritual, prasad-oriented, functional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Dining Tips */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Dining Tips for Visitors</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">General Tips</h3>
              <ul className="space-y-2">
                <li><strong>Reservations:</strong> Recommended for premium restaurants, especially during weekends and festival seasons.</li>
                <li><strong>Payment:</strong> Most restaurants accept cards, but carry cash as a backup.</li>
                <li><strong>Dress Code:</strong> Smart casual is appropriate for most restaurants.</li>
                <li><strong>Local Cuisine:</strong> Try regional specialties for an authentic experience.</li>
                <li><strong>Peak Hours:</strong> Lunch (1-3 PM) and dinner (7-9 PM) can be crowded. Plan accordingly.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">What to Try</h3>
              <ul className="space-y-2">
                <li><strong>Awadhi Cuisine:</strong> Rich, flavorful dishes with roots in Mughal cooking techniques.</li>
                <li><strong>Local Sweets:</strong> Pedas, laddoos, and regional specialties like malaiyo.</li>
                <li><strong>Thandai:</strong> A refreshing spiced milk beverage popular in the region.</li>
                <li><strong>Seasonal Specials:</strong> Many restaurants offer dishes based on seasonal produce.</li>
                <li><strong>Chaat:</strong> Street food favorites reimagined in restaurant settings.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Food Festivals */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Seasonal Food Festivals</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              Throughout the year, many restaurants in Ayodhya host special food festivals celebrating different aspects of Indian cuisine. These events offer unique dining experiences and the opportunity to taste specially curated menus.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-ayodhya-cream p-4 rounded-md">
                <h3 className="font-bold text-ayodhya-maroon mb-2">Ram Navami Food Festival</h3>
                <p>Celebrating Lord Ram's birthday with special thalis and traditional sweets (March-April).</p>
              </div>
              
              <div className="border border-ayodhya-cream p-4 rounded-md">
                <h3 className="font-bold text-ayodhya-maroon mb-2">Monsoon Food Festival</h3>
                <p>Featuring seasonal specialties and hot snacks perfect for rainy weather (July-August).</p>
              </div>
              
              <div className="border border-ayodhya-cream p-4 rounded-md">
                <h3 className="font-bold text-ayodhya-maroon mb-2">Diwali Feast</h3>
                <p>Special menus featuring festive foods and sweets during the Festival of Lights (October-November).</p>
              </div>
              
              <div className="border border-ayodhya-cream p-4 rounded-md">
                <h3 className="font-bold text-ayodhya-maroon mb-2">Winter Food Festival</h3>
                <p>Celebrating seasonal winter delicacies and warming foods (December-January).</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RestaurantsPage;
