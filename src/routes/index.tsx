import { createFileRoute } from "@tanstack/react-router";
import {
  Bike,
  Zap,
  Truck,
  Wrench,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
  Calculator,
} from "lucide-react";
import { RepairEstimator, type Prestation } from "@/components/RepairEstimator";
import { FrenchFlag } from "@/components/FrenchFlag";

export const Route = createFileRoute("/")({
  component: LudoCyclesHome,
});

const whyUs = [
  {
    icon: Truck,
    title: "Intervention à domicile",
    body: "Un vélo qui grince ne se répare pas mieux au fond d'un garage. Ludo vient chez vous, avec l'outillage complet.",
  },
  {
    icon: Wrench,
    title: "Réparation toutes marques",
    body: "VTT, vélo de ville, gravel ou vélo cargo : chaque révision est adaptée à votre monture, quelle que soit la marque.",
  },
  {
    icon: Zap,
    title: "Installateur partenaire Virvolt",
    body: "Certifié pour la pose des kits Virvolt, qui transforment un vélo classique en vélo à assistance électrique.",
  },
  {
    icon: MapPin,
    title: "Service local et conseils personnalisés",
    body: "Un artisan du quartier qui prend le temps d'expliquer chaque réglage, sans jargon inutile.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Réparation & Entretien",
    body: "Révisions complètes, freins, transmission, roues, réglages fins et montage d'accessoires pour garder votre vélo en état de rouler longtemps.",
    cta: "En savoir plus",
    accent: "rust" as const,
  },
  {
    icon: Zap,
    title: "Électrification Virvolt",
    body: "Transformez votre vélo en vélo électrique grâce aux kits Virvolt, installés et réglés par un professionnel certifié.",
    cta: "Découvrir",
    accent: "volt" as const,
  },
];

const pricing = [
  {
    icon: Wrench,
    title: "Diagnostic & réglage",
    price: "29€",
    unit: "à partir de",
    body: "Contrôle complet du vélo, réglage des freins et du dérailleur, vérification de l'usure.",
    features: [
      "Diagnostic complet",
      "Réglages freins & vitesses",
      "Conseils d'entretien",
    ],
    accent: "rust" as const,
  },
  {
    icon: Bike,
    title: "Révision complète",
    price: "69€",
    unit: "à partir de",
    body: "Entretien approfondi : transmission, roues, freins et jeu de direction pour repartir comme neuf.",
    features: [
      "Nettoyage & lubrification",
      "Remplacement pièces usées*",
      "Garantie 30 jours",
    ],
    accent: "ink" as const,
    featured: true,
  },
  {
    icon: Zap,
    title: "Pose kit Virvolt",
    price: "349€",
    unit: "à partir de",
    body: "Installation certifiée d'un kit d'électrification Virvolt, batterie et moteur compris, réglages inclus.",
    features: [
      "Installation certifiée",
      "Réglages & mise en route",
      "Suivi après installation",
    ],
    accent: "volt" as const,
  },
];

/** Prestations proposées dans le calculateur de total (main-d'œuvre, pièces en supplément). */
const repairPrestations: Prestation[] = [
  {
    id: "crevaison",
    label: "Réparation de crevaison",
    price: 15,
    group: "Roues & pneus",
  },
  {
    id: "chambre",
    label: "Changement de chambre à air",
    price: 18,
    group: "Roues & pneus",
  },
  {
    id: "pneu",
    label: "Changement de pneu",
    price: 22,
    group: "Roues & pneus",
  },
  {
    id: "devoilage",
    label: "Dévoilage de roue",
    price: 24,
    group: "Roues & pneus",
  },
  {
    id: "plaquettes",
    label: "Plaquettes de frein (par roue)",
    price: 18,
    group: "Freins",
  },
  {
    id: "patins",
    label: "Patins de frein (par roue)",
    price: 14,
    group: "Freins",
  },
  {
    id: "purge",
    label: "Purge de frein hydraulique (par frein)",
    price: 32,
    group: "Freins",
  },
  {
    id: "cable-frein",
    label: "Câble et gaine de frein",
    price: 18,
    group: "Freins",
  },
  {
    id: "derailleur",
    label: "Réglage de dérailleur",
    price: 15,
    group: "Transmission",
  },
  {
    id: "chaine",
    label: "Changement de chaîne",
    price: 22,
    group: "Transmission",
  },
  {
    id: "cassette",
    label: "Changement de cassette ou roue libre",
    price: 26,
    group: "Transmission",
  },
  {
    id: "pedalier",
    label: "Changement de pédalier",
    price: 30,
    group: "Transmission",
  },
  {
    id: "direction",
    label: "Jeu de direction ou roulements",
    price: 28,
    group: "Cycle & accessoires",
  },
  {
    id: "accessoire",
    label: "Montage d’accessoire (porte-bagage, garde-boue…)",
    price: 15,
    group: "Cycle & accessoires",
  },
  {
    id: "eclairage",
    label: "Installation d’éclairage",
    price: 16,
    group: "Cycle & accessoires",
  },
  {
    id: "nettoyage",
    label: "Nettoyage et lubrification complets",
    price: 20,
    group: "Cycle & accessoires",
  },
];

