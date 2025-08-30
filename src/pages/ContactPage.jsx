import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { mockAPI, mockData } from '../mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await mockAPI.sendContactForm(formData);
      setSubmitStatus({ type: 'success', message: result.message });
      setFormData({ name: '', phone: '', email: '', message: '', consent: false });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const salonInfo = mockData.salon;

  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://customer-assets.emergentagent.com/job_d525a650-d164-4c7a-802f-829b94c560ec/artifacts/p0jfa7mc_about.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact
          </h1>
          <p className="text-xl md:text-2xl">
            Prenons rendez-vous pour sublimer vos ongles
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-[#111111] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Nous Contacter
                </h2>
                <p className="text-lg text-[#6B6B6B] mb-8">
                  N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous. Nous sommes là pour vous accompagner.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Téléphone</h3>
                    <a href={`tel:${salonInfo.phone.replace(/\s/g, '')}`} className="text-[#CBA57A] hover:underline">
                      {salonInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Email</h3>
                    <a href={`mailto:${salonInfo.email}`} className="text-[#CBA57A] hover:underline">
                      {salonInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] mb-1">Adresse</h3>
                    <p className="text-[#6B6B6B]">{salonInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#CBA57A]/20">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-[#CBA57A] mr-3" />
                  <h3 className="text-xl font-bold text-[#111111]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Horaires d'Ouverture
                  </h3>
                </div>
                <div className="space-y-2">
                  {Object.entries(salonInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-[#111111] font-medium">{day}</span>
                      <span className={`${hours === 'Fermé' ? 'text-[#6B6B6B]' : 'text-[#CBA57A]'}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${salonInfo.phone.replace(/\s/g, '')}`}
                  className="flex-1 bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white px-6 py-3 rounded-full text-center font-medium hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Appeler Maintenant
                </a>
                <a 
                  href={`https://wa.me/33${salonInfo.phone.replace(/\s/g, '').substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-[#CBA57A] text-[#CBA57A] px-6 py-3 rounded-full text-center font-medium hover:bg-[#CBA57A] hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare size={20} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#CBA57A]/20 shadow-lg">
              <h3 className="text-2xl font-bold text-[#111111] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Envoyez-nous un Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8C4D1] rounded-lg focus:ring-2 focus:ring-[#CBA57A] focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#111111] mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8C4D1] rounded-lg focus:ring-2 focus:ring-[#CBA57A] focus:border-transparent outline-none transition-all"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#E8C4D1] rounded-lg focus:ring-2 focus:ring-[#CBA57A] focus:border-transparent outline-none transition-all"
                    placeholder="Votre adresse email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#E8C4D1] rounded-lg focus:ring-2 focus:ring-[#CBA57A] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Décrivez vos besoins, vos envies..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 mr-3 accent-[#CBA57A]"
                  />
                  <label htmlFor="consent" className="text-sm text-[#6B6B6B]">
                    J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#E8C4D1] to-[#CBA57A] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Envoyer le Message
                    </>
                  )}
                </button>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#CBA57A]/20 shadow-lg">
              <h3 className="text-2xl font-bold text-[#111111] mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Nous Trouver
              </h3>
              <div className="aspect-video bg-gradient-to-br from-[#E8C4D1]/30 to-[#CBA57A]/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#CBA57A] mx-auto mb-4" />
                  <p className="text-[#111111] font-medium text-lg">Plan Google Maps</p>
                  <p className="text-[#6B6B6B] mt-2">Intégration à venir</p>
                  <p className="text-sm text-[#6B6B6B] mt-4">{salonInfo.address}</p>
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