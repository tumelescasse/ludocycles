import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Battery,
  Bike,
  Factory,
  Gauge,
  Recycle,
  Weight,
  Wrench,
  Zap,
} from "lucide-react";
import { FrenchFlag } from "@/components/FrenchFlag";
import {
  MotorPositionDiagram,
  type MotorPosition,
} from "@/components/MotorPositionDiagram";

export const Route = createFileRoute("/virvolt")({
  component: VirvoltPage,
});

/** Max torque across the range, used to scale the comparison bars. */
const MAX_TORQUE = 80;

const virvoltKits = [
  {
    name: "Virvolt 500",
    position: "front" as MotorPosition,
    positionLabel: "Moteur dans la roue avant",
    tagline: "Simple, léger, accessible",
    price: "À partir de 569 € TTC",
    forWho:
      "Pour les petits trajets du quotidien et les parcours sans dénivelé : un simple coup de boost, pour un petit budget.",
    torque: 30,
    levels: "3 niveaux d’assistance",
    weight: "Entre 3 et 3,5 kg selon la batterie",
    range: "Jusqu’à 50 km (batterie débutant) ou 70 km (standard)",
    sensor:
      "Capteur de pédalage aux manivelles : assistance légère et intuitive",
    madeIn: "Moteur assemblé à L’Usine à Vélo, à Villeurbanne",
    accent: "steel" as const,
  },
  {
    name: "Virvolt 750",
    position: "rear" as MotorPosition,
    positionLabel: "Moteur dans la roue arrière",
    tagline: "Compact, léger, discret",
    price: "À partir de 860 € TTC",
    forWho:
      "Pour les trajets quotidiens, les sorties route ou gravel et les terrains peu accidentés : une assistance douce et silencieuse.",
    torque: 40,
    levels: "5 niveaux d’assistance",
    weight: "Entre 3,4 et 3,9 kg selon la batterie",
    range: "Jusqu’à 50 km (batterie débutant) ou 70 km (standard)",
    sensor:
      "Capteur de couple dans la roue libre : réactif à chaque coup de pédale",
    madeIn: "Moteur assemblé à L’Usine à Vélo, à Villeurbanne",
    accent: "rust" as const,
  },
  {
    name: "Virvolt 900",
    position: "mid" as MotorPosition,
    positionLabel: "Moteur au pédalier",
    tagline: "Puissant, réparable, made in France",
    price: "À partir de 1 250 € TTC",
    forWho:
      "Pour tous les usages, même exigeants : côtes, aventures off-road ou transport de charges lourdes. Réparable et modulaire à vie.",
    torque: 80,
    levels: "5 modes d’assistance",
    weight: "Moins de 4,8 kg (standard), moins de 6 kg (performance)",
    range: "De 70 à 120 km selon la batterie choisie",
    sensor:
      "Capteur de couple dans l’axe du moteur : assistance toujours précise",
    madeIn: "Moteur fabriqué à la Refactory de Flins (78), chez Renault",
    accent: "volt" as const,
    featured: true,
  },
];

const kitCommon = [
  { icon: Zap, label: "250 W" },
  { icon: Gauge, label: "25 km/h max" },
  { icon: Bike, label: "Compatible tous types de vélos" },
  { icon: Wrench, label: "Pose et réglages par Ludo" },
];

const pillars = [
  {
    icon: Recycle,
    title: "Électrifier plutôt que remplacer",
    body: "Votre vélo reste le vôtre : on ajoute l’assistance, on ne rachète pas un vélo neuf.",
  },
  {
    icon: Factory,
    title: "Moteurs fabriqués en France",
    body: "Villeurbanne pour les moteurs de roue, Flins pour le moteur pédalier.",
  },
  {
    icon: Wrench,
    title: "Réparable et modulaire",
    body: "Chaque pièce se remplace séparément, y compris des années après la pose.",
  },
];

