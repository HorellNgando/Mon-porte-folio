"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import type { Project } from "@/lib/data/projects"
import { ChevronLeft, ChevronRight, ExternalLink, Figma, Github, X, Star, Target, Settings, Layers } from "lucide-react"

interface GalleryItem {
  src: string
  type: "image" | "video"
}

interface ProjectDetailClientProps {
  project: Project & { gallery: GalleryItem[] }
  allProjects: Project[]
}

export default function ProjectDetailClient({ project, allProjects }: ProjectDetailClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const projectIndex = allProjects.findIndex((p) => p.id === project.id)
  const previousProject = projectIndex > 0 ? allProjects[projectIndex - 1] : null
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : null

  // Parallax 3D
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-150, 150], [15, -15])
  const rotateY = useTransform(x, [-150, 150], [-15, 15])
  const scale = useTransform(y, [-120, 120], [1.03, 0.98])

  // Carrousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (project.gallery?.length || 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [project.gallery])

  // Navigation clavier
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false)
        if (e.key === "ArrowRight") setCurrentIndex((s) => (s + 1) % (project.gallery?.length || 1))
        if (e.key === "ArrowLeft") setCurrentIndex((s) => (s - 1 + (project.gallery?.length || 1)) % (project.gallery?.length || 1))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen, project.gallery])

  const nextItem = () => setCurrentIndex((prev) => (prev + 1) % (project.gallery?.length || 1))
  const prevItem = () => setCurrentIndex((prev) => (prev - 1 + (project.gallery?.length || 1)) % (project.gallery?.length || 1))
  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }

  const isDesign = project.category === "Branding" || project.category === "Graphic Design"
  const isDevelopment = project.category === "Web Design" || project.category === "App Design"

  return (
    <div className="min-h-screen pt-24 pb-20 relative bg-gradient-to-b from-background via-background-dark to-background">
      {/* Blobs décoratifs */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="absolute -left-72 -top-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute -right-72 -bottom-40 w-[520px] h-[520px] bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Retour */}
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <Link href="/projects" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 font-medium">
            <ChevronLeft size={18} /> Retour aux projets
          </Link>
        </motion.div>

        {/* Header / Hero */}
        <motion.header initial="hidden" animate="show" variants={fadeUp} className="mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block bg-gradient-to-r from-purple-600/30 to-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold border border-purple-500/20">Étude de cas</span>
            <span className="text-sm text-muted-foreground">{project.category}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">{project.fullDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-gradient-to-r from-cyan-600/10 to-cyan-500/10 border border-cyan-500/10 text-cyan-300 font-semibold">{project.role}</span>
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-purple-500/10 border border-purple-500/10 text-purple-300 font-semibold">Année : {project.year}</span>
            {project.clients && <span className="text-sm text-muted-foreground">Client : <strong className="text-foreground">{project.clients}</strong></span>}
          </div>
        </motion.header>

        {/* Contexte / Objectifs */}
        <motion.section initial="hidden" animate="show" variants={fadeUp} className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Target size={20} className="text-purple-400" /> Contexte / Problématique</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Settings size={20} className="text-purple-400" /> Objectifs du projet</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </motion.section>

        {/* Processus */}
        {project.process && (
          <motion.section initial="hidden" animate="show" variants={fadeUp} className="mb-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Layers size={20} className="text-purple-400" /> Processus / Méthodologie</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {project.process.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }} className="p-6 bg-[rgba(255,255,255,0.03)] border border-purple-500/10 rounded-xl hover:scale-[1.03] transition-transform">
                  <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  {step.details && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {step.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

  {/* Galerie / Carrousel */}
{project.gallery && project.gallery.length > 0 && (
  <motion.section
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="mb-16 flex justify-center"
  >
    <div
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-shadow bg-card"
    >
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className={`relative ${
            project.gallery[currentIndex].type === "video"
              ? "max-w-[900px]" // ✅ Taille réduite pour la vidéo
              : "max-w-[1200px]"
          } w-full`}
        >
          {/* Gestion image / vidéo avec overlay Play */}
          {project.gallery[currentIndex].type === "image" ? (
            <Image
              src={project.gallery[currentIndex].src}
              alt={`${project.title} media`}
              width={1200}
              height={675}
              className="w-full h-auto object-contain rounded-3xl cursor-pointer"
              priority
              onClick={() => openLightbox(currentIndex)}
            />
          ) : (
            <div
              className="relative cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            >
              <video
                src={project.gallery[currentIndex].src}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-auto object-contain rounded-3xl"
              />
              {/* Icône Play Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-3xl transition hover:bg-black/40">
                <div className="w-16 h-16 bg-white/80 text-black rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-8 h-8 ml-1"
                  >
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
                  </svg>
                </div>
              </div> */}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
        </div>

        {/* Navigation */}
        {project.gallery.length > 1 && (
          <>
            <button
              onClick={prevItem}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-transform hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextItem}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-transform hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {project.gallery.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`relative h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-purple-400 w-8"
                      : "bg-white/30 w-3"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  </motion.section>
)}

{/* Lightbox */}
<AnimatePresence>
  {lightboxOpen && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setLightboxOpen(false)}
      />
      <motion.div
        className="relative max-w-[1200px] w-full mx-4 rounded-xl overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="relative w-full bg-black rounded-xl flex justify-center items-center">
          {project.gallery[currentIndex].type === "image" ? (
            <Image
              src={project.gallery[currentIndex].src}
              alt={`lightbox-${currentIndex}`}
              width={1200}
              height={675}
              className="w-full h-auto object-contain rounded-xl"
            />
          ) : (
            <video
              src={project.gallery[currentIndex].src}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          )}

          {/* Bouton de fermeture */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition"
          >
            <X size={18} />
          </button>

          {/* Navigation Lightbox */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prevItem}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextItem}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


        {/* Technologies / Tags / Résultats */}
        <motion.section initial="hidden" animate="show" variants={fadeUp} className="mb-16 grid md:grid-cols-3 gap-6">
          {project.technologies && (
            <div className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-purple-500/10">
              <h3 className="text-lg font-bold mb-3">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">{project.technologies.map((t) => <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600/10 to-purple-500/10 border border-purple-500/10 text-purple-200">{t}</span>)}</div>
            </div>
          )}
          {project.tags && (
            <div className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-purple-500/10">
              <h3 className="text-lg font-bold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">#{tag}</span>)}</div>
            </div>
          )}
          {project.results && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-700/5 to-purple-500/5 border border-purple-500/20">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Star size={18} className="text-purple-400" /> Résultats / Impact</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">{project.results.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          )}
        </motion.section>

        {/* CTA */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap gap-3 mb-16">
          {isDevelopment && project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:scale-[1.02] transition-transform flex items-center gap-2"><ExternalLink size={16} /> Voir le site</a>}
          {project.figmaUrl && <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:scale-[1.02] transition-transform flex items-center gap-2"><Figma size={16} /> Voir le prototype</a>}
          {isDevelopment && project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl border border-purple-500/20 text-white font-semibold hover:bg-purple-600/6 transition-all flex items-center gap-2"><Github size={16} /> Voir le code</a>}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setLightboxOpen(false)} />
              <motion.div className="relative max-w-4xl w-full mx-4 rounded-xl overflow-hidden" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.25 }}>
                <div className="relative h-[70vh] bg-black rounded-xl flex items-center justify-center">
                  {project.gallery[currentIndex].type === "image" ? (
                    <Image src={project.gallery[currentIndex].src} alt={`lightbox-${currentIndex}`} fill className="object-contain" />
                  ) : (
                    <video src={project.gallery[currentIndex].src} controls className="w-full h-full object-contain rounded-xl" />
                  )}
                  <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-white/8 backdrop-blur text-white hover:bg-white/12 transition"><X size={18} /></button>
                  {project.gallery.length > 1 && <>
                    <button onClick={prevItem} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"><ChevronLeft size={20} /></button>
                    <button onClick={nextItem} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"><ChevronRight size={20} /></button>
                  </>}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
