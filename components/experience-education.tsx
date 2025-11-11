"use client"

import { Briefcase, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const experience = [
  // {
  //   titre: "Développeur Web",
  //   entreprise: "Mentalists Cameroun",
  //   periode: "2022 - Présent",
  //   description: "Direction du développement frontend et conception des interfaces utilisateurs.",
  // },
  {
    titre: "Design UX/UI",
    entreprise: "Ccn-Technologies",
    periode: "2025",
    description: "Conception d'interfaces utilisateurs web et mobile.",
  },
  {
    titre: "Développeur Web",
    entreprise: "Mentalists Cameroun",
    periode: "2024",
    description: "Conception d'interface web.",
  },
]

const formation = [
  {
    titre: "Formation Sécrétariat Bureautique",
    ecole: " Global Consulting SI",
    annee: "2018",
    description: "Formation dans l'utilisation des logiciels Word , Excel , Power point",
  },
  {
    titre: "Formation en Développement Web",
    ecole: "Inch Class",
    annee: "2025",
    description: "Formation intensive sur les technologies web moderne et le dévéloppemnt d'application web.",
  },
  {
    titre: "Formation en Design Web",
    ecole: "Ccn-Technologies",
    annee: "2025",
    description: "Formation dans la réalisation de 'interface/expérience utilisateur.",
  },
]

export function ExperienceEducation() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Expérience */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-3xl font-bold">Mon Expérience</h2>
            </div>

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">
                  {exp.periode}
                </p>
                <h3 className="text-xl font-bold mb-1">{exp.titre}</h3>
                <p className="text-muted-foreground mb-2">{exp.entreprise}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Formation */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h2 className="text-3xl font-bold">Ma Formation</h2>
            </div>

            {formation.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">
                  {edu.annee}
                </p>
                <h3 className="text-xl font-bold mb-1">{edu.titre}</h3>
                <p className="text-muted-foreground mb-2">{edu.ecole}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
