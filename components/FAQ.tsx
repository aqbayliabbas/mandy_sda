"use client";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Sous quel format est le guide ?",
        a: "Le guide est un ebook interactif au format PDF, compatible avec tous les smartphones, tablettes et ordinateurs. Vous recevez le lien de téléchargement immédiatement après l'achat."
    },
    {
        q: "Est-ce sécurisé de voyager en Algérie ?",
        a: "Absolument. L'Algérie est un pays très accueillant. Le guide inclut toute une section dédiée à la sécurité, aux coutumes locales et aux bonnes pratiques pour voyager l'esprit tranquille."
    },
    {
        q: "Le guide est-il mis à jour ?",
        a: "Oui ! En achetant le guide maintenant, vous bénéficiez des futures mises à jour gratuitement. Les nouvelles adresses et conseils sont ajoutés régulièrement."
    },
    {
        q: "Puis-je payer autrement que par carte ?",
        a: "Nous acceptons les paiements sécurisés par Carte Bancaire, Apple Pay et Google Pay. Tout est géré par une plateforme de paiement certifiée."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions Fréquentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={false}
                            className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-gray-900">{faq.q}</span>
                                <span className="p-2 bg-gray-100 rounded-full text-gray-500">
                                    {openIndex === i ? <Minus className="w-4 h-4 text-gold-600" /> : <Plus className="w-4 h-4 text-gray-400" />}
                                </span>
                            </button>

                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: openIndex === i ? "auto" : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                    {faq.a}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
