import { ArrowRight, CheckCircle, Users } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CrEd() {
  const offerings = [
    {
      title: "Ateliers Hebdomadaires Enfants & Ados",
      ageGroup: "3 - 17 ans",
      description: "Ateliers réguliers de théâtre pour développer la confiance, la créativité et les compétences sociales.",
      features: [
        "Groupes par tranche d'âge",
        "Apprentissage ludique du théâtre",
        "Développement de la confiance en soi",
        "Amélioration de la communication",
        "Créativité et expression",
      ],
    },
    {
      title: "Programmes en École",
      ageGroup: "Tous âges",
      description: "Intégration de nos programmes de théâtre dans les écoles, en parascolaire ou en curriculum.",
      features: [
        "Adaptation au contexte scolaire",
        "Formation des enseignants",
        "Projets de fin d'année",
        "Développement des compétences transversales",
        "Partenariat long terme",
      ],
    },
    {
      title: "Ateliers Adultes",
      ageGroup: "Adultes",
      description: "Ateliers mensuels pour adultes combinant théâtre, développement personnel et bien-être.",
      features: [
        "Théâtre et expression",
        "Développement personnel",
        "Gestion du stress",
        "Créativité et confiance",
        "Communauté bienveillante",
      ],
    },
    {
      title: "Formation Facilitateur Théâtre",
      ageGroup: "Adultes",
      description: "Formation complète pour devenir animateur/facilitateur de théâtre certifié CrEd.",
      features: [
        "Certification CrEd",
        "Pédagogie théâtrale",
        "Gestion de groupe",
        "Développement personnel du facilitateur",
        "Accompagnement et suivi",
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
                CrEd - Creative Education International
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ateliers de théâtre créatifs pour enfants, adolescents et adultes. Développement personnel par l'art et la créativité. Opportunités de franchise à l'international.
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
                  Demander une formation
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <img src="/cred-theatre-workshop.jpg" alt="CrEd Theatre" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos offres
            </h2>
            <p className="text-lg text-muted-foreground">
              Une gamme complète d'ateliers et formations pour tous les âges et tous les contextes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white border-2 border-red-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground flex-1">
                    {offering.title}
                  </h3>
                </div>
                <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                  {offering.ageGroup}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {offering.description}
                </p>
                <div className="space-y-3">
                  {offering.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-red-500 flex-shrink-0 mt-0.5"
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

      {/* Why CrEd */}
      <section className="py-20 md:py-32 bg-red-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Pourquoi choisir CrEd ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Approche ludique
              </h3>
              <p className="text-muted-foreground">
                L'apprentissage par le théâtre et la créativité rend l'éducation amusante et mémorable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Développement global
              </h3>
              <p className="text-muted-foreground">
                Confiance, communication, créativité, empathie et compétences sociales développées ensemble.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Programme standardisé
              </h3>
              <p className="text-muted-foreground">
                Curriculum international éprouvé, structuré en 3 trimestres, adaptable à chaque contexte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Opportunité de Franchise
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-12 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Développez CrEd dans votre région
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                CrEd se développe à l'international avec un modèle de master franchise. Si vous êtes passionné par l'éducation créative et l'entrepreneuriat, rejoignez notre réseau.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Avantages franchisé</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">✓</span>
                      <span className="text-foreground">Marque établie et reconnue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">✓</span>
                      <span className="text-foreground">Curriculum éprouvé et standardisé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">✓</span>
                      <span className="text-foreground">Formation et support continu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">✓</span>
                      <span className="text-foreground">Outils marketing et opérationnels</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-4">Profil recherché</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">Passion pour l'éducation et la créativité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">Expérience en gestion ou entrepreneuriat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">Capacité à recruter et former des facilitateurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">•</span>
                      <span className="text-foreground">Réseau local ou capacité de développement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Intéressé par une opportunité de franchise CrEd ?
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
                  Demander des informations franchise
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez l'aventure CrEd
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Que vous soyez parent, éducateur, ou entrepreneur, découvrez comment CrEd peut vous accompagner.
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
