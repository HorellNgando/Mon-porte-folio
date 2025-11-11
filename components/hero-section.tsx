"use client"

import { ArrowRight, Linkedin, Github, Dribbble, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FloatingElements } from "@/components/floating-elements"

export function HeroSection() {
  const stats = [
    { number: "14", label: "Projects" },
    { number: "50+", label: "Clients" },
    { number: "1.5K", label: "Followers" },
    { number: "14", label: "Awards" },
  ]

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/horell-ngando-bissambou-", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/HorellNgando/", label: "GitHub" },
  ]

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-25 px-4 md:px-8 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blobMove"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blobMove" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blobMove" style={{ animationDelay: "4s" }}></div>
      </div>
      <FloatingElements count={6} speed="slow" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div className="space-y-8 text-center md:text-left" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-light w-fit mx-auto md:mx-0">
                <Sparkles size={16} className="text-purple-400" />
                <p className="text-purple-400 font-semibold text-xs uppercase tracking-widest">
                  Bienvenue sur mon Portefolio
                </p>
              </div>
            </motion.div>
            <FloatingElements count={6} speed="slow" />
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-tight mt-6">
              Je suis <span className="gradient-text-purple">Horell Ngando</span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mt-2">
              <span>Développeur Web</span> <span className="gradient-text">+ UX/UI Designer</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              Créer de magnifiques expériences numériques avec une attention aux détails, une innovation créative et des technologies web modernes. Spécialisé dans la création d'applications évolutives avec des interfaces époustouflantes répondant aux exigence des clients.
            </motion.p>
            <FloatingElements count={6} speed="slow" />
            {/* Stats */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text-purple group-hover:scale-110 transition-transform">
                    {stat.number}
                  </p>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
                {/* <FloatingElements count={6} speed="slow" /> */}
            {/* Buttons */}
           <div className="flex gap-15 items-center">
               <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40">
                  Prenez contact
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href="/mon_cv.pdf"
                download
                className="px-8 py-4 border border-purple-500/50 text-white hover:bg-purple-500/10 rounded-xl font-semibold transition-all duration-300 hover:border-purple-500 text-center"
              >
                Télécharger mon CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex gap-3 pt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 flex items-center justify-center transition-all duration-300"
                  title={social.label}
                >
                  <social.Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
           </div>
          </motion.div>

          {/* Right image with 3D hover + oval carousel */}
          <div className="relative hidden md:flex items-center placeholder-yellow-700 justify-center w-full h-96">
            {/* Oval carousel behind */}
            <motion.div
              className="absolute w-96 h-64 rounded-full border border-purple-500/20"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />
            <motion.div
              className="relative w-96 h-110 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-purple-500/10"
              whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img src="/me.jpg" alt="Gerold" className="w-full h-full object-cover rounded-3xl" />
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50"></div>
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
