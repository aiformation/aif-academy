import { Link } from "wouter";
import { Linkedin, Instagram } from "lucide-react";

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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
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

          {/* Social Media Links */}
          <div className="border-t border-gray-700 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AIF Social */}
              <div>
                <h4 className="font-semibold text-white mb-3">AIF - LinkedIn</h4>
                <a href="https://www.linkedin.com/company/academie-internationale-formation-cred-morocco/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                  <Linkedin size={18} />
                  Suivre sur LinkedIn
                </a>
              </div>

              {/* IAO Social */}
              <div>
                <h4 className="font-semibold text-white mb-3">IAO - Réseaux</h4>
                <div className="space-y-2">
                  <a href="https://www.linkedin.com/company/institut-des-arts-oratoires/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/institut_arts_oratoires/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                    <Instagram size={18} />
                    Instagram
                  </a>
                </div>
              </div>

              {/* CrEd Social */}
              <div>
                <h4 className="font-semibold text-white mb-3">CrEd - Réseaux</h4>
                <div className="space-y-2">
                  <a href="https://www.linkedin.com/company/credinternational/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/credmorocco/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors">
                    <Instagram size={18} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
