"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Settings, Handshake } from "lucide-react"

const valeurs = [
  {
    icon: Target,
    title: "Simplicité et Impact",
    description:
      "Je crois qu’un design réussi naît de la clarté. Chaque élément doit avoir un but, et chaque choix doit renforcer l’expérience utilisateur.",
  },
  {
    icon: Lightbulb,
    title: "Créativité orientée utilisateur",
    description:
      "L’innovation n’a de sens que lorsqu’elle sert les besoins réels des utilisateurs. J’explore, teste et adapte chaque idée autour de l’humain.",
  },
  {
    icon: Settings,
    title: "Performance et Accessibilité",
    description:
      "Un bon produit est rapide, fluide et accessible à tous. J’accorde une attention particulière à l’optimisation et à l’inclusivité.",
  },
  {
    icon: Handshake,
    title: "Collaboration et Transparence",
    description:
      "Je valorise la communication claire et l’échange constant. Chaque projet est une aventure partagée où les idées s’affinent ensemble.",
  },
]

export default function ValeursPage() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background/80 to-background pt-24 pb-20 px-6 overflow-hidden">
      {/* Décorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400"
        >
          Ma Philosophie & Mes Valeurs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Mon approche repose sur la conviction que le design n’est pas seulement une question d’esthétique,
          mais une expérience émotionnelle, intuitive et accessible à tous.
        </motion.p>
      </div>

      {/* Valeurs */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {valeurs.map((valeur, index) => {
          const Icon = valeur.icon
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative p-8 rounded-3xl bg-background/30 backdrop-blur-md border border-purple-500/10 shadow-md hover:shadow-purple-500/20 transition-all"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{valeur.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{valeur.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Phrase de conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20 max-w-3xl mx-auto"
      >
        <p className="text-lg md:text-xl text-muted-foreground italic">
          “Je conçois avec le cœur, je développe avec logique — pour créer des expériences qui ont du sens.”
        </p>
      </motion.div>
    </section>
  )
}
