'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations'

const testimonials = [
  {
    quote:
      "Nodalll a livré notre identité de marque complète en 11 jours. Notre landing page convertit maintenant à 8,2 % — trois fois notre taux précédent. Vraiment révolutionnaire.",
    author: 'Sarah M.',
    role: 'Fondatrice',
    company: 'TechLaunch',
    initials: 'SM',
    color: '#FF3B00',
    metric: '8,2 % CVR',
    metricLabel: 'Taux de conversion landing page',
  },
  {
    quote:
      "J'ai travaillé avec quatre agences en cinq ans. Aucune n'a approché cette vitesse ni cette qualité. Je ressemble enfin au consultant premium que je suis vraiment.",
    author: 'James R.',
    role: 'Consultant indépendant',
    company: 'James Reid Advisory',
    initials: 'JR',
    color: '#6366F1',
    metric: '3×',
    metricLabel: 'Plus de demandes entrantes',
  },
  {
    quote:
      "Notre rebranding a doublé nos leads entrants en 30 jours. L'investissement a été rentabilisé en deux semaines. J'aurais dû le faire deux ans plus tôt.",
    author: 'Priya K.',
    role: 'Fondatrice',
    company: 'Lumé Skincare',
    initials: 'PK',
    color: '#10B981',
    metric: '2×',
    metricLabel: 'Leads le premier mois',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-dark overflow-hidden py-8">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Large background quote */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 font-display font-bold select-none pointer-events-none text-white/[0.02]"
        style={{ fontSize: 'clamp(12rem, 25vw, 22rem)', lineHeight: 1 }}
      >
        &ldquo;
      </div>

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
            — Témoignages
          </span>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="font-display font-bold text-white leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            Résultats concrets.
            <br />
            <span className="text-white/30">Vrais clients.</span>
          </motion.h2>

          {/* Stars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="flex items-center gap-1.5"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-accent fill-accent"
              />
            ))}
            <span className="ml-2 text-white/40 text-sm font-medium">
              5,0 · 40+ clients
            </span>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={scaleIn}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 flex flex-col hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-400 overflow-hidden"
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-8 right-8 h-px opacity-60"
                style={{ background: t.color }}
              />

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric callout */}
              <div
                className="rounded-xl px-4 py-3 mb-6 border"
                style={{
                  background: `${t.color}10`,
                  borderColor: `${t.color}20`,
                }}
              >
                <div
                  className="font-display font-bold text-2xl"
                  style={{ color: t.color }}
                >
                  {t.metric}
                </div>
                <div className="text-white/40 text-xs mt-0.5">
                  {t.metricLabel}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                  style={{ background: `${t.color}30`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.author}
                  </div>
                  <div className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
