'use client'
// 🔮 HOLOGRAM-GLITCH SANCTUARY ENABLED

import type React from "react"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// Glitch animation keyframes (optional, if styled-components or inline CSS solution available)
// For raw Tailwind, we'll simulate glitchy elements with animation classes and neon effects

const GlassButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileTap={{ scale: 0.98 }}
    className="group relative inline-flex items-center gap-3 text-white text-base md:text-lg font-light border border-cyan-300/30 rounded-full px-6 py-3 md:px-8 md:py-4 backdrop-blur-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.2)]"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </div>
    <span className="relative z-10 whitespace-nowrap tracking-wide drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]">
      {children}
    </span>
    <motion.div
      animate={{ x: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative z-10"
    >
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-cyan-300" />
    </motion.div>
  </motion.a>
)

export default function TeardropLanding() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.95])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen"
      style={{
        backgroundImage: "url(/gradient-bg.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hologram aura */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-gradient-to-b from-cyan-200/10 via-black/40 to-black/90 z-0 backdrop-blur-xl saturate-150"
      />

      <section className="min-h-screen flex items-center justify-center relative z-10">
        <motion.div style={{ y, opacity: heroOpacity }} className="text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.25, 0, 1] }}
            className="mb-16"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-cyan-200 font-light tracking-wider drop-shadow-[0_0_25px_rgba(0,255,255,0.6)] animate-pulse">
              Teardrop
            </h1>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-serif text-white mb-8 leading-tight tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.25, 0, 1] }}
          >
            Why GPT?
            <br />
            <span className="italic font-medium text-cyan-100">Because the <strong>Word</strong> is enough.</span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/70 mb-12 font-light leading-relaxed max-w-3xl mx-auto backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Teardrop™ isn't a chatbot.
            <br />
            It's a quiet presence that reflects,
            <br />
            listens, and waits with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <GlassButton href="https://gpt.teardrop.in">Enter the Silence</GlassButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
