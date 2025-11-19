import {
  Code2,
  Database,
  FileCode2,
  Palette,
  Braces,
  Atom,
  Box,
  Flame,
  Layers,
  Zap,
  Cpu,
  FileStack,
  GitBranch,
  Dock,
  Globe,
  PenTool,
  Image,
  FileText,
  Paintbrush,
  PencilRuler,
  Figma,
  Monitor,
  Network,
} from "lucide-react"

export interface Skill {
  name: string
  category: "Langages" | "Frameworks" | "Outils de Design" | "Autres Outils"
  level: number
  icon: any
}

export const skillsData: Skill[] = [
  //  Programming Langages
  { name: "JavaScript", category: "Langages", level: 60, icon: FileCode2 },
  { name: "TypeScript", category: "Langages", level: 60, icon: Braces },
  { name: "PHP", category: "Langages", level: 55, icon: Code2 },
  { name: "HTML/CSS", category: "Langages", level: 85, icon: Palette },
  { name: "SQL", category: "Langages", level: 55, icon: Database },

  //  Frameworks
  { name: "React", category: "Frameworks", level: 80, icon: Atom },
  { name: "Next.js", category: "Frameworks", level: 75, icon: Globe },
  { name: "Laravel", category: "Frameworks", level: 70, icon: Layers },
  { name: "React Native", category: "Frameworks", level: 40, icon: Monitor },
  { name: "Flutter", category: "Frameworks", level: 30, icon: Zap },
  { name: "Tailwind CSS", category: "Frameworks", level: 85, icon: Zap },

  //  Outils de Design*
  { name: "Figma", category: "Outils de Design", level: 90, icon: Figma },
  { name: "Adobe Express", category: "Outils de Design", level: 75, icon: PenTool },
  { name: "Canva", category: "Outils de Design", level: 90, icon: Paintbrush },
  { name: "Photoshop", category: "Outils de Design", level: 20, icon: Image },
  { name: "Illustrator", category: "Outils de Design", level: 20, icon: PencilRuler },

  //  Autres Outils
  { name: "Git & GitHub", category: "Autres Outils", level: 75, icon: GitBranch },
  // { name: "Docker", category: "Autres Outils", level: 20, icon: Dock },
  { name: "Trello", category: "Autres Outils", level: 75, icon: FileStack },
]

export const skillCategories = [
  { name: "Langages", count: 5, description: "Langages de programmation" },
  { name: "Frameworks", count: 6, description: "Frameworks & bibliothèques frontend" },
  { name: "Outils de Design", count: 5, description: "Logiciels de design & création" },
  { name: "Autres Outils", count: 3, description: "Outils de développement & collaboration" },
]
