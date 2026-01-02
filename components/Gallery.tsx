"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = Array.from({ length: 17 }, (_, i) => `/photos/photo (${i + 1}).webp`);

export default function Gallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden relative border-y border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

            <div className="mb-16 text-center z-20 relative">
                <h2 className="text-2xl font-bold text-gray-900 tracking-widest uppercase">Immersion Totale</h2>
            </div>

            <div className="flex flex-col gap-8 opacity-100 rotate-[-2deg] scale-110">
                {/* Row 1 */}
                <motion.div style={{ x: x1 }} className="flex gap-4 w-max">
                    {[...images, ...images].slice(0, 15).map((src, i) => (
                        <div
                            key={`row1-${i}`}
                            className="w-32 h-20 sm:w-64 sm:h-40 md:w-96 md:h-64 rounded-xl flex-shrink-0 overflow-hidden relative"
                        >
                            <Image
                                src={src}
                                alt="Algerie"
                                fill
                                sizes="(max-width: 640px) 128px, (max-width: 768px) 256px, 384px"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 */}
                <motion.div style={{ x: x2 }} className="flex gap-4 w-max">
                    {[...images, ...images].slice(15, 30).map((src, i) => (
                        <div
                            key={`row2-${i}`}
                            className="w-32 h-20 sm:w-64 sm:h-40 md:w-96 md:h-64 rounded-xl flex-shrink-0 overflow-hidden relative"
                        >
                            <Image
                                src={src}
                                alt="Algerie"
                                fill
                                sizes="(max-width: 640px) 128px, (max-width: 768px) 256px, 384px"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
