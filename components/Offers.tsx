"use client";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";

export default function Offers() {
    return (
        <section id="guide" className="py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Choisissez votre offre</h2>
                    <p className="text-gray-500">Une solution adaptée à vos besoins.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Offer 1: Guide */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="p-10 rounded-[2rem] bg-white text-gray-900 relative flex flex-col shadow-xl border border-gray-100"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-white text-sm font-semibold rounded-full shadow-lg">
                            Offre Voyageur
                        </div>
                        <h3 className="text-2xl font-bold mb-2 mt-2">Le Guide Ultime</h3>
                        <div className="text-5xl font-bold mb-6 tracking-tight text-gold-600">7€</div>
                        <p className="text-gray-500 mb-8 font-medium">Accédez à l'Algérie authentique. Tout ce qu'il faut savoir, rien de superflu.</p>

                        <ul className="space-y-4 mb-10 flex-1">
                            {["Guide PDF complet (8 villes)", "Mes adresses secrètes", "Conseils sécurité & culture", "Accès immédiat"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all transform active:scale-95 shadow-xl">
                            Acheter Maintenant
                        </button>
                    </motion.div>

                    {/* Offer 2: Collab */}
                    <motion.div
                        id="collab"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="p-10 rounded-[2rem] bg-gray-900 border border-gray-800 relative flex flex-col shadow-2xl"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-800 text-gray-300 text-sm font-semibold rounded-full border border-gray-700">
                            Professionnels
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 mt-2">Collaboration</h3>
                        <div className="text-5xl font-bold text-white mb-6 tracking-tight">Sur Devis</div>
                        <p className="text-gray-400 mb-8 font-medium">Vous êtes un hôtel, une agence ou une marque ? Travaillons ensemble.</p>

                        <ul className="space-y-4 mb-10 flex-1">
                            {["Visibilité sur mes réseaux (+281k)", "Création de contenu vidéo/photo", "Mise en avant de votre établissement", "Partenariat long terme"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5 text-gold-600" />
                            Me Contacter
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
