'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const steps = [
  {
    num: '01',
    day: 'Jour 1',
    title: 'Découverte',
    body: "Nous démarrons par un appel stratégique de 30 minutes. Nous apprenons à connaître votre marque, votre audience, vos objectifs — et ce qui vous bloque. Pas de suppositions. Juste de la clarté.",
    detail: 'Audit de marque · Appel stratégique · Brief créatif',
    threshold: 0.25,
  },
  {
    num: '02',
    day: 'Jours 2–11',
    title: 'Sprint Design',
    body: "Notre équipe conçoit votre identité de marque complète et votre landing page en un sprint concentré. Vous recevez des prévisualisations en direct et un round de retours structurés. Pas de révisions interminables.",
    detail: 'Identité de marque · UI design · Rédaction',
    threshold: 0.55,
  },
  {
    num: '03',
    day: 'Jours 12–14',
    title: 'Prêt au lancement',
    body: "La livraison finale comprend tous les fichiers sources, un guide de marque et une landing page prête à être mise en ligne. Vous êtes propriétaire de tout. Nous restons disponibles après le lancement.",
    detail: 'Fichiers sources · Charte graphique',
    threshold: 0.82,
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.6'],
  })

  const rawProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop: horizontal path from left circle to right circle
  // We use pathLength driven by rawProgress
  const pathLengthH = rawProgress

  // Mobile: vertical path
  const pathLengthV = rawProgress

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-light overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg-light pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            — Comment ça fonctionne
          </span>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="font-display font-bold text-dark leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            3 étapes pour concevoir
            <br />
            votre <span className="text-accent">identité.</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="flex items-center gap-3 bg-dark/5 rounded-full px-5 py-3 self-start"
          >
            <span className="text-dark/60 text-sm font-medium">Durée totale&nbsp;:</span>
            <span className="font-display font-bold text-dark text-sm">
              14 jours
            </span>
          </motion.div>
        </div>

        {/* Steps grid with animated path */}
        <div className="relative">

          {/* ── Desktop SVG path (horizontal) ── */}
          <svg
            className="absolute top-[20px] left-0 right-0 w-full hidden md:block pointer-events-none"
            style={{ height: 2, overflow: 'visible' }}
            preserveAspectRatio="none"
          >
            {/* Track (faint) */}
            <line
              x1="16.66%"
              y1="1"
              x2="83.33%"
              y2="1"
              stroke="rgba(10,10,10,0.1)"
              strokeWidth="1"
            />
            {/* Animated fill */}
            <motion.line
              x1="16.66%"
              y1="1"
              x2="83.33%"
              y2="1"
              stroke="#FF3B00"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: pathLengthH }}
            />
          </svg>

          {/* ── Mobile SVG path (vertical) ── */}
          <svg
            className="absolute left-[20px] top-0 bottom-0 h-full block md:hidden pointer-events-none"
            style={{ width: 2, overflow: 'visible' }}
            preserveAspectRatio="none"
          >
            {/* Track */}
            <line
              x1="1"
              y1="5%"
              x2="1"
              y2="95%"
              stroke="rgba(10,10,10,0.1)"
              strokeWidth="1"
            />
            {/* Animated fill */}
            <motion.line
              x1="1"
              y1="5%"
              x2="1"
              y2="95%"
              stroke="#FF3B00"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: pathLengthV }}
            />
          </svg>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-px">
            {steps.map((step, i) => (
              <StepCard
                key={step.num}
                step={step}
                index={i}
                scrollProgress={rawProgress}
              />
            ))}
          </div>
        </div>

        {/* CTA row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mt-8 mb-8 py-8 border-t border-dark/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-dark/50 text-sm max-w-sm text-center sm:text-left">
            Prêt à démarrer votre parcours de 14 jours, de l&apos;invisible à l&apos;inoubliable&nbsp;?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-accent transition-colors duration-300"
          >
            Démarrer votre sprint →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Sub-component: individual step card ──────────────────────────────────────

import { useMotionValueEvent } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useState } from 'react'

function StepCard({
  step,
  index,
  scrollProgress,
}: {
  step: (typeof steps)[number]
  index: number
  scrollProgress: MotionValue<number>
}) {
  const [active, setActive] = useState(false)

  useMotionValueEvent(scrollProgress, 'change', (v) => {
    setActive(v >= step.threshold)
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-8 md:p-10 md:pl-6"
    >
      {/* Step number bubble */}
      <div className="relative w-10 h-10 mb-8">
        {/* Outer ring — lights up when active */}
        <motion.div
          animate={
            active
              ? { scale: 1, opacity: 1, borderColor: '#FF3B00' }
              : { scale: 1, opacity: 1, borderColor: 'rgba(10,10,10,0.2)' }
          }
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: 'rgba(10,10,10,0.2)' }}
        />

        {/* Fill circle — accent when active */}
        <motion.div
          animate={
            active
              ? { scale: 1, backgroundColor: '#FF3B00' }
              : { scale: 0, backgroundColor: '#FF3B00' }
          }
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-1 rounded-full"
        />

        {/* Number */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.span
            animate={active ? { color: '#ffffff' } : { color: 'rgba(10,10,10,0.35)' }}
            transition={{ duration: 0.3 }}
            className="font-display font-bold text-xs"
          >
            {step.num}
          </motion.span>
        </div>

        {/* Glow ring */}
        <motion.div
          animate={
            active
              ? { scale: 1.6, opacity: 0.25 }
              : { scale: 1, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-accent"
        />
      </div>

      {/* Day label */}
      <motion.div
        animate={active ? { color: '#FF3B00', opacity: 1 } : { color: '#FF3B00', opacity: 0.5 }}
        transition={{ duration: 0.4 }}
        className="text-[10px] font-bold uppercase tracking-widest mb-3"
      >
        {step.day}
      </motion.div>

      <h3 className="font-display font-bold text-dark text-2xl mb-4 leading-snug">
        {step.title}
      </h3>
      <p className="text-dark/50 text-sm leading-relaxed mb-6">
        {step.body}
      </p>

      {/* Detail pills */}
      <div className="flex flex-wrap gap-2">
        {step.detail.split(' · ').map((d) => (
          <span
            key={d}
            className="text-[11px] font-medium text-dark/40 bg-dark/5 rounded-full px-3 py-1"
          >
            {d}
          </span>
        ))}
      </div>

      {/* Mobile: vertical spacer between steps */}
      {index < steps.length - 1 && (
        <div className="md:hidden h-12" />
      )}
    </motion.div>
  )
}
