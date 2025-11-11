"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "emailjs-com"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 👇 envoi via EmailJS
    emailjs
      .send(
        "service_diplmzh",
        "template_k36gj4p",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "wHSi03GMVzwKTTErX" // 🔹 Ta clé publique EmailJS
      )
      .then(
        () => {
          setSubmitted(true)
          setFormData({ name: "", email: "", subject: "", message: "" })
          setError(null)
          setTimeout(() => setSubmitted(false), 5000)
        },
        (err) => {
          console.error("Erreur :", err)
          setError("Une erreur est survenue. Veuillez réessayer plus tard.")
        }
      )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Navbar />

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* En-tête */}
          <div className="mb-16 text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Contactez-moi</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vous avez un projet en tête ? Collaborons pour donner vie à vos idées. N'hésitez pas à me contacter !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Formulaire de contact */}
            <div className="md:col-span-2 animate-fadeInUp">
              <div className="bg-card border border-border rounded-xl p-8">
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                   Merci pour votre message ! Je vous répondrai très bientôt.
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                   {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom complet */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Adresse e-mail */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Sujet */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                      placeholder="Demande de projet"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6 animate-fadeInUp">
              {[
                { icon: Mail, label: "E-mail", value: "ngandohorell1@gmail.com", href: "mailto:ngandohorell1@gmail.com" },
                { icon: Phone, label: "Téléphone", value: "+237 698 819 573", href: "tel:+237698819573" },
                { icon: MapPin, label: "Adresse", value: "Douala, Akwa-Nord", href: "#" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-6 h-6 text-primary mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </div>
                  </a>
                )
              })}

              {/* Liens sociaux */}
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-4">Réseaux sociaux</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/HorellNgando/" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/horell-ngando-bissambou-" },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
