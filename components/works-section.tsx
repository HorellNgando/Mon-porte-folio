"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const works = [
  {
    id: 1,
    title: "Plateforme E-Commerce",
    category: "Web Design",
    image: "/modern-ecommerce-dashboard.jpg",
    tags: ["React", "UI Design", "Web"],
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Interface UX/UI Application de simulation de coût douanier SIMU",
    category: "Design d'App",
    image: "/simu1.png",
    tags: [ "UX/UI", "Design","Figma"],
    slug: "mobile-app-interface",
  },
  {
  id: "8",
  title: "Affiche publicitaire – Cocktail sans alcool SUNRISE FRESH",
  image: "/sunrise1.png",
  slug: "sunrise-fresh-affiche",
  gallery: ["/sunrise1.png"],
  category: "Design Graphique",
  technologies: ["Canva , Adobe Express"],
  tags: ["Design Graphique", "Publicité", "Affiche", "Branding"],

},
]

export function WorksSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous")

  const filteredWorks = useMemo(() => {
    if (selectedCategory === "Tous") return works
    return works.filter((work) => work.category === selectedCategory)
  }, [selectedCategory])

  const categories = ["Tous", ...Array.from(new Set(works.map((w) => w.category)))]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <section
      id="works"
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-background via-background/80 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Mes Projets
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents alliant design, développement et créativité.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedCategory(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === filter
                  ? "bg-purple-600 text-white shadow-md"
                  : "border border-border hover:border-purple-500 hover:bg-purple-500/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <Link
                href={`/projects/${work.slug}`}
                className="block group bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <motion.img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-purple-600 text-sm font-semibold mb-2">{work.category}</p>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-purple-600 transition-colors">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <button className="px-8 py-3 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-600/10 font-semibold transition-all duration-300">
              Voir tous les projets
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
