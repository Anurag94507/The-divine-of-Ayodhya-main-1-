
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, BedDouble, Utensils, Compass } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const sacredPlaces = [
    { name: 'Ram Mandir', path: '/ram-mandir', icon: '🛕' },
    { name: 'Kanak Bhawan', path: '/kanak-bhawan', icon: '🏛️' },
    { name: 'Saryu Ghat', path: '/saryu-ghat', icon: '🌊' },
    { name: 'Hanuman Garhi', path: '/hanuman-garhi', icon: '🙏' },
    { name: 'Raja Dasharath Mahal', path: '/raja-dasharath-mahal', icon: '👑' },
  ];

  const services = [
    { name: 'Dharmshala', path: '/dharmshala', icon: <BedDouble size={16} /> },
    { name: 'Hotels', path: '/hotels', icon: <BedDouble size={16} /> },
    { name: 'Restaurants', path: '/restaurants', icon: <Utensils size={16} /> },
    { name: 'Bhojnalaya', path: '/bhojnalaya', icon: <Utensils size={16} /> },
    { name: 'Travel', path: '/travel', icon: <Compass size={16} /> },
    { name: 'Prasad', path: '/prasad', icon: '🙏' },
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
  ];

  const rightLinks = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const textColor = isScrolled ? 'text-gray-800' : 'text-white';
  const activeColor = 'text-ayodhya-saffron';
  const hoverColor = isScrolled ? 'hover:text-ayodhya-saffron' : 'hover:text-ayodhya-gold';
  const textShadow = !isScrolled ? { textShadow: '0 1px 4px rgba(0,0,0,0.5)' } : {};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-orange-100/50 py-2'
          : 'bg-gradient-to-b from-black/40 to-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center" ref={dropdownRef}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isScrolled
              ? 'bg-gradient-to-br from-ayodhya-saffron to-ayodhya-orange shadow-md shadow-orange-200'
              : 'bg-white/20 backdrop-blur-sm'
          }`}>
            <span className="text-xl">🙏</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-['Playfair_Display'] text-lg font-bold leading-tight transition-colors duration-300 ${
              isScrolled ? 'text-ayodhya-maroon' : 'text-white'
            }`} style={textShadow}>
              Ayodhya Blessings
            </span>
            <span className={`text-[10px] tracking-[3px] uppercase font-medium transition-colors duration-300 ${
              isScrolled ? 'text-ayodhya-saffron' : 'text-ayodhya-gold'
            }`}>
              Divine Journey
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Home */}
          {mainLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive(link.path) ? activeColor : `${textColor} ${hoverColor}`
              }`}
              style={textShadow}
            >
              {link.name}
            </Link>
          ))}

          {/* Sacred Places Dropdown */}
          <div className="relative">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                sacredPlaces.some(p => isActive(p.path)) ? activeColor : `${textColor} ${hoverColor}`
              }`}
              style={textShadow}
              onClick={() => setActiveDropdown(activeDropdown === 'places' ? null : 'places')}
              onMouseEnter={() => setActiveDropdown('places')}
            >
              Sacred Places
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'places' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'places' && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-orange-200/30 border border-orange-100/50 py-2 animate-scale-in overflow-hidden"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="px-4 py-2 border-b border-orange-100/50">
                  <span className="text-xs font-semibold text-ayodhya-saffron uppercase tracking-wider">Sacred Places</span>
                </div>
                {sacredPlaces.map(place => (
                  <Link
                    key={place.path}
                    to={place.path}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                      isActive(place.path)
                        ? 'bg-ayodhya-saffron/10 text-ayodhya-saffron font-medium'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-ayodhya-saffron'
                    }`}
                  >
                    <span className="text-base">{place.icon}</span>
                    {place.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                services.some(s => isActive(s.path)) ? activeColor : `${textColor} ${hoverColor}`
              }`}
              style={textShadow}
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              onMouseEnter={() => setActiveDropdown('services')}
            >
              Services
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-orange-200/30 border border-orange-100/50 py-2 animate-scale-in overflow-hidden"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="px-4 py-2 border-b border-orange-100/50">
                  <span className="text-xs font-semibold text-ayodhya-saffron uppercase tracking-wider">Services</span>
                </div>
                {services.map(service => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                      isActive(service.path)
                        ? 'bg-ayodhya-saffron/10 text-ayodhya-saffron font-medium'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-ayodhya-saffron'
                    }`}
                  >
                    <span className="text-ayodhya-saffron">{typeof service.icon === 'string' ? service.icon : service.icon}</span>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Right Links */}
          {rightLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive(link.path) ? activeColor : `${textColor} ${hoverColor}`
              }`}
              style={textShadow}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link to="/register" className="ml-2">
            <button className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 hover:-translate-y-0.5'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}>
              Register Yatra
            </button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-orange-100/50 shadow-xl">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link to="/" className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive('/') ? 'bg-ayodhya-saffron/10 text-ayodhya-saffron' : 'text-gray-700 hover:bg-orange-50'
            }`}>Home</Link>

            {/* Sacred Places Section */}
            <div className="px-4 pt-3 pb-1">
              <span className="text-xs font-semibold text-ayodhya-saffron uppercase tracking-wider">Sacred Places</span>
            </div>
            {sacredPlaces.map(place => (
              <Link key={place.path} to={place.path} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                isActive(place.path) ? 'bg-ayodhya-saffron/10 text-ayodhya-saffron font-medium' : 'text-gray-600 hover:bg-orange-50'
              }`}>
                <span>{place.icon}</span> {place.name}
              </Link>
            ))}

            {/* Services Section */}
            <div className="px-4 pt-3 pb-1">
              <span className="text-xs font-semibold text-ayodhya-saffron uppercase tracking-wider">Services</span>
            </div>
            {services.map(service => (
              <Link key={service.path} to={service.path} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                isActive(service.path) ? 'bg-ayodhya-saffron/10 text-ayodhya-saffron font-medium' : 'text-gray-600 hover:bg-orange-50'
              }`}>
                <span className="text-ayodhya-saffron">{typeof service.icon === 'string' ? service.icon : service.icon}</span> {service.name}
              </Link>
            ))}

            <div className="h-px bg-orange-100 my-2" />

            {rightLinks.map(link => (
              <Link key={link.path} to={link.path} className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(link.path) ? 'bg-ayodhya-saffron/10 text-ayodhya-saffron' : 'text-gray-700 hover:bg-orange-50'
              }`}>{link.name}</Link>
            ))}

            <Link to="/register" className="block mt-3">
              <button className="w-full py-3 bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white rounded-xl font-semibold shadow-md">
                Register for Yatra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
