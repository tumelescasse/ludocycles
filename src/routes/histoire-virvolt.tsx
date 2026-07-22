import { createFileRoute, Link } from '@tanstack/react-router'
import { Bike, Zap, ArrowLeft, ArrowRight, MapPin, Leaf, Factory } from 'lucide-react'
import { FrenchFlag } from '@/components/FrenchFlag'

export const Route = createFileRoute('/histoire-virvolt')({
  component: HistoireVirvolt,
  head: () => ({
    meta: [
      { title: "L'histoire de Virvolt — Ludo Cycles" },
      {
        name: 'description',
        content:
          "L'histoire de Virvolt, la marque française qui électrifie les vélos grâce à ses kits d'assistance conçus et assemblés en France. Installés à domicile par Ludo Cycles.",
      },
    ],
  }),
})

const milestones = [
  {
    year: '2019',
    title: 'Une idée née en France',
    body: "Virvolt voit le jour avec une conviction simple : plutôt que de jeter un vélo qui roule encore, autant lui offrir une seconde vie électrique. La marque conçoit ses premiers kits d'assistance en France.",
  },
  {
    year: '2020',
    title: 'Le kit qui démocratise le VAE',
    body: "En misant sur des kits universels, faciles à poser sur la plupart des vélos, Virvolt rend l'assistance électrique accessible sans avoir à racheter un vélo neuf, souvent hors de prix.",
  },
  {
    year: '2022',
    title: 'Un réseau d’installateurs certifiés',
    body: "Pour garantir une pose fiable et durable, Virvolt forme et certifie des artisans partout en France. La qualité de l'installation devient aussi importante que celle du matériel.",
  },
  {
    year: "Aujourd'hui",
    title: 'Ludo Cycles, partenaire certifié',
    body: "Ludo Cycles installe et règle les kits Virvolt directement chez vous. Le savoir-faire d'une marque française, appliqué avec le soin d'un artisan de quartier.",
  },
]

const values = [
  {
    icon: Factory,
    title: 'Conçu en France',
    body: "Recherche, conception et assemblage réalisés en France, pour des kits pensés au plus près des cyclistes qui les utilisent.",
  },
  {
    icon: Leaf,
    title: 'Anti-gaspillage',
    body: 'Électrifier un vélo existant, c’est éviter la fabrication d’un vélo neuf : un geste concret pour prolonger la vie de votre monture.',
  },
  {
    icon: MapPin,
    title: 'Accessible à tous',
    body: 'Un kit universel et abordable pour transformer presque n’importe quel vélo en vélo à assistance électrique.',
  },
]

function HistoireVirvolt() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--rust)] text-[var(--paper)]">
            <Bike className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl tracking-wide">Ludo Cycles</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--rust)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-16 rise-in">
        <div className="inline-flex items-center gap-2 bg-[var(--volt)] text-[var(--ink)] text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-6">
          <FrenchFlag className="w-4 h-3 rounded-[1px]" />
          Marque française
        </div>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
          L'histoire de Virvolt
        </h1>
        <p className="text-[var(--ink-soft)] max-w-2xl mt-6 text-lg leading-relaxed">
          Derrière chaque kit Virvolt installé par Ludo Cycles, il y a une marque
          française née d'une idée simple : rendre le vélo électrique accessible
          en électrifiant les vélos que l'on possède déjà.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[var(--steel)] text-[var(--paper)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl mb-14 max-w-2xl">
            Ce qui fait Virvolt
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-[var(--paper)]/10 rounded-2xl overflow-hidden">
            {values.map((item) => (
              <div key={item.title} className="bg-[var(--steel)] p-8 flex flex-col gap-4">
                <item.icon className="w-8 h-8 text-[var(--volt)]" strokeWidth={1.75} />
                <h3 className="font-display text-xl tracking-wide">{item.title}</h3>
                <p className="text-sm text-[var(--paper)]/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <h2 className="font-display text-4xl md:text-5xl mb-14">Les grandes étapes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {milestones.map((step) => (
            <article
              key={step.year}
              className="rounded-3xl border border-[var(--line)] bg-white p-8 flex flex-col"
            >
              <span className="font-display text-3xl text-[var(--rust)] mb-3">{step.year}</span>
              <h3 className="font-display text-2xl mb-3">{step.title}</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--volt)] text-[var(--ink)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <Zap className="w-10 h-10 mb-5" strokeWidth={1.75} />
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Envie d'électrifier votre vélo ?
            </h2>
            <p className="text-[var(--ink)]/80 leading-relaxed">
              Ludo Cycles pose et règle votre kit Virvolt à domicile, avec le suivi
              d'un installateur certifié. Demandez votre devis gratuit.
            </p>
          </div>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] font-semibold px-6 py-3.5 rounded-full hover:bg-[var(--rust)] transition-colors shrink-0"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="bg-[var(--steel)] text-[var(--paper)] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-3 text-xs text-[var(--paper)]/50">
          <span>© {new Date().getFullYear()} Ludo Cycles. Tous droits réservés.</span>
          <Link to="/" className="hover:text-[var(--volt)] transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </footer>
    </div>
  )
}
