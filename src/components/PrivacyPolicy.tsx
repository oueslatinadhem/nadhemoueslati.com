import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 flex items-center gap-4">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-8">
            <div className="flex flex-wrap items-start gap-6 mb-8">
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-32 h-32 flex items-center justify-center flex-shrink-0 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src="/nadhemconfidentialite.png"
                  alt="Confidentialité"
                  className="w-full h-full object-contain translate-y-4"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <h1 className="text-4xl md:text-5xl text-white flex-grow">Politique de Confidentialité</h1>
            </div>

            <div className="prose prose-invert max-w-none">
              <p>
                Chez Nadhem Oueslati, la protection de vos données personnelles est une priorité. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et 
                protégeons vos informations lorsque vous utilisez notre site web et nos services.
              </p>

              <h2>Collecte des Données</h2>
              <p>
                Nous collectons uniquement les données que vous nous fournissez volontairement 
                via notre formulaire de contact :
              </p>
              <ul>
                <li>Nom</li>
                <li>Adresse email</li>
                <li>Contenu de votre message</li>
              </ul>

              <h2>Utilisation des Données</h2>
              <p>
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul>
                <li>Répondre à vos demandes de contact</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
                <li>Vous tenir informé(e) de nos services (uniquement avec votre consentement)</li>
              </ul>

              <h2>Protection des Données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
                contre tout accès, modification, divulgation ou destruction non autorisés.
              </p>

              <h2>Durée de Conservation</h2>
              <p>
                Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre 
                dernier contact, sauf obligation légale de conservation plus longue.
              </p>

              <h2>Vos Droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>

              <h2>Contact</h2>
              <p>
                Pour toute question concernant notre politique de confidentialité ou pour exercer 
                vos droits, vous pouvez nous contacter à l'adresse : oueslati.nadhem@gmail.com
              </p>

              <h2>Mise à Jour</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour périodiquement. La dernière 
                mise à jour date du {new Date().toLocaleDateString()}.
              </p>

              <div className="mt-8 p-6 bg-white/5 rounded-xl">
                <p className="text-sm italic">
                  Note : Et non, nous ne confions pas vos données à des pigeons voyageurs, 
                  aussi talentueux soient-ils ! 🕊️ Nous utilisons des méthodes de protection 
                  des données beaucoup plus modernes et sécurisées.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;