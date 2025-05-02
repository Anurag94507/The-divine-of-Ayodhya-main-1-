import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';
import { Train, Plane, Bus } from 'lucide-react'; // Import relevant icons

const TravelPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <PageLayout>
      <div className="page-transition pb-8 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Travel to Ayodhya" 
          subtitle="Plan your journey to the sacred city" 
          backgroundImage="https://indiator.com/tourist-places/wp-content/uploads/2025/01/dont-miss-these-top-places-to-visit-in-ayodhya-dham.jpg"
        />
        
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <section className="max-w-4xl mx-auto mb-10 text-center section-animate">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">Getting to Ayodhya</h2>
            <p className="text-lg mb-4">
              Ayodhya is well-connected to major cities in India through various modes of transport. 
              Plan your pilgrimage or visit with ease using the information below.
            </p>
          </section>

          {/* Travel Options */}
          <section className="mb-10">
            <div className="grid md:grid-cols-3 gap-8">
              {/* By Air */}
              <div className="bg-white p-6 rounded-lg shadow-md section-animate">
                <div className="flex items-center mb-3">
                  <Plane className="text-ayodhya-saffron mr-2" />
                  <h3 className="text-xl font-bold text-ayodhya-maroon">By Air</h3>
                </div>
                <p className="mb-3">
                  The nearest airport is the <strong>Maharishi Valmiki International Airport, Ayodhya Dham (AYJ)</strong>, located within the city itself.
                </p>
                <p>
                  Alternatively, you can fly to <strong>Lucknow's Chaudhary Charan Singh International Airport (LKO)</strong> (approx. 135 km away) or 
                  <strong>Gorakhpur Airport (GOP)</strong> (approx. 140 km away) and then take a taxi or bus to Ayodhya.
                </p>
              </div>

              {/* By Train */}
              <div className="bg-white p-6 rounded-lg shadow-md section-animate">
                <div className="flex items-center mb-3">
                  <Train className="text-ayodhya-saffron mr-2" />
                  <h3 className="text-xl font-bold text-ayodhya-maroon">By Train</h3>
                </div>
                <p className="mb-3">
                  Ayodhya has two main railway stations: <strong>Ayodhya Dham Junction (AY)</strong> and <strong>Ayodhya Cantt (AYC)</strong>.
                </p>
                <p>
                  These stations are well-connected to major cities like Delhi, Mumbai, Kolkata, Lucknow, Varanasi, and Gorakhpur.
                  Numerous express and passenger trains operate daily.
                </p>
              </div>

              {/* By Road */}
              <div className="bg-white p-6 rounded-lg shadow-md section-animate">
                <div className="flex items-center mb-3">
                  <Bus className="text-ayodhya-saffron mr-2" />
                  <h3 className="text-xl font-bold text-ayodhya-maroon">By Road</h3>
                </div>
                <p className="mb-3">
                  Ayodhya is easily accessible by road via National Highways. Uttar Pradesh State Road Transport Corporation (UPSRTC) 
                  and private operators run regular bus services from nearby cities like Lucknow, Varanasi, Gorakhpur, and Allahabad.
                </p>
                <p>
                  Taxis and private cars can also be hired for a comfortable journey.
                </p>
              </div>
            </div>
          </section>

          {/* Local Transportation */}
          <section className="max-w-4xl mx-auto mb-10 bg-ayodhya-cream p-6 rounded-lg section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Getting Around Ayodhya</h2>
            <p className="text-center mb-4">
              Once in Ayodhya, various local transport options are available for sightseeing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-center mx-auto max-w-md">
              <li><strong>E-rickshaws:</strong> Eco-friendly and convenient for short distances within the city.</li>
              <li><strong>Auto-rickshaws:</strong> Widely available for navigating through Ayodhya.</li>
              <li><strong>Cycle-rickshaws:</strong> A traditional way to explore the narrower lanes and ghats.</li>
              <li><strong>Taxis/Private Cars:</strong> Can be hired for more comfortable or longer-distance travel within and around Ayodhya.</li>
            </ul>
          </section>

          {/* Travel Tips */}
          <section className="max-w-4xl mx-auto section-animate">
            <h2 className="text-2xl font-bold text-ayodhya-maroon mb-4 text-center">Travel Tips</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Book in Advance:</strong> Especially during peak seasons or festivals, book your travel and accommodation well in advance.</li>
                <li><strong>Check Timings:</strong> Verify train and bus schedules before your journey.</li>
                <li><strong>Stay Hydrated:</strong> Carry water, especially during summer months.</li>
                <li><strong>Respect Local Customs:</strong> Dress modestly, especially when visiting religious sites.</li>
                <li><strong>Bargain Reasonably:</strong> When hiring local transport like auto-rickshaws, agree on the fare beforehand.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TravelPage;
