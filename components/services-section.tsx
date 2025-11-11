"use client"

import { Zap, Palette, Code, Monitor, Server, Layout, Smartphone, PenTool } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Création d'interfaces centrées sur l'utilisateur pour offrir des expériences numériques intuitives et agréables.",
  },
  {
    icon: PenTool,
    title: "Graphic Designer",
    description:
      "Conception visuelle créative pour vos projets : logos, illustrations, et supports marketing percutants.",
  },
  {
    icon: Code,
    title: "Développement Frontend",
    description:
      "Réalisation d'interfaces web modernes et réactives. Je maîtrise les bases mais continue d'améliorer mes compétences.",
  },
  {
    icon: Server,
    title: "Développement Backend",
    description:
      "Mise en place de serveurs, bases de données et API robustes. Je suis en phase d'apprentissage pour renforcer mes compétences.",
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description:
      "Développement d'applications mobiles. Je commence à apprendre et à créer des expériences mobiles simples mais fonctionnelles.",
  },
  {
    icon: Monitor,
    title: "Design d'Applications",
    description:
      "Conception d'interfaces d'application ergonomiques qui améliorent l'expérience utilisateur et favorisent l'engagement.",
  },
]

export function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } },
    hover: { scale: 1.03, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.15)", transition: { type: "spring", stiffness: 150 } },
  }

  const iconVariants = {
    float: {
      y: [0, -4, 0],
      transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
    },
  }

  return (
    <section
      id="services"
      className="py-24 px-4 md:px-8"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(147, 51, 234, 0.05), transparent 70%), radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.05), transparent 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Mes Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Je propose des services complets de design et développement pour concrétiser vos projets numériques avec soin et créativité.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
                className="group p-8 rounded-3xl bg-background border border-border cursor-pointer flex flex-col items-start transition-all"
              >
                <motion.div
                  className="w-16 h-16 rounded-lg bg-purple-500/20 text-purple-500 flex items-center justify-center mb-6 transition-all"
                  variants={iconVariants}
                  animate="float"
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-purple-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
