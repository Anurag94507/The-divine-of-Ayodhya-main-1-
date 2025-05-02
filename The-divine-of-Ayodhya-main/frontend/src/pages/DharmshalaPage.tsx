import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { Hotel, Link as LinkIcon } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const DharmshalaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Dharmshala in Ayodhya" 
        subtitle="Traditional pilgrim accommodation" 
        backgroundImage="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png"
      />
      
      <div className="container mx-auto px-4">
        <section className="max-w-4xl mx-auto mb-16 text-center section-animate">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">Traditional Pilgrim Accommodations</h2>
          <p className="text-lg mb-6">
            Dharmshala in Ayodhya provide affordable and comfortable accommodation options for pilgrims visiting the holy city.
            These traditional rest houses offer basic amenities in a spiritual environment, perfect for those seeking an authentic pilgrimage experience.
          </p>
        </section>

        <section className="max-w-4xl mx-auto mb-16 p-8 bg-ayodhya-cream rounded-lg shadow-lg section-animate">
          <div className="flex items-center justify-center gap-3 mb-4">
            <LinkIcon className="text-ayodhya-saffron" size={28} />
            <h2 className="text-2xl font-bold text-ayodhya-maroon">Official Temple Website</h2>
          </div>
          <p className="text-center mb-6">
            For official information about dharmshala accommodations and to book VIP passes for Ram Mandir darshan, please visit the official Sri Ram Janmabhoomi temple website.
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
        
        <section className="mb-16 section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center flex items-center justify-center gap-2">
            <Hotel className="text-ayodhya-saffron" />
            Popular Dharmshala
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={1} className="card-custom h-full flex flex-col section-animate">
              <div className="image-container h-48">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Shri Ram Dharmshala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Shri Ram Dharmshala</h3>
                <p className="text-gray-700 mb-3">A traditional dharamshala offering basic accommodations for pilgrims with clean rooms and essential facilities.</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> Near Ram Mandir, Ayodhya</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Facilities:</h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Free meals</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Dormitory</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Locker facility</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Prayer hall</li>
                  </ul>
                </div>
              </div>
            </div>
            <div key={2} className="card-custom h-full flex flex-col section-animate">
              <div className="image-container h-48">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Janaki Saran Dharmshala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Janaki Saran Dharmshala</h3>
                <p className="text-gray-700 mb-3">Family-friendly dharmshala with private rooms and attached bathrooms for a comfortable pilgrimage experience.</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> Saket Colony, Ayodhya</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Facilities:</h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Private rooms</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Attached bathrooms</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Dining hall</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Temple within premises</li>
                  </ul>
                </div>
              </div>
            </div>
            <div key={3} className="card-custom h-full flex flex-col section-animate">
              <div className="image-container h-48">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Bharat Kund Dharmshala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Bharat Kund Dharmshala</h3>
                <p className="text-gray-700 mb-3">Located near the historic Bharat Kund, offering peaceful accommodations for spiritual seekers.</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> Bharat Kund Road, Ayodhya</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Facilities:</h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Garden view</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Meditation area</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Free breakfast</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Reading room</li>
                  </ul>
                </div>
              </div>
            </div>
            <div key={4} className="card-custom h-full flex flex-col section-animate">
              <div className="image-container h-48">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Dashrath Mahal Dharmshala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Dashrath Mahal Dharmshala</h3>
                <p className="text-gray-700 mb-3">Named after King Dashrath, this dharmshala offers traditional hospitality with modern amenities.</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> Main Market Road, Ayodhya</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Facilities:</h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">AC rooms available</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Generator backup</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Ayurvedic treatment center</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Travel assistance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div key={5} className="card-custom h-full flex flex-col section-animate">
              <div className="image-container h-48">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Sarayu Kunj Dharmshala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Sarayu Kunj Dharmshala</h3>
                <p className="text-gray-700 mb-3">Riverside dharmshala offering scenic views of the Sarayu River and serene environment for pilgrims.</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> Sarayu Ghat, Ayodhya</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Facilities:</h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">River view</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Ghat access</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Evening aarti</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Cultural programs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div key={6} className="card-custom h-full flex flex-col section-animate">
              <div className="image-container h-48">
                <img 
                  src="/lovable-uploads/0a5bc000-941b-4d08-9797-1532b4b8b1c4.png" 
                  alt="Hanuman Garhi Dharmshala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Hanuman Garhi Dharmshala</h3>
                <p className="text-gray-700 mb-3">Located near the famous Hanuman Garhi temple, offering convenient accommodations for devotees.</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> Hanuman Garhi Road, Ayodhya</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2">Facilities:</h4>
                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Temple view</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">24-hour reception</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Pure vegetarian meals</li>
                    <li className="bg-ayodhya-cream text-ayodhya-maroon px-3 py-1 rounded-full text-sm">Pilgrim guide services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Information for Pilgrims</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Booking Information</h3>
              <ul className="space-y-2">
                <li><strong>Advance Booking:</strong> Many dharmshala accept advance bookings, especially during peak pilgrim seasons.</li>
                <li><strong>Documentation:</strong> Carry valid ID proof for all family members.</li>
                <li><strong>Check-in/out Times:</strong> Typically check-in is at 12 PM and check-out is at 11 AM.</li>
                <li><strong>Payment:</strong> Most dharmshala accept cash, and some may accept digital payments.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">What to Expect</h3>
              <ul className="space-y-2">
                <li><strong>Accommodations:</strong> Simple, clean rooms with basic furnishings.</li>
                <li><strong>Food:</strong> Many dharmshala offer sattvic meals, either included or at nominal charges.</li>
                <li><strong>Atmosphere:</strong> Quiet, peaceful environment conducive to spiritual practice.</li>
                <li><strong>Community:</strong> Shared spaces for interaction with fellow pilgrims.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Tips for a Pleasant Stay</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Book in Advance:</strong> Especially during festivals and peak seasons, dharmshala accommodations fill up quickly.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Pack Essentials:</strong> Bring your own toiletries, towels, and any specific requirements as these may not be provided.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Respect Rules:</strong> Most dharmshala have early closing times and rules about noise levels, food, and consumption of items like alcohol and non-vegetarian food.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Dress Modestly:</strong> Respect the cultural and religious significance of the place.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Manage Expectations:</strong> Remember that dharmshala focus on providing basic, clean accommodations rather than luxury.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DharmshalaPage;
