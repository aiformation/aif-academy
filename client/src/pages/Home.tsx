import { Link } from "wouter";
import { ArrowRight, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transformez vos compétences, développez votre potentiel
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'Académie Internationale de Formation vous propose des formations professionnelles de qualité, adaptées à vos besoins et objectifs. Découvrez nos trois univers spécialisés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
                    Commencer maintenant
                    <ArrowRight size={20} />
                  </a>
                </Link>
                <Link href="/about">
                  <a className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-secondary transition-colors">
                    En savoir plus
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/hero-formation.jpg" alt="Formation professionnelle" className="w-full h-auto rounded-lg shadow-lg" style={{width: '800px', height: '400px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Three Brands Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos trois univers de formation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque marque offre une spécialisation unique pour répondre à des besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AIF Card */}
            <div className="bg-white border-2 border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/aif-corporate.jpg" alt="AIF Corporate" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Users className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">AIF</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Académie Internationale de Formation
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Formations Corporate spécialisées en leadership, communication, intelligence émotionnelle et cohésion d'équipe.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Leadership & Communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Intelligence Émotionnelle (EQ-i 2.0)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Cohésion d'équipe & Coaching</span>
                  </li>
                </ul>
                <Link href="/aif">
                  <a className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all gap-1">
                    Découvrir AIF
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
            </div>

            {/* IAO Card */}
            <div className="bg-white border-2 border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/iao-public-speaking.jpg" alt="IAO Public Speaking" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <img src="/logo-iao.png" alt="IAO Logo" className="h-12 w-auto" />
                  <h3 className="text-2xl font-bold text-foreground">IAO</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Institut des Arts Oratoires
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Spécialiste de la prise de parole en public, du storytelling et de l'animation avec techniques théâtrales.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Prise de parole en public</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Storytelling professionnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Animation & Modération</span>
                  </li>
                </ul>
                <Link href="/iao">
                  <a className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all gap-1">
                    Découvrir IAO
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
            </div>

            {/* CrEd Card */}
            <div className="bg-white border-2 border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img src="/cred-theatre-workshop.jpg" alt="CrEd Theatre Workshop" className="w-full h-48 object-cover" />
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <img src="/logo-cred.png" alt="CrEd Logo" className="h-12 w-auto" />
                  <h3 className="text-2xl font-bold text-foreground">CrEd</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Creative Education International
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Ateliers de théâtre créatifs pour enfants et adolescents, formation de facilitateurs et développement de franchises.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Ateliers enfants & ados (3-17 ans)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Formation facilitateur théâtre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Développement franchise</span>
                  </li>
                </ul>
                <Link href="/cred">
                  <a className="inline-flex items-center text-red-500 font-semibold hover:gap-2 transition-all gap-1">
                    Découvrir CrEd
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer vos compétences ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins en formation et trouver la solution adaptée.
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
