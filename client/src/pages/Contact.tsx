import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "aif",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    { value: "aif", label: "AIF - Formation Corporate" },
    { value: "iao", label: "IAO - Prise de parole & Communication" },
    { value: "cred-enfants", label: "CrEd - Ateliers enfants/ados" },
    { value: "cred-facilitateur", label: "CrEd - Formation facilitateur" },
    { value: "cred-franchise", label: "CrEd - Opportunité franchise" },
    { value: "autre", label: "Autre demande" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "aif",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nous contacter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Vous avez une question ou souhaitez en savoir plus sur nos formations ? Contactez-nous, nous vous répondrons rapidement.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Informations de contact
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent">
                      <Phone className="text-accent-foreground" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Téléphone
                    </h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+33123456789" className="hover:text-accent transition-colors">
                        +33 (0) 1 23 45 67 89
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent">
                      <Mail className="text-accent-foreground" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:contact@aif-academy.com" className="hover:text-accent transition-colors">
                        contact@aif-academy.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent">
                      <MapPin className="text-accent-foreground" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      123 Avenue de la Formation<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-12 p-6 bg-secondary rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Temps de réponse :</span>
                  <br />
                  Nous répondons à toutes les demandes dans les 24 heures.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Envoyez-nous un message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      Merci pour votre message !
                    </h3>
                    <p className="text-green-700">
                      Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white text-foreground"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white text-foreground"
                        placeholder="jean@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white text-foreground"
                        placeholder="+33 (0) 1 23 45 67 89"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Sujet de votre demande *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white text-foreground"
                      >
                        {subjects.map((subj) => (
                          <option key={subj.value} value={subj.value}>
                            {subj.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent bg-white text-foreground resize-none"
                        placeholder="Décrivez votre demande..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Envoyer le message
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Champs obligatoires
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-accent">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Quel est le délai de réponse ?
              </h3>
              <p className="text-muted-foreground">
                Nous nous engageons à répondre à toutes les demandes dans les 24 heures ouvrables.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Proposez-vous des formations en ligne ?
              </h3>
              <p className="text-muted-foreground">
                Oui, nous proposons des formations en présentiel et en ligne. Contactez-nous pour connaître les options disponibles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Quels sont les tarifs ?
              </h3>
              <p className="text-muted-foreground">
                Les tarifs varient selon le type de formation et le nombre de participants. Nous vous proposerons un devis personnalisé.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-accent">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Comment fonctionne le programme de franchise CrEd ?
              </h3>
              <p className="text-muted-foreground">
                Contactez-nous pour recevoir un dossier complet sur les opportunités de franchise CrEd.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
