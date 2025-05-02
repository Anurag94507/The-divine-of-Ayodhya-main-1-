import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';
import { MapPin, Clock } from 'lucide-react';

const SaryuGhatPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <PageLayout>
      <div className="page-transition pb-8 pt-16">
        <PageBanner 
          title="Saryu Ghat" 
          subtitle="The Sacred River Bank of Ayodhya" 
          backgroundImage="https://images.nativeplanet.com/hi/img/2024/01/feature-1704454134.jpg"
        />
        
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto mb-10 text-center section-animate">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">The Sacred Banks of Saryu</h2>
            <p className="text-lg mb-4">
              The Saryu River (also known as Sarayu) holds immense religious significance in Hindu tradition. This holy river flows 
              through Ayodhya, and its ghats (riverbank steps) are considered sacred pilgrimage spots where devotees gather for 
              prayers, rituals, and to witness the mesmerizing aarti ceremonies.
            </p>
            <p className="text-lg">
              According to Hindu scriptures, the Saryu is mentioned in the Ramayana as the river where Lord Ram took his final journey. 
              The river's connection to Lord Ram makes it especially revered among devotees.
            </p>
          </section>
          
          {/* Ghat Significance */}
          <section className="mb-10">
            <div className="grid md:grid-cols-2 gap-8 items-center section-animate">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/753b44e8435f5875b4936a368faf9a4a_1000x1000.jpg" 
                  alt="Saryu Ghat Rituals" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ayodhya-maroon mb-3">Spiritual Significance</h2>
                <p className="mb-3">
                  For Hindus, taking a dip in the Saryu River is believed to cleanse one of sins and bring spiritual purification. 
                  The ghats are lined with numerous temples and ashrams, creating a deeply spiritual atmosphere.
                </p>
                <p className="mb-3">
                  During religious festivals, especially Kartik Purnima and Dev Deepawali, thousands of devotees gather at the ghats 
                  to float diyas (oil lamps) in the river, creating a magical spectacle of floating lights.
                </p>
                <p>
                  The evening aarti (prayer ceremony) at Saryu Ghat is a must-see ritual where priests perform elaborate ceremonies 
                  with lamps, flowers, and incense to honor the sacred river and Lord Ram.
                </p>
              </div>
            </div>
          </section>
          
          {/* Main Ghats */}
          <section className="mb-10 bg-ayodhya-cream p-6 rounded-lg section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Prominent Ghats Along the Saryu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Ram Ki Paidi</h3>
                <p>
                  The most famous ghat with a series of steps leading to the river, recently renovated with 
                  beautiful architecture and lighting. This is where the grand evening aarti takes place.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Guptar Ghat</h3>
                <p>
                  Located where Lord Ram is believed to have taken jal samadhi (water burial). A temple 
                  marks this sacred spot where devotees offer prayers to ancestors.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Janki Ghat</h3>
                <p>
                  Named after Goddess Sita (also called Janki), this peaceful ghat is popular for morning 
                  rituals and meditation due to its serene environment.
                </p>
              </div>
            </div>
          </section>
          
          {/* Activities */}
          <section className="max-w-4xl mx-auto mb-10 section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Activities at Saryu Ghat</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Religious Activities</h3>
                <ul className="space-y-1">
                  <li><strong>Holy Dip:</strong> Taking a ritual bath in the sacred waters</li>
                  <li><strong>Evening Aarti:</strong> Witnessing the spectacular lamp ceremony at dusk</li>
                  <li><strong>Pind Daan:</strong> Performing ancestral rituals for departed souls</li>
                  <li><strong>Floating Diyas:</strong> Setting small oil lamps afloat on the river</li>
                  <li><strong>Morning Prayers:</strong> Offering water to the rising sun (Surya Arghya)</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Cultural Experiences</h3>
                <ul className="space-y-1">
                  <li><strong>Boat Rides:</strong> Peaceful rides along the river, especially at sunrise and sunset</li>
                  <li><strong>Photography:</strong> Capturing the colorful scenes and spiritual atmosphere</li>
                  <li><strong>Meditation:</strong> Many visitors find the riverbanks ideal for quiet contemplation</li>
                  <li><strong>Cultural Performances:</strong> Folk music and dance during festivals</li>
                  <li><strong>Local Cuisine:</strong> Sampling traditional food at nearby stalls</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Best Time to Visit */}
          <section className="max-w-4xl mx-auto mb-6 section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Best Time to Visit</h2>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <p className="mb-3">
                While Saryu Ghat can be visited throughout the year, certain times offer particularly special experiences:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-ayodhya-saffron mr-2">●</span>
                  <span><strong>October-November (Kartik Month):</strong> The ghats are beautifully decorated during Dev Deepawali when thousands of diyas illuminate the riverbanks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ayodhya-saffron mr-2">●</span>
                  <span><strong>Ram Navami (March-April):</strong> Special celebrations mark Lord Ram's birthday with grand ceremonies at the ghats.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ayodhya-saffron mr-2">●</span>
                  <span><strong>Dawn and Dusk:</strong> Daily, these times offer the most peaceful and photogenic experiences, with the evening aarti being a highlight.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ayodhya-saffron mr-2">●</span>
                  <span><strong>Winter Months (November-February):</strong> Pleasant weather makes exploring the ghats more comfortable.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-5 text-center">
              <p className="text-lg italic text-ayodhya-maroon">
                "The Saryu's gentle flow carries with it centuries of devotion, myths, and the eternal presence of Lord Ram in his beloved Ayodhya."
              </p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default SaryuGhatPage;
