"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Plus qu'un guide, <br />
                            <span className="text-gray-400">une déclaration d'amour à l'Algérie.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                            <p>
                                Tout a commencé par une rencontre. Française tombée amoureuse de la Kabylie,
                                j'ai découvert une Algérie loin des clichés habituels.
                            </p>
                            <p>
                                Une terre d'hospitalité sans limite, de paysages à couper le souffle et d'une richesse culturelle immense.
                                Mais je sais qu'il est difficile de s'y retrouver quand on ne connait pas.
                            </p>
                            <p>
                                Aujourd'hui, suivie par plus de <span className="text-gray-900 font-semibold">281K personnes</span>,
                                j'ai condensé des années de découvertes pour vous offrir le voyage que vous méritez.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                            {[
                                "Conseils 100% vécus",
                                "Adresses locales secrètes",
                                "Astuces sécurité & culture",
                                "Itinéraires optimisés"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 shadow-2xl"
                    >
                        <video
                            src="/mandyy.mp4"
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                        />
                        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
