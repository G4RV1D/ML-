import React from 'react';
import { Clock, Star, Palette } from 'lucide-react';

const PrestationsPage = () => {
  const prestations = [
    {
      category: "Manucure",
      services: [
        { name: "Manucure classique", duration: "45 min", price: "à partir de 35€" },
        { name: "Manucure spa", duration: "60 min", price: "à partir de 45€" },
        { name: "Soin des cuticules", duration: "30 min", price: "à partir de 25€" },
      ]
    },
    {
      category: "Vernis Semi-Permanent", 
      services: [
        { name: "Pose simple", duration: "60 min", price: "à partir de 40€" },
        { name: "Pose + manucure", duration: "90 min", price: "à partir de 65€" },
        { name: "Dépose", duration: "30 min", price: "à partir de 15€" },
      ]
    },
    {
      category: "Extensions & Gel",
      services: [
        { name: "Pose complète gel", duration: "120 min", price: "à partir de 70€" },
        { name: "Remplissage gel", duration: "90 min", price: "à partir de 50€" },
        { name: "Réparation ongle cassé", duration: "30 min", price: "à partir de 20€" },
      ]
    },
    {
      category: "Nail Art",
      services: [
        { name: "Nail art simple", duration: "+30 min", price: "à partir de 15€" },
        { name: "Nail art élaboré", duration: "+45 min", price: "à partir de 25€" },
        { name: "Décoration strass", duration: "+20 min", price: "à partir de 10€" },
      ]
    },
    {
      category: "Forfaits",
      services: [
        { name: "Forfait Découverte", duration: "90 min", price: "à partir de 55€", description: "Manucure + pose vernis semi-permanent" },
        { name: "Forfait Premium", duration: "120 min", price: "à partir de 85€", description: "Soin spa complet + extensions + nail art" },
        { name: "Forfait Entretien", duration: "75 min", price: "à partir de 45€", description: "Remplissage + manucure + vernis" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://customer-assets.emergentagent.com/job_d525a650-d164-4c7a-802f-829b94c560ec/artifacts/4enfpmzm_tarif.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nos Prestations
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Des soins sur-mesure pour sublimer vos ongles
          </p>
        </div>
      </section>

      {/* Prestations Section */}
      <section className="py-20 bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tarifs & Services
            </h2>
            <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
              Découvrez notre gamme complète de soins pour des ongles parfaits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {prestations.map((category, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#CBA57A]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {index === 0 && <Star size={24} className="text-white" />}
                    {index === 1 && <Palette size={24} className="text-white" />}
                    {index === 2 && <Star size={24} className="text-white" />}
                    {index === 3 && <Palette size={24} className="text-white" />}
                    {index === 4 && <Star size={24} className="text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-b border-[#E8C4D1]/30 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#111111] text-lg">
                            {service.name}
                          </h4>
                          {service.description && (
                            <p className="text-sm text-[#6B6B6B] mt-1">
                              {service.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-[#CBA57A] font-bold text-lg">
                            {service.price}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-[#6B6B6B]">
                        <Clock size={16} className="mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#E8C4D1]/10 to-[#CBA57A]/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#111111] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sur Mesure
              </h3>
              <p className="text-[#6B6B6B] mb-6">
                Chaque prestation peut être personnalisée selon vos envies. N'hésitez pas à me faire part de vos souhaits lors de la prise de rendez-vous.
              </p>
              <a 
                href="tel:0646417990" 
                className="inline-flex items-center bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrestationsPage;