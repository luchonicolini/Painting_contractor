import { BusinessInfo, ServiceItem, PortfolioItem, TestimonialItem } from '../types';

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
    whatsapp: "https://wa.me/17863706098"
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
    image: "https://s3.amazonaws.com/brandrepup/page_images/56235/original/interior-painting.jpg?1633128830",
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
    image: "https://s3.amazonaws.com/brandrepup/page_images/56236/original/exterior-painting.jpg?1633128854",
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
      { en: "Dust-contained containment containment", es: "Aislamiento hermético de áreas de trabajo" },
      { en: "Smooth skim-coating level 5 finish", es: "Alisado profesional nivel 5" },
      { en: "Primer and ceiling finish coat", es: "Fijador sellador y pintura de terminación" },
      { en: "Wallpaper removal available", es: "También retiramos papel tapiz antiguo" }
    ],
    icon: "Layers",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/714902/0518eb837a986ea61f3d2394e990e12584739588/original/85670357-035B-4714-B4A4-9624101B2C00.jpeg?1669037833",
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
    image: "https://s3.amazonaws.com/brandrepup/page_images/56238/original/roof-painting.jpg?1633128870",
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
    image: "https://s3.amazonaws.com/brandrepup/page_images/56237/original/pressure-washing.jpg?1633128862",
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
    image: "https://s3.amazonaws.com/brandrepup/page_images/56234/original/service-residential-painting.jpg?1633128814",
    category: "commercial"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    author: "Property Management Partner",
    location: "Pembroke Pines, FL",
    rating: 5,
    comment: {
      en: "Our company hired El Palmar to paint a 4 bedroom rental property in Pembroke Pines. They are a fantastic family business and we highly recommend them. Always very professional and Yalila is obsessed with your satisfaction. They went the extra mile in every way. We will definitely be using them from now on for all of our Broward and Dade properties.",
      es: "Nuestra empresa contrató a El Palmar para pintar una propiedad de renta de 4 habitaciones en Pembroke Pines. Son un negocio familiar fantástico y los recomendamos al 100%. Muy profesionales y Yalila está obsesionada con que quedes satisfecho. Fueron más allá en cada detalle. Definitivamente los usaremos para todas nuestras propiedades de Broward y Dade."
    },
    serviceMentioned: "Rental Property Interior Painting"
  },
  {
    id: "rev-2",
    author: "Residential Client",
    location: "Miami-Dade, FL",
    rating: 5,
    comment: {
      en: "It was an absolute pleasure working with El Palmar Painting and Services. Yalila and Rodolfo treat your home as their own and are very detail oriented. Their results exceeded my own expectations and gave the home a much needed facelift. They are very knowledgeable about the best suiting paint and will share that knowledge with you. I have already had family members use their service. Call them today!",
      es: "Fue un verdadero placer trabajar con El Palmar Painting and Services. Yalila y Rodolfo tratan tu casa como si fuera la suya y son extremadamente minuciosos con los detalles. El resultado superó mis expectativas y le dio a la casa la renovación que necesitaba. Tienen mucho conocimiento sobre qué pintura usar. Ya varios familiares los contrataron. ¡Llámalos, no te arrepentirás!"
    },
    serviceMentioned: "Full Home Facelift"
  },
  {
    id: "rev-3",
    author: "Homeowner",
    location: "South Florida",
    rating: 5,
    comment: {
      en: "I have hired Rodolfo and Yalila for several projects, and they always exceed my expectations. They are on time, detail oriented, very neat, and quick to answer any questions I have. They treat your home carefully—they do not take any shortcuts. They really care that you are happy with their work. I am thrilled I met them!",
      es: "He contratado a Rodolfo y Yalila para varios proyectos y siempre superan mis expectativas. Llegan a tiempo, cuidan los detalles, son muy limpios y responden de inmediato cualquier duda. Hacen todo con paciencia y sin atajos. Realmente les importa tu satisfacción. ¡Estoy encantada de haberlos encontrado!"
    },
    serviceMentioned: "Repeat Residential Painting"
  },
  {
    id: "rev-4",
    author: "Homeowner",
    location: "Hialeah, FL",
    rating: 5,
    comment: {
      en: "We used El Palmar to paint the exterior, and have to say that they are very professional, responsible, and have excellent customer service. We highly recommend them.",
      es: "Contratamos a El Palmar para pintar todo el exterior y tenemos que decir que son muy profesionales, responsables y con una atención al cliente de primera. Muy recomendados."
    },
    serviceMentioned: "Exterior Painting"
  },
  {
    id: "rev-5",
    author: "Cliente Residencial",
    location: "Hialeah, FL",
    rating: 5,
    comment: {
      en: "Excellent quality as people and in their work. Very professional and fair with their pricing.",
      es: "Excelente calidad como personas y en su trabajo. Muy profesionales y justos con los costos."
    },
    serviceMentioned: "Interior & Exterior"
  },
  {
    id: "rev-6",
    author: "Rental Owner",
    location: "Miami, FL",
    rating: 5,
    comment: {
      en: "Quick, clean and dedicated team painted my rental unit and did a great job!",
      es: "¡Equipo rápido, limpio y dedicado! Pintaron mi unidad de renta e hicieron un trabajo fantástico."
    },
    serviceMentioned: "Rental Turnover"
  },
  {
    id: "rev-7",
    author: "Cliente Particular",
    location: "Hialeah, FL",
    rating: 5,
    comment: {
      en: "A company with exceptional professionalism and workers with great discipline. Highly reliable—if anyone wants to get painting or pressure washing done, I recommend them completely.",
      es: "Una compañía con mucho profesionalismo y trabajadores con mucha disciplina, muy cumplidores. Si alguien quiere realizar algún trabajo de los que ofrecen se los recomiendo, no se arrepentirán."
    },
    serviceMentioned: "Painting & Pressure Washing"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "project-1",
    title: { en: "Modern Residence Exterior Makeover", es: "Renovación Exterior Residencial Moderna" },
    category: "exterior",
    location: "Pembroke Pines, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718355/3cfab9ddc7d55e94146128083998ed36e4587186/original/A4A1ED9A-A0C1-4E08-B6A1-AE7A8F3D81B5.jpeg?1672597239",
    isFeatured: true
  },
  {
    id: "project-2",
    title: { en: "Custom Living Room & Ceiling Finish", es: "Acabado en Sala de Estar y Techos" },
    category: "interior",
    location: "Hialeah, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718356/c8f95309e3e88371c12b1b76759334c8c4807b9f/original/CD4119B2-82DF-4558-B3D7-05CE4EEC2FE6.jpeg?1672597247",
    isFeatured: true
  },
  {
    id: "project-3",
    title: { en: "South Florida Villa Exterior Repaint", es: "Pintura Exterior de Villa en Florida" },
    category: "exterior",
    location: "Miramar, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718359/d1cccb1a525465b9948ba67cbf97041b4908daef/original/93D29A1B-487F-4BE7-8F52-46358218705C.jpeg?1672597258",
    isFeatured: true
  },
  {
    id: "project-4",
    title: { en: "Crisp Kitchen Cabinets & Wall Contrast", es: "Contraste de Paredes y Cocina Moderna" },
    category: "interior",
    location: "Miami-Dade, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718360/2db21c774885573528503849f97d4d2ff4a885eb/original/6D369F98-DF98-4FB0-84A0-BA87EFA1C608.jpeg?1672597306"
  },
  {
    id: "project-5",
    title: { en: "Roof Coating & Weather Sealant", es: "Revestimiento y Sellado de Techo" },
    category: "roof",
    location: "Hialeah, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718367/61b4c336b74714af47cf7346be501267c8b783cf/original/C4BE1383-7C7D-478E-8B94-7E638BB3E38D.jpeg?1672597388"
  },
  {
    id: "project-6",
    title: { en: "Pressure Wash & Driveway Restoration", es: "Lavado a Presión y Restauración de Entrada" },
    category: "pressure-washing",
    location: "Doral, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718368/c2b178a9d8aab9cb728c1ce9627c9abeab8b486b/original/3D6D3C0C-21F7-4B81-8F2E-3EAADD204340.jpeg?1672597395"
  },
  {
    id: "project-7",
    title: { en: "High-End Entryway & Door Trim", es: "Entrada Principal y Molduras de Puerta" },
    category: "interior",
    location: "Pembroke Pines, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718371/6b9708f62b6dc4d0b65fef9d8c151c0edb91d1b1/original/26CEF41A-DF76-4173-BBE5-0EB8DF038CEE.jpeg?1672597406"
  },
  {
    id: "project-8",
    title: { en: "Commercial Facility Interior Painting", es: "Pintura Interior de Instalación Comercial" },
    category: "commercial",
    location: "Miami, FL",
    image: "https://ded7t1cra1lh5.cloudfront.net/media/718372/f3bc05ee3d8980e10929d74f78e983a7aa0768e1/original/E70F93B1-FA5B-4DC1-8892-DF849759CB8B.jpeg?1672597465"
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
    beforeImage: "https://ded7t1cra1lh5.cloudfront.net/media/660736/9d554ea4d61e89644b73994719542acd7282a74b/original/DDD38604-8AAD-486C-A89A-0BF20B3BF761.jpeg?1634230171",
    afterImage: "https://ded7t1cra1lh5.cloudfront.net/media/718355/3cfab9ddc7d55e94146128083998ed36e4587186/original/A4A1ED9A-A0C1-4E08-B6A1-AE7A8F3D81B5.jpeg?1672597239",
    location: "Pembroke Pines, FL"
  }
];
