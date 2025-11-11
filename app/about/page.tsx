"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import Link from "next/link"
import { ArrowLeft, Mail, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-transparent -z-10"></div>
        <FloatingElements count={6} speed="slow" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-10 text-sm font-medium transition">
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
            À propos de moi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeur et designer passionné, je crée des expériences digitales belles, intuitives et performantes.
          </p>
        </motion.div>
      </section>

      {/* Contenu principal */}
      <section className="relative py-20 px-4 md:px-8">
        <FloatingElements count={4} speed="slow" />

        <div className="max-w-7xl mx-auto space-y-32">

          {/* Qui suis-je */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-7 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Qui je suis</h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Je suis un <span className="text-purple-400 font-semibold">développeur frontend, designer web et graphique, 
                  </span> et aspirant à devenir développeur <span className="text-purple-400 font-semibold">fullstack & mobile</span>. 
                  Mon approche allie une expertise technique solide à une sensibilité créative affirmée.
                </p>
                <p>
                  Tout a commencé par une curiosité insatiable pour le fonctionnement des choses. 
                  Au fil des années, j’ai construit une maîtrise approfondie du développement frontend, 
                  des principes UX/UI et du design visuel qui fait la différence.
                </p>
                <p>
                  Ce qui m’anime ? Résoudre des problèmes complexes avec des solutions élégantes. 
                  Que ce soit pour concevoir une application web fluide, une interface intuitive 
                  ou une identité visuelle marquante, j’apporte le même soin du détail à chaque projet.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition"></div>
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="/professional-portrait.jpg"
                  alt="Portrait professionnel"
                  className="w-full h-full min-h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight">Mes expertises</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Développement Frontend",
                  items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Design Responsif", "Performance Web"]
                },
                {
                  title: "Design & UX",
                  items: ["UI/UX Design", "Figma", "Design Systems", "Identité de marque", "Prototypage"]
                },
                {
                  title: "Design Créatif",
                  items: ["Graphic Design", "Adobe Creative Suite", "Illustration", "Motion Design", "Storytelling visuel"]
                }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  whileHover={{ y: -8 }}
                  className="group bg-card/90 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-400"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-secondary transition-colors">
                    {skill.title}
                  </h3>
                  <ul className="space-y-4">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground text-base">
                        <ArrowRight size={14} className="text-primary/70 group-hover:text-secondary transition-colors" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Parcours */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">Mon parcours</h2>
            <div className="max-w-4xl mx-auto">
              {[
                { num: "1", title: "Début de l’aventure", desc: "Apprentissage du développement web et du design. Coup de cœur immédiat pour la création digitale surtout pour le Design." },
                { num: "2", title: "Premiers projets", desc: "portfolios, expériences concrètes. Apprentissage sur le terrain , maquettes Figma et des visuels." },
                { num: "3", title: "Ambitions fullstack", desc: "Approfondissement backend, bases de données, applications mobiles , Motions Design." },
                { num: "4", title: "Aujourd’hui & demain", desc: "Création de solutions innovantes qui marient design d’exception et fonctionnalités puissantes." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  className="flex gap-6 mb-4 last:mb-0"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-primary/30 flex items-center justify-center text-primary font-bold text-xl shadow-xl">
                      {step.num}
                    </div>
                    {i < 3 && (
                      <div className="w-1 h-32 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent mt-4"></div>
                    )}
                  </div>
                  <div className="pt-3 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  )
}