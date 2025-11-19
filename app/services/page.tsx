"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { services } from "@/lib/data/services"
import { Code2, Palette, Smartphone, BarChart3, CheckCircle2, Star, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const serviceIcons: Record<string, React.ReactNode> = {
  palette: <Palette className="w-8 h-8 text-primary" />,
  layout: <BarChart3 className="w-8 h-8 text-primary" />,
  monitor: <Code2 className="w-8 h-8 text-primary" />,
  smartphone: <Smartphone className="w-8 h-8 text-primary" />,
}

export default function ServicesPage() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Navbar />

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Mes Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Je conçois et développe des solutions numériques modernes, adaptées à vos besoins — de la création visuelle au développement web complet.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="group bg-card border border-border rounded-xl p-8 transition-all relative overflow-hidden hover:shadow-xl hover:shadow-primary/10"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {serviceIcons[service.icon] || <Code2 className="w-8 h-8" />}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.longDescription}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase">
                    Inclus :
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all"
                  >
                    Me contacter
                  </motion.button>
                </Link> */}
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            className="bg-card border border-border rounded-xl p-12 mb-20 shadow-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Mon Processus de Travail
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { step: "01", title: "Découverte", desc: "Je comprends vos besoins, vos objectifs et votre vision." },
                { step: "02", title: "Analyse", desc: "Je définis la meilleure approche et les solutions adaptées." },
                { step: "03", title: "Design & Dev", desc: "Je conçois et développe une solution unique et efficace." },
                { step: "04", title: "Livraison", desc: "Je lance le projet et reste disponible pour le suivi." },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  className="p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Me Section */}
          <motion.div
            className="text-center space-y-10 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold">Pourquoi me choisir ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Star className="w-8 h-8 text-primary" />, title: "Excellence & Qualité", desc: "Chaque projet est conçu avec soin, précision et créativité." },
                { icon: <Shield className="w-8 h-8 text-primary" />, title: "Fiabilité", desc: "Je respecte mes engagements et assure un suivi professionnel." },
                { icon: <Zap className="w-8 h-8 text-primary" />, title: "Innovation", desc: "J’intègre les dernières technologies pour des solutions modernes." },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all shadow-sm"
                >
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
