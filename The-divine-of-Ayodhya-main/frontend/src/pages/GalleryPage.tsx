import { useEffect, useState } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageLayout from '../components/PageLayout';
import { GalleryHorizontal, Clock } from 'lucide-react'; // Assuming Clock might be used later or elsewhere
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useAnimateOnScroll();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      src: 'https://c.ndtvimg.com/2024-01/ev1g16t8_ayodhya-ram-mandir-inauguration-news-live_625x300_22_January_24.jpeg', // Updated image URL
      alt: 'Ram Mandir in Ayodhya',
      title: 'The Grand Ram Mandir',
      description: 'A breathtaking view of the newly inaugurated Ram Mandir, a symbol of faith and devotion.'
    },
    {
      src: '/assets/images/kanak-bhawan.png',
      alt: 'Kanak Bhawan Temple',
      title: 'Kanak Bhawan - The Golden Palace',
      description: 'Believed to be gifted by Kaikeyi to Sita, this temple houses beautifully adorned idols of Ram and Sita.'
    },
    {
      src: '/assets/images/ram ji.jpg', 
      alt: 'Saryu River Ghat',
      title: 'Serene Saryu Ghat',
      description: 'The sacred Saryu river flowing peacefully, where pilgrims take holy dips and perform rituals.'
    },
    {
      src: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png', 
      alt: 'Hanuman Garhi Temple Entrance',
      title: 'Hanuman Garhi Temple',
      description: 'The prominent Hanuman Garhi temple, situated atop a hill, offering panoramic views of Ayodhya.'
    },
    {
      src: '/lovable-uploads/ram-mandir-hero.jpg',
      alt: 'Ram Mandir Complex Aerial View',
      title: 'Ram Mandir Complex',
      description: 'Stunning view of the Ram Mandir complex, showcasing its architectural grandeur and spiritual significance.'
    }
  ];

  const openDialog = (index: number) => {
    setSelectedIndex(index);
    setIsDialogOpen(true);
  };

  return (
      <div className="page-transition pb-8 pt-16">
        <FlowerPetals />
        
        <PageBanner 
          title="Photo Gallery" 
          subtitle="विश्वेश्वरं च विश्वं च विश्वरूपमजं विभुम् | Visual journey through the divine city of Ayodhya" 
          backgroundImage="/lovable-uploads/5fbba0ac-ec87-4b26-bf98-1bfbb4f20315.png"
        />
        
        <div className="container mx-auto px-4 py-6">
          {/* First Section - Gallery */}
          <section className="mb-8 section-animate">
            <h2 className="text-3xl font-bold text-ayodhya-maroon mb-4 text-center flex items-center justify-center gap-2">
              <GalleryHorizontal className="text-ayodhya-saffron" />
              पावन अयोध्या दर्शन - Sacred Places of Ayodhya
            </h2>
            
            <div className="text-center mb-6">
              <p className="text-lg italic text-ayodhya-maroon">
                "अयोध्या मथुरा माया काशी काञ्ची अवन्तिका | पुरी द्वारावती चैव सप्तैते मोक्षदायका: ||"
              </p>
              <p className="text-sm mt-1 text-gray-600">
                "Ayodhya, Mathura, Maya (Haridwar), Kashi, Kanchi, Avantika and Dwaraka - these seven cities are the bestowers of salvation."
              </p>
            </div>
            
            <p className="text-center mb-6">
              Ayodhya, the birthplace of Lord Ram, is one of the seven most sacred cities in Hindu tradition. Explore the visual splendor of its key landmarks through this gallery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems.map((item, index) => (
                <Dialog key={index} onOpenChange={open => !open && setIsDialogOpen(false)}>
                  <DialogTrigger asChild>
                    <div
  className={`
    relative group cursor-pointer rounded-lg overflow-hidden shadow-lg w-full
    ${item.title === 'Serene Saryu Ghat' ? 'h-96' : 'h-48'}
  `}
  onClick={() => openDialog(index)}
>
  <img
    src={item.src}
    alt={item.alt}
    className="w-full h-full object-cover object-bottom transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100"
  />
  {/* Overlay for Title */}
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end justify-center p-4">
    <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
      {item.title}
    </p>
  </div>
</div>
                  </DialogTrigger>
                </Dialog>
              ))}
            </div>
          </section>
        </div>

        {/* Dialog with Carousel */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl h-[80vh] flex flex-col p-0">
            <DialogHeader className="p-4 border-b bg-ayodhya-cream">
              <DialogTitle className="text-ayodhya-maroon">{galleryItems[selectedIndex]?.title}</DialogTitle>
              <DialogDescription className="text-gray-600">Ayodhya Gallery</DialogDescription>
            </DialogHeader>
            <div className="flex-grow overflow-hidden p-0 m-0"> {/* Adjusted padding and margin */}
              <Carousel 
                className="w-full h-full" 
                opts={{ startIndex: selectedIndex, loop: true }} 
                setApi={(api) => api && setSelectedIndex(api.selectedScrollSnap())} // Keep track of current slide
              >
                <CarouselContent className="h-full m-0"> {/* Ensure CarouselContent takes full height */}
                  {galleryItems.map((item, index) => (
                    <CarouselItem key={index} className="h-full flex items-center justify-center p-0 m-0"> {/* Centering content */}
                      <div className="flex flex-col items-center justify-center h-full w-full p-4">
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className="max-h-[80%] max-w-full object-contain mb-2" // Contain image within bounds
                        />
                        <p className="mt-2 text-center text-sm text-gray-700 px-4">{item.description}</p>
                      </div>
                    </CarouselItem>
                  ))

                  }
                </CarouselContent>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <CarouselPrevious className="text-white bg-black/50 hover:bg-black/70 border-none" />
                  <CarouselNext className="text-white bg-black/50 hover:bg-black/70 border-none" />
                </div>
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>

      </div>
  );
};

export default GalleryPage;
