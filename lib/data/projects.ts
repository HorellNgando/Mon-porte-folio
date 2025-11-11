export interface ProcessStep {
  title: string
  description: string
  details?: string[]
  image?: string
  icon?: any
}

export interface GalleryItem {
  src: string
  type: "image" | "video"
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  gallery: GalleryItem[]
  category: "Developpement Web / Mobile" | "Design d'App" | "Branding" | "Design Graphique" | "Vidéo publicitaire"
  subcategory?: string
  technologies: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  figmaUrl?: string
  role: "Développeur" | "Designer" | "Fullstack"
  clients?: string
  features: string[]
  results: string[]
  year: number
  process?: ProcessStep[]
}

export const projects: Project[] = [
  // 1
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "Plateforme E-Commerce",
    description: "Solution e-commerce moderne avec filtres avancés",
    fullDescription:
      "Une plateforme e-commerce complète construite avec React, incluant la gestion d’inventaire en temps réel, un paiement sécurisé et une interface intuitive optimisée pour la conversion.",
    image: "/modern-ecommerce-dashboard.jpg",
    gallery: [
      { src: "/modern-ecommerce-dashboard.jpg", type: "image" },
      { src: "/ecommerce-checkout.jpg", type: "image" },
      { src: "/ecommerce-product-page.jpg", type: "image" },
    ],
    category: "Developpement Web / Mobile",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    tags: ["React", "UI Design", "Web", "E-Commerce"],
    role: "Fullstack",
    clients: "Startup E-Commerce",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "Filtrage et recherche de produits",
      "Paiement sécurisé",
      "Comptes utilisateurs",
      "Suivi des commandes",
      "Gestion des stocks",
    ],
    results: ["Augmentation de 40% des conversions", "Plus de 50K utilisateurs mensuels", "Note de 4,8/5"],
    year: 2024,
    process: [
      { title: "Analyse des besoins", description: "Étude du marché, audit des concurrents et définition des objectifs du produit.", details: ["Benchmark concurrentiel", "Wireframes initiaux", "Définition des KPIs"], image: "/process-analysis.jpg" },
      { title: "Design UI/UX", description: "Création de l’interface utilisateur et des parcours client.", details: ["Maquettes haute fidélité", "Prototype interactif", "Tests utilisateurs"], image: "/process-uiux.jpg" },
      { title: "Développement", description: "Implémentation front-end et back-end avec intégration des API et du paiement.", details: ["React & Next.js", "Base de données PostgreSQL", "Intégration Stripe"], image: "/process-development.jpg" },
      { title: "Tests et déploiement", description: "Vérification des fonctionnalités et mise en production.", details: ["Tests unitaires et d’intégration", "Optimisation des performances", "Déploiement sur Vercel"], image: "/process-testing.jpg" },
    ],
  },

  // 2
  {
    id: "2",
    slug: "mobile-app-interface",
    title: "Interface UX/UI Application de simulation de coût douanier SIMU",
    description: "Design d'application Web de simulation de coût douanier",
    fullDescription:
      "Le projet SIMU “Design d’application Web de simulation de coût douanier” vise à concevoir une interface moderne, intuitive et performante permettant aux utilisateurs — particuliers comme professionnels — de calculer rapidement et avec précision les frais douaniers applicables à leurs importations ou exportations. L’application a été pensée pour simplifier un processus souvent complexe, en traduisant les réglementations douanières et les barèmes de taxation en une expérience utilisateur fluide et compréhensible. Grâce à une approche centrée sur l’utilisateur, le design met en avant la clarté, la fiabilité et la rapidité, trois piliers essentiels dans le domaine logistique et douanier.",
    image: "/simu1.png",
    gallery: [
      { src: "/simu1.png", type: "image" },
      { src: "/simu2.png", type: "image" },
      { src: "/simu3.png", type: "image" },
    ],
    category: "Design d'App",
    technologies: ["Figma"],
    tags: ["UX/UI", "Design", "Figma"],
    role: "Designer",
    clients: "Aucun",
    figmaUrl: "https://www.figma.com/proto/sGsdTtsnIGoYJkMgcrkr1T/SIMU-PROJECT?node-id=492-4214&t=W9kpiEKz0JbGtMg1-1",
    features: [
      "Simulation précise des coûts douaniers",
      "Interface intuitive et responsive",
      "Visualisation claire des taxes et droits",
      "Sauvegarde et comparaison des estimations",
    ],
    results: [
      "Expérience utilisateur fluide et compréhensible",
      "Optimisation du parcours de simulation",
      "Design cohérent avec les standards UI modernes",
      "Amélioration de la lisibilité des informations douanières",
    ],
    year: 2025,
    process: [
      { title: "Recherche utilisateur", description: "Analyse des besoins des importateurs, exportateurs et particuliers afin d’identifier les principales difficultés dans le calcul des frais douaniers.", details: ["Entretiens avec des utilisateurs potentiels", "Étude des processus douaniers existants", "Analyse des outils concurrents"], image: "/process-research.jpg" },
      { title: "Wireframes et prototypes", description: "Conception des maquettes fonctionnelles pour tester la navigation, la disposition des éléments et le flux utilisateur avant la phase de design visuel.", image: "/process-wireframes.jpg" },
      { title: "Design visuel", description: "Création d’un design professionnel, épuré et moderne, avec une palette de couleurs évoquant la fiabilité et la transparence des services douaniers.", image: "/process-visual-design.jpg" },
      { title: "Tests utilisateurs", description: "Mise à l’épreuve du prototype auprès d’un panel d’utilisateurs afin d’ajuster la compréhension, la fluidité et la cohérence visuelle de l’application.", image: "/process-testing-mobile.jpg" },
    ],
  },

  // 3
  {
    id: "3",
    slug: "pharmaplus-mobile-app",
    title: "Design Mobile – Application PharmaPlus",
    description: "Conception d’une application mobile pour la recherche et la commande de médicaments en pharmacie",
    fullDescription: "Le projet PharmaPlus consiste à concevoir une application mobile moderne et intuitive qui facilite la recherche, la commande et le paiement de médicaments auprès des pharmacies les plus proches. L’application offre la possibilité aux utilisateurs de localiser rapidement les pharmacies de garde, de vérifier la disponibilité des médicaments souhaités et de les réserver en ligne. Grâce à un processus fluide et sécurisé, PharmaPlus permet également de payer directement via l’application et de recevoir une facture contenant un code unique à présenter lors du retrait. Ce projet met l’accent sur la fiabilité, la simplicité d’usage et la transparence — trois valeurs fondamentales dans le domaine de la santé numérique.",
    image: "/pharma1.png",
    gallery: [
      { src: "/pharma1.png", type: "image" },
      { src: "/pharma2.png", type: "image" },
      // { src: "/pharmaplus-video.mp4", type: "video" }, // vidéo possible
    ],
    category: "Design d'App",
    technologies: ["Figma", "Adobe Express"],
    tags: ["UX/UI", "Health App", "Mobile Design", "Figma"],
    role: "Designer",
    clients: "Projet personnel",
    figmaUrl: "https://www.figma.com/proto/pEmxDQDlbq57nQVnayNGjG/PharmaPlus?node-id=0-1&t=CMzRzWAw23v61WQG-1",
    features: [
      "Recherche géolocalisée des pharmacies proches",
      "Affichage des pharmacies de garde en temps réel",
      "Vérification de la disponibilité des médicaments",
      "Commande et paiement sécurisés via l’application",
      "Facture générée avec code unique de retrait",
    ],
    results: [
      "Réduction du temps de recherche des pharmacies disponibles",
      "Amélioration de la fiabilité et de la satisfaction utilisateur",
      "Design clair et rassurant adapté au domaine médical",
      "Expérience mobile fluide du panier au retrait en pharmacie",
    ],
    year: 2025,
    process: [
      { title: "Recherche utilisateur", description: "Étude des besoins des patients et des pharmaciens pour identifier les obstacles liés à la recherche et à la disponibilité des médicaments.", details: ["Interviews de patients et professionnels de santé", "Observation du parcours utilisateur actuel en pharmacie", "Benchmark d’applications médicales et de livraison"], image: "/process-research.jpg" },
      { title: "Wireframes et prototypes", description: "Conception de wireframes pour valider les parcours de recherche, de commande et de paiement avant le design final.", image: "/process-wireframes.jpg" },
      { title: "Design visuel", description: "Création d’une interface épurée aux couleurs rassurantes (bleu et vert), avec une typographie lisible et des icônes médicales claires.", image: "/process-visual-design.jpg" },
      { title: "Tests utilisateurs", description: "Tests effectués auprès d’utilisateurs réels pour vérifier la compréhension du parcours, la lisibilité et la facilité d’utilisation sur mobile.", image: "/process-testing-mobile.jpg" },
    ],
  },

  // 4
  {
    id: "4",
    slug: "clinique-de-bali-app",
    title: "Design Web – Application de gestion hospitalière Clinique de Bali",
    description: "Conception d’une application web pour la gestion complète des activités médicales et administratives d’un hôpital",
    fullDescription: "Le projet Clinique de Bali a pour objectif la conception d’une application web complète et ergonomique dédiée à la gestion intégrée d’un établissement hospitalier. Cette plateforme vise à faciliter le travail du personnel médical et administratif en centralisant l’ensemble des opérations : enregistrement des patients, gestion des dossiers médicaux, planification des consultations, suivi des traitements, et gestion des chambres et facturations. L’interface a été pensée pour être claire, fluide et sécurisée, permettant un accès rapide aux informations essentielles tout en respectant la confidentialité des données médicales. Ce design incarne la transformation numérique du secteur hospitalier à travers une expérience moderne et intuitive.",
    image: "/bali1.png",
    gallery: [
      { src: "/bali1.png", type: "image" },
      { src: "/bali2.png", type: "image" },
      { src: "/bali3.png", type: "image" },
    ],
    category: "Design d'App",
    technologies: ["Figma", "Adobe Express"],
    tags: ["UX/UI", "Design Système", "Application Web", "Gestion Médicale"],
    role: "Designer",
    clients: "Clinique de Bali (projet conceptuel)",
    figmaUrl: "https://www.figma.com/proto/LaL19oAYPUFP69AVhvCa3q/Clinique-Bali?node-id=0-1&t=z7E6CsUB7N0EDpvD-1",
    features: [
      "Tableau de bord de gestion hospitalière",
      "Enregistrement et suivi des patients",
      "Gestion des consultations et des dossiers médicaux",
      "Planification des rendez-vous et disponibilité des médecins",
      "Gestion des chambres, hospitalisations et facturations",
      "Accès sécurisé et rôles multiples (administrateur, médecin, infirmier)",
    ],
    results: [
      "Optimisation du temps de traitement des patients",
      "Réduction des erreurs administratives et médicales",
      "Interface intuitive adaptée au personnel médical",
      "Amélioration de la traçabilité et de la centralisation des données",
    ],
    year: 2025,
    process: [
      { title: "Recherche utilisateur", description: "Analyse approfondie des besoins des différents profils utilisateurs : médecins, infirmiers, secrétaires et administrateurs, afin de comprendre leurs flux de travail et points de douleur.", details: ["Entretiens avec du personnel hospitalier", "Observation des processus administratifs existants", "Étude comparative des logiciels de gestion médicale existants"], image: "/process-research.jpg" },
      { title: "Wireframes et prototypes", description: "Conception de wireframes détaillés pour représenter les parcours critiques : enregistrement des patients, suivi médical, et gestion des rendez-vous.", image: "/process-wireframes.jpg" },
      { title: "Design visuel", description: "Création d’un design professionnel inspiré des normes hospitalières : couleurs apaisantes, lisibilité renforcée et hiérarchie visuelle claire pour une expérience fluide.", image: "/process-visual-design.jpg" },
      { title: "Tests utilisateurs", description: "Tests effectués auprès de professionnels de santé et d’utilisateurs simulés pour optimiser la compréhension, la rapidité d’utilisation et la navigation dans l’interface.", image: "/process-testing-desktop.jpg" },
    ],
  },

  // 5
