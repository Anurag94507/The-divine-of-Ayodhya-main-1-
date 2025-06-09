import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import PageLayout from '../components/PageLayout';
import FlowerPetals from '../components/FlowerPetals';
// import DonationSection from '../components/DonationSection'; // Import DonationSection
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Utensils, BedDouble, Camera, Map, Landmark } from 'lucide-react'; // Using Landmark icon
import DonationSection from '../components/DonationSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import AnimatedCardWrapper from '../components/AnimatedCardWrapper'; // Import the wrapper

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  return (
    <PageLayout>
      <div className="page-transition relative overflow-hidden">
        <FlowerPetals />

        {/* Hero Section */}
        <section
          className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center text-center bg-cover bg-center"
          // Updated background image URL
          style={{ backgroundImage: `url('https://s7ap1.scene7.com/is/image/incredibleindia/ram-janmaboomi-ayodhya-uttar%20pradesh-2?qlt=82&ts=1726649810923')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
          <div className="relative z-10 container mx-auto px-4 section-animate">
            {/* Removed the img tag as requested */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-text">
              Welcome to Ayodhya
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 shadow-text max-w-2xl mx-auto">
              Explore the sacred birthplace of Lord Ram, a city steeped in history, spirituality, and culture.
            </p>
            <Link to="/ram-mandir">
              <Button size="lg" className="bg-ayodhya-saffron text-white hover:bg-ayodhya-saffron/90 text-lg px-8 py-3">
                Discover Ram Mandir
              </Button>
            </Link>
          </div>
        </section>

        {/* Sacred Places Tabs Section */}
        <section className="py-16 bg-white section-animate">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-ayodhya-maroon mb-10 flex items-center justify-center gap-2">
              <Landmark className="w-8 h-8 text-ayodhya-saffron" />
              Sacred Places to Visit
            </h2>
            <Tabs defaultValue="ram-mandir" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-6 bg-ayodhya-cream p-2 rounded-lg">
                <TabsTrigger value="ram-mandir" className="data-[state=active]:bg-ayodhya-saffron data-[state=active]:text-white">Ram Mandir</TabsTrigger>
                <TabsTrigger value="kanak-bhawan" className="data-[state=active]:bg-ayodhya-saffron data-[state=active]:text-white">Kanak Bhawan</TabsTrigger>
                <TabsTrigger value="hanuman-garhi" className="data-[state=active]:bg-ayodhya-saffron data-[state=active]:text-white">Hanuman Garhi</TabsTrigger>
                <TabsTrigger value="dashrath-mahal" className="data-[state=active]:bg-ayodhya-saffron data-[state=active]:text-white">Dasharath Mahal</TabsTrigger>
                <TabsTrigger value="saryu-ghat" className="data-[state=active]:bg-ayodhya-saffron data-[state=active]:text-white">Saryu Ghat</TabsTrigger>
              </TabsList>
              <TabsContent value="ram-mandir">
                <AnimatedCardWrapper>
                  <Card className="border-ayodhya-orange">
                    <CardHeader>
                      <CardTitle className="text-ayodhya-maroon">Ram Mandir</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                      <img src="/assets/images/Ram Mandir.png" alt="Ram Mandir" className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-48"/>
                      <div>
                        <p className="mb-4">The magnificent temple dedicated to Lord Ram, built at his sacred birthplace, Ram Janmabhoomi. A symbol of immense faith and architectural grandeur.</p>
                        <Link to="/ram-mandir"><Button variant="link" className="text-ayodhya-saffron p-0">Learn More →</Button></Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCardWrapper>
              </TabsContent>
              <TabsContent value="kanak-bhawan">
                 <AnimatedCardWrapper>
                  <Card className="border-ayodhya-orange">
                    <CardHeader>
                      <CardTitle className="text-ayodhya-maroon">Kanak Bhawan</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                      <img src="/assets/images/kanak-bhawan.png" alt="Kanak Bhawan" className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-48"/>
                      <div>
                        <p className="mb-4">Meaning 'Golden House', this temple was believed to be gifted by Queen Kaikeyi to Goddess Sita. It houses beautifully adorned idols of Lord Ram and Sita.</p>
                        <Link to="/kanak-bhawan"><Button variant="link" className="text-ayodhya-saffron p-0">Learn More →</Button></Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCardWrapper>
              </TabsContent>
              <TabsContent value="hanuman-garhi">
                <AnimatedCardWrapper>
                  <Card className="border-ayodhya-orange">
                    <CardHeader>
                      <CardTitle className="text-ayodhya-maroon">Hanuman Garhi</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                      <img src="/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png" alt="Hanuman Garhi" className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-48"/>
                      <div>
                        <p className="mb-4">A prominent 10th-century temple dedicated to Lord Hanuman, situated atop a hill. It requires climbing 76 steps and offers panoramic views of Ayodhya.</p>
                        <Link to="/hanuman-garhi"><Button variant="link" className="text-ayodhya-saffron p-0">Learn More →</Button></Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCardWrapper>
              </TabsContent>
              <TabsContent value="dashrath-mahal">
                <AnimatedCardWrapper>
                  <Card className="border-ayodhya-orange">
                    <CardHeader>
                      <CardTitle className="text-ayodhya-maroon">Raja Dasharath Mahal</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                       <img src="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png" alt="Dasharath Mahal" className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-48"/>
                       <div>
                        <p className="mb-4">The palace believed to be the residence of King Dasharath, Lord Ram's father. It showcases ancient architecture and houses shrines within its complex.</p>
                        <Link to="/raja-dasharath-mahal"><Button variant="link" className="text-ayodhya-saffron p-0">Learn More →</Button></Link>
                       </div>
                    </CardContent>
                  </Card>
                </AnimatedCardWrapper>
              </TabsContent>
              <TabsContent value="saryu-ghat">
                <AnimatedCardWrapper>
                  <Card className="border-ayodhya-orange">
                    <CardHeader>
                      <CardTitle className="text-ayodhya-maroon">Saryu Ghat</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                       <img src="/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png" alt="Saryu Ghat" className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-48"/>
                       <div>
                         <p className="mb-4">The sacred banks of the Saryu River, where pilgrims take holy dips. The evening Aarti ceremony here is a mesmerizing spiritual experience.</p>
                         <Link to="/saryu-ghat"><Button variant="link" className="text-ayodhya-saffron p-0">Learn More →</Button></Link>
                       </div>
                    </CardContent>
                  </Card>
                </AnimatedCardWrapper>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features/Quick Links Section */}
        <section className="py-16 bg-ayodhya-cream section-animate">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-ayodhya-maroon mb-10">Plan Your Visit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1: Places to Visit (Gallery Link) */}
              <AnimatedCardWrapper className="block group h-full">
                <Link to="/gallery">
                  <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                      <Map className="w-12 h-12 mx-auto text-ayodhya-saffron mb-3 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-ayodhya-maroon">Sacred Places</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Discover the holiest sites and temples in Ayodhya.</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCardWrapper>

              {/* Feature 2: Accommodation */}
              <AnimatedCardWrapper className="block group h-full">
                <Link to="/hotels">
                  <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                      <BedDouble className="w-12 h-12 mx-auto text-ayodhya-saffron mb-3 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-ayodhya-maroon">Accommodation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Find comfortable stays from hotels to dharmshalas.</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCardWrapper>

              {/* Feature 3: Food */}
              <AnimatedCardWrapper className="block group h-full">
                <Link to="/restaurants">
                  <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                      <Utensils className="w-12 h-12 mx-auto text-ayodhya-saffron mb-3 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-ayodhya-maroon">Local Cuisine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Savor authentic flavors and local vegetarian delicacies.</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCardWrapper>

              {/* Feature 4: Gallery */}
              <AnimatedCardWrapper className="block group h-full">
                <Link to="/gallery">
                  <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                      <Camera className="w-12 h-12 mx-auto text-ayodhya-saffron mb-3 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-ayodhya-maroon">Photo Gallery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>View captivating images of Ayodhya's beauty.</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCardWrapper>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <DonationSection />

        {/* About Ayodhya Snippet - Updated */}
        <section className="py-16 bg-white section-animate">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4">About Ayodhya Blessings</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ayodhya, a city echoing through millennia, holds an unparalleled position in India's historical and spiritual landscape. Revered as the birthplace of Lord Ram, its story unfolds from ancient mentions in the epic Ramayana, where it is depicted as the magnificent capital of the Kosala Kingdom ruled by the solar dynasty. Archaeological findings in the region offer glimpses into its continuous habitation through various historical periods. From its significance in ancient scriptures to its role through medieval times and its recent rejuvenation centered around the Ram Janmabhoomi, Ayodhya presents a rich timeline. Its cultural vibrancy shines through traditions like the dramatic Ram Leela performances, enacting tales from the Ramayana, and the spectacular Deepotsav, where millions of earthen lamps illuminate the Saryu river banks, creating a breathtaking spectacle of faith and celebration. Explore with us the deep-rooted heritage and living traditions of this sacred city.
                </p>
                <Link to="/about">
                  <Button variant="outline" className="border-ayodhya-maroon text-ayodhya-maroon hover:bg-ayodhya-maroon hover:text-white">
                    Learn More About Ayodhya
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/e951e0a0-7b70-48a3-843c-f721376b6a80.png"
                  alt="Saryu River, Ayodhya"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action/Special Event Section (Optional) */}
        <section className="py-16 bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white section-animate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Divine Ayodhya</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Plan your pilgrimage, explore the temples, witness the evening aarti at Saryu Ghat, and immerse yourself in the spiritual aura of this timeless city.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-ayodhya-maroon hover:bg-gray-100 text-lg px-8 py-3">
                Contact Us for Assistance
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default HomePage;
