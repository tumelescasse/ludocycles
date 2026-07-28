import { useState } from 'react'
import { ArrowRight, RotateCcw, Wrench } from 'lucide-react'

export type Prestation = {
  id: string
  label: string
  price: number
  group: string
}

const formatPrice = (value: number) => `${value} €`

/** Regroupe les prestations par famille, en conservant l'ordre du tableau source. */
function byGroup(items: Prestation[]) {
  const groups = new Map<string, Prestation[]>()
  for (const item of items) {
    const list = groups.get(item.group)
    if (list) list.push(item)
    else groups.set(item.group, [item])
  }
  return [...groups]
}

/**
 * Grille des prestations de réparation : le client coche ce dont il a besoin
 * et voit son total se calculer au fur et à mesure.
 */
export function RepairEstimator({ items }: { items: Prestation[] }) {
  const [selected, setSelected] = useState<string[]>([])

  const chosen = items.filter((item) => selected.includes(item.id))
  const total = chosen.reduce((sum, item) => sum + item.price, 0)

  const toggle = (id: string) =>
    setSelected((previous) =>
      previous.includes(id) ? previous.filter((value) => value !== id) : [...previous, id],
    )

  const mailBody = [
    'Bonjour Ludo,',
    '',
    'Voici les prestations qui m’intéressent :',
    ...chosen.map((item) => `- ${item.label} : ${formatPrice(item.price)}`),
    '',
    `Total estimé (main-d'œuvre) : ${formatPrice(total)}`,
    '',
    'Mon vélo : ',
    'Mon adresse : ',
    'Mes disponibilités : ',
    '',
    'Merci !',
  ].join('\n')

  const mailto = `mailto:contact@ludocycles.fr?subject=${encodeURIComponent(
    'Demande de devis — réparation vélo',
  )}&body=${encodeURIComponent(mailBody)}`

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-8">
      <div className="space-y-8">
        {byGroup(items).map(([group, prestations]) => (
          <fieldset key={group}>
            <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rust)] mb-3">
              {group}
            </legend>
            <div className="grid sm:grid-cols-2 gap-2">
              {prestations.map((item) => {
                const isChecked = selected.includes(item.id)
                return (
                  <label
                    key={item.id}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                      isChecked
                        ? 'border-[var(--rust)] bg-[var(--rust)]/8'
                        : 'border-[var(--line)] bg-white hover:border-[var(--ink)]/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(item.id)}
                      className="w-4 h-4 shrink-0 accent-[var(--rust)]"
                    />
                    <span className="text-sm leading-snug flex-1">{item.label}</span>
                    <span className="font-display text-lg shrink-0">{formatPrice(item.price)}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="lg:sticky lg:top-6 h-fit rounded-3xl bg-[var(--ink)] text-[var(--paper)] p-7">
        <span className="text-xs uppercase tracking-[0.18em] text-[var(--paper)]/60">
          Total estimé
        </span>
        <div className="flex items-baseline gap-2 mt-2 mb-1">
          <span className="font-display text-5xl">{formatPrice(total)}</span>
          <span className="text-xs text-[var(--paper)]/60">main-d’œuvre</span>
        </div>

        {chosen.length === 0 ? (
          <p className="text-sm text-[var(--paper)]/70 leading-relaxed mt-4">
            Cochez les prestations dont votre vélo a besoin : le total se calcule
            au fur et à mesure.
          </p>
        ) : (
          <>
            <ul className="mt-5 space-y-2 border-t border-[var(--paper)]/15 pt-4">
              {chosen.map((item) => (
                <li key={item.id} className="flex justify-between gap-3 text-sm">
                  <span className="text-[var(--paper)]/75 leading-snug">{item.label}</span>
                  <span className="shrink-0">{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[var(--paper)]/50 mt-4">
              {chosen.length} prestation{chosen.length > 1 ? 's' : ''} sélectionnée
              {chosen.length > 1 ? 's' : ''}
            </p>
          </>
        )}

        <a
          href={chosen.length > 0 ? mailto : '#contact'}
          className="inline-flex items-center gap-2 w-full justify-center mt-6 bg-[var(--volt)] text-[var(--ink)] font-semibold px-5 py-3 rounded-full hover:bg-[var(--paper)] transition-colors"
        >
          {chosen.length > 0 ? 'Envoyer cette estimation' : 'Demander un devis'}
          <ArrowRight className="w-4 h-4" />
        </a>

        {chosen.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="inline-flex items-center gap-2 mt-3 mx-auto text-xs text-[var(--paper)]/60 hover:text-[var(--paper)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Tout décocher
          </button>
        )}

        <p className="flex items-start gap-2 text-xs text-[var(--paper)]/50 mt-6 leading-relaxed">
          <Wrench className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          Estimation indicative. Déplacement inclus dans un rayon de 25 km, pièces
          détachées en supplément. Le devis final est confirmé sur place.
        </p>
      </div>
    </div>
  )
}