// {
//   id: "5",
//   slug: "poster-design",
//   title: "Série d'Affiches Événementielles",
//   description: "Création d'affiches créatives pour conférences tech",
//   fullDescription:
//     "Une série d’affiches percutantes pour des conférences tech internationales, combinant esthétique moderne, typographie audacieuse et couleurs vives.",
//   image: "/tech-conference-poster.jpg",
//   gallery: [{ src: "/tech-conference-poster.jpg", type: "image" }],
//   category: "Design Graphique",
//   subcategory: "Affiches",
//   technologies: ["Adobe InDesign", "Canva", "Adobe Photoshop"],
//   tags: ["Design Graphique", "Affiche", "Typographie", "Événements"],
//   role: "Designer",
//   clients: "Tech Events Co",
//   figmaUrl: "https://figma.com/example/poster-design",
//   features: ["Illustrations originales", "Typographie audacieuse", "Fichiers prêts à l’impression"],
//   results: ["Plus de 5M impressions", "Taux de clics de 40%"],
//   year: 2024,
//   process: [
//     { title: "Recherche et inspiration", description: "Collecte des tendances graphiques et moodboards." },
//     { title: "Concept et design", description: "Création des visuels principaux et typographie.", image: "/process-poster-design.jpg" },
//     { title: "Validation client", description: "Feedback et ajustements selon les besoins." },
//     { title: "Livraison", description: "Préparation des fichiers pour impression et digital." },
//   ],
// },

