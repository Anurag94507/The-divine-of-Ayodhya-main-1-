
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Ram Mandir', path: '/ram-mandir' },
    { name: 'Kanak Bhawan', path: '/kanak-bhawan' },
    { name: 'Saryu Ghat', path: '/saryu-ghat' },
    { name: 'Hanuman Garhi', path: '/hanuman-garhi' },
    { name: 'Raja Dasharath Mahal', path: '/raja-dasharath-mahal' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Dharmshala', path: '/dharmshala' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Travel', path: '/travel' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/ayodhya-google-logo.png" alt="Ayodhya Blessings" className="h-8" />
          <span className={`font-['Yatra_One'] text-lg ${
            isScrolled 
              ? 'text-ayodhya-maroon' 
              : 'text-white'
          }`} style={!isScrolled ? { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' } : {}}> {/* Added text-shadow when not scrolled */}
            Ayodhya Blessings
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2 py-1 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-ayodhya-saffron'
                  : `${isScrolled 
                      ? 'text-gray-700 hover:text-ayodhya-saffron' 
                      : 'text-white hover:text-ayodhya-saffron'
                    }`
              }`}
              style={!isScrolled ? { textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' } : {}}> {/* Added text-shadow when not scrolled */}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-2 py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-ayodhya-saffron'
                    : 'text-gray-700 hover:text-ayodhya-saffron'
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
