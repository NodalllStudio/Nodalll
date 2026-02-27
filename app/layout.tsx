import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nodalll Studio — Identité de marque & Landing Pages en 7 jours',
  description:
    'Nous créons des identités de marque percutantes et des landing pages à fort taux de conversion pour les professionnels ambitieux. Rapide. Sur-mesure. Pensé pour convertir.',
  keywords: [
    'identité de marque',
    'landing page',
    'studio digital',
    'web design',
    'branding',
    'livraison rapide',
  ],
  openGraph: {
    title: 'Nodalll Studio — Identité de marque & Landing Pages en 7 jours',
    description:
      'Nous créons des identités de marque percutantes et des landing pages à fort taux de conversion pour les professionnels ambitieux.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