// 6
{
  id: "6",
  slug: "go-express-mobile-app",
  title: "Design Mobile – Application Go Express",
  description: "Design d’application mobile de mise en relation entre restaurants et livreurs",
  fullDescription:
    "Le projet Go Express a pour objectif de concevoir une application mobile moderne et ergonomique permettant de faciliter la mise en relation entre restaurants, livreurs et clients. L’application vise à optimiser le processus de commande et de livraison grâce à une interface simple, rapide et agréable à utiliser. Du suivi en temps réel des commandes à la gestion des paiements et notifications, tout a été pensé pour offrir une expérience fluide et cohérente. L’identité visuelle repose sur un design vibrant et intuitif, renforçant la confiance et l’efficacité de l’utilisateur à chaque étape.",
  image: "/go1.png",
  gallery: [{ src: "/go1.png", type: "image" }],
  category: "Design d'App",
  technologies: ["Figma", "Adobe Express"],
  tags: ["UX/UI", "Mobile Design", "Figma", "Delivery App"],
  role: "Designer",
  clients: "Projet personnel",
  figmaUrl: "https://www.figma.com/proto/U61lab2y00hJTKnulQiXPC/GoExpress-Livraison-mobile?node-id=282-3206&t=BbqmrScroC6e5lXW-1",
  features: [
    "Interface intuitive pour la commande de repas",
    "Suivi de livraison en temps réel",
    "Espace partenaire pour les restaurants",
    "Notifications et gestion des paiements intégrées",
  ],
  results: [
    "Expérience fluide pour les utilisateurs finaux",
    "Navigation claire entre les rôles (client, livreur, restaurant)",
    "Design moderne respectant les bonnes pratiques UX mobile",
    "Optimisation du parcours de commande et de livraison",
  ],
  year: 2025,
  process: [
    { title: "Recherche utilisateur", description: "Analyse du comportement des utilisateurs (clients, livreurs, restaurateurs) pour comprendre leurs besoins et attentes en matière de rapidité et de fiabilité.", details: ["Entretiens avec des utilisateurs de services similaires (Glovo, Uber Eats)", "Étude des irritants actuels dans le processus de commande", "Benchmark des applications de livraison existantes"], image: "/process-research.jpg" },
    { title: "Wireframes et prototypes", description: "Création des maquettes fonctionnelles afin de valider le parcours utilisateur, les écrans de commande, et la navigation entre les différents rôles.", image: "/process-wireframes.jpg" },
    { title: "Design visuel", description: "Élaboration du design final avec une palette dynamique évoquant la rapidité et la fiabilité, des icônes personnalisées et une typographie lisible adaptée au mobile.", image: "/process-visual-design.jpg" },
    { title: "Tests utilisateurs", description: "Réalisation de tests sur un prototype interactif afin d’évaluer la clarté, la réactivité et la compréhension de l’interface par différents profils d’utilisateurs.", image: "/process-testing-mobile.jpg" },
  ],
},

