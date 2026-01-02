"use client";
import { motion } from "framer-motion";
import { Map, Smartphone, Star, Coffee, ShieldCheck, Camera } from "lucide-react";

const features = [
    {
        title: "8 Villes Incontournables",
        desc: "Alger, Oran, Constantine, Béjaïa, Ghardaïa, Djanet, Timimoun, Tlemcen. Tout y est.",
        icon: Map,
        col: "md:col-span-2 bg-gradient-to-br from-gold-400 to-gold-500 text-white"
    },
    {
        title: "Format Mobile",
        desc: "PDF interactif toujours dans votre poche.",
        icon: Smartphone,
        col: "md:col-span-1 bg-gray-50 text-gray-900 border border-gray-100"
    },
    {
        title: "Top Adresses",
        desc: "Restaurants & Hôtels testés.",
        icon: Coffee,
        col: "md:col-span-1 bg-gray-50 text-gray-900 border border-gray-100"
    },
    {
        title: "Guide Pratique",
        desc: "Visas, Transports, Sécurité, Budget.",
        icon: ShieldCheck,
        col: "md:col-span-2 bg-gray-50 text-gray-900 border border-gray-100"
    }
];

export default function Product() {
    return (
        <section className="py-32 bg-white text-gray-900 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Un contenu riche.</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        J'ai rassemblé toutes les informations dispersées sur internet en un seul document clair, précis et beau.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-3xl transition-colors ${f.col} relative overflow-hidden group shadow-lg hover:shadow-xl`}
                        >


                            <f.icon className={`w-8 h-8 mb-6 ${f.col.includes('text-white') ? 'text-white' : 'text-gold-500'}`} />
                            <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                            <p className={`${f.col.includes('text-white') ? 'text-white/90' : 'text-gray-500'} leading-relaxed`}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
