import { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';

const PrasadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prasadItems = [
    {
      id: 1,
      name: 'Radha-Ram Dana',
      description: 'Sweet cardamom-flavored sugar pellets, offered as a blessed treat to devotees after darshan.',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      significance: "Symbolizes the sweetness of devotion and Ram-Sita's blessings."
    },
    {
      id: 2,
      name: 'Panjiri',
      description: 'A nutritious mixture of whole wheat flour, ghee, sugar, dry fruits, and aromatic spices.',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      significance: 'Provides energy and is considered especially auspicious when received as prasad.'
    },
    {
      id: 3,
      name: 'Laddoo',
      description: 'Sweet spherical balls made from gram flour, ghee, sugar, and nuts, offered to deities.',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      significance: 'Represents completeness and perfection in devotion.'
    },
    {
      id: 4,
      name: 'Kheer',
      description: 'Rice pudding prepared with milk, rice, sugar, cardamom, and garnished with nuts.',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      significance: 'Symbolizes purity and is often prepared on special occasions.'
    },
    {
      id: 5,
      name: 'Peda',
      description: 'Soft milk-based sweet discs flavored with cardamom and saffron.',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      significance: 'Represents the sweetness of divine blessings.'
    },
    {
      id: 6,
      name: 'Chana Prasad',
      description: 'Seasoned chickpeas offered as a savory prasad alternative, especially during certain festivals.',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png',
      significance: 'Symbolizes prosperity and abundance.'
    }
  ];

  const prasadPacks = [
    {
      id: 1,
      name: 'Ram Mandir Special Box',
      contents: 'Contains Radha-Ram Dana, Panjiri, and a small Ram darshan photo',
      price: '₹151',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png'
    },
    {
      id: 2,
      name: 'Ayodhya Blessings Deluxe Pack',
      contents: 'Assortment of laddoos, pedas, and Radha-Ram Dana in a decorative box',
      price: '₹251',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png'
    },
    {
      id: 3,
      name: 'Family Prasad Combo',
      contents: 'Large quantities of various prasad items suitable for distribution among family',
      price: '₹501',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png'
    },
    {
      id: 4,
      name: 'Premium Gift Box',
      contents: 'High-quality assortment of prasad with Ram Mandir memorabilia in a decorative wooden box',
      price: '₹1001',
      image: '/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png'
    }
  ];

  return (
    <div className="page-transition pb-12 pt-16">
      <FlowerPetals />
      
      <PageBanner 
        title="Sacred Prasad" 
        subtitle="Divine Offerings from Ayodhya" 
        backgroundImage="/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png"
      />
      
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-ayodhya-maroon mb-6">The Divine Prasad of Ayodhya</h2>
          <p className="text-lg">
            Prasad, or sacred food offerings, holds special significance in Hindu tradition. In Ayodhya, prasad from the Ram Mandir and other temples is considered highly auspicious, 
            carrying the divine blessings of Lord Ram. These sacred offerings are prepared with pure ingredients and devotion, following traditional recipes.
          </p>
        </section>
        
        {/* What is Prasad */}
        <section className="max-w-4xl mx-auto mb-16 bg-ayodhya-cream p-8 rounded-lg section-animate">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Understanding Prasad</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Prasad (प्रसाद) is food that is first offered to a deity during worship and then distributed to devotees as a blessed item. The word comes from Sanskrit and means "grace" or "blessing."
              </p>
              <p className="mb-4">
                In Hindu tradition, prasad is considered to be infused with divine energy after being offered to the deity. Accepting prasad is seen as receiving the deity's blessing directly.
              </p>
              <p>
                The preparation of prasad follows specific guidelines, including purity of ingredients, cleanliness of the preparation area, and the devotional mindset of those preparing it. This ensures that the offering is worthy of being presented to the divine.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/2ec52b14-6110-43c0-8ecd-1ec96dcabe87.png" 
                alt="Prasad Offering" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Prasad Items */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-8 text-center">Famous Prasad of Ayodhya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prasadItems.map((item) => (
              <div key={item.id} className="card-custom h-full flex flex-col section-animate">
                <div className="image-container h-48">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-ayodhya-maroon mb-2">{item.name}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-2">Significance:</h4>
                    <p className="text-gray-600 italic">{item.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Prasad Packs */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Available Prasad Packages</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {prasadPacks.map((pack) => (
              <div key={pack.id} className="bg-white p-5 rounded-lg shadow-md flex">
                <div className="w-1/3 mr-4">
                  <img 
                    src={pack.image} 
                    alt={pack.name} 
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-lg font-bold text-ayodhya-maroon mb-2">{pack.name}</h3>
                  <p className="text-gray-700 mb-2 text-sm">{pack.contents}</p>
                  <p className="font-semibold text-ayodhya-saffron">{pack.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-ayodhya-cream p-6 rounded-lg text-center">
            <p className="text-lg">
              Prasad packages can be purchased at the Ram Mandir complex and various authorized shops in Ayodhya. 
              They make meaningful gifts to share blessings with friends and family.
            </p>
          </div>
        </section>
        
        {/* Prasad Distribution */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Prasad Distribution</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">At the Temple</h3>
              <ul className="space-y-2">
                <li><strong>Free Prasad:</strong> Basic prasad (usually Radha-Ram Dana) is distributed to all devotees after darshan.</li>
                <li><strong>Special Prasad:</strong> Available through specific seva offerings at the temple.</li>
                <li><strong>Distribution Times:</strong> Throughout the day during temple opening hours.</li>
                <li><strong>Prasad Counters:</strong> Located at designated areas within the temple complex.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ayodhya-maroon mb-3">Prasad Shops</h3>
              <ul className="space-y-2">
                <li><strong>Authorized Vendors:</strong> Several shops near the temple sell officially sanctified prasad.</li>
                <li><strong>Packaging Options:</strong> Available in various quantities and gift packages.</li>
                <li><strong>Shelf Life:</strong> Most prasad items have extended shelf life for travelers.</li>
                <li><strong>Authenticity:</strong> Look for authorized seals to ensure authentic temple prasad.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Prasad Etiquette */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-ayodhya-maroon mb-6 text-center">Prasad Etiquette</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Receiving Prasad:</strong> Accept prasad with your right hand or both hands as a sign of respect, never with just the left hand.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Consumption:</strong> Prasad should be consumed with reverence, not treated as regular food. It's customary to eat at least a small portion immediately upon receiving.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Sharing:</strong> Sharing prasad with family and friends is encouraged as it spreads the divine blessings.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Storage:</strong> If not consuming immediately, store prasad in a clean, respectful place, separate from regular food items.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ayodhya-saffron mr-2">●</span>
                <span><strong>Disposal:</strong> If prasad cannot be consumed, it should never be thrown away as garbage. It should be respectfully given to plants or immersed in flowing water.</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg italic text-ayodhya-maroon">
              "The prasad from Ayodhya carries not just sweetness for the tongue, but the divine blessings of Lord Ram for the soul."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrasadPage;