// 7
{
  id: "7",
  slug: "nomia-mobile-app",
  title: "Design Mobile – Application NOMIA",
  description: "Maquette d’application mobile de commande en restaurant via QR Code",
  fullDescription:
    "Le projet NOMIA est une application mobile innovante conçue pour moderniser l’expérience client en restaurant. Grâce à un simple scan du QR Code présent sur la table, les utilisateurs accèdent instantanément au menu numérique du restaurant, peuvent passer leur commande et effectuer leur paiement directement depuis leur smartphone. Ce projet a été pensé pour améliorer la rapidité du service, réduire les erreurs de commande et offrir une expérience sans contact fluide et élégante. Le design met l’accent sur la simplicité, la lisibilité et l’harmonie visuelle, garantissant une utilisation intuitive pour tous les profils d’utilisateurs.",
  image: "/no1.png",
  gallery: [{ src: "/no1.png", type: "image" }],
  category: "Design d'App",
  technologies: ["Figma", "Adobe Express"],
  tags: ["UX/UI", "Design Mobile", "QR Code", "Restaurant App"],
  role: "Designer",
  clients: "Projet personnel",
  figmaUrl: "https://www.figma.com/proto/u6VypZputN6afTrqO8S0jo/Restaurant-Mobile-Application-Nomia?node-id=2086-2360&t=XbZV7pXFRUBo9Bq8-1",
  features: [
    "Scan QR Code pour accéder au menu",
    "Commande directe depuis la table",
    "Paiement intégré via mobile",
    "Suivi en temps réel de la commande",
    "Interface restaurant pour gestion des commandes",
  ],
  results: [
    "Réduction du temps d’attente en restaurant",
    "Fluidité et simplicité dans le processus de commande",
    "Expérience utilisateur moderne et sans contact",
    "Design visuel cohérent avec les tendances FoodTech",
  ],
  year: 2025,
  process: [
    { title: "Recherche utilisateur", description: "Étude du comportement des clients en restaurant et des restaurateurs pour comprendre les besoins autour de la commande digitale et du paiement mobile.", details: ["Observation du parcours client en restaurant", "Analyse des solutions concurrentes (Sunday, Menuify, etc.)", "Interviews avec restaurateurs et serveurs"], image: "/process-research.jpg" },
    { title: "Wireframes et prototypes", description: "Création des parcours utilisateurs principaux : scan du QR Code, sélection des plats, validation et paiement. Test de la fluidité de la navigation et du design minimaliste.", image: "/process-wireframes.jpg" },
    { title: "Design visuel", description: "Développement d’une identité visuelle élégante et épurée inspirée de la gastronomie moderne. Palette de couleurs chaleureuse et typographie lisible pour une expérience agréable.", image: "/process-visual-design.jpg" },
    { title: "Tests utilisateurs", description: "Phase de test sur prototype interactif avec différents profils d’utilisateurs afin d’évaluer la compréhension, la rapidité de prise en main et l’ergonomie globale.", image: "/process-testing-mobile.jpg" },
  ],
},

