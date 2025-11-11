"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data/projects"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous")

  const categories = ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Navbar />

      <div className="min-h-screen pt-24 pb-20">
        {/* Effets de fond */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            key="gradient-1"
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl animate-floatUp"
          />
          <div
            key="gradient-2"
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-floatUp animation-delay-200"
          />
          <div
            key="gradient-3"
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-b from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse"
          />
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-4">
              Mes Projets
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Découvrez ma collection de projets en design web, design d'applications, branding et graphisme,
              illustrant mes compétences, ma créativité et ma passion pour le design.
            </p>
          </div>

          {/* Catégories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fadeInUp animation-delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                    : "bg-card text-foreground hover:bg-muted border border-border/50 hover:border-purple-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Liste des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <Link
                key={`${project.id}-${index}`} // ✅ Clé unique
                href={`/projects/${project.slug}`}
                className="group animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-72 rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=600&query=project"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.description}
                    </p>
                    <div className="flex items-center text-purple-300 gap-2 font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      <span>Voir le projet</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Aucun projet trouvé dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
