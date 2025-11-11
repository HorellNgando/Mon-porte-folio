"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { skillsData, skillCategories } from "@/lib/data/skills"
import { motion } from "framer-motion"

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "Tous") return skillsData
    return skillsData.filter((skill) => skill.category === selectedCategory)
  }, [selectedCategory])

  const categories = ["Tous", ...skillCategories.map((cat) => cat.name)]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/80 to-background text-foreground">
      <Navbar />

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Mes Compétences
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Une vision globale de mon expertise technique à travers les langages, frameworks, outils créatifs et
              environnements de développement que je maîtrise.
            </p>
          </motion.div>

          {/* FILTRES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg shadow-primary/30"
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* GRILLE DE COMPÉTENCES */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-card/70 to-background/60 border border-border/60 backdrop-blur-xl rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>

                  {/* Icône */}
                  {typeof skill.icon === "string" ? (
                    <span className="text-2xl">{skill.icon}</span>
                  ) : (
                    skill.icon && <skill.icon size={24} className="text-primary" />
                  )}
                </div>

                {/* Barre de progression stylisée */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Niveau</span>
                    <span className="font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted/40 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* STATISTIQUES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { label: "Total", value: skillsData.length },
              { label: "Langages", value: skillsData.filter((s) => s.category === "Languages").length },
              { label: "Frameworks", value: skillsData.filter((s) => s.category === "Frameworks").length },
              {
                label: "Outils & Plateformes",
                value: skillsData.filter(
                  (s) => s.category === "Design Tools" || s.category === "Other Tools"
                ).length,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card/60 border border-border/60 rounded-xl p-6 text-center backdrop-blur-md hover:border-primary/40 transition-all"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
