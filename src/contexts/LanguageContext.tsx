
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  nav: {
    home: string;
    gallery: string;
    testimonials: string;
    contact: string;
    reserve: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    reserve: string;
    watchVideo: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    mascotTitle: string;
    mascotDescription: string;
    yearsExperience: string;
    happyKids: string;
    satisfaction: string;
    certified: string;
    officialInstructors: string;
  };
  benefits: {
    title: string;
    description: string;
    maxSafety: string;
    maxSafetyDesc: string;
    guaranteedFun: string;
    guaranteedFunDesc: string;
    fastProgress: string;
    fastProgressDesc: string;
    smallGroups: string;
    smallGroupsDesc: string;
    flexibleSchedules: string;
    flexibleSchedulesDesc: string;
    loveForSkiing: string;
    loveForSkiingDesc: string;
    readyForAdventure: string;
    readyForAdventureDesc: string;
    reserveNow: string;
  };
  footer: {
    description: string;
    contact: string;
    station: string;
    quickLinks: string;
    whatIs: string;
    benefits: string;
    gallery: string;
    testimonials: string;
    reservations: string;
    season: string;
    start: string;
    end: string;
    copyright: string;
    privacyPolicy: string;
    termsOfUse: string;
    cookies: string;
  };
}

const translations: Record<string, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      gallery: 'Galería',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      reserve: 'Reservar'
    },
    hero: {
      title: 'Magic Ski',
      subtitle: 'Grau Roig',
      description: 'La escuela de esquí más mágica de los Pirineos. Donde los pequeños aventureros descubren la pasión por la nieve y el esquí.',
      reserve: 'Reservar',
      watchVideo: 'Ver video'
    },
    about: {
      title: '¿Qué es Magic Ski?',
      description1: 'El Club Màgic Ski es un club lúdico de esquí donde se enseña a los alumnos a disfrutar de la montaña con respeto hacia la naturaleza y hacia las personas. Los valores como el respeto, la cooperación y el trabajo en equipo son pilares fundamentales de nuestra enseñanza. Nos divertimos aprendiendo y aprendemos divirtiéndonos.',
      description2: 'El Club Màgic Ski ofrece clases de esquí para niños y adolescentes durante toda la temporada. El punto base del club es la zona de Planells, donde se encuentra el Jardín de Nieve, instalación idónea para los más pequeños que apenas empiezan a esquiar. Los más grandes, junto con su monitor que le acompañará toda la temporada, podrán descubrir la estación aprendiendo y perfeccionando la técnica.',
      mascotTitle: '¡Conoce a nuestra mascota!',
      mascotDescription: 'Los niños aprenden acompañados de nuestra querida mascota, que hace que cada clase sea una aventura mágica llena de diversión y aprendizaje.',
      yearsExperience: 'Años experiencia',
      happyKids: 'Niños felices',
      satisfaction: 'Satisfacción',
      certified: 'Certificados',
      officialInstructors: 'Instructores oficiales'
    },
    benefits: {
      title: '¿Por qué elegir Magic Ski?',
      description: 'Descubre todos los beneficios que hacen de nuestra escuela la mejor opción para la aventura invernal de tus hijos.',
      maxSafety: 'Máxima Seguridad',
      maxSafetyDesc: 'Protocolos de seguridad certificados y equipamiento de última generación para cada niño.',
      guaranteedFun: 'Diversión Garantizada',
      guaranteedFunDesc: 'Métodos de enseñanza lúdicos que convierten cada clase en una aventura mágica.',
      fastProgress: 'Progreso Rápido',
      fastProgressDesc: 'Técnicas probadas que permiten a los niños avanzar de forma natural y efectiva.',
      smallGroups: 'Grupos Reducidos',
      smallGroupsDesc: 'Máximo 6 niños por instructor para una atención personalizada y de calidad.',
      flexibleSchedules: 'Horarios Flexibles',
      flexibleSchedulesDesc: 'Clases adaptadas a las necesidades de cada familia con opciones de mañana y tarde.',
      loveForSkiing: 'Amor por el Esquí',
      loveForSkiingDesc: 'Creamos una conexión emocional positiva con la montaña y los deportes de invierno.',
      readyForAdventure: '¿Listo para la aventura?',
      readyForAdventureDesc: 'Únete a miles de familias que han confiado en Magic Ski para crear recuerdos inolvidables en la nieve.',
      reserveNow: 'Reservar ahora'
    },
    footer: {
      description: 'La escuela de esquí infantil más prestigiosa de los Pirineos. Creando recuerdos mágicos y esquiadores seguros desde hace más de 15 años.',
      contact: 'Contacto',
      station: 'Estación Grau Roig',
      quickLinks: 'Enlaces rápidos',
      whatIs: '¿Qué es Magic Ski?',
      benefits: 'Beneficios',
      gallery: 'Galería',
      testimonials: 'Testimonios',
      reservations: 'Reservas',
      season: 'Temporada 2024-25',
      start: 'Inicio: 30 de noviembre',
      end: 'Fin: 20 de abril',
      copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. Todos los derechos reservados.',
      privacyPolicy: 'Política de privacidad',
      termsOfUse: 'Términos de uso',
      cookies: 'Cookies'
    }
  },
  ca: {
    nav: {
      home: 'Inici',
      gallery: 'Galeria',
      testimonials: 'Testimonis',
      contact: 'Contacte',
      reserve: 'Reservar'
    },
    hero: {
      title: 'Magic Ski',
      subtitle: 'Grau Roig',
      description: "L'escola d'esquí més màgica dels Pirineus. On els petits aventurers descobreixen la passió per la neu i l'esquí.",
      reserve: 'Reservar',
      watchVideo: 'Veure vídeo'
    },
    about: {
      title: 'Què és Magic Ski?',
      description1: "El Club Màgic Ski és un club lúdic d'esquí on s'ensenya als alumnes a gaudir de la muntanya amb respecte cap a la natura i cap a les persones. Els valors com el respecte, la cooperació i el treball en equip són pilars fonamentals del nostre ensenyament. Ens divertim aprenent i aprenem divertint-nos.",
      description2: "El Club Màgic Ski ofereix classes d'esquí per a nens i adolescents durant tota la temporada. El punt base del club és la zona de Planells, on es troba el Jardí de Neu, instal·lació idònia per als més petits que tot just comencen a esquiar. Els més grans, juntament amb el seu monitor que l'acompanyarà tota la temporada, podran descobrir l'estació aprenent i perfeccionant la tècnica.",
      mascotTitle: 'Coneix la nostra mascota!',
      mascotDescription: 'Els nens aprenen acompanyats de la nostra estimada mascota, que fa que cada classe sigui una aventura màgica plena de diversió i aprenentatge.',
      yearsExperience: 'Anys experiència',
      happyKids: 'Nens feliços',
      satisfaction: 'Satisfacció',
      certified: 'Certificats',
      officialInstructors: 'Instructors oficials'
    },
    benefits: {
      title: 'Per què triar Magic Ski?',
      description: "Descobreix tots els beneficis que fan de la nostra escola la millor opció per a l'aventura hivernal dels teus fills.",
      maxSafety: 'Màxima Seguretat',
      maxSafetyDesc: 'Protocols de seguretat certificats i equipament d\'última generació per a cada nen.',
      guaranteedFun: 'Diversió Garantida',
      guaranteedFunDesc: 'Mètodes d\'ensenyament lúdics que converteixen cada classe en una aventura màgica.',
      fastProgress: 'Progrés Ràpid',
      fastProgressDesc: 'Tècniques provades que permeten als nens avançar de forma natural i efectiva.',
      smallGroups: 'Grups Reduïts',
      smallGroupsDesc: 'Màxim 6 nens per instructor per una atenció personalitzada i de qualitat.',
      flexibleSchedules: 'Horaris Flexibles',
      flexibleSchedulesDesc: 'Classes adaptades a les necessitats de cada família amb opcions de matí i tarda.',
      loveForSkiing: 'Amor per l\'Esquí',
      loveForSkiingDesc: 'Creem una connexió emocional positiva amb la muntanya i els esports d\'hivern.',
      readyForAdventure: 'Llest per a l\'aventura?',
      readyForAdventureDesc: 'Uneix-te a milers de famílies que han confiat en Magic Ski per crear records inoblidables a la neu.',
      reserveNow: 'Reservar ara'
    },
    footer: {
      description: "L'escola d'esquí infantil més prestigiosa dels Pirineus. Creant records màgics i esquiadors segurs des de fa més de 15 anys.",
      contact: 'Contacte',
      station: 'Estació Grau Roig',
      quickLinks: 'Enllaços ràpids',
      whatIs: 'Què és Magic Ski?',
      benefits: 'Beneficis',
      gallery: 'Galeria',
      testimonials: 'Testimonis',
      reservations: 'Reserves',
      season: 'Temporada 2024-25',
      start: 'Inici: 30 de novembre',
      end: 'Fi: 20 d\'abril',
      copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. Tots els drets reservats.',
      privacyPolicy: 'Política de privacitat',
      termsOfUse: 'Termes d\'ús',
      cookies: 'Cookies'
    }
  },
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      contact: 'Contact',
      reserve: 'Reserve'
    },
    hero: {
      title: 'Magic Ski',
      subtitle: 'Grau Roig',
      description: 'The most magical ski school in the Pyrenees. Where little adventurers discover their passion for snow and skiing.',
      reserve: 'Reserve',
      watchVideo: 'Watch video'
    },
    about: {
      title: 'What is Magic Ski?',
      description1: 'The Magic Ski Club is a recreational ski club where students learn to enjoy the mountain with respect for nature and people. Values such as respect, cooperation and teamwork are fundamental pillars of our teaching. We have fun learning and learn while having fun.',
      description2: 'The Magic Ski Club offers ski lessons for children and teenagers throughout the season. The club\'s base point is the Planells area, where the Snow Garden is located, an ideal facility for the little ones who are just starting to ski. The older ones, together with their instructor who will accompany them throughout the season, will be able to discover the resort while learning and perfecting their technique.',
      mascotTitle: 'Meet our mascot!',
      mascotDescription: 'Children learn accompanied by our beloved mascot, who makes every class a magical adventure full of fun and learning.',
      yearsExperience: 'Years experience',
      happyKids: 'Happy kids',
      satisfaction: 'Satisfaction',
      certified: 'Certified',
      officialInstructors: 'Official instructors'
    },
    benefits: {
      title: 'Why choose Magic Ski?',
      description: 'Discover all the benefits that make our school the best option for your children\'s winter adventure.',
      maxSafety: 'Maximum Safety',
      maxSafetyDesc: 'Certified safety protocols and state-of-the-art equipment for every child.',
      guaranteedFun: 'Guaranteed Fun',
      guaranteedFunDesc: 'Playful teaching methods that turn every lesson into a magical adventure.',
      fastProgress: 'Fast Progress',
      fastProgressDesc: 'Proven techniques that allow children to progress naturally and effectively.',
      smallGroups: 'Small Groups',
      smallGroupsDesc: 'Maximum 6 children per instructor for personalized, quality attention.',
      flexibleSchedules: 'Flexible Schedules',
      flexibleSchedulesDesc: 'Classes adapted to each family\'s needs with morning and afternoon options.',
      loveForSkiing: 'Love for Skiing',
      loveForSkiingDesc: 'We create a positive emotional connection with the mountain and winter sports.',
      readyForAdventure: 'Ready for adventure?',
      readyForAdventureDesc: 'Join thousands of families who have trusted Magic Ski to create unforgettable memories in the snow.',
      reserveNow: 'Reserve now'
    },
    footer: {
      description: 'The most prestigious children\'s ski school in the Pyrenees. Creating magical memories and safe skiers for over 15 years.',
      contact: 'Contact',
      station: 'Grau Roig Station',
      quickLinks: 'Quick links',
      whatIs: 'What is Magic Ski?',
      benefits: 'Benefits',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      reservations: 'Reservations',
      season: 'Season 2024-25',
      start: 'Start: November 30',
      end: 'End: April 20',
      copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. All rights reserved.',
      privacyPolicy: 'Privacy policy',
      termsOfUse: 'Terms of use',
      cookies: 'Cookies'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      gallery: 'Galerie',
      testimonials: 'Témoignages',
      contact: 'Contact',
      reserve: 'Réserver'
    },
    hero: {
      title: 'Magic Ski',
      subtitle: 'Grau Roig',
      description: 'L\'école de ski la plus magique des Pyrénées. Où les petits aventuriers découvrent leur passion pour la neige et le ski.',
      reserve: 'Réserver',
      watchVideo: 'Voir la vidéo'
    },
    about: {
      title: 'Qu\'est-ce que Magic Ski ?',
      description1: 'Le Club Magic Ski est un club de ski ludique où l\'on enseigne aux élèves à profiter de la montagne avec respect envers la nature et les personnes. Les valeurs comme le respect, la coopération et le travail d\'équipe sont des piliers fondamentaux de notre enseignement. Nous nous amusons en apprenant et apprenons en nous amusant.',
      description2: 'Le Club Magic Ski propose des cours de ski pour enfants et adolescents pendant toute la saison. Le point de base du club est la zone de Planells, où se trouve le Jardin de Neige, installation idéale pour les plus petits qui commencent tout juste à skier. Les plus grands, avec leur moniteur qui les accompagnera toute la saison, pourront découvrir la station en apprenant et perfectionnant leur technique.',
      mascotTitle: 'Rencontrez notre mascotte !',
      mascotDescription: 'Les enfants apprennent accompagnés de notre chère mascotte, qui fait de chaque cours une aventure magique pleine d\'amusement et d\'apprentissage.',
      yearsExperience: 'Années d\'expérience',
      happyKids: 'Enfants heureux',
      satisfaction: 'Satisfaction',
      certified: 'Certifiés',
      officialInstructors: 'Instructeurs officiels'
    },
    benefits: {
      title: 'Pourquoi choisir Magic Ski ?',
      description: 'Découvrez tous les avantages qui font de notre école la meilleure option pour l\'aventure hivernale de vos enfants.',
      maxSafety: 'Sécurité Maximale',
      maxSafetyDesc: 'Protocoles de sécurité certifiés et équipement de dernière génération pour chaque enfant.',
      guaranteedFun: 'Plaisir Garanti',
      guaranteedFunDesc: 'Méthodes d\'enseignement ludiques qui transforment chaque cours en aventure magique.',
      fastProgress: 'Progrès Rapide',
      fastProgressDesc: 'Techniques éprouvées qui permettent aux enfants de progresser naturellement et efficacement.',
      smallGroups: 'Petits Groupes',
      smallGroupsDesc: 'Maximum 6 enfants par instructeur pour une attention personnalisée et de qualité.',
      flexibleSchedules: 'Horaires Flexibles',
      flexibleSchedulesDesc: 'Cours adaptés aux besoins de chaque famille avec options matin et après-midi.',
      loveForSkiing: 'Amour du Ski',
      loveForSkiingDesc: 'Nous créons une connexion émotionnelle positive avec la montagne et les sports d\'hiver.',
      readyForAdventure: 'Prêt pour l\'aventure ?',
      readyForAdventureDesc: 'Rejoignez des milliers de familles qui ont fait confiance à Magic Ski pour créer des souvenirs inoubliables dans la neige.',
      reserveNow: 'Réserver maintenant'
    },
    footer: {
      description: 'L\'école de ski pour enfants la plus prestigieuse des Pyrénées. Créant des souvenirs magiques et des skieurs sûrs depuis plus de 15 ans.',
      contact: 'Contact',
      station: 'Station Grau Roig',
      quickLinks: 'Liens rapides',
      whatIs: 'Qu\'est-ce que Magic Ski ?',
      benefits: 'Avantages',
      gallery: 'Galerie',
      testimonials: 'Témoignages',
      reservations: 'Réservations',
      season: 'Saison 2024-25',
      start: 'Début : 30 novembre',
      end: 'Fin : 20 avril',
      copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. Tous droits réservés.',
      privacyPolicy: 'Politique de confidentialité',
      termsOfUse: 'Conditions d\'utilisation',
      cookies: 'Cookies'
    }
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ['es', 'ca', 'en', 'fr'];
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'es';
    setLanguage(defaultLang);
  }, []);

  const t = translations[language] || translations.es;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