// 8
{
  id: "8",
  slug: "sunrise-fresh-affiche",
  title: "Affiche publicitaire – Cocktail sans alcool SUNRISE FRESH",
  description: "Création d’une affiche promotionnelle pour un cocktail sans alcool frais et naturel",
  fullDescription:
    "Le projet SUNRISE FRESH consiste en la conception d’une affiche publicitaire moderne et rafraîchissante pour la promotion d’un cocktail sans alcool à base de fruits tropicaux. L’objectif principal était de créer une identité visuelle forte, évoquant la fraîcheur, la vitalité et le plaisir sain. L’affiche a été pensée pour capter immédiatement l’attention du public à travers une composition colorée, un jeu de typographies équilibré et une mise en avant réaliste du produit. Ce design met en valeur l’idée d’un moment de détente et de vitalité, fidèle aux valeurs d’un produit 100 % naturel et sans alcool.",
  image: "/sunrise1.png",
  gallery: [
    { src: "/sunrise1.png", type: "image" },
    { src: "/sunrise2.png", type: "image" },
    { src: "/sunrise3.png", type: "image" },
  ],
  category: "Design Graphique",
  technologies: ["Canva", "Adobe Express"],
  tags: ["Design Graphique", "Publicité", "Affiche", "Branding"],
  role: "Designer",
  clients: "Projet personnel",
  features: [
    "Affiche promotionnelle au design coloré et équilibré",
    "Mise en avant du produit avec effet de fraîcheur et éclat fruité",
    "Composition harmonieuse pour supports imprimés et digitaux",
    "Adaptabilité pour les réseaux sociaux et formats publicitaires",
  ],
  results: [
    "Visuel captivant et moderne",
    "Renforcement de l’identité visuelle du produit",
    "Design adapté au marketing digital et print",
    "Transmission immédiate du message : fraîcheur et plaisir naturel",
  ],
  year: 2025,
  process: [
    { title: "Recherche et inspiration", description: "Analyse des tendances visuelles dans le domaine des boissons non alcoolisées et du marketing healthy. Définition des couleurs, typographies et émotions à transmettre.", details: ["Moodboard de références publicitaires", "Étude de la symbolique des couleurs (orange, jaune, vert)", "Analyse des supports de diffusion (affichage, réseaux sociaux, print)"], image: "/process-research.jpg" },
    { title: "Conception graphique", description: "Création de la composition principale de l’affiche : mise en avant du produit, fond dynamique et éléments fruités évoquant la fraîcheur tropicale.", image: "/process-visual-design.jpg" },
    { title: "Choix typographiques et colorimétriques", description: "Sélection de typographies modernes et dynamiques associées à une palette de couleurs vives et lumineuses renforçant l’identité visuelle du cocktail.", image: "/process-color-font.jpg" },
    { title: "Finalisation et déclinaisons", description: "Optimisation du rendu final pour différents formats : affichage urbain, réseaux sociaux, bannières web, et impression haute définition.", image: "/process-finalization.jpg" },
  ],
},

