'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-dark overflow-hidden py-8"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Geometric lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-white/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 pt-16 pb-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <Calendar className="w-3 h-3" />
              Appel stratégique gratuit
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-white leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Prêt à ressembler
            <br />
            <span className="text-accent">à un leader du marché&nbsp;?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Réservez un appel stratégique gratuit de 30 minutes. Nous
            planifierons votre identitée de marque et votre landing page —{' '}
            <span className="text-white/80">
              sans engagement, sans pression commerciale.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:hello@nodalll.studio"
              className="group inline-flex items-center gap-3 bg-accent text-white font-bold text-base px-10 py-5 rounded-full hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_60px_rgba(255,59,0,0.4)]"
            >
              Réserver une consultation gratuite
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30 text-xs font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Aucune carte bancaire requise
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Livré en 14 jours ou moins
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Propriété totale des fichiers
            </span>
          </motion.div>

          {/* Diagonal decorative elements */}
          <div className="absolute left-8 bottom-16 w-16 h-16 border border-white/5 rotate-45 hidden lg:block" />
          <div className="absolute right-8 top-16 w-24 h-24 border border-accent/10 rotate-12 hidden lg:block" />
          <div className="absolute right-24 bottom-12 w-8 h-8 bg-accent/20 rotate-45 hidden lg:block" />
        </motion.div>
      </div>
    </section>
  )
}
