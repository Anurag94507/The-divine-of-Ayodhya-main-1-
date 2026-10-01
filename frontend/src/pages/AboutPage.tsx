import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import AnimatedCardWrapper from '../components/AnimatedCardWrapper'; // Import the wrapper

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
    </div>
  );
};

export default AboutPage;