// 9
{
  id: "9",
  slug: "soft-drinks-highlight-video",
  title: "Vidéo publicitaire – Mise en évidence Fanta, Coca, Pepsi, Sprite",
  description: "Création d’une vidéo promotionnelle pour mettre en valeur les boissons gazeuses emblématiques",
  fullDescription:
    "Ce projet consiste en la réalisation d’une vidéo publicitaire dynamique visant à mettre en avant les marques de boissons gazeuses Fanta, Coca, Pepsi et Sprite. L’objectif était de créer un montage visuel percutant, coloré et énergique, capable d’attirer immédiatement l’attention du spectateur tout en valorisant les produits. Chaque boisson est présentée avec des effets de lumière, des animations fluides et un rythme adapté à la musique, renforçant la perception de fraîcheur, de plaisir et de modernité associée à ces marques.",
  image: "/visuel/Coca Cola1.png",
  gallery: [
    // { src: "/", type: "image" },
    { src: "/visuel/Coca Cola.mp4", type: "video" }
  ],
  category: "Vidéo publicitaire",
  technologies: ["Canva Pro", "Canva"],
  tags: ["Vidéo", "Publicité", "Motion Design", "Branding", "Marketing"],
  role: "Designer",
  clients: "Projet personnel",
  features: [
    "Montage vidéo dynamique pour chaque boisson",
    "Effets visuels lumineux et animations fluides",
    "Transitions et mise en scène adaptées au rythme musical",
    "Optimisation pour réseaux sociaux et formats publicitaires",
  ],
  results: [
    "Vidéo engageante et percutante",
    "Valorisation visuelle des marques emblématiques",
    "Design adapté aux standards actuels du marketing digital",
    "Transmission immédiate du message : fraîcheur, plaisir et modernité",
  ],
  year: 2025,
  process: [
    {
      title: "Recherche et moodboard",
      description: "Étude des tendances visuelles pour les boissons gazeuses et inspiration pour l’ambiance et les couleurs de la vidéo.",
      details: ["Analyse des campagnes concurrentes", "Moodboard des couleurs et effets visuels", "Définition du style graphique"],
      image: "/process-research.jpg"
    },
    {
      title: "Storyboard et plan de montage",
      description: "Création d’un storyboard pour structurer le flux de la vidéo et définir les séquences pour chaque marque.",
      image: "/process-storyboard.jpg"
    },
    {
      title: "Montage et motion design",
      description: "Réalisation du montage vidéo avec animations, effets de lumière, transitions et synchronisation musicale.",
      image: "/process-montage.jpg"
    },
    {
      title: "Optimisation et export",
      description: "Finalisation de la vidéo avec export haute qualité, formats adaptés aux réseaux sociaux et plateformes digitales.",
      image: "/process-finalization.jpg"
    },
  ],
},
// 10
{
  id: "10",
  slug: "lamborghini-color-variant-video",
  title: "Vidéo de présentation – Lamborghini (Variantes de couleur)",
  description: "Vidéo publicitaire immersive présentant une Lamborghini sous plusieurs variations de couleur et d’éclairage.",
  fullDescription:
    "Ce projet consiste en la création d’une vidéo de présentation mettant en valeur une Lamborghini à travers différentes variantes de couleur, de lumière et d’ambiance. L’objectif est de sublimer le design iconique de la voiture tout en explorant les contrastes visuels et les reflets selon les teintes choisies. Le montage joue sur la dynamique des transitions, la précision des mouvements de caméra et la bande sonore pour créer une expérience visuelle à la fois élégante, puissante et raffinée.",
  image: "/visuel/Lamborghini1.png",
  gallery: [
    { src: "/visuel/Lamborghini.mp4", type: "video" }
  ],
  category: "Vidéo publicitaire",
  technologies: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
  tags: ["Automobile", "Publicité", "Motion Design", "3D", "Montage vidéo"],
  role: "Designer",
  clients: "Projet personnel",
  features: [
    "Présentation cinématique de la Lamborghini avec transitions fluides",
    "Variation de couleurs et de reflets sur la carrosserie",
    "Éclairage HDRI et rendu réaliste pour les scènes",
    "Montage rythmé et synchronisé à la musique",
    "Export optimisé pour les réseaux sociaux et projections HD",
  ],
  results: [
    "Vidéo immersive et percutante mettant en valeur la puissance et le design",
    "Effet visuel premium grâce à l’intégration 3D et aux variations de lumière",
    "Esthétique moderne et haut de gamme adaptée au secteur automobile",
    "Excellente réception visuelle et émotionnelle du spectateur",
  ],
  year: 2025,
  process: [
    {
      title: "Pré-production et moodboard",
      description: "Analyse des publicités automobiles haut de gamme et création d’un moodboard centré sur la lumière, les teintes et les reflets.",
      details: [
        "Sélection des angles de vue et du style cinématique",
        "Définition de la palette de couleurs et des ambiances lumineuses",
        "Références visuelles de Lamborghini réelles et rendus 3D"
      ],
      image: "/process-moodboard-lambo.jpg"
    },
    {
      title: "Storyboard et séquençage",
      description: "Conception d’un storyboard détaillé pour définir le rythme des plans, les transitions et la logique des changements de couleur.",
      image: "/process-storyboard-lambo.jpg"
    },
    {
      title: "Tournage et rendu 3D",
      description: "Création des séquences avec des mouvements de caméra fluides, des rendus HDRI et des textures réalistes pour la voiture.",
      image: "/process-render-lambo.jpg"
    },
    {
      title: "Montage et post-production",
      description: "Montage vidéo, correction colorimétrique, ajout de transitions, d’effets de lumière et synchronisation avec la musique.",
      image: "/process-edit-lambo.jpg"
    },
    {
      title: "Export et diffusion",
      description: "Finalisation du projet en haute résolution et export dans différents formats pour réseaux sociaux et présentations clients.",
      image: "/process-export-lambo.jpg"
    },
  ],
}



]
