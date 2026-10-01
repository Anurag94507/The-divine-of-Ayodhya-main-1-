import { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import FlowerPetals from '../components/FlowerPetals';
import { Button } from "@/components/ui/button";
import { useToast } from '@/components/ui/use-toast';
import { Send, MapPin, Phone, Mail, Clock, ArrowUpRight, MessageSquare, CheckCircle } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "✅ Message Sent Successfully",
          description: data.message,
          variant: "default",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Connection Error",
        description: "Could not reach the server. Please check if the backend is running and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const newBg = "https://file.pngbackground.com/uploads/preview/ayodhya-ram-mandir-poster-background-hd-editing-images-cb-pic-5zvprcl.webp";

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      details: ['Near I.E.T Campus, Ayodhya,', 'Uttar Pradesh, India - 224001'],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      details: ['+91 7800509636'],
      link: 'tel:+917800509636',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      details: ['divineofayodhya@gmail.com'],
      link: 'mailto:divineofayodhya@gmail.com',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="page-transition pb-0 pt-16">
      <FlowerPetals />
      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch with Ayodhya Blessings"
        backgroundImage={newBg}
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ayodhya-saffron/10 rounded-full mb-6">
            <MessageSquare size={16} className="text-ayodhya-saffron" />
            <span className="text-sm font-medium text-ayodhya-saffron">We're Here to Help</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ayodhya-maroon mb-4">We'd Love to Hear From You</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions about visiting Ayodhya? Need assistance planning your pilgrimage? Or simply want to share your experience?
            Fill out the form below or use our contact information to reach out to us.
          </p>
          <div className="ornament-wide mt-6" />
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-16 section-gradient-warm relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ayodhya-saffron/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-ayodhya-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ayodhya-saffron to-ayodhya-orange flex items-center justify-center shadow-md">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ayodhya-maroon">Send us a Message</h3>
                </div>

                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-4 animate-scale-in">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                    <p className="text-gray-500">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-input-premium ${formErrors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                          placeholder="Your full name"
                        />
                        {formErrors.name && <p className="mt-1 text-red-500 text-xs">{formErrors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input-premium ${formErrors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                          placeholder="your@email.com"
                        />
                        {formErrors.email && <p className="mt-1 text-red-500 text-xs">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-input-premium ${formErrors.phone ? 'border-red-400 focus:border-red-400' : ''}`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {formErrors.phone && <p className="mt-1 text-red-500 text-xs">{formErrors.phone}</p>}
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-input-premium text-gray-700"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Trip Planning">Trip Planning</option>
                          <option value="Accommodations">Accommodations</option>
                          <option value="Temple Information">Temple Information</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`form-input-premium resize-none ${formErrors.message ? 'border-red-400 focus:border-red-400' : ''}`}
                        placeholder="Tell us how we can help you..."
                      />
                      {formErrors.message && <p className="mt-1 text-red-500 text-xs">{formErrors.message}</p>}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-ayodhya-saffron to-ayodhya-orange text-white hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send size={18} />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ayodhya-saffron/10 to-ayodhya-orange/10 flex items-center justify-center flex-shrink-0 text-ayodhya-saffron">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-ayodhya-maroon mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        info.link ? (
                          <a key={i} href={info.link} className="block text-gray-600 text-sm hover:text-ayodhya-saffron transition-colors">
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Office Hours */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ayodhya-saffron/10 to-ayodhya-orange/10 flex items-center justify-center text-ayodhya-saffron">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-ayodhya-maroon">Office Hours</h4>
                </div>
                <div className="space-y-3">
                  {officeHours.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-orange-50 last:border-0">
                      <span className="text-sm text-gray-600">{item.day}</span>
                      <span className={`text-sm font-medium ${item.hours === 'Closed' ? 'text-red-400' : 'text-ayodhya-maroon'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="font-bold text-ayodhya-maroon mb-4">Follow Us</h4>
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
                      className="w-10 h-10 rounded-xl bg-ayodhya-saffron/10 hover:bg-gradient-to-br hover:from-ayodhya-saffron hover:to-ayodhya-orange text-ayodhya-saffron hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;