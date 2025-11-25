import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIF() {
  const formations = [
    {
      title: "Leadership & Communication",
      description: "Développez vos compétences de leader et améliorez votre communication interpersonnelle.",
      benefits: [
        "Techniques de leadership modernes",
        "Communication assertive",
        "Gestion des conflits",
        "Prise de décision stratégique",
      ],
    },
    {
      title: "Intelligence Émotionnelle (EQ-i 2.0)",
      description: "Certification officielle pour développer votre intelligence émotionnelle et celle de votre équipe.",
      benefits: [
        "Certification EQ-i 2.0 reconnue",
        "Autoconnaissances et gestion émotionnelle",
        "Empathie et relations interpersonnelles",
        "Résilience et adaptabilité",
      ],
    },
    {
      title: "Cohésion d'Équipe",
      description: "Renforcez la cohésion et la performance de votre équipe à travers des ateliers interactifs.",
      benefits: [
        "Team building efficace",
        "Collaboration et synergie",
        "Résolution collaborative de problèmes",
        "Culture d'équipe positive",
      ],
    },
    {
      title: "Process Communication Model (PCM)",
      description: "Comprenez les différents styles de communication et adaptez votre approche à chacun.",
      benefits: [
        "6 types de personnalité PCM",
        "Communication adaptée",
        "Gestion des tensions",
        "Amélioration des relations",
      ],
    },
    {
      title: "Coaching Individuel",
      description: "Accompagnement personnalisé pour développer vos compétences et atteindre vos objectifs.",
      benefits: [
        "Séances de coaching sur mesure",
        "Clarification des objectifs",
        "Développement personnel",
        "Suivi et accountability",
      ],
    },
    {
      title: "Programmes sur Mesure",
      description: "Formations adaptées à vos besoins spécifiques et contexte organisationnel.",
      benefits: [
        "Diagnostic des besoins",
        "Conception personnalisée",
        "Intégration en contexte réel",
        "Mesure des résultats",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AIF Corporate
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Formations professionnelles pour développer les compétences de vos équipes et leaders. Nous accompagnons les entreprises dans leur transformation et développement organisationnel.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
                  Demander une formation
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <img src="/aif-leadership-hero.jpg" alt="AIF Leadership" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos formations
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez notre gamme complète de formations Corporate adaptées à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="bg-white border-2 border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {formation.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {formation.description}
                </p>
                <div className="space-y-3">
                  {formation.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AIF */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pourquoi choisir AIF ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Expertise reconnue
              </h3>
              <p className="text-muted-foreground">
                Formateurs expérimentés avec certifications internationales et expertise en développement organisationnel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Approche personnalisée
              </h3>
              <p className="text-muted-foreground">
                Chaque programme est adapté à votre contexte, vos enjeux et vos objectifs spécifiques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">✓</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Résultats mesurables
              </h3>
              <p className="text-muted-foreground">
                Suivi et évaluation des résultats pour assurer un impact durable sur votre organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à développer vos compétences ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins en formation et recevoir une proposition personnalisée.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
              Demander un devis
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
