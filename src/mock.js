// Mock data for M.L Onglerie website

export const mockData = {
  salon: {
    name: "M.L Onglerie",
    tagline: "Ongles soignés, esprit léger",
    phone: "07 43 32 41 40",
    address: " 2 Cr d'Orléans, 34480 Saint-Geniès-de-Fontedit",
    email: "contact@mlonglerie.fr",
    hours: {
      "Lundi": "Fermé",
      "Mardi": "9h00 - 18h00",
      "Mercredi": "9h00 - 18h00", 
      "Jeudi": "9h00 - 20h00",
      "Vendredi": "9h00 - 18h00",
      "Samedi": "9h00 - 17h00",
      "Dimanche": "Fermé"
    }
  },

  gallery: {
    images: Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      url: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=400&fit=crop&crop=center`,
      alt: `Réalisation nail art ${i + 1}`,
      category: i % 3 === 0 ? 'nail-art' : i % 3 === 1 ? 'manucure' : 'gel'
    }))
  },

  testimonials: [
    {
      id: 1,
      name: "Sophie M.",
      text: "Un accueil chaleureux et un travail d'une précision remarquable. Mes ongles n'ont jamais été aussi beaux !",
      rating: 5
    },
    {
      id: 2, 
      name: "Claire L.",
      text: "Professionnalisme et créativité au rendez-vous. Je recommande vivement M.L Onglerie !",
      rating: 5
    },
    {
      id: 3,
      name: "Emma D.",
      text: "Un moment de détente absolue dans un cadre magnifique. Merci pour ce savoir-faire exceptionnel.",
      rating: 5
    }
  ],

  contact: {
    form: {
      fields: ['name', 'phone', 'email', 'message', 'consent'],
      successMessage: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer."
    },
    socialMedia: {
      instagram: "https://www.instagram.com/melanie.onglerie/",
      facebook: "https://www.facebook.com/profile.php?id=61567442702682"
    }
  }
};

// Mock API functions
export const mockAPI = {
  sendContactForm: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success (90% chance)
    if (Math.random() > 0.1) {
      return { success: true, message: mockData.contact.form.successMessage };
    } else {
      throw new Error(mockData.contact.form.errorMessage);
    }
  },

  getGalleryImages: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockData.gallery.images;
  },

  getSalonInfo: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockData.salon;
  }
};