"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-white z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(211,175,55,0.15),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-50" />

                {/* Faded Gallery Sides */}
                {/* Left Column */}
                <div
                    className="flex absolute inset-y-0 left-0 w-1/3 md:w-1/4 max-w-[300px] flex-col gap-4 p-4 opacity-25 z-0 overflow-visible pointer-events-none"
                    style={{ maskImage: 'linear-gradient(to right, black, transparent)' }}
                >
                    {[1, 3, 5, 11].map((n, i) => (
                        <motion.div
                            key={`left-${i}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg rotate-[-2deg]"
                        >
                            <img src={`/photos/photo (${n}).jpg`} className="w-full h-full object-cover" alt="" />
                        </motion.div>
                    ))}
                </div>

                {/* Right Column */}
                <div
                    className="flex absolute inset-y-0 right-0 w-1/3 md:w-1/4 max-w-[300px] flex-col gap-4 p-4 opacity-25 z-0 overflow-visible pointer-events-none"
                    style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}
                >
                    {[2, 4, 6, 12].map((n, i) => (
                        <motion.div
                            key={`right-${i}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg rotate-[2deg]"
                        >
                            <img src={`/photos/photo (${n}).jpg`} className="w-full h-full object-cover" alt="" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-gold-400/20 blur-2xl rounded-full" />
                    <img
                        src="/mandy_memoji.png"
                        alt="Mandy Memoji"
                        className="relative w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]"
                >
                    Votre Guide vers<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-500 via-gold-600 to-gold-950">
                        un voyage authentique!
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-light"
                >
                    Française mariée dans une famille kabyle, je brise les stéréotypes.
                    Découvrez mes guides et conseils pour un voyage authentique.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Link
                        href="#guide"
                        className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center gap-2 shadow-xl hover:shadow-2xl"
                    >
                        Obtenir le Guide (7€)
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link href="#about" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center gap-2 backdrop-blur-md group">
                        <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-gold-500" />
                        Découvrir l'histoire
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
