import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Scissors, Image, Phone, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/salon', label: 'Salon', icon: MapPin },
    { path: '/prestations', label: 'Prestations', icon: Scissors },
    { path: '/galerie', label: 'Galerie', icon: Image },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-black/10">
              <img
                src="/images/2.png"        
                alt="ML Onglerie"
                className="h-full w-full object-cover"
                loading="eager"
              />
</div>

            </Link>
            
            <div className="flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative font-medium transition-colors duration-200 ${
                    isActivePath(path) 
                      ? 'text-[#CBA57A]' 
                      : 'text-[#111111] hover:text-[#E8C4D1]'
                  }`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#CBA57A] transition-all duration-300 ${
                    isActivePath(path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

           <a
  href="https://ml-onglerie.reservio.com/services"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-full px-8 py-3 bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white font-medium hover:scale-105 transition"
  aria-label="Prendre RDV"
>
  Prendre RDV
</a>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20">
          <div className="flex items-center space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  isActivePath(path) 
                    ? 'text-[#CBA57A] bg-[#CBA57A]/10' 
                    : 'text-[#6B6B6B] hover:text-[#E8C4D1] hover:scale-110'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1 font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative bg-white/95 backdrop-blur-md h-full w-full flex flex-col items-center justify-center">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#E8C4D1]/20"
            >
              <X size={24} />
            </button>
            <div className="space-y-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className="flex items-center space-x-4 text-2xl font-medium text-[#111111] hover:text-[#CBA57A] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={32} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
            <a 
              href="tel:0646417990" 
              className="mt-12 bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      )}

      {/* Spacer for desktop nav */}
      <div className="h-20 md:block hidden"></div>
      
      {/* Spacer for mobile dock */}
      <div className="h-24 md:hidden block"></div>
    </>
  );
};

export default Navigation;