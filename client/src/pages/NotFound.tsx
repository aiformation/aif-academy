import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page non trouvée
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity gap-2">
                Retour à l'accueil
                <ArrowRight size={20} />
              </a>
            </Link>
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-secondary transition-colors">
                Nous contacter
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
