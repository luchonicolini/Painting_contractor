import { BusinessInfo, ServiceItem, PortfolioItem, TestimonialItem } from '../types';

/**
 * Localized document-head copy. Consumed by LanguageContext to keep
 * <title>, meta description and Open Graph tags in sync with the active language.
 */
export const SITE_META: Record<'en' | 'es', { title: string; description: string }> = {
  en: {
    title: 'El Palmar Painting & Services | Architectural Painting Contractors in South Florida',
    description:
      'Dedicated family-owned residential & commercial painting contractors in Hialeah, Miami-Dade & Broward County. Exterior weatherproofing, Level 5 interior finishes & dust-free popcorn ceiling removal. Florida Licensed & Insured.',
  },
  es: {
    title: 'El Palmar Painting & Services | Pintores Arquitectónicos en el Sur de la Florida',
    description:
      'Empresa familiar de pintura residencial y comercial en Hialeah, Miami-Dade y el condado de Broward. Impermeabilización exterior, acabados interiores nivel 5 y remoción de techo popcorn sin polvo. Con licencia y seguro en Florida.',
  },
};

export const BUSINESS_INFO: BusinessInfo = {
  name: "El Palmar Painting & Services",
  legalName: "El Palmar Painting and Services",
  tagline: {
    en: "Dedicated Family-Owned Painting Contractors in South Florida",
    es: "Empresa Familiar de Pintura con Máxima Dedicación en el Sur de la Florida"
  },
  description: {
    en: "El Palmar Painting and Services is a family-owned residential and commercial painter serving Hialeah, Miami-Dade, and Broward County. We treat your property with meticulous care, clean craftsmanship, and guaranteed satisfaction.",
    es: "El Palmar Painting and Services es una empresa familiar de pintura residencial y comercial al servicio de Hialeah, Miami-Dade y el condado de Broward. Cuidamos cada propiedad con esmero, limpieza absoluta y satisfacción garantizada."
  },
  story: {
    en: "Founded by Yalila and Rodolfo, El Palmar was built on a simple promise: treat every client's home as if it were our own. From meticulous surface prep to the final coat, we never take shortcuts. Our family works directly on your project to ensure punctuality, respect, and enduring beauty.",
    es: "Fundada por Yalila y Rodolfo, El Palmar nació con una promesa clara: tratar la casa de cada cliente con el mismo cariño y respeto que la nuestra. Desde la preparación meticulosa de superficies hasta la última capa, nunca tomamos atajos. Nuestra familia trabaja directamente en tu proyecto para garantizar puntualidad, seriedad y resultados duraderos."
  },
  founders: ["Yalila", "Rodolfo"],
  phone: "(786) 370-6098",
  phoneRaw: "7863706098",
  email: "elpalmarpaintingandservices@gmail.com",
  address: {
    city: "Hialeah",
    state: "FL",
    serviceArea: {
      en: "Hialeah, Miami-Dade & Broward County (Pembroke Pines, Miramar, Doral, Miami)",
      es: "Hialeah, Miami-Dade y Condado de Broward (Pembroke Pines, Miramar, Doral, Miami)"
    }
  },
  social: {
    facebook: "https://facebook.com/ElPalmarPaintingAndServices",
    instagram: "https://instagram.com/elpalmarpaintingandservices/",
    whatsapp: "https://wa.me/17863706098",
    googleReviews: "https://www.google.com/search?q=El+Palmar+Painting+and+Services+Florida"
  },
  hours: [
    { day: { en: "Monday – Friday", es: "Lunes – Viernes" }, time: "8:00 AM – 5:00 PM" },
    { day: { en: "Saturday – Sunday", es: "Sábado – Domingo" }, time: "10:00 AM – 3:00 PM" }
  ],
  stats: {
    rating: 5.0,
    reviewCount: 48,
    yearsExperience: "10+",
    satisfactionRate: "100%"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "interior-painting",
    title: {
      en: "Interior Painting",
      es: "Pintura de Interiores"
    },
    shortDesc: {
      en: "Transform your living spaces with smooth finishes, crisp lines, and premium dust-free protection.",
      es: "Renueva tus espacios con acabados impecables, líneas perfectas y máxima protección sin suciedad."
    },
    fullDesc: {
      en: "Change up your home with a fresh, durable coat of paint. We work closely with you on color consultation and surface preparation, protecting all furniture and floors to ensure results just as you imagined them.",
      es: "Transforma tu hogar con pintura de alta calidad. Te asesoramos en la elección del color y preparamos minuciosamente cada pared, protegiendo tus muebles y suelos para lograr el resultado exacto que imaginaste."
    },
    features: [
      { en: "Wall, ceiling, doors & trim painting", es: "Pintura de paredes, techos, puertas y molduras" },
      { en: "Drywall patching & crack repair", es: "Reparación de grietas y parches de yeso/drywall" },
      { en: "Full furniture and floor masking", es: "Protección total de muebles y pisos" },
      { en: "Low-VOC premium washable paints", es: "Pinturas lavables ecológicas de bajo olor" }
    ],
    icon: "Paintbrush",
    image: "/images/service-interior.webp",
    category: "interior"
  },
  {
    id: "exterior-painting",
    title: {
      en: "Exterior Painting",
      es: "Pintura de Exteriores"
    },
    shortDesc: {
      en: "Weather-resistant coatings designed specifically to withstand South Florida heat, humidity, and rain.",
      es: "Recubrimientos resistentes al clima tropical de Florida: sol intenso, humedad y lluvias."
    },
    fullDesc: {
      en: "You need a residential painting contractor that understands the exact products and prep methods required to beat back the Florida elements for a vibrant, long-lasting exterior finish.",
      es: "Necesitas una empresa que conozca los trucos y selladores necesarios para vencer las inclemencias del tiempo en Florida, garantizando colores vivos y durabilidad por años."
    },
    features: [
      { en: "High-grade weather & mildew sealants", es: "Selladores anti-hongos y contra la humedad" },
      { en: "Stucco repair & caulking around windows", es: "Reparación de estuco y calafateo de ventanas" },
      { en: "Fascia, soffits, and exterior trim", es: "Tratamiento de fascia, aleros y molduras" },
      { en: "UV protective long-life exterior paints", es: "Pinturas con filtro solar UV de máxima duración" }
    ],
    icon: "Home",
    image: "/images/service-exterior.webp",
    category: "exterior"
  },
  {
    id: "popcorn-ceiling-removal",
    title: {
      en: "Popcorn Ceiling Removal",
      es: "Eliminación de Techo Popcorn"
    },
    shortDesc: {
      en: "Modernize your home by replacing outdated textured ceilings with modern smooth, sleek finishes.",
      es: "Moderniza tu casa eliminando la textura vieja de palomita de maíz por techos lisos y elegantes."
    },
    fullDesc: {
      en: "Outdated popcorn textures trap dust and dim your rooms. Our team specializes in clean, contained popcorn removal, skim coating, and flawless flat ceiling painting.",
      es: "Las texturas antiguas de popcorn acumulan polvo y oscurecen las habitaciones. Eliminamos el popcorn de forma limpia y contenida, alisando la superficie y dejando un acabado suave y moderno."
    },
    features: [
      { en: "Hermetic dust containment & full room masking", es: "Aislamiento hermético de áreas y protección total" },
      { en: "Smooth skim-coating level 5 finish", es: "Alisado profesional nivel 5" },
      { en: "Primer and ceiling finish coat", es: "Fijador sellador y pintura de terminación" },
      { en: "Wallpaper removal available", es: "También retiramos papel tapiz antiguo" }
    ],
    icon: "Layers",
    image: "/images/service-drywall.webp",
    category: "specialty"
  },
  {
    id: "roof-painting",
    title: {
      en: "Roof Painting & Sealing",
      es: "Pintura y Sellado de Techos"
    },
    shortDesc: {
      en: "Boost curb appeal and thermal efficiency with specialized protective elastomeric roof coatings.",
      es: "Protege tu techo, mejora la estética de tu propiedad y reduce el calor con pintura elastomérica."
    },
    fullDesc: {
      en: "Roof painting is essential for maintaining the curb appeal and thermal insulation of your property. El Palmar has the safety equipment and specialized primers needed to update roofs safely in and around Hialeah and South Florida.",
      es: "Pintar y sellar el techo es vital para conservar el valor de tu propiedad y repeler el calor. Contamos con el equipo de seguridad y selladores elastoméricos para trabajar techos con total garantía."
    },
    features: [
      { en: "Tile, metal, and shingle roof coatings", es: "Pintura para tejas, techos de metal y asfálticos" },
      { en: "Waterproofing and heat-reflective sealants", es: "Sellado impermeabilizante y reflectivo de calor" },
      { en: "Thorough prep & pre-wash included", es: "Limpieza previa a presión incluida" },
      { en: "Safe OSHA-compliant equipment", es: "Equipamiento seguro y profesional" }
    ],
    icon: "ShieldCheck",
    image: "/images/service-roof-painting.webp",
    category: "exterior"
  },
  {
    id: "pressure-washing",
    title: {
      en: "Pressure Washing",
      es: "Lavado a Presión (Power Washing)"
    },
    shortDesc: {
      en: "Blast away years of dirt, algae, and grime from driveways, sidewalks, roofs, and exterior walls.",
      es: "Elimina moho, manchas y suciedad acumulada en calzadas, aceras, muros, techos y patios."
    },
    fullDesc: {
      en: "Pressure washing blasts away years of buildup, dust, and Florida mildew, leaving your siding, driveway, patio, and outdoor living areas sparkling clean with commercial-grade equipment.",
      es: "El lavado a presión remueve años de manchas oscuras, sarro y hongos, dejando tu entrada, fachadas y áreas exteriores relucientes como el primer día con maquinaria industrial."
    },
    features: [
      { en: "Driveways, walkways & pool decks", es: "Entradas de autos, aceras y áreas de piscina" },
      { en: "Exterior siding, gutters & fascia", es: "Paredes exteriores, canaletas y molduras" },
      { en: "Safe pressure for delicate surfaces", es: "Presión regulada para cuidar las superficies" },
      { en: "Eco-friendly surface treatments", es: "Tratamientos biodegradables seguros para plantas" }
    ],
    icon: "Sparkles",
    image: "/images/service-pressure-washing.webp",
    category: "specialty"
  },
  {
    id: "commercial-painting",
    title: {
      en: "Commercial Painting",
      es: "Pintura Comercial & Unidades de Renta"
    },
    shortDesc: {
      en: "Fast, reliable turnover painting for rental properties, offices, HOA communities, and storefronts.",
      es: "Servicio ágil y confiable para propiedades en alquiler, oficinas, comercios y comunidades HOA."
    },
    fullDesc: {
      en: "Whether preparing a rental unit for new tenants or renovating an office space, we deliver disciplined, on-time painting services with flexible scheduling to minimize disruption.",
      es: "Ya sea para dejar lista una propiedad de renta para nuevos inquilinos o renovar un local comercial, trabajamos con rapidez, disciplina y horarios flexibles."
    },
    features: [
      { en: "Rental property turnovers & facelifts", es: "Pintura rápida para rotación de alquileres" },
      { en: "Offices, retail spaces & clinics", es: "Oficinas, comercios y consultorios" },
      { en: "Flexible evening & weekend hours", es: "Horarios flexibles sin interrumpir tu negocio" },
      { en: "Itemized invoices and commercial receipts", es: "Facturas detalladas para contabilidad" }
    ],
    icon: "Building",
    image: "/images/service-residential.webp",
    category: "commercial"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    author: "David & Sarah Miller",
    location: "Pembroke Pines, FL",
    rating: 5,
    comment: {
      en: "I highly recommend El Palmar Painting and Services for your painting project. We hired them to repaint our house, which had 20-year-old gray paint looking dull, plus some repairs needed. This is a small family business, and they are very kind and communicative. One of the key aspects of a good paint job is the prep work: the team spent 2 full days preparing the house for painting, and even pressure washed areas that were not going to be painted so that the whole property would sparkle. All our neighbors are commenting about how good our house looks!",
      es: "Recomiendo totalmente a El Palmar Painting and Services. Los contratamos para repintar nuestra casa con una pintura vieja de 20 años y reparar detalles. Son una empresa familiar pequeña, muy amables y comunicativos. La clave de un buen trabajo de pintura es la preparación: pasaron 2 días completos preparando la casa antes de pintar, e incluso lavaron a presión áreas que no iban a pintar para que toda la casa brillara. ¡Todos nuestros vecinos nos comentan lo hermosa que quedó!"
    },
    serviceMentioned: {
      en: "2-Day Prep & Full Exterior Paint",
      es: "Preparación de 2 Días y Pintura Exterior"
    }
  },
  {
    id: "rev-2",
    author: "Amanda & Roberto Gómez",
    location: "Miramar, FL",
    rating: 5,
    comment: {
      en: "We recently had our house painted, and we couldn't be happier with the results! The entire process was smooth from start to finish. The team was professional, friendly, and always on time. They paid close attention to every detail and took great pride in their work. Our home looks absolutely beautiful. It was a pleasure working with Yalila and Rodolfo, and our neighbors have already hired them too!",
      es: "¡Pintaron nuestra casa recientemente y no podríamos estar más felices con el resultado! Todo el proceso fue impecable de principio a fin. El equipo fue profesional, puntual y muy amable. Cuidaron cada detalle con verdadero orgullo por su trabajo. Fue un placer trabajar con Yalila y Rodolfo, ¡y varios de nuestros vecinos ya los contrataron también!"
    },
    serviceMentioned: {
      en: "Residential Stucco Makeover",
      es: "Renovación Exterior de Estuco"
    }
  },
  {
    id: "rev-3",
    author: "Carlos Valdés",
    location: "Hialeah, FL",
    rating: 5,
    comment: {
      en: "Five stars isn't enough... I have known this company for years and they have always provided the best service. They work conscientiously and have painted both my home and my son's house with great care and dedication. Their professional treatment makes you feel like family. Highly recommended!",
      es: "Cinco estrellas es poco... Hace años que conozco esta compañía y siempre me han brindado el mejor servicio. Trabajan con conciencia y han pintado tanto mi casa como la de mi hijo con gran dedicación y amor. Su trato profesional te hace sentir en familia. ¡Grandemente recomendados!"
    },
    serviceMentioned: {
      en: "Repeat Family Home Painting",
      es: "Pintura de Casas Familiares"
    }
  },
  {
    id: "rev-4",
    author: "Jessica Taylor",
    location: "Miami, FL",
    rating: 5,
    comment: {
      en: "El Palmar was professional from the very beginning to the very end! I was so satisfied with their service and communication. They even went with me to the store to purchase the paint and advised me on the right sheens. They are completely trustworthy: I was able to leave them working in my home and go to work with total peace of mind. Everything was left spotless!",
      es: "¡El Palmar fue profesional desde el primer momento hasta el final! Quedé encantada con el servicio y la comunicación. Incluso fueron conmigo a la tienda a comprar la pintura para asesorarme con el brillo y el tipo adecuado. Son de total confianza: pude dejarlos trabajando en mi casa e irme a trabajar con absoluta tranquilidad. ¡Dejaron todo impecable!"
    },
    serviceMentioned: {
      en: "Color Consultation & Interior",
      es: "Asesoría de Color e Interior"
    }
  },
  {
    id: "rev-5",
    author: "Miriam & Nelson R.",
    location: "Doral, FL",
    rating: 5,
    comment: {
      en: "We were blessed to have found @elpalmarpaintingandservices. They were flexible with our schedule, professional, and very helpful picking out the colors. Always on time and responsive. They painted all the interior, exterior, roof, fence, side doors and driveway of our home. There is not a square inch on this home that they did not enhance. We trusted them with our home, and so should you!",
      es: "Fue una bendición haber encontrado a El Palmar. Fueron flexibles con nuestros horarios, profesionales y de gran ayuda al elegir los colores. Pintaron todo el interior, exterior, techo, cercas, puertas laterales y la entrada de autos. No hay un solo rincón de la casa que no hayan dejado renovado. ¡Confiamos en ellos con nuestro hogar y los recomendamos 100%!"
    },
    serviceMentioned: {
      en: "Complete Property Overhaul",
      es: "Transformación Integral de Propiedad"
    }
  },
  {
    id: "rev-6",
    author: "Beatriz Santos",
    location: "Hialeah, FL",
    rating: 5,
    comment: {
      en: "If there were more stars, I would give Palmar Paint and Services a 10/10. They are fantastic people who genuinely seek the client's benefit, take pride in their craft, and are meticulous from beginning to end. My husband and I recommend this family company for their honesty, punctuality, and clean workmanship. Thank you so much!",
      es: "Si hubiera más estrellas, le daría un 10/10 a Palmar Paint and Services. Son personas fantásticas que buscan la satisfacción de los demás, sienten orgullo por su trabajo y son minuciosos de principio a fin. Mi esposo y yo recomendamos esta empresa familiar por su honestidad, puntualidad y pulcritud. ¡Muchísimas gracias!"
    },
    serviceMentioned: {
      en: "Smooth Ceilings & Interior Finish",
      es: "Techos Lisos y Acabado Interior"
    }
  },
  {
    id: "rev-7",
    author: "Anthony Lozano",
    location: "Pembroke Pines, FL",
    rating: 5,
    comment: {
      en: "I was worried because I needed to repaint and seal my driveway, but luckily I found El Palmar. They are reliable, helpful, and honest. From the first phone call to the completed service, everything in the estimate was confirmed and the finished driveway was perfect. 100% recommended.",
      es: "Estaba preocupado porque necesitaba repintar y sellar la entrada de autos, y afortunadamente encontré a El Palmar. Son formales, honestos y trabajadores. Desde la primera llamada hasta la entrega del trabajo, cumplieron exactamente lo presupuestado y la entrada quedó perfecta. 100% recomendados."
    },
    serviceMentioned: {
      en: "Driveway Pressure Wash & Sealing",
      es: "Lavado a Presión y Sellado"
    }
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  // --- EXTERIOR PAINTING ---
  {
    id: "ext-pool-home",
    title: { en: "South Florida Luxury Pool Residence", es: "Residencia de Lujo con Piscina en Florida" },
    category: "exterior",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-exterior-pool-home.jpg",
    isFeatured: true
  },
  {
    id: "ext-stone-facade",
    title: { en: "Modern Stone Facade & Entry Accent", es: "Fachada con Piedra Decorativa y Entrada Principal" },
    category: "exterior",
    location: "Miramar, FL",
    image: "/images/gallery/gallery-exterior-stone-facade.jpg",
    isFeatured: true
  },
  {
    id: "ext-house-front",
    title: { en: "Full Exterior Stucco Makeover & Walkway", es: "Renovación Exterior Completa de Estuco y Aceras" },
    category: "exterior",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-exterior-house-front.jpg"
  },
  {
    id: "ext-modern-villa",
    title: { en: "Crisp White Architectural Villa", es: "Villa Arquitectónica en Blanco Puro" },
    category: "exterior",
    location: "Miami, FL",
    image: "/images/gallery/gallery-exterior-modern-villa.jpg"
  },
  {
    id: "ext-brick-path",
    title: { en: "Contemporary Ranch Home Exterior", es: "Pintura Exterior de Casa Estilo Rancho" },
    category: "exterior",
    location: "Doral, FL",
    image: "/images/gallery/gallery-exterior-brick-path-residence.jpg"
  },
  {
    id: "ext-garage-bronze",
    title: { en: "Architectural Bronze Garage Door Finish", es: "Acabado Bronce Arquitectónico en Puerta de Garaje" },
    category: "exterior",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-exterior-garage-bronze.jpg"
  },
  {
    id: "ext-white-villa-side",
    title: { en: "Perimeter Wall & Villa Side Elevation", es: "Muro Perimetral y Lateral de Residencia" },
    category: "exterior",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-exterior-white-villa-side.jpg"
  },
  {
    id: "ext-porch-columns",
    title: { en: "Covered Entry Porch & Structural Columns", es: "Pórtico de Entrada Techado y Columnas" },
    category: "exterior",
    location: "Miami-Dade, FL",
    image: "/images/gallery/gallery-exterior-porch-columns.jpg"
  },
  {
    id: "ext-rear-overhang",
    title: { en: "Rear Patio Overhang & Facelift", es: "Alero Trasero de Patio y Remodelación Exterior" },
    category: "exterior",
    location: "Miramar, FL",
    image: "/images/gallery/gallery-exterior-rear-overhang.jpg"
  },
  {
    id: "ext-patio-geometric",
    title: { en: "Custom Finished Outdoor Covered Patio", es: "Patio Techado con Acabado Personalizado" },
    category: "exterior",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-exterior-patio-geometric.jpg"
  },

  // --- INTERIOR & CEILINGS ---
  {
    id: "int-master-bedroom",
    title: { en: "Master Suite Level 5 Smooth Ceilings", es: "Suite Principal con Techos Lisos Nivel 5" },
    category: "interior",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-interior-master-bedroom.jpg",
    isFeatured: true
  },
  {
    id: "int-high-foyer",
    title: { en: "Grand Double-Height Foyer & High Walls", es: "Vestíbulo de Doble Altura y Techos Altos" },
    category: "interior",
    location: "Doral, FL",
    image: "/images/gallery/gallery-interior-high-foyer.jpg",
    isFeatured: true
  },
  {
    id: "int-kitchen-island",
    title: { en: "Open Concept Kitchen & Dining Repaint", es: "Pintura Interior en Cocina y Sala Abierta" },
    category: "interior",
    location: "Miami, FL",
    image: "/images/gallery/gallery-interior-kitchen-island.jpg"
  },
  {
    id: "int-door-spraying",
    title: { en: "Fine Finish Airless Door Spraying", es: "Pintura Airless de Puertas de Entrada" },
    category: "interior",
    location: "Miramar, FL",
    image: "/images/gallery/gallery-interior-door-spraying.jpg"
  },
  {
    id: "int-hallway-doors",
    title: { en: "Interior Trim, Baseboards & Casing", es: "Molduras, Rodapiés y Puertas Interiores" },
    category: "interior",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-interior-hallway-doors.jpg"
  },
  {
    id: "int-fresh-bedroom",
    title: { en: "Bedroom Popcorn Removal & Flat Finish", es: "Retiro de Popcorn y Pintura Plana en Habitación" },
    category: "interior",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-interior-fresh-bedroom.jpg"
  },
  {
    id: "int-smooth-room",
    title: { en: "Living Area Clean Wall & Ceiling Skim", es: "Alisado y Pintura Impecable en Sala de Estar" },
    category: "interior",
    location: "Miami-Dade, FL",
    image: "/images/gallery/gallery-interior-smooth-room.jpg"
  },
  {
    id: "int-closet-doors",
    title: { en: "Custom Sliding Closets & Frame Lacquer", es: "Armarios Corredizos y Marcos Laqueados" },
    category: "interior",
    location: "Doral, FL",
    image: "/images/gallery/gallery-interior-closet-doors.jpg"
  },
  {
    id: "int-door-masking",
    title: { en: "Precision Masking & Protection Craftsmanship", es: "Empapelado y Protección Quirúrgica de Entrada" },
    category: "interior",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-interior-door-masking.jpg"
  },

  // --- ROOF PAINTING & SEALING ---
  {
    id: "roof-tile-restoration",
    title: { en: "Spanish Barrel Tile Cleaning & Restoration", es: "Restauración y Sellado de Tejas Españolas" },
    category: "roof",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-roof-tile-restoration.jpg",
    isFeatured: true
  },
  {
    id: "roof-coating-sprayer",
    title: { en: "Elastomeric Thermal Roof Coating Application", es: "Aplicación de Sellador Térmico Elastomérico en Techo" },
    category: "roof",
    location: "Miramar, FL",
    image: "/images/gallery/gallery-roof-coating-sprayer.jpg"
  },
  {
    id: "roof-tile-worker",
    title: { en: "High-Pitch Tile Roof Waterproof Sealant", es: "Impermeabilización Segura de Techo de Tejas" },
    category: "roof",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-roof-tile-worker.jpg"
  },
  {
    id: "roof-terracotta-comparison",
    title: { en: "Terracotta Roof Tile Decontamination", es: "Descontaminación y Pintura de Tejas Terracota" },
    category: "roof",
    location: "Miami, FL",
    image: "/images/gallery/gallery-roof-terracotta-comparison.jpg"
  },
  {
    id: "roof-two-story-prep",
    title: { en: "Two-Story Mediterranean Estate Roof Preparation", es: "Preparación de Techo en Residencia de Dos Pisos" },
    category: "roof",
    location: "Doral, FL",
    image: "/images/gallery/gallery-roof-two-story-prep.jpg"
  },

  // --- PRESSURE WASHING ---
  {
    id: "wash-patio-cleaner",
    title: { en: "Commercial Pressure Washing on Concrete Deck", es: "Lavado a Presión Profesional en Patio de Concreto" },
    category: "pressure-washing",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-wash-patio-cleaner.jpg",
    isFeatured: true
  },
  {
    id: "wash-sidewalk-line",
    title: { en: "Neighborhood Sidewalk Mildew Removal", es: "Eliminación de Moho y Suciedad en Aceras" },
    category: "pressure-washing",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-wash-sidewalk-line.jpg"
  },
  {
    id: "wash-terracotta-driveway",
    title: { en: "Stamped Concrete Driveway Sealing & Staining", es: "Sellado y Coloración de Entrada de Concreto Estampado" },
    category: "pressure-washing",
    location: "Miramar, FL",
    image: "/images/gallery/gallery-wash-terracotta-driveway.jpg"
  },
  {
    id: "wash-backyard-patio",
    title: { en: "Backyard Slab High-Pressure Deep Clean", es: "Limpieza Profunda de Placa Trasera con Alta Presión" },
    category: "pressure-washing",
    location: "Miami, FL",
    image: "/images/gallery/gallery-wash-backyard-patio.jpg"
  },
  {
    id: "wash-patio-rolling",
    title: { en: "Acrylic Protective Sealer for Patio Floor", es: "Sellador Acrílico Protector para Piso de Patio" },
    category: "pressure-washing",
    location: "Hialeah, FL",
    image: "/images/gallery/gallery-wash-patio-rolling.jpg"
  },
  {
    id: "wash-driveway-pavers",
    title: { en: "Paver Driveway Pressure Wash & Sealing", es: "Lavado a Presión y Sellado de Entrada de Adoquines" },
    category: "pressure-washing",
    location: "Doral, FL",
    image: "/images/project-driveway-wash.webp"
  },

  // --- COMMERCIAL PAINTING ---
  {
    id: "comm-facility",
    title: { en: "Commercial Facility Interior Turnover", es: "Renovación Interior de Instalación Comercial" },
    category: "commercial",
    location: "Miami, FL",
    image: "/images/project-commercial-clean.webp",
    isFeatured: true
  },
  {
    id: "comm-rental-doors",
    title: { en: "Rental Unit Fast Turnover & Trim Painting", es: "Pintura Rápida para Propiedad de Alquiler" },
    category: "commercial",
    location: "Pembroke Pines, FL",
    image: "/images/gallery/gallery-interior-hallway-doors.jpg"
  },
  {
    id: "comm-multi-family",
    title: { en: "Multi-Family Residential Exterior Maintenance", es: "Mantenimiento Exterior para Propiedades Multifamiliares" },
    category: "commercial",
    location: "Miami-Dade, FL",
    image: "/images/gallery/gallery-exterior-modern-villa.jpg"
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "case-exterior",
    title: {
      en: "Florida Home Exterior Refresh",
      es: "Transformación Exterior de Residencia en Florida"
    },
    description: {
      en: "Faded stucco and weather-worn walls restored with elastomeric primer and premium satin acrylic exterior paint.",
      es: "Estuco desgastado por el sol restaurado con sellador elastomérico y pintura acrílica satinada de máxima protección."
    },
    beforeImage: "/images/before-weathered-new.webp",
    afterImage: "/images/after-restored-new.webp",
    location: "Pembroke Pines, FL"
  }
];