const stats = [
  { icon: Wrench, value: "412", label: "réparations effectuées" },
  { icon: Bike, value: "286", label: "vélos entretenus" },
  { icon: Zap, value: "57", label: "kits Virvolt installés" },
  { icon: Star, value: "4,8/5", label: "satisfaction client" },
];

const reviews = [
  {
    name: "Anaëlle Ferrand",
    text: "Ludo est venu directement dans ma cour pour changer mes plaquettes et régler le dérailleur. Rapide, honnête sur les prix, je recommande sans hésiter.",
    rating: 5,
  },
  {
    name: "Mehdi Taleb",
    text: "Pose du kit Virvolt impeccable, tout a été expliqué avant et après l'installation. Mon vieux vélo de route grimpe les côtes sans effort maintenant.",
    rating: 5,
  },
  {
    name: "Solène Rambert",
    text: "Diagnostic clair pour un bruit de roue qui trainait depuis des mois. Réglé en 40 minutes, sans avoir à démonter le vélo ni le transporter.",
    rating: 4,
  },
];

export default function LudoCyclesHome() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <a
        href="/virvolt"
        className="block bg-[var(--ink)] text-[var(--paper)] text-center text-sm md:text-base py-2.5 px-4 hover:bg-[var(--rust-dark)] transition-colors"
      >
        <span className="font-semibold">
          Offrez une seconde vie à votre vélo
        </span>{" "}
        grâce aux kits d'électrification Virvolt — demandez votre devis gratuit
        <ArrowRight className="inline-block ml-2 w-4 h-4 -translate-y-px" />
      </a>

      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--rust)] text-[var(--paper)]">
            <Bike className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl tracking-wide">
            Ludo Cycles
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--ink-soft)]">
          <a
            href="#services"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Services
          </a>
          <a
            href="/virvolt"
            className="inline-flex items-center gap-1.5 hover:text-[var(--rust)] transition-colors"
          >
            Virvolt
            <FrenchFlag className="w-4 h-auto rounded-[2px] shadow-sm" />
          </a>
          <a
            href="#tarifs"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#avis"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Avis clients
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--rust)] transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--rust)] transition-colors"
        >
          Demander un devis
        </a>
      </header>

      {/* Hero */}
      <section className="pb-20">
        <div className="rise-in">
          <img
            src="/hero-banner.png"
            alt="Ludo Cycles — atelier mobile de réparation vélo à domicile, Clermont-Ferrand et environs"
            className="w-full h-[52vw] max-h-[640px] min-h-[280px] object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap gap-4 mt-10">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[var(--rust)] text-[var(--paper)] font-semibold px-6 py-3.5 rounded-full hover:bg-[var(--rust-dark)] transition-colors"
          >
            <Bike className="w-5 h-5" />
            Découvrir nos services
          </a>
          <a
            href="/virvolt"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[var(--ink)] text-[var(--ink)] font-semibold px-6 py-3.5 rounded-full hover:border-[var(--rust)] hover:text-[var(--rust)] transition-colors"
          >
            <Zap className="w-5 h-5" />
            Électrifier mon vélo
          </a>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[var(--steel)] text-[var(--paper)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl mb-14 max-w-2xl">
            Pourquoi choisir Ludo Cycles ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--paper)]/10 rounded-2xl overflow-hidden">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--steel)] p-8 flex flex-col gap-4"
              >
                <item.icon
                  className="w-8 h-8 text-[var(--volt)]"
                  strokeWidth={1.75}
                />
                <h3 className="font-display text-xl tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--paper)]/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <h2 className="font-display text-4xl md:text-5xl mb-14">
          Nos deux spécialités
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const isRust = service.accent === "rust";
            return (
              <article
                key={service.title}
                id={service.accent === "volt" ? "electrification" : undefined}
                className={`rounded-3xl p-10 flex flex-col justify-between min-h-[320px] ${
                  isRust
                    ? "bg-[var(--rust)] text-[var(--paper)]"
                    : "bg-[var(--volt)] text-[var(--ink)]"
                }`}
              >
                <div>
                  <service.icon className="w-10 h-10 mb-6" strokeWidth={1.75} />
                  <h3 className="font-display text-3xl mb-4">
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${isRust ? "text-[var(--paper)]/85" : "text-[var(--ink)]/80"}`}
                  >
                    {service.body}
                  </p>
                </div>
                <a
                  href={service.accent === "volt" ? "/virvolt" : "#contact"}
                  className={`inline-flex items-center gap-2 mt-8 font-semibold group ${
                    isRust ? "text-[var(--paper)]" : "text-[var(--ink)]"
                  }`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="bg-[var(--paper)] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Nos tarifs</h2>
          <p className="text-[var(--ink-soft)] max-w-xl mb-8 leading-relaxed">
            Des prix clairs annoncés avant chaque intervention, sans surprise à
            la fin. Un devis détaillé et gratuit est toujours établi sur place.
          </p>

          <div className="pt-6">
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan) => {
                const isFeatured = plan.featured;
                return (
                  <article
                    key={plan.title}
                    className={`rounded-3xl p-8 flex flex-col ${
                      isFeatured
                        ? "bg-[var(--ink)] text-[var(--paper)] md:-translate-y-4 shadow-xl"
                        : "bg-white border border-[var(--line)] text-[var(--ink)]"
                    }`}
                  >
                    <plan.icon
                      className={`w-9 h-9 mb-6 ${
                        isFeatured ? "text-[var(--volt)]" : "text-[var(--rust)]"
                      }`}
                      strokeWidth={1.75}
                    />
                    <h3 className="font-display text-2xl mb-2">{plan.title}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span
                        className={`text-xs uppercase tracking-wide ${
                          isFeatured
                            ? "text-[var(--paper)]/60"
                            : "text-[var(--ink-soft)]"
                        }`}
                      >
                        {plan.unit}
                      </span>
                      <span className="font-display text-4xl">
                        {plan.price}
                      </span>
                    </div>
                    <p
                      className={`leading-relaxed mb-6 ${
                        isFeatured
                          ? "text-[var(--paper)]/80"
                          : "text-[var(--ink-soft)]"
                      }`}
                    >
                      {plan.body}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              isFeatured
                                ? "text-[var(--volt)]"
                                : "text-[var(--rust)]"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 mt-auto font-semibold group ${
                        isFeatured ? "text-[var(--paper)]" : "text-[var(--ink)]"
                      }`}
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="text-xs text-[var(--ink-soft)] mt-8">
              * Pièces facturées en supplément selon le remplacement nécessaire.
            </p>

            {/* Calcul du total pour une réparation */}
            <div className="mt-16 rounded-3xl border border-[var(--line)] bg-white p-8 md:p-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rust)] mb-4">
                <Calculator className="w-4 h-4" />
                Calculez votre réparation
              </span>
              <h3 className="font-display text-3xl md:text-4xl mb-3">
                Cochez, le total s&rsquo;affiche
              </h3>
              <p className="text-[var(--ink-soft)] max-w-xl mb-10 leading-relaxed">
                Chaque prestation est facturée au tarif de la main-d&rsquo;œuvre
                indiqué. Sélectionnez ce dont votre vélo a besoin pour connaître
                le montant avant même de décrocher le téléphone.
              </p>
              <RepairEstimator items={repairPrestations} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--ink)] text-[var(--paper)] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-display text-4xl md:text-5xl">
              Des chiffres qui rassurent
            </h2>
            <p className="text-sm text-[var(--paper)]/50 max-w-sm">
              Ces compteurs sont mis à jour régulièrement au fil des
              interventions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <stat.icon
                  className="w-7 h-7 mb-4 mx-auto sm:mx-0 text-[var(--rust)]"
                  strokeWidth={1.75}
                />
                <div className="font-display text-5xl mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--paper)]/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="avis" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex text-[var(--rust)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-sm font-semibold text-[var(--ink-soft)]">
            4,8 sur 5 — avis Google
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl mb-14">
          Ce que disent nos clients
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-[var(--line)] bg-white p-7 flex flex-col gap-4"
            >
              <div className="flex text-[var(--rust)]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[var(--ink-soft)] leading-relaxed text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <span className="font-display text-lg mt-auto">
                {review.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / contact */}
      <footer
        id="contact"
        className="bg-[var(--steel)] text-[var(--paper)] pt-20 pb-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-8 h-8 rounded-full bg-[var(--rust)]">
                <Bike className="w-4 h-4" />
              </span>
              <span className="font-display text-xl tracking-wide">
                Ludo Cycles
              </span>
            </div>
            <p className="text-sm text-[var(--paper)]/60 leading-relaxed">
              Réparation, entretien et électrification de vélos, directement
              chez vous.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide mb-4">
              Coordonnées
            </h3>
            <ul className="space-y-2 text-sm text-[var(--paper)]/70">
              <li>06.82.77.02.82</li>
              <li>contact@ludocycles.fr</li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Intervention dans un rayon de 25 km
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-[var(--paper)]/70">
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/virvolt"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Électrification Virvolt
                </a>
              </li>
              <li>
                <a
                  href="#tarifs"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#avis"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Avis clients
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-wide mb-4">
              Suivez l'atelier
            </h3>
            <ul className="space-y-2 text-sm text-[var(--paper)]/70">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--volt)] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-6 text-xs text-[var(--paper)]/50">
              <CheckCircle2 className="w-4 h-4" />
              Devis gratuit sous 24h
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 border-t border-[var(--paper)]/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-[var(--paper)]/50">
          <span>
            © {new Date().getFullYear()} Ludo Cycles. Tous droits réservés.
          </span>
          <a href="#" className="hover:text-[var(--volt)] transition-colors">
            Mentions légales
          </a>
        </div>
      </footer>
    </div>
  );
}
