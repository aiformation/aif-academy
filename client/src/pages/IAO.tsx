import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IAO() {
  const programs = [
    {
      title: "Prise de Parole en Public",
      description: "Maîtrisez l'art de prendre la parole avec assurance et impact auprès de tout type d'audience.",
      features: [
        "Techniques de présentation efficaces",
        "Gestion du stress et de l'émotion",
        "Utilisation du langage corporel",
        "Interaction avec l'audience",
      ],
    },
    {
      title: "Storytelling Professionnel",
      description: "Apprenez à raconter des histoires captivantes pour convaincre et engager votre audience.",
      features: [
        "Structure narrative puissante",
        "Émotions et authenticité",
        "Adaptation au contexte professionnel",
        "Utilisation des métaphores",
      ],
    },
    {
      title: "Animation & Modération de Conférences",
      description: "Animez vos événements et conférences avec professionnalisme et dynamisme.",
      features: [
        "Techniques d'animation",
        "Gestion du timing et du rythme",
        "Modération de débats",
        "Interaction avec les participants",
      ],
    },
    {
      title: "Ateliers & Masterclass",
      description: "Sessions intensives pour développer des compétences spécifiques en communication et arts oratoires.",
      features: [
        "Formats courts et intensifs",
        "Pratique intensive et feedback",
        "Apprentissage par l'expérience",
        "Petit groupe pour suivi personnalisé",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            IAO - Institut des Arts Oratoires
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Spécialiste de la prise de parole en public, du storytelling et de l'animation avec techniques théâtrales. Développez votre présence et votre impact.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos programmes
            </h2>
            <p className="text-lg text-muted-foreground">
              Formations spécialisées pour développer votre excellence en communication et présentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {program.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-blue-600 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-32 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Notre approche unique
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Techniques théâtrales
                </h3>
                <p className="text-muted-foreground">
                  Nous utilisons des techniques théâtrales éprouvées pour développer votre présence, votre voix et votre impact émotionnel.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Pratique intensive
                </h3>
                <p className="text-muted-foreground">
                  Beaucoup de pratique et de feedback constructif pour progresser rapidement et gagner en confiance.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Authenticité et présence
                </h3>
                <p className="text-muted-foreground">
                  Nous vous aidons à développer votre authenticité et votre présence naturelle plutôt que de vous transformer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pour qui ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Managers & Dirigeants
              </h3>
              <p className="text-muted-foreground">
                Améliorer votre leadership, votre communication et votre capacité à inspirer votre équipe.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Équipes Corporate
              </h3>
              <p className="text-muted-foreground">
                Développer vos compétences de communication et de présentation en groupe.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Indépendants & Entrepreneurs
              </h3>
              <p className="text-muted-foreground">
                Maîtriser votre pitch, vos présentations commerciales et votre présence publique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Développez votre excellence en communication
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos formations et maîtrisez l'art de la prise de parole impactante.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
              Nous contacter
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
