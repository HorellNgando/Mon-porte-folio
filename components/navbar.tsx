"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],      // nécessaire pour les caractères européens
  weight: ["400", "700"],  // normal et bold
});




export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "A propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projets", href: "/projects" },
    { label: "Compétences", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center -space-x-3">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-md">
              <Image
                src="/hndesign.png"
                alt="Description de l'image"
                width={600}            
                height={400}         
                className="rounded-lg"
              />

            </div>
            <span className={`${cormorantGaramond.className} text-2xl sm:text-xl font-bold hidden sm:inline`}>
              HNDesign
            </span>


          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors px-3 py-1 rounded-lg ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}

                    {/* Halo violet */}
                    {isActive && (
                      <motion.span
                        layoutId="activeHalo"
                        className="absolute inset-0 rounded-lg border border-violet-500/40 shadow-[0_0_12px_#8b5cf6]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}

                    {/* Barre de soulignement
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-violet-500"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    /> */}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <button className="px-6 py-2 rounded-lg bg-primary hover:bg-secondary text-primary-foreground font-medium transition-colors shadow-md">
                Me contacter
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fond semi-transparent */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panneau latéral */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed inset-y-0 left-0 w-72 bg-background border-r border-border z-50 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-foreground bg-violet-500/10 border border-violet-500/40"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="mobileActiveHalo"
                          className="absolute inset-0 rounded-lg border border-violet-500/40 shadow-[0_0_12px_#8b5cf6]"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
