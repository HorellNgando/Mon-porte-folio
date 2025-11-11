export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  icon: string
  features: string[]
  price?: string
}

export const services: Service[] = [
  {
    id: "branding",
    title: "Design de Branding",
    description: "Solutions complètes d'identité de marque",
    longDescription:
      "Du design de logo aux directives complètes de la marque, je crée des identités de marque cohérentes qui résonnent avec votre public cible et vous distinguent de vos concurrents.",
    icon: "palette",
    features: [
      "Design de Logo",
      "Palette de Couleurs",
      "Système Typographique",
      "Directives de Marque",
      "Supports Marketing",
      "Contenus pour les Réseaux Sociaux",
    ],
    price: "Sur mesure",
  },
  {
    id: "ux-ui",
    title: "Design UI/UX",
    description: "Solutions de design centrées utilisateur",
    longDescription:
      "Je conçois des interfaces utilisateur intuitives et esthétiques qui résolvent de vrais problèmes et offrent des expériences exceptionnelles sur les plateformes web et mobiles.",
    icon: "layout",
    features: [
      "Recherche Utilisateur",
      "Wireframing",
      "Prototypage",
      "Tests d'Utilisabilité",
      "Systèmes de Design",
      "Prototypes Interactifs",
    ],
    price: "Sur mesure",
  },
  {
    id: "web-design",
    title: "Design Web",
    description: "Expériences web modernes et responsives",
    longDescription:
      "Je conçois et développe des sites web modernes et responsives qui sont magnifiques sur tous les appareils et convertissent les visiteurs en clients grâce à des principes UX stratégiques.",
    icon: "monitor",
    features: [
      "Design Responsive",
      "Optimisation des Performances",
      "SEO-Friendly",
      "Accessibilité",
      "Solutions E-Commerce",
    ],
    price: "Sur mesure",
  },
  {
    id: "app-design",
    title: "Design d'Applications",
    description: "Design d'applications natives et cross-platform",
    longDescription:
      "Du concept au lancement, je conçois des expériences mobiles intuitives et engageantes que les utilisateurs adorent et qui génèrent des résultats business.",
    icon: "smartphone",
    features: [
      "Design iOS",
      "Design Android",
      "User Flows",
      "Design d'Animations",
      "Transmission du Design",
      "Support Continu",
    ],
    price: "Sur mesure",
  },
]
