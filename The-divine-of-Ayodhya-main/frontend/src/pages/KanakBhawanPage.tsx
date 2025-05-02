import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const KanakBhawanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Kanak Bhawan" 
        subtitle="The Golden Palace of Sita and Ram" 
        backgroundImage="https://www.trawell.in/admin/images/upload/599531656Kanak_Bhawan.jpg"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-16 text-center section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">The Divine Abode of Sita and Ram</h2>
          <p className="text-lg mb-6">
            Kanak Bhawan, also known as Sone Ka Ghar (House of Gold), is one of Ayodhya's most revered temples. According to tradition, 
            it was gifted to Goddess Sita by her mother-in-law Kaushalya upon her marriage to Lord Ram.
          </p>
          <p className="text-lg">
            The temple's architecture is remarkable with its three prominent domes and exquisite golden decorations, making it a significant 
            pilgrimage site for devotees from across the world.
          </p>
        </section>
        
        {/* Temple Architecture */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center section-animate">
            <div>
              <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4">Architectural Beauty</h2>
              <p className="mb-4">
                The current structure of Kanak Bhawan was built in the early 19th century by Rani Krishnabhasha Kunwari of Orchha. 
                The temple showcases a blend of Rajput and temple architecture styles.
              </p>
              <p className="mb-4">
                The temple houses the divine idols of Lord Ram and Sita adorned with gold ornaments, which gives the temple its name "Kanak" (gold).
                The main hall features beautifully carved pillars and walls with intricate designs.
              </p>
              <p>
                The three distinctive domes on top of the structure are visible from afar, making it an iconic landmark in Ayodhya's skyline.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/1c7b6ffe-16a9-4b55-be3d-80fabe1e6c79.png" 
                alt="Kanak Bhawan Temple" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Temple Significance */}
        <section className="mb-16 bg-ayodhya-cream p-8 rounded-lg section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Spiritual Significance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Divine Couple</h3>
              <p>
                Kanak Bhawan is unique as it represents the divine couple - Lord Ram and Sita - in their married form, symbolizing ideal marital harmony.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Festivals</h3>
              <p>
                During Ram Navami and Vivah Panchami, the temple is elaborately decorated, and special rituals are performed to celebrate Lord Ram's birth and his marriage to Sita.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Devotion</h3>
              <p>
                Devotees believe that praying at Kanak Bhawan blesses married couples with harmony and prosperity in their marital life.
              </p>
            </div>
          </div>
        </section>
        
        {/* Visiting Information */}
        <section className="max-w-4xl mx-auto mb-16 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Visitor Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Darshan Timings</h3>
              <ul className="space-y-2">
                <li><strong>Morning:</strong> 6:00 AM - 12:00 PM</li>
                <li><strong>Evening:</strong> 4:00 PM - 9:00 PM</li>
                <li><strong>Aarti Timings:</strong> 7:00 AM and 7:30 PM</li>
                <li><strong>Weekly Closure:</strong> None (Open all days)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">How to Reach</h3>
              <ul className="space-y-2">
                <li><strong>Location:</strong> Located in the heart of Ayodhya, near Ram Janmabhoomi</li>
                <li><strong>By Auto/E-rickshaw:</strong> Easily accessible from any part of Ayodhya</li>
                <li><strong>Walking Distance:</strong> 15 minutes from Ram Janmabhoomi complex</li>
                <li><strong>Landmarks:</strong> Ask for directions to "Kanak Bhawan" or "Sone ka Mandir"</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Rituals and Offerings */}
        <section className="max-w-4xl mx-auto section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Rituals and Offerings</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Devotees typically offer flowers, fruits, sweets, and clothing to the divine couple. The most popular offerings include:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Shringar Items:</strong> Items for adorning the deities, such as bangles, bindis, and small ornaments</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Red Cloth:</strong> Symbolizing marital bliss and prosperity</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Fresh Flowers:</strong> Especially marigold and rose garlands</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Sweets:</strong> Particularly laddoos and pedas as prasad</span>
              </li>
            </ul>
            <p>
              Many devotees also perform parikrama (circumambulation) of the temple as part of their devotional practice. Special archana and abhishekam 
              services can be arranged through the temple administration for a more personalized worship experience.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg italic text-ayodhya-maroon">
              "Kanak Bhawan stands as a timeless symbol of divine love between Lord Ram and Goddess Sita, drawing devotees into their eternal presence."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KanakBhawanPage;
