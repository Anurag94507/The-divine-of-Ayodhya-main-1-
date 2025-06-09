import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { Hotel, Link as LinkIcon } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';

const HotelsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();
  
    return (
      <PageLayout>
        <div className="page-transition pb-8 pt-16">
          <FlowerPetals />
          
          <PageBanner 
            title="Hotels & Accommodation" 
            subtitle="Stay Comfortably in the Divine City" 
            backgroundImage="https://phinneydesign.com/wp-content/uploads/2024/05/WEBqueensbury_hotel139_thumb.jpg"
          />
          
          <div className="container mx-auto px-4">
            {/* Introduction Section */}
            <section className="max-w-4xl mx-auto mb-16 text-center section-animate">
              <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Stay Options in the Holy City</h2>
              <p className="text-lg mb-6">
                Ayodhya offers a range of hotel accommodations to suit various budgets and preferences. From luxury hotels to budget-friendly options,
                visitors can find comfortable stays to enhance their pilgrimage experience.
              </p>
            </section>
  
            {/* Hotels Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 section-animate">Top Hotel Picks</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Hotel 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f6/e4/51/facade.jpg?w=1200&h=-1&s=1" 
                    alt="The Cygnett" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-ayodhya-maroon mb-2">The Cygnett</h3>
                    <p className="text-gray-700">Cygnett Collection KK Hotel, where convenience and comfort unite. Perfectly situated, we're a mere 6 kilometers from the Railway Station and just 2 kilometer from the Airport,</p>
                    <a href="https://www.cygnetthotels.com/cygnett-collection-kk-hotel/unit-overview" target="_blank" rel="noopener noreferrer" className="text-ayodhya-saffron mt-3 block">Book Now →</a>
                  </div>
                </div>
  
                {/* Hotel 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/67/26/af/caption.jpg?w=1200&h=-1&s=1" 
                    alt="Ramayana" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-ayodhya-maroon mb-2">Ramayana</h3>
                    <p className="text-gray-700">Discover comfort and tranquility at The Ramayana Hotel in Ayodhya.</p>
                    <a href="https://www.theramayana.in/" target="_blank" rel="noopener noreferrer" className="text-ayodhya-saffron mt-3 block">Book Now →</a>
                  </div>
                </div>
                  
                {/* Hotel 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://r1imghtlak.mmtcdn.com/787071601eaa11eeaa450a58a9feac02.jpg" 
                    alt="Shane Awadh" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-ayodhya-maroon mb-2">Shane Awadh</h3>
                    <p className="text-gray-700">Shane Awadh was founded in the year. The Hotel is located at the Civil Lines Near Bus Stand, Faizabad District of Uttar Pradesh and currently operating as one of the best Hotel in the city.</p>
                    <a href="https://www.shaneavadh.in/" target="_blank" rel="noopener noreferrer" className="text-ayodhya-saffron mt-3 block">Book Now →</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </PageLayout>
    );
  };
  
  export default HotelsPage;
