import React, { useEffect, useState } from "react";
import { MapPin, Clock, Award, Heart } from "lucide-react";

const SalonPage = () => {
  const services = [
    "Manucure classique et spa",
    "Pose de vernis semi-permanent", 
    "Extensions et remplissage gel",
    "Nail art créatif et personnalisé",
    "Soins des cuticules",
    "French manucure revisitée"
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "L'amour du beau geste et de la perfection dans chaque détail"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Formation continue et maîtrise des techniques les plus avancées"
    },
    {
      icon: MapPin,
      title: "Proximité",
      description: "Un salon à taille humaine pour une relation privilégiée"
    }
  ];
  const slides = [
  "/images/salon-1.jpg",
  "/images/salon-2.jpeg",
  "/images/salon-3.jpeg",
  "/images/salon-4.jpeg",
];
const [i, setI] = useState(0);
const [paused, setPaused] = useState(false);
// auto-play (pause quand on survole)
useEffect(() => {
  if (paused || slides.length <= 1) return;
  const id = setInterval(() => setI((p) => (p + 1) % slides.length), 2000);
  return () => clearInterval(id);
}, [paused]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
  className="relative h-[80vh] md:h-screen overflow-hidden"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
  {/* Slides en arrière-plan avec fondu */}
  {slides.map((src, idx) => (
    <div
      key={src + idx}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
        idx === i ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url('${src}')`,
      }}
      aria-hidden={idx !== i}
    />
  ))}

  {/* Contenu au-dessus des images */}
  <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
    <div className="max-w-4xl">
      <h1
        className="text-5xl md:text-7xl font-bold mb-6"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Votre Salon
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Un écrin de beauté où prendre soin de soi devient un art de vivre
      </p>
    </div>
  </div>

  {/* Petits points de navigation */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setI(idx)}
        aria-label={`Aller au visuel ${idx + 1}`}
        className={`h-2.5 w-2.5 rounded-full transition ${
          idx === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
        }`}
      />
    ))}
  </div>
</section>

      {/* Story Section */}
      <section className="py-20 bg-[#F7F7F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                L'histoire de  
                <span className="text-[#CBA57A]"> M.L Onglerie</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed">
                <p>
                  Née d'une passion pour l'art de la beauté des ongles, M.L Onglerie vous accueille dans un cadre chaleureux et raffiné. Ma philosophie ? Allier savoir-faire traditionnel et innovations techniques pour sublimer vos mains.
                </p>
                <p>
                  Chaque geste est pensé pour votre bien-être : de l'accueil personnalisé aux soins sur-mesure, en passant par l'hygiène irréprochable de nos équipements aisni qu'une écoute attentive. Prendre soin de ses ongles, c'est se faire du bien au quotidien.
                </p>
                <p>
                  Continuellement formée aux dernières tendances et techniques, je mets mon expertise à votre service pour créer ensemble le look parfait qui vous ressemble.
                </p>
              </div>

              <div className="mt-10">
                <a
                      href="https://ml-onglerie.reservio.com/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full px-8 py-3 bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white font-medium hover:scale-105 transition"
                      aria-label="Réserver votre créneau"
                     >
                     Réserver votre créneau
                 </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#CBA57A]/20 shadow-lg">
                <h3 className="text-2xl font-bold text-[#111111] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Nos Services Phares
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] rounded-full mr-4"></div>
                      <span className="text-[#6B6B6B]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nos Valeurs
            </h2>
            <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
              Ce qui guide notre approche et fait la différence dans votre expérience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-[#E8C4D1] to-[#CBA57A] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalonPage;