import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import AnimatedCardWrapper from '../components/AnimatedCardWrapper';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHome, FaImages, FaUserPlus, FaInfoCircle, FaPhone, FaMapMarkerAlt, FaHotel, FaUtensils, FaCar, FaGift, FaLandmark } from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />

      <PageBanner
        title="About Us"
        subtitle="Learn more about Ayodhya Blessings"
        backgroundImage="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Plan Your Visit Section */}
            <section className="max-w-4xl mx-auto mb-16 section-animate">
              <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center">Plan Your Visit</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <AnimatedCardWrapper>
                  <div className="bg-white p-4 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Accommodations</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Find the perfect place to stay during your spiritual journey, from traditional dharmshala to modern hotels.
                    </p>
                    <a href="/accommodations" className="text-ayodhya-maroon hover:text-ayodhya-maroon-dark text-sm font-medium inline-flex items-center">
                      Explore options
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimatedCardWrapper>

                <AnimatedCardWrapper>
                  <div className="bg-white p-4 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Dining</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Experience authentic sattvic cuisine at various bhojnalayas and restaurants in the holy city.
                    </p>
                    <a href="/dining" className="text-ayodhya-maroon hover:text-ayodhya-maroon-dark text-sm font-medium inline-flex items-center">
                      View options
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimatedCardWrapper>

                <AnimatedCardWrapper>
                  <div className="bg-white p-4 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">Transportation</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Learn about the best ways to reach Ayodhya and navigate around the city during your pilgrimage.
                    </p>
                    <a href="/transportation" className="text-ayodhya-maroon hover:text-ayodhya-maroon-dark text-sm font-medium inline-flex items-center">
                      Plan travel
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimatedCardWrapper>
              </div>
            </section>

            {/* About Us Section */}
            <section className="max-w-4xl mx-auto mb-16 section-animate">
              <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center">Our Mission</h2>
              <p className="text-lg mb-6">
                Ayodhya Blessings is dedicated to providing comprehensive information and guidance to devotees planning their pilgrimage to the sacred city of Ayodhya.
              </p>
              <p className="text-lg mb-6">
                Our mission is to enhance the spiritual journey of pilgrims by offering reliable information about the Ram Mandir, other important temples,
                accommodation options, dining facilities, and transportation services in Ayodhya.
              </p>
              <p className="text-lg mb-6">
                We strive to make the pilgrimage experience seamless and spiritually fulfilling for devotees from all over the world who wish to
                receive the divine blessings of Lord Ram in his birthplace.
              </p>
            </section>

            {/* Historical and Cultural Heritage Section */}
            <section className="max-w-4xl mx-auto mb-16 section-animate">
              <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center">The Heritage of Ayodhya</h2>
              <p className="text-lg mb-6">
                Ayodhya, a city echoing through millennia, holds an unparalleled position in India's historical and spiritual landscape. Revered as the birthplace of Lord Ram, its story unfolds from ancient mentions in the epic Ramayana, where it is depicted as the magnificent capital of the Kosala Kingdom ruled by the solar dynasty. Archaeological findings in the region offer glimpses into its continuous habitation through various historical periods. From its significance in ancient scriptures to its role through medieval times and its recent rejuvenation centered around the Ram Janmabhoomi, Ayodhya presents a rich timeline.
              </p>
              <p className="text-lg mb-6">
                Its cultural vibrancy shines through traditions like the dramatic Ram Leela performances, enacting tales from the Ramayana, and the spectacular Deepotsav, where millions of earthen lamps illuminate the Saryu river banks, creating a breathtaking spectacle of faith and celebration. This rich tapestry of history, scripture, and living tradition makes Ayodhya a unique destination for spiritual seekers and cultural enthusiasts alike.
              </p>
            </section>

            {/* Our Values */}
            <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg section-animate">
              <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedCardWrapper className="h-full">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Devotion</h3>
                    <p>
                      We approach our work with deep reverence for the spiritual significance of Ayodhya and its temples.
                    </p>
                  </div>
                </AnimatedCardWrapper>

                <AnimatedCardWrapper className="h-full">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Service</h3>
                    <p>
                      We are committed to serving pilgrims by providing accurate and helpful information that enhances their spiritual journey.
                    </p>
                  </div>
                </AnimatedCardWrapper>

                <AnimatedCardWrapper className="h-full">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Authenticity</h3>
                    <p>
                      We ensure that all information provided is authentic, reliable, and respectful of the cultural and religious traditions of Ayodhya.
                    </p>
                  </div>
                </AnimatedCardWrapper>
              </div>
            </section>

            {/* Developer Information */}
            <section className="max-w-4xl mx-auto mb-16 section-animate">
              <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6 text-center">Website Developer</h2>
              <AnimatedCardWrapper>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-ayodhya-maroon mb-3">Kartikey Vishwakarma</h3>
                  <p className="text-lg mb-4">Full-stack Developer & Designer</p>
                  <div className="mb-4">
                    <p className="text-gray-700 mb-1"><strong>Phone:</strong> 6394650470</p>
                    <p className="text-gray-700"><strong>Email:</strong> kartikeyvishwakarma@gmail.com</p>
                  </div>
                  <p className="text-gray-600 italic">
                    "Dedicated to creating digital experiences that blend technology with spiritual values, helping pilgrims connect with the divine heritage of Ayodhya."
                  </p>
                </div>
              </AnimatedCardWrapper>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              {/* Introduction */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-ayodhya-maroon mb-4">Ayodhya Blessings</h3>
                <p className="text-gray-700">
                  Discover the divine experience of Ayodhya, the birthplace of Lord Ram and home to the magnificent Ram Mandir.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-[#1877F2] text-xl"><FaFacebook /></div>
                    <span>Facebook</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-[#E4405F] text-xl"><FaInstagram /></div>
                    <span>Instagram</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-[#1DA1F2] text-xl"><FaTwitter /></div>
                    <span>Twitter</span>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-[#FF0000] text-xl"><FaYoutube /></div>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaHome /></div>
                    <span>Home</span>
                  </a>
                  <a href="/ram-mandir" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaLandmark /></div>
                    <span>Ram Mandir</span>
                  </a>
                  <a href="/gallery" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaImages /></div>
                    <span>Photo Gallery</span>
                  </a>
                  <a href="/register" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaUserPlus /></div>
                    <span>Register for Yatra</span>
                  </a>
                  <a href="/visitor-info" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaInfoCircle /></div>
                    <span>Visitor Information</span>
                  </a>
                  <a href="/about" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaInfoCircle /></div>
                    <span>About Us</span>
                  </a>
                  <a href="/contact" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaPhone /></div>
                    <span>Contact</span>
                  </a>
                </div>
              </div>

              {/* Sacred Places */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">Sacred Places</h3>
                <div className="space-y-2">
                  <a href="/kanak-bhawan" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaLandmark /></div>
                    <span>Kanak Bhawan</span>
                  </a>
                  <a href="/hanuman-garhi" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaLandmark /></div>
                    <span>Hanuman Garhi</span>
                  </a>
                  <a href="/raja-dasharath-mahal" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaLandmark /></div>
                    <span>Raja Dasharath Mahal</span>
                  </a>
                  <a href="/saryu-ghat" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaMapMarkerAlt /></div>
                    <span>Saryu Ghat</span>
                  </a>
                  <a href="https://srjbtkshetra.org" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaLandmark /></div>
                    <span>Official Temple Website</span>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-ayodhya-maroon mb-4">Services</h3>
                <div className="space-y-2">
                  <a href="/dharmshala" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaHotel /></div>
                    <span>Dharmshala</span>
                  </a>
                  <a href="/hotels" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaHotel /></div>
                    <span>Hotels</span>
                  </a>
                  <a href="/bhojnalaya" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaUtensils /></div>
                    <span>Bhojnalaya</span>
                  </a>
                  <a href="/restaurants" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaUtensils /></div>
                    <span>Restaurants</span>
                  </a>
                  <a href="/travel" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaCar /></div>
                    <span>Travel</span>
                  </a>
                  <a href="/prasad" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                    <div className="text-ayodhya-maroon"><FaGift /></div>
                    <span>Prasad</span>
                  </a>
                </div>
              </div>

              {/* Developer Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center text-gray-600">
                  <p className="mb-2">Developed by Kartikey Vishwakarma</p>
                  <p className="mb-2">Contact: 6394650470</p>
                  <p>Email: kartikeyvishwakarma@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
