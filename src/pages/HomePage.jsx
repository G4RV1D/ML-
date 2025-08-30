// src/pages/HomePage.jsx
import { mockData } from "../mock";

export default function HomePage() {
  const salon = mockData?.salon ?? { name: "M.L Onglerie", tagline: "", phone: "" };

  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-6 py-16 text-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/marbre.jpg)`,
      }}
    >
      <div className="max-w-3xl bg-white/70 backdrop-blur rounded-2xl p-8 shadow">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{salon.name}</h1>
        <p className="text-lg text-[#6B6B6B] mb-6">{salon.tagline}</p>
        <a
  href="https://ml-onglerie.reservio.com/services"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-full px-8 py-3 bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white font-medium hover:scale-105 transition"
  aria-label="Prendre rendez-vous en ligne"
>
  Réserver en ligne
</a>
      </div>

      {/* Debug temporaire : vérifie que l'image est bien servie puis supprime ce <img> */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/marbre.jpg`} alt="test" style={{ width: 120 }} /> */}
    </section>
  );
}
