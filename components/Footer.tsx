'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations'

const links = {
  Studio: [
    { label: 'Réalisations', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Processus', href: '#process' },
    { label: 'À propos', href: '#about' },
  ],
  Services: [
    { label: 'Identité de marque', href: '#services' },
    { label: 'Landing Pages', href: '#services' },
    { label: 'Sprint Design', href: '#process' },
    { label: 'Appel stratégique', href: '#contact' },
  ],
}

const socials = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <div className="font-display font-bold text-2xl text-white mb-4 tracking-tight">
              Nodalll <em>Studio</em>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
              Identité de marque et landing pages pour les professionnels
              ambitieux qui veulent aller vite.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200 group"
            >
              Réserver un appel gratuit
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </motion.div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items], i) => (
            <motion.div
              key={group}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-white/20 mb-5">
                {group}
              </div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-white/20 text-xs">
            © 2026 Nodalll Studio. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-white/20 hover:text-white/60 text-xs font-medium transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
