'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const stats = [
  { num: '40+', label: 'Marques lancées' },
  { num: '7', label: 'Jours de livraison' },
  { num: '98%', label: 'Clients satisfaits' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark flex items-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 grid-bg" />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Geometric decoration — desktop */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden xl:block pointer-events-none overflow-hidden">
        {/* Diagonal background accent */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/[0.02] to-transparent" />

        {/* Rotating squares */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/[0.07] animate-float"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 1, rotate: -8 }}
          transition={{ duration: 1.2, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-accent/20 animate-float-slow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] border border-white/[0.05]"
        />

        {/* Center dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent rounded-full shadow-[0_0_40px_10px_rgba(255,59,0,0.4)]"
        />

        {/* Floating pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute top-[28%] right-[18%] bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-xs text-white/60 font-medium animate-float"
        >
          <span className="text-accent font-bold text-sm">✓</span> Identité de marque
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-[30%] right-[12%] bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-xs text-white/60 font-medium animate-float-slow"
        >
          <span className="text-accent font-bold text-sm">✓</span> Landing Page
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute top-[58%] left-[8%] bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-xs text-white/60 font-medium animate-float"
          style={{ animationDelay: '3s' }}
        >
          <span className="text-accent font-bold text-sm">⚡</span> Livraison en 7 jours
        </motion.div>

        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.1] text-white/60 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              <Zap className="w-3 h-3 text-accent fill-accent" />
              Studio Digital - Made in France
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display font-bold leading-[0.92] tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
          >
            Votre identité
            <br />
            créée en{' '}
            <span className="relative inline-block">
              <span className="text-accent">7 jours.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Nous concevons des identités de marque et des landing pages à fort
            taux de conversion pour les professionnels ambitieux.{' '}
            <span className="text-white/80">
              Sans délais interminables. Sans résultats génériques.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-accent text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-accent/90 transition-all duration-200 hover:gap-3 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,59,0,0.3)]"
            >
              Consultation gratuite
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white text-sm font-medium px-8 py-4 rounded-full border border-white/[0.1] hover:border-white/30 transition-all duration-200"
            >
              Voir nos réalisations
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/[0.08]"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <div className="font-display font-bold text-2xl text-white">
                    {stat.num}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/10 hidden sm:block" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
