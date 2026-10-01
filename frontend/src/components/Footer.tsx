
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sacredPlaces = [
    { name: 'Ram Mandir', path: '/ram-mandir' },
    { name: 'Kanak Bhawan', path: '/kanak-bhawan' },
    { name: 'Hanuman Garhi', path: '/hanuman-garhi' },
    { name: 'Dasharath Mahal', path: '/raja-dasharath-mahal' },
    { name: 'Saryu Ghat', path: '/saryu-ghat' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Register for Yatra', path: '/register' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Dharmshala', path: '/dharmshala' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Bhojnalaya', path: '/bhojnalaya' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Travel', path: '/travel' },
    { name: 'Prasad', path: '/prasad' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-ayodhya-saffron via-ayodhya-gold to-ayodhya-saffron" />

      {/* Main footer content */}
      <div className="bg-gradient-to-b from-[#3d0000] to-[#2a0000] text-white">
        {/* CTA Banner */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">Ready to Experience Divine Ayodhya?</h3>
                <p className="text-white/60 text-sm">Plan your sacred pilgrimage with our complete travel guide</p>
              </div>
              <Link to="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  Get Started <ArrowUpRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ayodhya-saffron to-ayodhya-orange flex items-center justify-center shadow-lg">
                  <span className="text-xl">🙏</span>
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold leading-tight">Ayodhya Blessings</h3>
                  <span className="text-[10px] tracking-[2px] uppercase text-ayodhya-gold">Divine Journey</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Discover the divine experience of Ayodhya, the birthplace of Lord Ram and home to the magnificent Ram Mandir.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { href: 'https://www.facebook.com/share/1Ac1kPRvE7/?mibextid=qi2Omg', label: 'Facebook', icon: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  )},
                  { href: 'https://www.instagram.com/divine_of_ayodhya?igsh=YnE4N3NlZzZwNnln', label: 'Instagram', icon: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                  )},
                  { href: 'https://x.com/AyodhyaDivine?t=KsZqgDznEfr6Q60IkPiy7w&s=09', label: 'Twitter', icon: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  )},
                  { href: 'https://youtube.com/@devineofayodhya?si=iPpeVIhy7FspzBZx', label: 'YouTube', icon: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                  )},
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-ayodhya-saffron flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ayodhya-gold mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-white/60 hover:text-ayodhya-saffron transition-colors duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-ayodhya-saffron/50 group-hover:bg-ayodhya-saffron transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sacred Places */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ayodhya-gold mb-5">Sacred Places</h4>
              <ul className="space-y-2.5">
                {sacredPlaces.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-white/60 hover:text-ayodhya-saffron transition-colors duration-300 text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-ayodhya-saffron/50 group-hover:bg-ayodhya-saffron transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://srjbtkshetra.org/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-ayodhya-saffron transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-ayodhya-saffron/50 group-hover:bg-ayodhya-saffron transition-colors" />
                    Official Temple Website
                    <ArrowUpRight size={12} className="opacity-50" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ayodhya-gold mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-ayodhya-saffron mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">Near I.E.T Campus, Ayodhya, Uttar Pradesh, India - 224001</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-ayodhya-saffron flex-shrink-0" />
                  <a href="tel:+917800509636" className="text-white/60 hover:text-ayodhya-saffron transition-colors">+91 7800509636</a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-ayodhya-saffron flex-shrink-0" />
                  <a href="mailto:divineofayodhya@gmail.com" className="text-white/60 hover:text-ayodhya-saffron transition-colors">divineofayodhya@gmail.com</a>
                </li>
              </ul>

              {/* Services Mini Links */}
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ayodhya-gold mt-6 mb-3">Services</h4>
              <div className="flex flex-wrap gap-2">
                {services.map(s => (
                  <Link key={s.path} to={s.path} className="px-3 py-1 text-xs bg-white/5 hover:bg-ayodhya-saffron/20 text-white/50 hover:text-ayodhya-saffron rounded-lg transition-all duration-300">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
              <p>Developed with <Heart size={12} className="inline text-red-400 mx-1" /> by Kartikey Vishwakarma</p>
              <p>© {currentYear} Ayodhya Blessings. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
