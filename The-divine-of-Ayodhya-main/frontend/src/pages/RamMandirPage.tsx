import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import {cn} from "../lib/utils";
import FlowerPetals from '../components/FlowerPetals';
import { Clock, LinkIcon, MapPin } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const RamMandirPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-8 pt-16">
      <FlowerPetals />
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1200px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg"
                alt="Ram Mandir"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <h1 className="text-white font-bold text-4xl md:text-6xl mb-2 text-center drop-shadow-md">
                    Ram Mandir
                </h1>
                <p className="text-white text-center text-xl md:text-2xl drop-shadow-md">The Sacred Temple of Lord Ram in Ayodhya</p>
            </div>

        </div>
      
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-10 text-center section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">The Divine Abode of Lord Ram</h2>
          <p className="text-lg mb-4">
            The Ram Mandir in Ayodhya stands as a magnificent testament to faith and devotion at the birthplace of Lord Ram. 
            This sacred temple, built after centuries of anticipation, now welcomes millions of devotees from around the world.
          </p>
          <p className="text-lg">
            With its grand architecture inspired by Nagara style, the temple rises 161 feet high with 5 mandaps and 160 pillars,
            creating a divine atmosphere for devotees to experience spiritual connection with Lord Ram.
          </p>
        </section>

        {/* Official VIP Pass Link */}
        <section className="max-w-4xl mx-auto mb-10 p-6 bg-ayodhya-cream rounded-lg shadow-lg section-animate">
          <div className="flex items-center justify-center gap-3 mb-3">
            <LinkIcon className="text-ayodhya-saffron" size={28} />
            <h2 className="text-2xl font-bold text-ayodhya-maroon">Official Temple Website & VIP Pass</h2>
          </div>
          <p className="text-center mb-4">
            For official information and to book VIP passes for Ram Mandir darshan, please visit the official Sri Ram Janmabhoomi temple website.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://srjbtkshetra.org/" 
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary flex items-center gap-2 text-lg px-6 py-3 rounded-md"
            >
              <LinkIcon size={18} />
              Visit Official Website
            </a>
          </div>
        </section>
        
        {/* Official Darshan & Aarti Timings */}
        <section className="max-w-4xl mx-auto mb-10 section-animate">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="text-ayodhya-saffron" size={28} />
            <h2 className="text-2xl font-bold text-ayodhya-maroon">Official Darshan & Aarti Timings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Temple Free Darshan Timings</h3>
              <ul className="space-y-1">
                <li className="p-2 border-b border-gray-100">07:00 AM to 09:00 AM</li>
                <li className="p-2 border-b border-gray-100">09:00 AM to 11:00 AM</li>
                <li className="p-2 border-b border-gray-100">11:00 AM to 12:00 PM</li>
                <li className="p-2 border-b border-gray-100">01:00 PM to 03:00 PM</li>
                <li className="p-2 border-b border-gray-100">03:00 PM to 05:00 PM</li>
                <li className="p-2 border-b border-gray-100">05:00 PM to 07:00 PM</li>
                <li className="p-2">07:00 PM to 09:00 PM</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Free Aarti Darshan Timings</h3>
              <ul className="space-y-1">
                <li className="p-2 border-b border-gray-100"><strong>Mangal Aarti:</strong> 04:00 AM</li>
                <li className="p-2 border-b border-gray-100"><strong>Shringar Aarti:</strong> 06:00 AM</li>
                <li className="p-2 border-b border-gray-100"><strong>Shayan Aarti:</strong> 10:00 PM</li>
              </ul>
              <div className="mt-4 p-3 bg-ayodhya-cream rounded-md">
                <p className="text-sm font-medium text-ayodhya-maroon">
                  <strong>Important Notification:</strong> The above timings will be reflected from 20th March, 2025 in the Booking receipt.
                </p>
                <p className="text-sm mt-2 font-medium text-ayodhya-maroon">
                  <strong>IMPORTANT REMINDER:</strong> Please carefully follow the instructions provided on the pass to ensure a smooth experience and avoid any
                  inconvenience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Temple Architecture */}
        <section className="mb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center section-animate">
            <div>
              <h2 className="text-2xl font-bold text-ayodhya-maroon mb-3">Temple Architecture</h2>
              <p className="mb-3">
                Ram Mandir follows the traditional Nagara style of temple architecture, which is characterized by its 
                distinctive towers and intricate stone carvings.
              </p>
              <p className="mb-3">
                The temple stands 161 feet tall with 5 mandaps (pavilions) and 160 pillars. The main structure is made 
                without the use of iron, adhering to ancient architectural practices.
              </p>
              <p>
                The temple complex spans over 70 acres, featuring multiple courtyards, pavilions, and sacred spaces 
                dedicated to various deities associated with Lord Ram.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://english.cdn.zeenews.com/sites/default/files/2022/09/11/1089010-05082022-ayodhyarammandir822954703.jpg" 
                alt="Ram Mandir Architecture" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Visit Planning */}
        <section className="max-w-4xl mx-auto mb-10 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Plan Your Visit</h2>
          
          <div className="grid md:grid-cols-3 gap-5">
            <Link to="/dharmshala" className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Accommodations</h3>
              <p className="mb-3">Find the perfect place to stay during your spiritual journey, from traditional dharmshala to modern hotels.</p>
              <span className="text-ayodhya-saffron font-medium">Explore options →</span>
            </Link>
            
            <Link to="/bhojnalaya" className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Dining</h3>
              <p className="mb-3">Experience authentic sattvic cuisine at various bhojnalayas and restaurants in the holy city.</p>
              <span className="text-ayodhya-saffron font-medium">View options →</span>
            </Link>
            
            <Link to="/travel" className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Transportation</h3>
              <p className="mb-3">Learn about the best ways to reach Ayodhya and navigate around the city during your pilgrimage.</p>
              <span className="text-ayodhya-saffron font-medium">Plan travel →</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RamMandirPage;
