import { useState } from 'react'
import {
  CircleDot,
  Cog,
  Disc3,
  Frame,
  Footprints,
  MoveVertical,
  ChevronDown,
  Check,
  ArrowRight,
  Wrench,
} from 'lucide-react'

type RepairItem = { label: string; price: number }

type RepairCategory = {
  id: string
  title: string
  icon: typeof CircleDot
  items: RepairItem[]
}

// Arborescence des prestations, dans l'ordre d'un contrôle mécanique.
// Prix « à partir de », main-d'œuvre seule — les pièces sont en supplément.
const repairTree: RepairCategory[] = [
  {
    id: 'pneus-roues',
    title: 'Pneus / Roues',
    icon: CircleDot,
    items: [
      { label: "Changement de chambre à air", price: 12 },
      { label: 'Remplacement de pneu', price: 15 },
      { label: 'Dévoilage de roue', price: 20 },
      { label: 'Remplacement de rayon', price: 8 },
    ],
  },
  {
    id: 'transmission',
    title: 'Transmission',
    icon: Cog,
    items: [
      { label: 'Réglage du dérailleur', price: 15 },
      { label: 'Remplacement de la chaîne', price: 18 },
      { label: 'Remplacement de la cassette', price: 22 },
      { label: 'Remplacement du dérailleur', price: 25 },
    ],
  },
  {
    id: 'freinage',
    title: 'Freinage',
    icon: Disc3,
    items: [
      { label: 'Réglage des freins', price: 12 },
      { label: 'Changement de plaquettes / patins', price: 18 },
      { label: 'Purge de freins hydrauliques', price: 30 },
      { label: 'Remplacement de câble & gaine', price: 14 },
    ],
  },
  {
    id: 'cadre',
    title: 'Cadre',
    icon: Frame,
    items: [
      { label: 'Nettoyage complet du cadre', price: 20 },
      { label: 'Contrôle & resserrage de la visserie', price: 10 },
      { label: 'Remplacement du jeu de direction', price: 25 },
    ],
  },
  {
    id: 'pedalier',
    title: 'Pédalier',
    icon: Footprints,
    items: [
      { label: 'Réglage du pédalier', price: 15 },
      { label: 'Remplacement des pédales', price: 12 },
      { label: 'Remplacement du boîtier de pédalier', price: 28 },
    ],
  },
  {
    id: 'fourche-amortisseur',
    title: 'Fourche / Amortisseur',
    icon: MoveVertical,
    items: [
      { label: 'Contrôle & réglage de la suspension', price: 18 },
      { label: 'Entretien de fourche suspendue', price: 35 },
      { label: "Remplacement d'amortisseur", price: 40 },
    ],
  },
]

const itemKey = (categoryId: string, index: number) => `${categoryId}:${index}`

export default function RepairEstimator() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set([repairTree[0].id]),
  )
  const [selected, setSelected] = useState<Set<string>>(() => new Set())

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const toggleItem = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const total = repairTree.reduce((sum, category) => {
    return (
      sum +
      category.items.reduce((catSum, item, index) => {
        return selected.has(itemKey(category.id, index)) ? catSum + item.price : catSum
      }, 0)
    )
  }, 0)

  return (
    <div className="mt-16">
      <div className="mb-8 max-w-xl">
        <h3 className="font-display text-3xl mb-3">Estimez votre intervention</h3>
        <p className="text-[var(--ink-soft)] leading-relaxed">
          Dépliez chaque poste et cochez les prestations qui vous concernent. Le
          montant se met à jour au fur et à mesure — une estimation indicative
          avant le devis gratuit établi sur place.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Arborescence */}
        <div className="lg:col-span-2 rounded-3xl border border-[var(--line)] bg-white overflow-hidden">
          {repairTree.map((category, catIndex) => {
            const isOpen = openCategories.has(category.id)
            const selectedInCategory = category.items.filter((_, index) =>
              selected.has(itemKey(category.id, index)),
            ).length

            return (
              <div
                key={category.id}
                className={catIndex > 0 ? 'border-t border-[var(--line)]' : ''}
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-5 md:px-7 py-5 text-left hover:bg-[var(--paper)]/60 transition-colors"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-[var(--paper)] text-[var(--rust)] shrink-0">
                    <category.icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex-1 font-display text-xl tracking-wide">
                    {category.title}
                  </span>
                  {selectedInCategory > 0 && (
                    <span className="grid place-items-center min-w-6 h-6 px-2 rounded-full bg-[var(--rust)] text-[var(--paper)] text-xs font-semibold">
                      {selectedInCategory}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-soft)] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <ul className="px-5 md:px-7 pb-5 pt-1 space-y-1">
                    {category.items.map((item, index) => {
                      const key = itemKey(category.id, index)
                      const isChecked = selected.has(key)
                      return (
                        <li key={key}>
                          <label className="flex items-center gap-3 py-2.5 pl-14 pr-2 -ml-14 rounded-xl cursor-pointer hover:bg-[var(--paper)]/60 transition-colors">
                            <span
                              className={`grid place-items-center w-5 h-5 rounded-md border shrink-0 transition-colors ${
                                isChecked
                                  ? 'bg-[var(--rust)] border-[var(--rust)] text-[var(--paper)]'
                                  : 'border-[var(--line)] bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                            </span>
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={isChecked}
                              onChange={() => toggleItem(key)}
                            />
                            <span className="flex-1 text-sm text-[var(--ink)]">{item.label}</span>
                            <span className="text-sm font-semibold text-[var(--ink-soft)] tabular-nums">
                              {item.price}€
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
        <aside className="rounded-3xl bg-[var(--ink)] text-[var(--paper)] p-8 lg:sticky lg:top-6">
          <Wrench className="w-8 h-8 text-[var(--volt)] mb-6" strokeWidth={1.75} />
          <h4 className="font-display text-2xl mb-1">Votre estimation</h4>
          <p className="text-sm text-[var(--paper)]/60 mb-6">
            {selected.size === 0
              ? 'Aucune prestation sélectionnée pour l’instant.'
              : `${selected.size} prestation${selected.size > 1 ? 's' : ''} sélectionnée${
                  selected.size > 1 ? 's' : ''
                }`}
          </p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs uppercase tracking-wide text-[var(--paper)]/60">
              à partir de
            </span>
            <span className="font-display text-5xl tabular-nums">{total}€</span>
          </div>
          <p className="text-xs text-[var(--paper)]/50 mb-8">
            Main-d’œuvre à domicile. Pièces éventuelles en supplément.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full bg-[var(--rust)] text-[var(--paper)] font-semibold px-5 py-3.5 rounded-full hover:bg-[var(--rust-dark)] transition-colors group"
          >
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </aside>
      </div>
    </div>
  )
}
