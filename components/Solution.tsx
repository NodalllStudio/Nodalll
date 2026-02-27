'use client'

import { motion } from 'framer-motion'
import { Zap, Palette, TrendingUp, Key } from 'lucide-react'
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations'

const benefits = [
  {
    icon: Zap,
    title: 'Livraison en 7 jours',
    body: "Identité de marque complète et landing page, livrées en une semaine. Des délais fermes, zéro excuse. Vous n'attendrez plus jamais des mois.",
    highlight: '2× plus rapide',
  },
  {
    icon: Palette,
    title: '100% sur-mesure',
    body: "Chaque pixel est conçu spécifiquement pour votre marque. Pas un template, pas un thème — le vôtre. Construit à partir d'une stratégie, pas d'un glisser-déposer.",
    highlight: 'Zéro template',
  },
  {
    icon: TrendingUp,
    title: 'Axé sur la conversion',
    body: "Chaque décision de design est prise avec vos objectifs business en tête. Nous mesurons le succès par vos résultats, pas seulement par la beauté visuelle.",
    highlight: 'Orienté ROI',
  },
  {
    icon: Key,
    title: 'Propriété totale des fichiers',
    body: "Vous êtes propriétaire de tout ce que nous créons — tous les fichiers sources, tous les droits, sans conditions. Livré le jour du lancement.",
    highlight: '100% à vous',
  },
]

export default function Solution() {
  return (
    <section id="services" className="relative bg-dark overflow-hidden py-8">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            — La Solution
          </span>
        </motion.div>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="font-display font-bold text-white leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            Rapide. Sur-mesure.
            <br />
            <span className="text-accent">Pensé pour vous.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-white/40 text-base max-w-xs lg:text-right leading-relaxed"
          >
            Quatre principes qui guident chacun de nos projets.
          </motion.p>
        </div>

        {/* Benefit cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-4"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={scaleIn}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-400 overflow-hidden"
              >
                {/* Card number */}
                <span className="absolute top-6 right-8 font-display font-bold text-6xl text-white/[0.04] select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                {/* Highlight pill */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                  {benefit.highlight}
                </span>

                <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {benefit.body}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