export default function VirvoltPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <a
          href="/"
          className="flex items-center gap-2.5 hover:text-[var(--rust)] transition-colors"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--rust)] text-[var(--paper)]">
            <Bike className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl tracking-wide">
            Ludo Cycles
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--ink-soft)]">
          <a
            href="/#services"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Services
          </a>
          <a
            href="/#tarifs"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Tarifs
          </a>
          <a
            href="/#avis"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Avis clients
          </a>
          <a
            href="/#contact"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--rust)] transition-colors"
        >
          Demander un devis
        </a>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-24">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rust)] mb-5">
            <FrenchFlag className="w-4 h-auto rounded-[2px] shadow-sm" />
            L&rsquo;histoire Virvolt
          </span>
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16">
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Le meilleur vélo électrique est souvent celui que vous avez déjà
            </h1>
            <div className="space-y-5 text-[var(--ink-soft)] leading-relaxed">
              <p>
                C&rsquo;est de cette idée que part Virvolt. Plutôt que de
                remplacer un vélo qui roule encore très bien, la marque conçoit
                des kits qui viennent s&rsquo;y greffer — moteur, batterie et
                capteur — pour lui donner une seconde vie, sans rien perdre de
                ses habitudes.
              </p>
              <p>
                Les moteurs sont fabriqués et assemblés en France : à
                L&rsquo;Usine à Vélo, à Villeurbanne, pour les kits roue avant
                et roue arrière ; à la Refactory de Flins, chez Renault, pour le
                moteur pédalier du kit le plus puissant.
              </p>
              <p>
                Cette exigence a une conséquence très concrète pour vous : les
                kits sont réparables et modulaires, pièce par pièce. Une
                batterie qui fatigue ou un composant qui lâche ne condamne pas
                l&rsquo;ensemble du vélo.
              </p>
              <p className="text-[var(--ink)] font-medium">
                Ludo Cycles est installateur partenaire certifié : le choix du
                kit, la pose, les réglages et le suivi se font chez vous, sans
                démonter votre vélo ni le transporter.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[var(--line)] bg-white p-7 flex flex-col gap-3"
              >
                <pillar.icon
                  className="w-7 h-7 text-[var(--rust)]"
                  strokeWidth={1.75}
                />
                <h2 className="font-display text-xl tracking-wide">
                  {pillar.title}
                </h2>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="kits"
          className="bg-white border-y border-[var(--line)] py-24"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rust)] mb-5">
              <Zap className="w-4 h-4" />
              Les 3 kits Virvolt
              <FrenchFlag className="w-4 h-auto rounded-[2px] shadow-sm" />
              <span className="text-[var(--ink-soft)]">
                Fabriqués en France
              </span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4 max-w-3xl">
              Une seule vraie différence : où se place le moteur
            </h2>
            <p className="text-[var(--ink-soft)] max-w-2xl mb-14 leading-relaxed">
              Roue avant, roue arrière ou pédalier. Plus le moteur se rapproche
              des pédales, plus l&rsquo;assistance devient puissante et
              naturelle. Voici les trois kits, du plus simple au plus costaud.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {virvoltKits.map((kit, index) => {
                const isFeatured = kit.featured;
                const accentColor =
                  kit.accent === "steel"
                    ? "var(--steel)"
                    : kit.accent === "rust"
                      ? "var(--rust)"
                      : "var(--volt)";

                return (
                  <article
                    key={kit.name}
                    className={`relative rounded-3xl p-8 flex flex-col ${
                      isFeatured
                        ? "bg-[var(--ink)] text-[var(--paper)]"
                        : "bg-[var(--paper)] text-[var(--ink)]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.18em] ${isFeatured ? "text-[var(--paper)]/50" : "text-[var(--ink-soft)]"}`}
                      >
                        Niveau {index + 1} sur 3
                      </span>
                      <span className="flex gap-1">
                        {[0, 1, 2].map((slot) => (
                          <Zap
                            key={slot}
                            className="w-4 h-4"
                            style={{
                              color:
                                slot <= index ? accentColor : "currentColor",
                              opacity: slot <= index ? 1 : 0.2,
                            }}
                            fill={slot <= index ? accentColor : "none"}
                          />
                        ))}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl mb-1">{kit.name}</h3>
                    <p
                      className="font-semibold text-sm mb-3"
                      style={{
                        color: isFeatured ? "var(--volt)" : accentColor,
                      }}
                    >
                      {kit.positionLabel}
                    </p>
                    <p className="font-display text-2xl tracking-wide mb-6">
                      {kit.price}
                    </p>

                    <div
                      className={`rounded-2xl px-4 py-3 mb-6 ${isFeatured ? "bg-[var(--paper)]/10" : "bg-white"}`}
                    >
                      <MotorPositionDiagram
                        position={kit.position}
                        accent={accentColor}
                        className="w-full h-auto"
                      />
                    </div>

                    <p className="font-display text-2xl mb-3 tracking-wide">
                      {kit.tagline}
                    </p>
                    <p
                      className={`text-sm leading-relaxed mb-7 ${isFeatured ? "text-[var(--paper)]/75" : "text-[var(--ink-soft)]"}`}
                    >
                      {kit.forWho}
                    </p>

                    <div className="mb-7">
                      <div className="flex items-baseline justify-between mb-2">
                        <span
                          className={`text-xs uppercase tracking-wide ${isFeatured ? "text-[var(--paper)]/60" : "text-[var(--ink-soft)]"}`}
                        >
                          Force dans les côtes
                        </span>
                        <span className="font-display text-2xl">
                          {kit.torque} Nm
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full overflow-hidden ${isFeatured ? "bg-[var(--paper)]/15" : "bg-[var(--ink)]/10"}`}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(kit.torque / MAX_TORQUE) * 100}%`,
                            background: accentColor,
                          }}
                        />
                      </div>
                      <p
                        className={`text-xs mt-2 ${isFeatured ? "text-[var(--paper)]/60" : "text-[var(--ink-soft)]"}`}
                      >
                        {kit.levels}
                      </p>
                    </div>

                    <ul className="space-y-4 mt-auto">
                      {[
                        {
                          icon: Activity,
                          label: "Ressenti",
                          value: kit.sensor,
                        },
                        { icon: Battery, label: "Autonomie", value: kit.range },
                        {
                          icon: Weight,
                          label: "Poids du kit",
                          value: kit.weight,
                        },
                        {
                          icon: Factory,
                          label: "Fabrication",
                          value: kit.madeIn,
                          flag: true,
                        },
                      ].map((spec) => (
                        <li key={spec.label} className="flex items-start gap-3">
                          {spec.flag ? (
                            <FrenchFlag className="w-4 h-auto mt-1 shrink-0 rounded-[2px]" />
                          ) : (
                            <spec.icon
                              className="w-4 h-4 mt-0.5 shrink-0"
                              strokeWidth={2}
                              style={{
                                color: isFeatured ? "var(--volt)" : accentColor,
                              }}
                            />
                          )}
                          <span className="text-sm leading-relaxed">
                            <span className="font-semibold">
                              {spec.label} :{" "}
                            </span>
                            <span
                              className={
                                isFeatured
                                  ? "text-[var(--paper)]/75"
                                  : "text-[var(--ink-soft)]"
                              }
                            >
                              {spec.value}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-[var(--line)] bg-[var(--paper)] px-8 py-7">
              <h3 className="font-display text-xl tracking-wide mb-5">
                Communs aux trois kits
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {kitCommon.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--ink)] text-[var(--volt)] shrink-0">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[var(--rust)] text-[var(--paper)] font-semibold px-6 py-3.5 rounded-full hover:bg-[var(--rust-dark)] transition-colors"
              >
                Savoir quel kit va sur mon vélo
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-[var(--ink-soft)] max-w-sm leading-relaxed">
                Hésitation entre deux kits ? Ludo regarde votre vélo et votre
                usage, puis vous dit lequel a du sens — sans vous vendre plus
                gros que nécessaire.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
