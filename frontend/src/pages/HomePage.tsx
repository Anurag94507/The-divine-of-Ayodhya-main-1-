import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import PageLayout from '../components/PageLayout';
import FlowerPetals from '../components/FlowerPetals';
import DonationSection from '../components/DonationSection';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Utensils, BedDouble, Camera, Map, Landmark, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AnimatedCardWrapper from '../components/AnimatedCardWrapper';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const sacredPlaces = [
    {
      id: 'ram-mandir',
      title: 'Ram Mandir',
      image: '/assets/images/Ram Mandir.png',
      description: 'The magnificent temple dedicated to Lord Ram, built at his sacred birthplace, Ram Janmabhoomi. A symbol of immense faith and architectural grandeur.',
      link: '/ram-mandir',
    },
    {
      id: 'kanak-bhawan',
      title: 'Kanak Bhawan',
      image: '/assets/images/kanak-bhawan.png',
      description: "Meaning 'Golden House', this temple was believed to be gifted by Queen Kaikeyi to Goddess Sita. It houses beautifully adorned idols of Lord Ram and Sita.",
      link: '/kanak-bhawan',
    },
    {
      id: 'hanuman-garhi',
      title: 'Hanuman Garhi',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      description: 'A prominent 10th-century temple dedicated to Lord Hanuman, situated atop a hill. It requires climbing 76 steps and offers panoramic views of Ayodhya.',
      link: '/hanuman-garhi',
    },
    {
      id: 'dashrath-mahal',
      title: 'Raja Dasharath Mahal',
      image: '/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png',
      description: "The palace believed to be the residence of King Dasharath, Lord Ram's father. It showcases ancient architecture and houses shrines within its complex.",
      link: '/raja-dasharath-mahal',
    },
    {
      id: 'saryu-ghat',
      title: 'Saryu Ghat',
      image: '/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png',
      description: 'The sacred banks of the Saryu River, where pilgrims take holy dips. The evening Aarti ceremony here is a mesmerizing spiritual experience.',
      link: '/saryu-ghat',
    },
  ];

  const features = [
    { icon: <Map className="w-10 h-10" />, title: 'Sacred Places', description: 'Discover the holiest sites and temples in Ayodhya.', link: '/gallery' },
    { icon: <BedDouble className="w-10 h-10" />, title: 'Accommodation', description: 'Find comfortable stays from hotels to dharmshalas.', link: '/hotels' },
    { icon: <Utensils className="w-10 h-10" />, title: 'Local Cuisine', description: 'Savor authentic flavors and local vegetarian delicacies.', link: '/restaurants' },
    { icon: <Camera className="w-10 h-10" />, title: 'Photo Gallery', description: "View captivating images of Ayodhya's beauty.", link: '/gallery' },
  ];

  return (
    <PageLayout>
      <div className="page-transition relative overflow-hidden">
        <FlowerPetals />

        {/* ===== HERO SECTION ===== */}
        <section
          className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://s7ap1.scene7.com/is/image/incredibleindia/ram-janmaboomi-ayodhya-uttar%20pradesh-2?qlt=82&ts=1726649810923')` }}
        >
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-ayodhya-maroon/20 via-transparent to-ayodhya-saffron/10" />

          {/* Decorative floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-ayodhya-saffron/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-32 right-16 w-48 h-48 bg-ayodhya-gold/10 rounded-full blur-3xl animate-float-slow" />

          <div className="relative z-10 container mx-auto px-4 max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-slide-up">
              <Sparkles size={16} className="text-ayodhya-gold" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Sacred Birthplace of Lord Ram</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight shadow-text-heavy" style={{ animationDelay: '0.2s' }}>
              Welcome to
              <span className="block mt-2 bg-gradient-to-r from-ayodhya-gold via-ayodhya-saffron to-ayodhya-gold bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                Ayodhya
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed shadow-text" style={{ animationDelay: '0.4s' }}>
              Explore the sacred birthplace of Lord Ram, a city steeped in history, spirituality, and timeless culture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
              <Link to="/ram-mandir">
                <button className="btn-premium text-lg px-10 py-4 flex items-center gap-2">
                  Discover Ram Mandir
                  <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/gallery">
                <button className="px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Explore Gallery
                </button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
              <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
                <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SACRED PLACES SECTION ===== */}
        <section className="py-20 bg-white section-animate relative">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-ayodhya-saffron/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-ayodhya-gold/3 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayodhya-saffron/10 rounded-full mb-4">
                <Landmark size={16} className="text-ayodhya-saffron" />
                <span className="text-sm font-medium text-ayodhya-saffron">Explore the Divine</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-ayodhya-maroon mb-4">
                Sacred Places to Visit
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Discover the holiest temples and landmarks that make Ayodhya a spiritual destination for millions.
              </p>
              <div className="ornament-wide mt-5" />
            </div>

            <Tabs defaultValue="ram-mandir" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8 bg-white p-1.5 rounded-2xl shadow-md border border-orange-100/50 gap-1">
                {sacredPlaces.map(place => (
                  <TabsTrigger
                    key={place.id}
                    value={place.id}
                    className="rounded-xl text-sm font-medium py-2.5 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-ayodhya-saffron data-[state=active]:to-ayodhya-orange data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    {place.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {sacredPlaces.map(place => (
                <TabsContent key={place.id} value={place.id}>
                  <AnimatedCardWrapper>
                    <div className="glass-card rounded-2xl overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 image-overlay">
                          <img
                            src={place.image}
                            alt={place.title}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                        </div>
                        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <Star size={16} className="text-ayodhya-gold fill-ayodhya-gold" />
                            <span className="text-xs font-semibold text-ayodhya-saffron uppercase tracking-wider">Sacred Place</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-ayodhya-maroon mb-4">{place.title}</h3>
                          <p className="text-gray-600 leading-relaxed mb-6">{place.description}</p>
                          <Link to={place.link}>
                            <button className="btn-premium inline-flex items-center gap-2 text-sm">
                              Explore {place.title} <ArrowRight size={16} />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AnimatedCardWrapper>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ===== PLAN YOUR VISIT SECTION ===== */}
        <section className="py-20 section-gradient-warm section-animate relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ayodhya-saffron/20 to-transparent" />

          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayodhya-saffron/10 rounded-full mb-4">
                <Map size={16} className="text-ayodhya-saffron" />
                <span className="text-sm font-medium text-ayodhya-saffron">Your Journey Starts Here</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-ayodhya-maroon mb-4">Plan Your Visit</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Everything you need for a comfortable and spiritual pilgrimage to Ayodhya.
              </p>
              <div className="ornament-wide mt-5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {features.map((feature, index) => (
                <AnimatedCardWrapper key={index} className="block group h-full">
                  <Link to={feature.link}>
                    <div className="premium-card h-full text-center p-8 group-hover:border-ayodhya-saffron/30">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-ayodhya-saffron/10 to-ayodhya-orange/10 flex items-center justify-center mb-5 text-ayodhya-saffron group-hover:from-ayodhya-saffron group-hover:to-ayodhya-orange group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-orange-200">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-ayodhya-maroon mb-3">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                      <div className="mt-5 flex items-center justify-center gap-1 text-ayodhya-saffron text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </AnimatedCardWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DONATION SECTION ===== */}
        <DonationSection />

        {/* ===== ABOUT SECTION ===== */}
        <section className="py-20 bg-white section-animate relative overflow-hidden">
          <div className="absolute -right-20 top-20 w-96 h-96 bg-ayodhya-saffron/3 rounded-full blur-3xl" />

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayodhya-saffron/10 rounded-full mb-6">
                  <Sparkles size={16} className="text-ayodhya-saffron" />
                  <span className="text-sm font-medium text-ayodhya-saffron">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-6 leading-tight">
                  About Ayodhya Blessings
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ayodhya, a city echoing through millennia, holds an unparalleled position in India's historical and spiritual landscape. Revered as the birthplace of Lord Ram, its story unfolds from ancient mentions in the epic Ramayana, where it is depicted as the magnificent capital of the Kosala Kingdom ruled by the solar dynasty. Its cultural vibrancy shines through traditions like the dramatic Ram Leela performances and the spectacular Deepotsav, where millions of earthen lamps illuminate the Saryu river banks.
                </p>
                <Link to="/about">
                  <button className="btn-premium inline-flex items-center gap-2">
                    Learn More About Ayodhya <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
              <div className="relative">
                <div className="image-overlay rounded-2xl shadow-2xl">
                  <img
                    src="/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png"
                    alt="Saryu River, Ayodhya"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-ayodhya-saffron to-ayodhya-orange rounded-2xl opacity-20 blur-sm" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-ayodhya-gold to-ayodhya-saffron rounded-xl opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-24 relative overflow-hidden section-animate">
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-[#a52a2a] to-[#800000]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 shadow-text">
                Experience Divine Ayodhya
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Plan your pilgrimage, explore the temples, witness the evening aarti at Saryu Ghat, and immerse yourself in the spiritual aura of this timeless city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-10 py-4 bg-white text-ayodhya-maroon rounded-xl text-lg font-semibold hover:bg-ayodhya-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                    Contact Us <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-10 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                    Register for Yatra
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default HomePage;
