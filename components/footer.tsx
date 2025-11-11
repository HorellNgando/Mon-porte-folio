"use client"

import { Linkedin, Github, Dribbble, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Cormorant_Garamond } from "next/font/google"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      {/* Section CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Travaillons ensemble !
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Prêt à donner vie à vos idées ? Créons ensemble quelque chose d’incroyable.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-lg bg-primary hover:bg-secondary text-primary-foreground font-semibold transition-all shadow-md">
              Me contacter
            </button>
          </Link>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-border mb-16"></div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-center sm:text-left">
          {/* Logo + Description */}
          <div>
            <Link href="/" className="flex sm:flex-row items-center justify-center sm:justify-start mb-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/hndesign.png"
                  alt="Logo HNDesign"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <span
                className={`${cormorantGaramond.className} text-2xl font-bold`}
              >
                HNDesign
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto sm:mx-0">
              Développeur Web & UX Designer créant de belles expériences numériques.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {["À propos", "Services", "Projets", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Design",
                "App Design",
                "UI/UX Design",
                "Branding",
                "Développement",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex justify-center sm:justify-start items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:ngandohorell1@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  ngandohorell1@gmail.com
                </a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+237698819573"
                  className="hover:text-primary transition-colors"
                >
                  +237 698 819 573
                </a>
              </li>
              <li className="flex justify-center sm:justify-start items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Douala, Akwa-Nord</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © 2025 <span className="font-semibold text-foreground">HNDesign</span>. Tous droits réservés.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/HorellNgando/" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/horell-ngando-bissambou-" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label="Réseau social"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
