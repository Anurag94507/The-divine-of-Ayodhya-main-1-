import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import AnimatedCardWrapper from '../components/AnimatedCardWrapper';
import { FaClock, FaMapMarkerAlt, FaWalking, FaLandmark } from 'react-icons/fa';

const VisitorInfoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />

      <PageBanner
        title="Visitor Information"
        subtitle="Essential information for your visit to Ayodhya"
        backgroundImage="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Darshan Timings */}
          <section className="mb-12 section-animate">
            <AnimatedCardWrapper>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-ayodhya-maroon text-2xl">
                    <FaClock />
                  </div>
                  <h2 className="text-2xl font-bold text-ayodhya-maroon">Darshan Timings</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Morning:</span>
                    <span className="text-gray-600">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Evening:</span>
                    <span className="text-gray-600">4:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">Weekly Closure:</span>
                    <span className="text-gray-600">None (Open all days)</span>
                  </div>
                </div>
              </div>
            </AnimatedCardWrapper>
          </section>

          {/* How to Reach */}
          <section className="mb-12 section-animate">
            <AnimatedCardWrapper>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-ayodhya-maroon text-2xl">
                    <FaMapMarkerAlt />
                  </div>
                  <h2 className="text-2xl font-bold text-ayodhya-maroon">How to Reach</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="text-ayodhya-maroon mt-1">
                      <FaLandmark />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Location:</span>
                      <p className="text-gray-600">Located in the heart of Ayodhya, near Ram Janmabhoomi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-ayodhya-maroon mt-1">
                      <FaWalking />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">By Auto/E-rickshaw:</span>
                      <p className="text-gray-600">Easily accessible from any part of Ayodhya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-ayodhya-maroon mt-1">
                      <FaWalking />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Walking Distance:</span>
                      <p className="text-gray-600">10 minutes from Ram Janmabhoomi complex</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-ayodhya-maroon mt-1">
                      <FaLandmark />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Landmarks:</span>
                      <p className="text-gray-600">Ask for directions to "Dasharath Mahal" or "Bada Asthan"</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCardWrapper>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VisitorInfoPage; 