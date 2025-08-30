import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const COUNT = 8; // ← mets ici le nombre d'images que tu as dans public/images/galerie

export default function GaleriePage() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charge une liste d'URLs vers /public
  useEffect(() => {
    const imgs = Array.from({ length: COUNT }, (_, i) => {
      const n = i + 1;
      return {
        id: n,
        src: `/images/galerie/${n}.jpg`, // .jpg par défaut
        alt: `Réalisation ${n}`,
      };
    });
    setImages(imgs);
    setLoading(false);
  }, []);

  const open = (index) => setSelected({ index, ...images[index] });
  const close = () => setSelected(null);
  const go = (dir) => {
    if (!selected) return;
    const next =
      dir === "next"
        ? (selected.index + 1) % images.length
        : (selected.index - 1 + images.length) % images.length;
    setSelected({ index: next, ...images[next] });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      {/* HERO */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/satin.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center text-white z-10 max-w-4xl px-6">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Galerie
          </h1>
          <p className="text-xl md:text-2xl">Découvrez nos plus belles réalisations</p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#E8C4D1]/20 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2
                  className="text-4xl font-bold text-[#111111] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Nos Réalisations
                </h2>
                <p className="text-lg text-[#6B6B6B]">
                  Une sélection de nos créations les plus remarquables
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => open(idx)}
                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    aria-label={`Ouvrir l'image ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // si 1.jpg n'existe pas → tente .jpeg puis .webp
                        const tries = [".jpeg", ".webp", ".png"];
                        const base = img.src.replace(/\.(jpg|jpeg|webp|png)$/i, "");
                        const i = (e.target.dataset.i | 0);
                        if (i < tries.length) {
                          e.target.dataset.i = i + 1;
                          e.target.src = `${base}${tries[i]}`;
                        }
                      }}
                    />
                    {/* Overlay léger au survol */}
                    <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={close}
              className="absolute -top-12 right-0 text-white hover:text-[#E8C4D1] transition-colors"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>

            <div className="bg-white rounded-2xl p-3">
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[80vh] w-full object-contain rounded-xl"
              />
            </div>

            <button
              onClick={() => go("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111111] p-3 rounded-full transition"
              aria-label="Précédente"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => go("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111111] p-3 rounded-full transition"
              aria-label="Suivante"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
