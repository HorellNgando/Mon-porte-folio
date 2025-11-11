"use client"

export const createStaggerContainer = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.2,
    },
  },
})

export const createItemVariant = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
    },
  },
})

export const createRevealVariant = () => ({
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  show: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
})

export const createParallaxVariant = (offset = 50) => ({
  initial: { y: offset },
  animate: { y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
})
