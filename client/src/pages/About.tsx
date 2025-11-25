import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                À propos de l'Académie Internationale de Formation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Découvrez notre histoire, nos valeurs et notre engagement envers l'excellence en formation professionnelle et développement personnel.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
                  Nous contacter
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <img src="/aif-team-building.jpg" alt="AIF Team" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Notre histoire
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                L'Académie Internationale de Formation a été créée avec une mission claire : offrir des formations de qualité qui transforment les individus et les organisations.
              </p>
              <p>
                Depuis nos débuts, nous avons développé trois univers spécialisés, chacun répondant à des besoins spécifiques en matière de développement professionnel et personnel.
              </p>
              <p>
                Aujourd'hui, nous accompagnons des centaines de professionnels, d'équipes et d'organisations dans leur transformation et leur croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Nos valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à offrir des formations de la plus haute qualité, avec des formateurs expérimentés et des contenus actualisés.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-foreground mb-4">Authenticité</h3>
              <p className="text-muted-foreground">
                Nous croyons en l'authenticité et en l'apprentissage véritable. Nos formations sont conçues pour développer les vraies compétences et la confiance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-foreground mb-4">Bienveillance</h3>
              <p className="text-muted-foreground">
                Nous créons des environnements d'apprentissage bienveillants et inclusifs où chacun peut progresser à son rythme.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-foreground mb-4">Impact</h3>
              <p className="text-muted-foreground">
                Nous mesurons notre succès par l'impact réel de nos formations sur les individus, les équipes et les organisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Three Brands */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Nos trois univers
          </h2>

          <div className="space-y-12">
            {/* AIF */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  AIF - Académie Internationale de Formation
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Notre entité mère, spécialisée dans les formations Corporate. Nous accompagnons les entreprises et les leaders dans leur développement professionnel.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Formations en leadership, communication, intelligence émotionnelle, cohésion d'équipe et coaching individuel.
                </p>
                <Link href="/aif">
                  <a className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all gap-1">
                    En savoir plus
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
              <div className="flex-shrink-0 w-full md:w-40">
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <img src="/logo-aif.png" alt="AIF Logo" className="h-20 w-auto mx-auto" />
                </div>
              </div>
            </div>

            {/* IAO */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  IAO - Institut des Arts Oratoires
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Spécialiste de la prise de parole en public, du storytelling et de l'animation avec techniques théâtrales.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nous aidons les managers, dirigeants et professionnels à développer leur présence et leur impact à travers la communication authentique.
                </p>
                <Link href="/iao">
                  <a className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all gap-1">
                    En savoir plus
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
              <div className="flex-shrink-0 w-full md:w-40">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <img src="/logo-iao.png" alt="IAO Logo" className="h-20 w-auto mx-auto" />
                </div>
              </div>
            </div>

            {/* CrEd */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  CrEd - Creative Education International
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Ateliers de théâtre créatifs pour enfants, adolescents et adultes. Nous croyons au pouvoir de la créativité pour le développement personnel.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  En développement international avec un modèle de franchise, CrEd offre des opportunités pour les entrepreneurs passionnés par l'éducation créative.
                </p>
                <Link href="/cred">
                  <a className="inline-flex items-center text-red-500 font-semibold hover:gap-2 transition-all gap-1">
                    En savoir plus
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
              <div className="flex-shrink-0 w-full md:w-40">
                <div className="bg-red-50 rounded-xl p-6 text-center">
                  <img src="/logo-cred.png" alt="CrEd Logo" className="h-20 w-auto mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Notre engagement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">100%</div>
              <p className="text-gray-300">
                Engagement envers la qualité et la satisfaction de nos participants.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">+500</div>
              <p className="text-gray-300">
                Professionnels formés et accompagnés chaque année.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">3</div>
              <p className="text-gray-300">
                Univers spécialisés pour répondre à tous les besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à rejoindre notre communauté ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
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
