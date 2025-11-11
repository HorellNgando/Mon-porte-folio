"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  from?: "left" | "right" | "top" | "bottom"
  duration?: number
  delay?: number
}

export function ScrollReveal({
  children,
  className = "",
  from = "bottom",
  duration = 0.6,
  delay = 0,
}: ScrollRevealProps) {
  const fromVariants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  }

  return (
    <motion.div
      initial={fromVariants[from]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
