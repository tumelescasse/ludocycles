import { useMemo, useState } from 'react'
import {
  CircleDot,
  Cog,
  Disc,
  Frame,
  RotateCw,
  MoveVertical,
  ChevronDown,
  Check,
  Calculator,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

type Service = {
  id: string
  label: string
  price: number
}

type Category = {
  id: string
  label: string
  icon: LucideIcon
  services: Service[]
}

// Postes mécaniques présentés dans l'ordre demandé. Les prix sont la
// main-d'œuvre « à partir de » ; les pièces éventuelles restent en supplément.
const categories: Category[] = [
  {
    id: 'roues',
    label: 'Pneus / Roues',
    icon: CircleDot,
    services: [
      { id: 'roues-pneu', label: "Changement de pneu (à l'unité)", price: 12 },
      { id: 'roues-crevaison', label: 'Réparation de crevaison', price: 10 },
      { id: 'roues-chambre', label: "Remplacement de chambre à air", price: 10 },
      { id: 'roues-devoilage', label: 'Dévoilage de roue', price: 18 },
      { id: 'roues-rayon', label: "Remplacement d'un rayon", price: 15 },
    ],
  },
  {
    id: 'transmission',
    label: 'Transmission',
    icon: Cog,
    services: [
      { id: 'trans-derailleur', label: 'Réglage du dérailleur', price: 15 },
      { id: 'trans-chaine', label: 'Changement de chaîne', price: 20 },
      { id: 'trans-cassette', label: 'Remplacement de cassette', price: 25 },
      { id: 'trans-cables', label: 'Changement de câbles et gaines', price: 18 },
      { id: 'trans-nettoyage', label: 'Nettoyage complet de la transmission', price: 25 },
    ],
  },
  {
    id: 'freinage',
    label: 'Freinage',
    icon: Disc,
    services: [
      { id: 'frein-plaquettes', label: 'Changement de plaquettes / patins', price: 18 },
      { id: 'frein-reglage', label: 'Réglage des freins', price: 12 },
      { id: 'frein-purge', label: 'Purge de freins hydrauliques', price: 30 },
      { id: 'frein-disque', label: "Remplacement d'un disque", price: 20 },
    ],
  },
  {
    id: 'cadre',
    label: 'Cadre',
    icon: Frame,
    services: [
      { id: 'cadre-nettoyage', label: 'Nettoyage & contrôle du cadre', price: 20 },
      { id: 'cadre-resserrage', label: 'Resserrage général au couple', price: 15 },
      { id: 'cadre-direction', label: 'Remplacement du jeu de direction', price: 30 },
    ],
  },
  {
    id: 'pedalier',
    label: 'Pédalier',
    icon: RotateCw,
    services: [
      { id: 'pedalier-pedales', label: 'Changement de pédales', price: 10 },
      { id: 'pedalier-boitier', label: 'Réglage du boîtier de pédalier', price: 20 },
      { id: 'pedalier-remplacement', label: 'Remplacement du pédalier', price: 30 },
    ],
  },
  {
    id: 'fourche',
    label: 'Fourche / Amortisseur',
    icon: MoveVertical,
    services: [
      { id: 'fourche-entretien', label: 'Entretien de fourche suspendue', price: 45 },
      { id: 'fourche-amortisseur', label: "Réglage de l'amortisseur", price: 25 },
      { id: 'fourche-joints', label: 'Remplacement des joints spy', price: 40 },
    ],
  },
]

export function PriceEstimator() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    roues: true,
  })
  const [selected, setSelected] = useState<Record<string, boolean>>({})

  const toggleCategory = (id: string) =>
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }))

  const toggleService = (id: string) =>
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }))

  const { total, count, perCategory } = useMemo(() => {
    let total = 0
    let count = 0
    const perCategory: Record<string, number> = {}
    for (const category of categories) {
      let categoryCount = 0
      for (const service of category.services) {
        if (selected[service.id]) {
          total += service.price
          count += 1
          categoryCount += 1
        }
      }
      perCategory[category.id] = categoryCount
    }
    return { total, count, perCategory }
  }, [selected])

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
      {/* Arborescence des postes mécaniques */}
      <div className="flex flex-col gap-4">
        {categories.map((category) => {
          const isOpen = !!openCategories[category.id]
          const categoryCount = perCategory[category.id]
          return (
            <div
              key={category.id}
              className="rounded-2xl border border-[var(--line)] bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--paper)]/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <category.icon className="w-5 h-5 text-[var(--rust)]" strokeWidth={1.75} />
                  <span className="font-display text-xl tracking-wide">{category.label}</span>
                </span>
                <span className="flex items-center gap-3">
                  {categoryCount > 0 && (
                    <span className="grid place-items-center min-w-6 h-6 px-2 rounded-full bg-[var(--rust)] text-[var(--paper)] text-xs font-semibold">
                      {categoryCount}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-soft)] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </button>

              {isOpen && (
                <ul className="border-t border-[var(--line)] divide-y divide-[var(--line)]">
                  {category.services.map((service) => {
                    const isChecked = !!selected[service.id]
                    return (
                      <li key={service.id}>
                        <label className="flex items-center justify-between gap-4 px-5 py-3.5 cursor-pointer hover:bg-[var(--paper)]/50 transition-colors">
                          <span className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleService(service.id)}
                              className="sr-only"
                            />
                            <span
                              className={`grid place-items-center w-5 h-5 rounded-md border-2 shrink-0 transition-colors ${
                                isChecked
                                  ? 'border-[var(--rust)] bg-[var(--rust)] text-[var(--paper)]'
                                  : 'border-[var(--line)]'
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                            </span>
                            <span className="text-sm text-[var(--ink)]">{service.label}</span>
                          </span>
                          <span className="text-sm text-[var(--ink-soft)] whitespace-nowrap">
                            à partir de {service.price} €
                          </span>
                        </label>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </div>

      {/* Récapitulatif */}
      <aside className="lg:sticky lg:top-6 rounded-3xl bg-[var(--ink)] text-[var(--paper)] p-8">
        <div className="flex items-center gap-2.5 mb-8">
          <Calculator className="w-6 h-6 text-[var(--volt)]" strokeWidth={1.75} />
          <h3 className="font-display text-2xl tracking-wide">Votre estimation</h3>
        </div>

        <div className="flex items-baseline justify-between border-b border-[var(--paper)]/10 pb-4 mb-6">
          <span className="text-sm text-[var(--paper)]/70">Prestations sélectionnées</span>
          <span className="font-display text-3xl">{count}</span>
        </div>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-wide text-[var(--paper)]/60">
            à partir de
          </span>
          <div className="font-display text-6xl text-[var(--volt)] leading-none mt-1">
            {total} €
          </div>
        </div>

        <p className="text-sm text-[var(--paper)]/70 leading-relaxed mb-8">
          {count === 0
            ? "Cochez les prestations qui vous concernent pour composer votre estimation."
            : "Main-d'œuvre à domicile indiquée. Les pièces éventuelles restent en supplément."}
        </p>

        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center gap-2 bg-[var(--rust)] text-[var(--paper)] font-semibold px-6 py-3.5 rounded-full hover:bg-[var(--rust-dark)] transition-colors group"
        >
          Demander un devis gratuit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </aside>
    </div>
  )
}
