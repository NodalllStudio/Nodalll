'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations'

const painPoints = [
  {
    num: '01',
    title: "Des agences qui promettent trop et livrent peu",
    body: "Vous avez passé des mois à faire des allers-retours avec des agences qui ratent leurs délais, facturent des révisions et livrent quelque chose de générique. Pendant ce temps, vos concurrents gagnent des clients avec un look plus affûté.",
  },
  {
    num: '02',
    title: 'Des templates qui vous font ressembler à tout le monde',
    body: "Les templates gratuits crient « j'ai fait ça en un week-end ». Les clients jugent avant même que vous ayez la parole. Une marque oubliable vous fait perdre des contrats avant la première conversation.",
  },
  {
    num: '03',
    title: 'Des prix élevés sans ROI clair',
    body: "Vous avez payé des tarifs premium sans savoir si votre nouveau look convertit vraiment. Aucune stratégie, aucune responsabilité — juste un beau fichier et un budget épuisé.",
  },
]

export default function Problem() {
  return (
    <section
      id="work"
      className="relative bg-light overflow-hidden pt-24 pb-8"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg-light pointer-events-none" />

      {/* Large background number */}
      <div className="absolute -right-8 top-12 font-display font-bold text-[20rem] leading-none text-dark/[0.03] select-none pointer-events-none">
        ?
      </div>

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
            — Le Problème
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="font-display font-bold text-dark leading-[0.95] tracking-tight mb-16"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
        >
          Vous perdez des clients
          <br />
          face aux marques qui{' '}
          <span className="relative inline-block">
            <span className="text-accent">en imposent.</span>
            <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent/20 -z-10" />
          </span>
        </motion.h2>

        {/* Pain points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-px bg-dark/10"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.num}
              variants={fadeInUp}
              className="group bg-light p-8 md:p-10 hover:bg-dark transition-colors duration-500 cursor-default"
            >
              <div className="font-display font-bold text-5xl text-dark/10 group-hover:text-white/10 mb-6 transition-colors duration-500">
                {point.num}
              </div>
              <h3 className="font-display font-bold text-xl text-dark group-hover:text-white mb-4 transition-colors duration-500 leading-snug">
                {point.title}
              </h3>
              <p className="text-dark/50 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-500">
                {point.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInLeft}
          className="mt-16 flex items-start gap-6"
        >
          <div className="w-1 h-16 bg-accent flex-shrink-0 mt-1" />
          <p className="font-display font-bold text-2xl md:text-3xl text-dark/70 leading-snug max-w-2xl">
            «&nbsp;La première impression vous coûte des clients avant même
            que vous ayez la parole.&nbsp;»
          </p>
        </motion.div>
      </div>
    </section>
  )
}
