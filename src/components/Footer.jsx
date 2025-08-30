import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const salonInfo = mockData.salon;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/salon', label: 'Le Salon' },
    { path: '/prestations', label: 'Nos Prestations' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-black/10">
  <img
    src="/images/2.png"            // ← ton logo
    alt="ML Onglerie"
    className="h-full w-full object-cover"
    loading="eager"
  />
</div>

            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Votre salon d'onglerie de confiance, où l'art de la beauté des ongles rencontre l'excellence du service. 
              Chaque détail compte pour sublimer vos mains.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="text-[#CBA57A] mr-3" />
                <a href={`tel:${salonInfo.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-[#E8C4D1] transition-colors">
                  {salonInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-[#CBA57A] mr-3" />
                <a href={`mailto:${salonInfo.email}`} className="text-gray-300 hover:text-[#E8C4D1] transition-colors">
                  {salonInfo.email}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-[#CBA57A] mr-3 mt-0.5" />
                <span className="text-gray-300">{salonInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#E8C4D1] transition-colors">
                  Accueil
                </Link>
              </li>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-[#E8C4D1] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Horaires
            </h3>
            <div className="space-y-2 mb-8">
              {Object.entries(salonInfo.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-gray-300">{day}</span>
                  <span className={`${hours === 'Fermé' ? 'text-gray-500' : 'text-[#E8C4D1]'}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href={mockData.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a 
                  href={mockData.contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Facebook size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} M.L Onglerie. Tous droits réservés.
            </div>
            
            <div className="flex items-center mt-4 md:mt-0 text-gray-400 text-sm">
              <span>Site créé avec</span>
              <Heart size={16} className="text-[#E8C4D1] mx-2" />
              <span>pour vous</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;