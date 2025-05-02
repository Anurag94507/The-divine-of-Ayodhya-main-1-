import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { MapPin, Clock } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';

const HanumanGarhiPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <PageLayout>
      <div className="page-transition pb-8 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Hanuman Garhi" 
          subtitle="The Sacred Abode of Lord Hanuman" 
          backgroundImage="https://static.langimg.com/photo/imgsize-739162,msid-107046133/navbharat-times.jpg"
        />
        
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto mb-10 text-center section-animate">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">The Divine Temple of Lord Hanuman</h2>
            <p className="text-lg mb-4">
              Hanuman Garhi is a 10th-century temple dedicated to Lord Hanuman, situated on a hill in Ayodhya, just 76 steps high. 
              It is one of the most important temples in Ayodhya and a must-visit for devotees coming to the city.
            </p>
            <p className="text-lg">
              According to tradition, Hanuman lived here in a cave and guarded the Janmabhoomi, or the birthplace of Lord Ram. The temple was built by Navab Mansigh.
            </p>
          </section>
          
          {/* Temple Architecture */}
          <section className="mb-10">
            <div className="grid md:grid-cols-2 gap-8 items-center section-animate">
              <div>
                <h2 className="text-2xl font-bold text-ayodhya-maroon mb-3">Temple Design & Architecture</h2>
                <p className="mb-3">
                  The Hanuman Garhi temple has a unique architectural design with 76 steps leading to the main temple area.
                  The temple houses a 6-inch-tall idol of Lord Hanuman, which is lavishly adorned with garlands and jewels.
                </p>
                <p className="mb-3">
                  The idol depicts Hanuman with his mother Anjani seated on his lap, which is a rare form of Hanuman not seen in many temples.
                </p>
                <p>
                  The temple complex is surrounded by 76 steps and has a pyramidal structure. The view from the top of the temple offers a panoramic view of the entire city.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://resize.indiatv.in/resize/newbucket/1080_1920/2024/01/copy-of-untitled-6-1704251550.jpg" 
                  alt="Hanuman Garhi Temple" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
          
          {/* Temple Significance */}
          <section className="mb-10 bg-ayodhya-cream p-6 rounded-lg section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Spiritual Significance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Protector of Ayodhya</h3>
                <p>
                  Hanuman Garhi is believed to be the place where Lord Hanuman stayed to protect Ayodhya and the birthplace of Lord Ram.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Blessings</h3>
                <p>
                  It is believed that a visit to Ram Janmabhoomi is incomplete without first paying respects at Hanuman Garhi, as Lord Hanuman is the gatekeeper of Ayodhya.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Unique Form</h3>
                <p>
                  The temple houses a rare form of Lord Hanuman with his mother Anjani, symbolizing the profound mother-son relationship.
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
                  <li><strong>Morning:</strong> 5:00 AM - 12:00 PM</li>
                  <li><strong>Evening:</strong> 4:00 PM - 10:00 PM</li>
                  <li><strong>Aarti Timings:</strong> 6:00 AM (Morning Aarti) and 7:30 PM (Evening Aarti)</li>
                  <li><strong>Weekly Closure:</strong> None (Open all days)</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <MapPin className="text-ayodhya-saffron mr-2" />
                  <h3 className="text-xl font-bold text-ayodhya-maroon">How to Reach</h3>
                </div>
                <ul className="space-y-1">
                  <li><strong>Location:</strong> Located in the heart of Ayodhya, around 1 km from Ram Janmabhoomi</li>
                  <li><strong>By Auto/E-rickshaw:</strong> Easily accessible from any part of Ayodhya</li>
                  <li><strong>Walking Distance:</strong> 20 minutes from Ram Janmabhoomi complex</li>
                  <li><strong>Landmarks:</strong> Ask for directions to "Hanuman Garhi"</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default HanumanGarhiPage;
