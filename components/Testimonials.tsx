"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sophie M.",
        role: "Voyageuse Solo",
        text: "Je n'osais pas partir seule en Algérie. Le guide de Mandy m'a donné toute la confiance nécessaire. Un voyage inoubliable !",
        location: "Paris"
    },
    {
        name: "Karim & Lea",
        role: "Couple",
        text: "Des adresses qu'on ne trouve nulle part ailleurs. Le restaurant à Oran était incroyable. Merci pour ce travail.",
        location: "Lyon"
    },
    {
        name: "Thomas B.",
        role: "Photographe",
        text: "Les spots photos indiqués sont dingues. Djanet est vraiment une autre planète. 7€ c'est donné pour la qualité.",
        location: "Bordeaux"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ils ont sauté le pas.</h2>
                    <p className="text-gray-500">Déjà plus de 1500 voyageurs accompagnés.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all shadow-sm"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-sm font-bold text-white">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-gray-900 font-medium">{t.name}</div>
                                    <div className="text-xs text-gray-400">{t.role} • {t.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
