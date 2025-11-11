"use client"

import { Code2, Palette, Figma, Layout, Zap, Smartphone } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    name: "Development Web",
    percentage: 75,
  },
  {
    icon: Palette,
    name: "Design",
    percentage: 80,
  },
  {
    icon: Figma,
    name: "Figma",
    percentage: 85,
  },
  {
    icon: Layout,
    name: "UI/UX",
    percentage: 80,
  },
  {
    icon: Zap,
    name: "Animation",
    percentage: 55,
  },
  {
    icon: Smartphone,
    name: "Mobile",
    percentage: 15,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un aperçu complet de mon expertise technique et de mes capacités en design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-muted"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeDasharray={`${2.827 * skill.percentage} 282.7`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={28} />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                <p className="text-primary font-semibold">{skill.percentage}%</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
