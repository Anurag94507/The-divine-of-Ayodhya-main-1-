import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';
import { MapPin, Clock } from 'lucide-react'; // Import Clock component

const RajaDasharathMahalPage = () => {
  useEffect(() => {
   window.scrollTo(0, 0);
 }, []);

  useAnimateOnScroll();

  return (
    <PageLayout>
      <div className="page-transition pb-8 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Raja Dasharath Mahal" 
          subtitle="The Royal Palace of Lord Ram's Father" 
          backgroundImage="https://cdn1.prayagsamagam.com/media/2023/05/08153547/rtboqaz.webp"
        />
        
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto mb-10 text-center section-animate">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">The Royal Residence</h2>
            <p className="text-lg mb-4">
              Raja Dasharath Mahal is the palace where King Dasharath, the father of Lord Ram, once resided with his three queens - Kaushalya, Kaikeyi, and Sumitra.
              This historical palace stands as a testimony to the royal heritage of the Ikshvaku dynasty.
            </p>
            <p className="text-lg">
              The palace complex has been restored and preserved to give visitors a glimpse into the royal lifestyle of ancient Ayodhya.
            </p>
          </section>
          
          {/* Palace Architecture */}
          <section className="mb-10">
            <div className="grid md:grid-cols-2 gap-8 items-center section-animate">
              <div>
                <h2 className="text-2xl font-bold text-ayodhya-maroon mb-3">Palace Design & Architecture</h2>
                <p className="mb-3">
                  Raja Dasharath Mahal showcases the traditional architectural style of ancient Indian palaces, with spacious courtyards,
                  intricate pillars, and well-planned royal chambers.
                </p>
                <p className="mb-3">
                  The palace complex includes separate quarters for each of the three queens, the royal court (Durbar Hall) where King Dasharath held his court,
                  and several temples dedicated to various deities.
                </p>
                <p>
                  The palace walls are adorned with murals and artwork depicting scenes from the Ramayana, providing a visual narrative of the epic tale.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://content3.jdmagicbox.com/comp/ayodhya/y5/9999p5278.5278.170604152502.m6y5/catalogue/dashrath-mahal-ayodhya-tourist-attraction-4jm0qr3.jpg" 
                  alt="Raja Dasharath Mahal" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
          
          {/* Key Attractions */}
          <section className="mb-10 bg-ayodhya-cream p-6 rounded-lg section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Key Attractions Inside the Palace</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Royal Courtyard</h3>
                <p>
                  Spacious courtyard where King Dasharath held his daily court and addressed the concerns of his subjects.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Queen's Quarters</h3>
                <p>
                  Separate quarters for Queen Kaushalya, Queen Kaikeyi, and Queen Sumitra, showcasing their individual spaces and lifestyles.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Museum</h3>
                <p>
                  A museum inside the palace complex that showcases ancient artifacts, costumes, and royal belongings.
                </p>
              </div>
            </div>
          </section>
          
          {/* Visiting Information */}
          <section className="max-w-4xl mx-auto mb-10 section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Visitor Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
               <div className="flex items-center mb-2">
                 <Clock className="text-ayodhya-saffron mr-2" />
                 <h3 className="text-xl font-bold text-ayodhya-maroon">Darshan Timings</h3>
               </div>
               <ul className="space-y-1">
                 <li><strong>Morning:</strong> 9:00 AM - 12:00 PM</li>
                 <li><strong>Evening:</strong> 4:00 PM - 9:00 PM</li>
                 <li><strong>Weekly Closure:</strong> None (Open all days)</li>
               </ul>
             </div>
             
             <div className="bg-white p-5 rounded-lg shadow-md">
               <div className="flex items-center mb-2">
                 <MapPin className="text-ayodhya-saffron mr-2" />
                 <h3 className="text-xl font-bold text-ayodhya-maroon">How to Reach</h3>
               </div>
               <ul className="space-y-1">
                 <li><strong>Location:</strong> Located in the heart of Ayodhya, near Ram Janmabhoomi</li>
                 <li><strong>By Auto/E-rickshaw:</strong> Easily accessible from any part of Ayodhya</li>
                 <li><strong>Walking Distance:</strong> 10 minutes from Ram Janmabhoomi complex</li>
                 <li><strong>Landmarks:</strong> Ask for directions to "Dasharath Mahal" or "Bada Asthan"</li>
               </ul>
             </div>
           </div>
         </section>
       </div>
     </div>
   </PageLayout>
  );
};

export default RajaDasharathMahalPage;
