import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Bike,
  Zap,
  ArrowLeft,
  ArrowRight,
  Leaf,
  Wrench,
  MapPin,
  Factory,
  CheckCircle2,
} from 'lucide-react'

export const Route = createFileRoute('/virvolt')({
  component: VirvoltHistory,
})

const FrenchFlag = ({ className = '' }: { className?: string }) => (
  <span
    className={`inline-flex overflow-hidden rounded-[2px] border border-[var(--ink)]/15 align-middle ${className}`}
    style={{ width: 22, height: 15 }}
    aria-hidden="true"
  >
    <span className="flex-1 bg-[#0055A4]" />
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#EF4135]" />
  </span>
)

const timeline = [
  {
    year: '2016',
    title: 'Une idée née dans un atelier',
    body: "Face à des vélos électriques neufs souvent hors de prix, quelques passionnés font le pari inverse : électrifier les vélos que les Français possèdent déjà, plutôt que d'en fabriquer de nouveaux.",
  },
  {
    year: '2018',
    title: 'Les premiers kits Virvolt',
    body: "Virvolt conçoit ses premiers kits d'assistance électrique, pensés pour s'adapter au plus grand nombre de vélos : ville, route, VTT ou cargo. La marque mise sur la simplicité de pose et la fiabilité.",
  },
  {
    year: '2020',
    title: 'Le réseau d’installateurs certifiés',
    body: "Pour garantir une pose irréprochable, Virvolt forme et certifie un réseau d'artisans partout en France. C'est la naissance du modèle qui fait la force de la marque : un produit local, posé par un professionnel de proximité.",
  },
  {
    year: "Aujourd'hui",
    title: 'Une seconde vie pour des milliers de vélos',
    body: "Des milliers de vélos ont retrouvé la route grâce aux kits Virvolt. Ludo Cycles fait partie de ce réseau d'installateurs certifiés et vient poser votre kit directement chez vous.",
  },
]

const values = [
  {
    icon: Leaf,
    title: 'Écologique par principe',
    body: "Électrifier plutôt que jeter : chaque kit prolonge la vie d'un vélo existant et évite la fabrication d'un vélo neuf.",
  },
  {
    icon: Factory,
    title: 'Conçu en France',
    body: 'Virvolt développe ses kits en France, avec une exigence forte sur la qualité des composants et la durabilité.',
  },
  {
    icon: Wrench,
    title: 'Posé par un pro',
    body: "La marque ne vend pas qu'un produit : elle forme des installateurs certifiés pour une pose et des réglages parfaits.",
  },
]

function VirvoltHistory() {
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
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--rust)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-16">
        <div className="rise-in max-w-3xl">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[var(--line)] rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <FrenchFlag />
            Une marque française d'électrification
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-6">
            L'histoire de Virvolt
          </h1>
          <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed">
            Virvolt part d'une conviction simple : le meilleur vélo électrique est
            souvent celui que vous possédez déjà. Plutôt que de fabriquer des vélos
            neufs, la marque conçoit des kits qui transforment n'importe quel vélo
            en vélo à assistance électrique.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--steel)] text-[var(--paper)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl mb-14">
            Des débuts à aujourd'hui
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--paper)]/10 rounded-2xl overflow-hidden">
            {timeline.map((step) => (
              <div key={step.year} className="bg-[var(--steel)] p-8 flex flex-col gap-4">
                <span className="font-display text-3xl text-[var(--volt)]">{step.year}</span>
                <h3 className="font-display text-xl tracking-wide">{step.title}</h3>
                <p className="text-sm text-[var(--paper)]/70 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <h2 className="font-display text-4xl md:text-5xl mb-4">Ce qui fait Virvolt</h2>
        <p className="text-[var(--ink-soft)] max-w-xl mb-14 leading-relaxed">
          Trois convictions guident la marque depuis le premier kit — et ce sont
          les mêmes que celles de Ludo Cycles.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-[var(--line)] bg-white p-8 flex flex-col gap-4"
            >
              <value.icon className="w-9 h-9 text-[var(--rust)]" strokeWidth={1.75} />
              <h3 className="font-display text-2xl">{value.title}</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--volt)] text-[var(--ink)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <Zap className="w-10 h-10 mb-6" strokeWidth={1.75} />
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Envie d'électrifier votre vélo ?
            </h2>
            <p className="text-[var(--ink)]/80 leading-relaxed">
              Ludo Cycles est installateur certifié Virvolt et vient poser votre
              kit directement chez vous, réglages compris.
            </p>
          </div>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] font-semibold px-7 py-4 rounded-full hover:bg-[var(--rust)] transition-colors shrink-0"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--steel)] text-[var(--paper)] pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-[var(--rust)]">
                <Bike className="w-4 h-4" />
              </span>
              <span className="font-display text-xl tracking-wide">Ludo Cycles</span>
            </div>
            <p className="text-sm text-[var(--paper)]/60 leading-relaxed max-w-sm">
              Réparation, entretien et électrification de vélos, directement chez vous.
            </p>
          </div>
          <ul className="space-y-2 text-sm text-[var(--paper)]/70">
            <li>06.82.77.02.82</li>
            <li>ludocycles@gmail.com</li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              Intervention dans un rayon de 25 km
            </li>
          </ul>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 mt-10 border-t border-[var(--paper)]/10 flex items-center gap-2 text-xs text-[var(--paper)]/50">
          <CheckCircle2 className="w-4 h-4" />
          Installateur certifié Virvolt · Devis gratuit sous 24h
        </div>
      </footer>
    </div>
  )
}
