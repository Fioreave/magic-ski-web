
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'ca' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    nav_inicio: 'Inicio',
    nav_gallery: 'Galería',
    nav_testimonials: 'Testimonios',
    nav_contact: 'Contacto',
    reserve: 'Reservar',
    hero_title: 'Magic Ski',
    hero_subtitle: 'Grau Roig',
    hero_description: 'La escuela de esquí más mágica de los Pirineos. Donde los pequeños aventureros descubren la pasión por la nieve y el esquí.',
    watch_video: 'Ver video',
    about_title: '¿Qué es Magic Ski?',
    about_description1: 'El Club Màgic Ski es un club lúdico de esquí donde se enseña a los alumnos a disfrutar de la montaña con respeto hacia la naturaleza y hacia las personas. Los valores como el respeto, la cooperación y el trabajo en equipo son pilares fundamentales de nuestra enseñanza.',
    about_philosophy_title: 'Nuestra filosofía',
    about_philosophy: '"Nos divertimos aprendiendo y aprendemos divirtiéndonos"',
    about_description2: 'El Club Màgic Ski ofrece clases de esquí para niños y adolescentes durante toda la temporada. El punto base del club es la zona de Planells, donde se encuentra el Jardín de Nieve, instalación idónea para los más pequeños que apenas empiezan a esquiar.',
    about_description3: 'Los más grandes, junto con su monitor que le acompañará toda la temporada, podrán descubrir la estación aprendiendo y perfeccionando la técnica.',
    years_experience: 'Años experiencia',
    happy_children: 'Niños felices',
    satisfaction: 'Satisfacción',
    benefits_title: '¿Por qué elegir Magic Ski?',
    benefits_subtitle: 'Descubre todos los beneficios que hacen de nuestra escuela la mejor opción para la aventura invernal de tus hijos.',
    max_security: 'Máxima Seguridad',
    max_security_desc: 'Protocolos de seguridad certificados y equipamiento de última generación para cada niño.',
    guaranteed_fun: 'Diversión Garantizada',
    guaranteed_fun_desc: 'Métodos de enseñanza lúdicos que convierten cada clase en una aventura mágica.',
    fast_progress: 'Progreso Rápido',
    fast_progress_desc: 'Técnicas probadas que permiten a los niños avanzar de forma natural y efectiva.',
    small_groups: 'Grupos Reducidos',
    small_groups_desc: 'Máximo 6 niños por instructor para una atención personalizada y de calidad.',
    flexible_hours: 'Horarios Flexibles',
    flexible_hours_desc: 'Clases adaptadas a las necesidades de cada familia con opciones de mañana y tarde.',
    love_for_skiing: 'Amor por el Esquí',
    love_for_skiing_desc: 'Creamos una conexión emocional positiva con la montaña y los deportes de invierno.',
    gallery_title: 'Momentos Mágicos',
    gallery_subtitle: 'Revive la emoción y alegría de nuestras clases a través de estas imágenes reales de nuestros pequeños esquiadores en acción.',
    testimonials_title: 'Lo que dicen las familias',
    testimonials_subtitle: 'Descubre por qué miles de padres eligen Magic Ski para las aventuras invernales de sus hijos.',
    contact_title: '¡Comienza la aventura hoy!',
    contact_subtitle: 'Reserva ahora y asegura el lugar de tu hijo en la mejor escuela de esquí de Grandvalira. ¡Las plazas son limitadas!',
    footer_description: 'La escuela de esquí infantil más prestigiosa de los Pirineos. Creando recuerdos mágicos y esquiadores seguros desde hace más de 15 años.',
    copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. Todos los derechos reservados.'
  },
  ca: {
    nav_inicio: 'Inici',
    nav_gallery: 'Galeria',
    nav_testimonials: 'Testimonis',
    nav_contact: 'Contacte',
    reserve: 'Reservar',
    hero_title: 'Magic Ski',
    hero_subtitle: 'Grau Roig',
    hero_description: "L'escola d'esquí més màgica dels Pirineus. On els petits aventurers descobreixen la passió per la neu i l'esquí.",
    watch_video: 'Veure vídeo',
    about_title: 'Què és Magic Ski?',
    about_description1: "El Club Màgic Ski és un club lúdic d'esquí on s'ensenya als alumnes a gaudir de la muntanya amb respecte cap a la natura i cap a les persones. Els valors com el respecte, la cooperació i el treball en equip són pilars fonamentals del nostre ensenyament.",
    about_philosophy_title: 'La nostra filosofia',
    about_philosophy: '"Ens divertim aprenent i aprenem divertint-nos"',
    about_description2: "El Club Màgic Ski ofereix classes d'esquí per a nens i adolescents durant tota la temporada. El punt base del club és la zona de Planells, on es troba el Jardí de Neu, instal·lació idònia per als més petits que tot just comencen a esquiar.",
    about_description3: "Els més grans, juntament amb el seu monitor que l'acompanyarà tota la temporada, podran descobrir l'estació aprenent i perfeccionant la tècnica.",
    years_experience: "Anys d'experiència",
    happy_children: 'Nens feliços',
    satisfaction: 'Satisfacció',
    benefits_title: 'Per què triar Magic Ski?',
    benefits_subtitle: "Descobreix tots els beneficis que fan de la nostra escola la millor opció per a l'aventura hivernal dels teus fills.",
    max_security: 'Màxima Seguretat',
    max_security_desc: 'Protocols de seguretat certificats i equipament de darrera generació per a cada nen.',
    guaranteed_fun: 'Diversió Garantida',
    guaranteed_fun_desc: "Mètodes d'ensenyament lúdics que converteixen cada classe en una aventura màgica.",
    fast_progress: 'Progrés Ràpid',
    fast_progress_desc: 'Tècniques provades que permeten als nens avançar de forma natural i efectiva.',
    small_groups: 'Grups Reduïts',
    small_groups_desc: 'Màxim 6 nens per instructor per a una atenció personalitzada i de qualitat.',
    flexible_hours: 'Horaris Flexibles',
    flexible_hours_desc: 'Classes adaptades a les necessitats de cada família amb opcions de matí i tarda.',
    love_for_skiing: "Amor per l'Esquí",
    love_for_skiing_desc: "Creem una connexió emocional positiva amb la muntanya i els esports d'hivern.",
    gallery_title: 'Moments Màgics',
    gallery_subtitle: 'Reviu la emoció i alegria de les nostres classes a través d\'aquestes imatges reals dels nostres petits esquiadors en acció.',
    testimonials_title: 'El que diuen les famílies',
    testimonials_subtitle: "Descobreix per què milers de pares trien Magic Ski per a les aventures hivernals dels seus fills.",
    contact_title: "Comença l'aventura avui!",
    contact_subtitle: "Reserva ara i assegura el lloc del teu fill a la millor escola d'esquí de Grandvalira. Les places són limitades!",
    footer_description: "L'escola d'esquí infantil més prestigiosa dels Pirineus. Creant records màgics i esquiadors segurs des de fa més de 15 anys.",
    copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. Tots els drets reservats.'
  },
  en: {
    nav_inicio: 'Home',
    nav_gallery: 'Gallery',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    reserve: 'Book now',
    hero_title: 'Magic Ski',
    hero_subtitle: 'Grau Roig',
    hero_description: 'The most magical ski school in the Pyrenees. Where little adventurers discover their passion for snow and skiing.',
    watch_video: 'Watch video',
    about_title: 'What is Magic Ski?',
    about_description1: 'The Magic Ski Club is a fun ski club where students are taught to enjoy the mountain with respect for nature and people. Values such as respect, cooperation and teamwork are fundamental pillars of our teaching.',
    about_philosophy_title: 'Our philosophy',
    about_philosophy: '"We have fun learning and learn having fun"',
    about_description2: 'The Magic Ski Club offers ski lessons for children and teenagers throughout the season. The club\'s base point is the Planells area, where the Snow Garden is located, an ideal facility for the little ones who are just starting to ski.',
    about_description3: 'The older ones, together with their instructor who will accompany them all season, will be able to discover the resort while learning and perfecting their technique.',
    years_experience: 'Years experience',
    happy_children: 'Happy children',
    satisfaction: 'Satisfaction',
    benefits_title: 'Why choose Magic Ski?',
    benefits_subtitle: 'Discover all the benefits that make our school the best option for your children\'s winter adventure.',
    max_security: 'Maximum Security',
    max_security_desc: 'Certified safety protocols and state-of-the-art equipment for every child.',
    guaranteed_fun: 'Guaranteed Fun',
    guaranteed_fun_desc: 'Playful teaching methods that turn every lesson into a magical adventure.',
    fast_progress: 'Fast Progress',
    fast_progress_desc: 'Proven techniques that allow children to advance naturally and effectively.',
    small_groups: 'Small Groups',
    small_groups_desc: 'Maximum 6 children per instructor for personalized and quality attention.',
    flexible_hours: 'Flexible Hours',
    flexible_hours_desc: 'Classes adapted to each family\'s needs with morning and afternoon options.',
    love_for_skiing: 'Love for Skiing',
    love_for_skiing_desc: 'We create a positive emotional connection with the mountain and winter sports.',
    gallery_title: 'Magical Moments',
    gallery_subtitle: 'Relive the excitement and joy of our classes through these real images of our little skiers in action.',
    testimonials_title: 'What families say',
    testimonials_subtitle: 'Discover why thousands of parents choose Magic Ski for their children\'s winter adventures.',
    contact_title: 'Start the adventure today!',
    contact_subtitle: 'Book now and secure your child\'s place in Grandvalira\'s best ski school. Places are limited!',
    footer_description: 'The most prestigious children\'s ski school in the Pyrenees. Creating magical memories and safe skiers for over 15 years.',
    copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. All rights reserved.'
  },
  fr: {
    nav_inicio: 'Accueil',
    nav_gallery: 'Galerie',
    nav_testimonials: 'Témoignages',
    nav_contact: 'Contact',
    reserve: 'Réserver',
    hero_title: 'Magic Ski',
    hero_subtitle: 'Grau Roig',
    hero_description: 'L\'école de ski la plus magique des Pyrénées. Où les petits aventuriers découvrent leur passion pour la neige et le ski.',
    watch_video: 'Voir la vidéo',
    about_title: 'Qu\'est-ce que Magic Ski ?',
    about_description1: 'Le Club Magic Ski est un club de ski ludique où les élèves apprennent à profiter de la montagne dans le respect de la nature et des personnes. Des valeurs comme le respect, la coopération et le travail d\'équipe sont les piliers fondamentaux de notre enseignement.',
    about_philosophy_title: 'Notre philosophie',
    about_philosophy: '"Nous nous amusons en apprenant et apprenons en nous amusant"',
    about_description2: 'Le Club Magic Ski propose des cours de ski pour enfants et adolescents tout au long de la saison. Le point de base du club est la zone de Planells, où se trouve le Jardin des Neiges, installation idéale pour les plus petits qui commencent tout juste à skier.',
    about_description3: 'Les plus grands, accompagnés de leur moniteur qui les suivra toute la saison, pourront découvrir la station en apprenant et perfectionnant leur technique.',
    years_experience: 'Années d\'expérience',
    happy_children: 'Enfants heureux',
    satisfaction: 'Satisfaction',
    benefits_title: 'Pourquoi choisir Magic Ski ?',
    benefits_subtitle: 'Découvrez tous les avantages qui font de notre école la meilleure option pour l\'aventure hivernale de vos enfants.',
    max_security: 'Sécurité Maximale',
    max_security_desc: 'Protocoles de sécurité certifiés et équipement de dernière génération pour chaque enfant.',
    guaranteed_fun: 'Plaisir Garanti',
    guaranteed_fun_desc: 'Méthodes d\'enseignement ludiques qui transforment chaque cours en aventure magique.',
    fast_progress: 'Progrès Rapide',
    fast_progress_desc: 'Techniques éprouvées qui permettent aux enfants de progresser naturellement et efficacement.',
    small_groups: 'Petits Groupes',
    small_groups_desc: 'Maximum 6 enfants par moniteur pour une attention personnalisée et de qualité.',
    flexible_hours: 'Horaires Flexibles',
    flexible_hours_desc: 'Cours adaptés aux besoins de chaque famille avec options matin et après-midi.',
    love_for_skiing: 'Amour du Ski',
    love_for_skiing_desc: 'Nous créons une connexion émotionnelle positive avec la montagne et les sports d\'hiver.',
    gallery_title: 'Moments Magiques',
    gallery_subtitle: 'Revivez l\'émotion et la joie de nos cours à travers ces images réelles de nos petits skieurs en action.',
    testimonials_title: 'Ce que disent les familles',
    testimonials_subtitle: 'Découvrez pourquoi des milliers de parents choisissent Magic Ski pour les aventures hivernales de leurs enfants.',
    contact_title: 'Commencez l\'aventure aujourd\'hui !',
    contact_subtitle: 'Réservez maintenant et sécurisez la place de votre enfant dans la meilleure école de ski de Grandvalira. Les places sont limitées !',
    footer_description: 'L\'école de ski pour enfants la plus prestigieuse des Pyrénées. Créant des souvenirs magiques et des skieurs en sécurité depuis plus de 15 ans.',
    copyright: '© 2024 Magic Ski Grau Roig - Grandvalira. Tous droits réservés.'
  }
};

// Detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ca')) return 'ca';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('fr')) return 'fr';
  return 'es'; // Default to Spanish
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('magic-ski-language');
    return (saved as Language) || detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('magic-ski-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
