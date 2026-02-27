'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

const stats = [
  { num: '40+', label: 'Marques lancées', sub: 'Depuis 2021' },
  { num: '4', label: "Ans d'activité", sub: 'Fondé en 2021' },
  { num: '15+', label: "Secteurs d'activité", sub: 'Du SaaS à la beauté' },
  { num: '98%', label: 'Clients satisfaits', sub: 'Enquête post-projet' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-light overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg-light pointer-events-none" />

      {/* Diagonal accent block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark/[0.03] to-transparent pointer-events-none" />

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
            — À propos de Nodalll Studio
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pb-24">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInLeft}
          >
            <h2
              className="font-display font-bold text-dark leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Un studio concentré.
              <br />
              <span className="text-dark/30">Obsédé</span> par
              <br />
              vos résultats.
            </h2>

            <div className="space-y-5 text-dark/60 text-base leading-relaxed">
              <p>
                Nous ne sommes pas une agence de 50 personnes avec des processus
                lourds et des délais de 12 semaines. Nodalll est un studio
                digital concentré — nous acceptons un nombre limité de projets
                chaque mois pour que chaque client reçoive notre meilleur
                travail.
              </p>
              <p>
                Depuis 2021, nous avons aidé plus de 40 fondateurs, consultants
                et leaders de marque à être aussi bons visuellement qu&apos;ils
                le sont réellement. Nous avons livré des marques pour des
                entreprises SaaS, des consultants indépendants, des e-commerces
                et des prestataires de services dans plus de 15 secteurs.
              </p>
              <p>
                Notre processus est précis. Notre travail est sur-mesure. Nos
                délais sont réels.
              </p>
            </div>

            {/* Values list */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                'Chaque projet est unique',
                'Nous acceptons 2 projets par mois — pas un de plus.',
                'Nous mesurons le succès par vos métriques business.',
              ].map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                  </span>
                  <span className="text-dark/60 text-sm">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-sm text-dark hover:text-accent transition-colors duration-200 group"
              >
                Travailler avec nous
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInRight}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="font-display font-bold text-4xl text-white mb-2">
                  {stat.num}
                </div>
                <div className="text-white font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-white/30 text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
