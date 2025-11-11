"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  as?: "h1" | "h2" | "h3" | "p"
  className?: string
  delay?: number
}

export function AnimatedText({ text, as = "p", className = "", delay = 0 }: AnimatedTextProps) {
  const Comp = as

  return (
    <Comp className={className}>
      {text.split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + idx * 0.05 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </Comp>
  )
}
