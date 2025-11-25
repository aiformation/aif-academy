import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Académie Internationale</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Formations professionnelles et développement personnel pour les entreprises et individus.
            </p>
          </div>

          {/* AIF */}
          <div>
            <h4 className="font-semibold mb-4">AIF Corporate</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/aif">
                  <a className="hover:text-accent transition-colors">Formations</a>
                </Link>
              </li>
              <li>
                <Link href="/aif">
                  <a className="hover:text-accent transition-colors">Leadership</a>
                </Link>
              </li>
              <li>
                <Link href="/aif">
                  <a className="hover:text-accent transition-colors">Communication</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* IAO */}
          <div>
            <h4 className="font-semibold mb-4">IAO</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/iao">
                  <a className="hover:text-accent transition-colors">Prise de parole</a>
                </Link>
              </li>
              <li>
                <Link href="/iao">
                  <a className="hover:text-accent transition-colors">Storytelling</a>
                </Link>
              </li>
              <li>
                <Link href="/iao">
                  <a className="hover:text-accent transition-colors">Masterclass</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* CrEd */}
          <div>
            <h4 className="font-semibold mb-4">CrEd</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/cred">
                  <a className="hover:text-accent transition-colors">Ateliers enfants</a>
                </Link>
              </li>
              <li>
                <Link href="/cred">
                  <a className="hover:text-accent transition-colors">Formation facilitateur</a>
                </Link>
              </li>
              <li>
                <Link href="/cred">
                  <a className="hover:text-accent transition-colors">Franchise</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 Académie Internationale de Formation. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/contact">
                <a className="hover:text-accent transition-colors">Contact</a>
              </Link>
              <a href="#" className="hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
