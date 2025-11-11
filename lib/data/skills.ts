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
  category: "Languages" | "Frameworks" | "Design Tools" | "Other Tools"
  level: number
  icon: any
}

export const skillsData: Skill[] = [
  //  Programming Languages
  { name: "JavaScript", category: "Languages", level: 60, icon: FileCode2 },
  { name: "TypeScript", category: "Languages", level: 60, icon: Braces },
  { name: "PHP", category: "Languages", level: 55, icon: Code2 },
  { name: "HTML/CSS", category: "Languages", level: 85, icon: Palette },
  { name: "SQL", category: "Languages", level: 55, icon: Database },

  //  Frameworks
  { name: "React", category: "Frameworks", level: 80, icon: Atom },
  { name: "Next.js", category: "Frameworks", level: 75, icon: Globe },
  { name: "Laravel", category: "Frameworks", level: 70, icon: Layers },
  { name: "React Native", category: "Frameworks", level: 40, icon: Monitor },
  { name: "Flutter", category: "Frameworks", level: 30, icon: Zap },
  { name: "Tailwind CSS", category: "Frameworks", level: 85, icon: Zap },

  //  Design Tools
  { name: "Figma", category: "Design Tools", level: 90, icon: Figma },
  { name: "Adobe Express", category: "Design Tools", level: 75, icon: PenTool },
  { name: "Canva", category: "Design Tools", level: 90, icon: Paintbrush },
  { name: "Photoshop", category: "Design Tools", level: 20, icon: Image },
  { name: "Illustrator", category: "Design Tools", level: 20, icon: PencilRuler },

  //  Other Tools
  { name: "Git & GitHub", category: "Other Tools", level: 75, icon: GitBranch },
  // { name: "Docker", category: "Other Tools", level: 20, icon: Dock },
  { name: "Trello", category: "Other Tools", level: 75, icon: FileStack },
]

export const skillCategories = [
  { name: "Languages", count: 5, description: "Langages de programmation" },
  { name: "Frameworks", count: 6, description: "Frameworks & bibliothèques frontend" },
  { name: "Design Tools", count: 5, description: "Logiciels de design & création" },
  { name: "Other Tools", count: 3, description: "Outils de développement & collaboration" },
]
