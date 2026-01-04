"use client";

import { motion } from "framer-motion";
import {
    InstagramLogo,
    TiktokLogo,
    Eye,
    Heart,
    Camera,
    Airplane,
    Sparkle,
    Flower,
    ForkKnife,
    EnvelopeSimple,
    ArrowRight,
    CheckCircle,
    Play,
    ChatCenteredText,
    MagicWand,
    Fingerprint,
    PaperPlaneTilt
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { label: "Instagram", value: "273K", icon: InstagramLogo, gradient: "from-pink-500 to-rose-500" },
    { label: "TikTok", value: "713K", icon: TiktokLogo, gradient: "from-gray-800 to-gray-900" },
    { label: "Top Vues IG", value: "4.7M", icon: Eye, gradient: "from-amber-400 to-orange-500" },
    { label: "Top Likes", value: "216K", icon: Heart, gradient: "from-red-400 to-pink-500" },
];

const collaborations = [
    { sector: "Spot Publicitaire", brands: ["Air Algérie", "Topsil", "Babylone"], icon: Camera },
    { sector: "Agence de Voyages", brands: ["Riwaya Travel", "Jil Voyage", "Atelier du Voyage", "Bchachou Travel", "Opale Voyage"], icon: Airplane },
    { sector: "Shooting & Mode", brands: ["Tiffanie Draria", "Ahlem Location", "Yara Starling", "Negafa du Palais"], icon: Sparkle },
    { sector: "Skincare & Beauté", brands: ["Skin Bloom", "Biotanys", "Floré DZ", "Lamsbeauty"], icon: Flower },
    { sector: "Gastronomie", brands: ["Le Carré", "La Table de Yemma", "Signature"], icon: ForkKnife },
    { sector: "Autres Secteurs", brands: ["La Plume d'Or", "Ali Fellidja", "Djaffar Gacem"], icon: Sparkle },
];

const processSteps = [
    { number: "01", title: "Échange", desc: "Comprendre vos objectifs et définir ensemble la stratégie.", icon: ChatCenteredText },
    { number: "02", title: "Création", desc: "Contenu authentique qui résonne avec ma communauté.", icon: MagicWand },
    { number: "03", title: "Validation", desc: "Je vous soumets le contenu pour approbation.", icon: Fingerprint },
    { number: "04", title: "Publication", desc: "Diffusion et analyse des performances.", icon: PaperPlaneTilt },
];

const packages = [
    {
        name: "Starter",
        price: "900",
        features: ["1 Story Instagram", "1 Reel Instagram", "1 Vidéo TikTok"],
        popular: false
    },
    {
        name: "Business",
        price: "1,500",
        features: ["2 Stories Instagram", "1 Reel Instagram", "2 Vidéos TikTok"],
        popular: true
    },
    {
        name: "Premium",
        price: "2,900",
        features: ["3 Stories Instagram", "2 Reels Instagram", "1 Post IG", "3 Vidéos TikTok", "1 Post TikTok"],
        popular: false
    }
];

const unitPrices = [
    { name: "Réel Instagram", price: "600€", icon: InstagramLogo },
    { name: "Vidéo TikTok", price: "600€", icon: TiktokLogo },
    { name: "Shooting Photo", price: "400€/jour", icon: Camera },
    { name: "Spot Publicitaire", price: "1,500€", icon: Play },
];

const photos = [
    "/photos/photo (1).webp",
    "/photos/photo (2).webp",
    "/photos/photo (4).webp",
    "/photos/photo (5).webp",
    "/photos/photo (6).webp",
    "/photos/photo (7).webp",
    "/photos/photo (8).webp",
    "/photos/photo (9).webp",
    "/photos/photo (10).webp",
    "/photos/photo (11).webp",
];

export default function MediaKit() {
    return (
        <main className="min-h-screen bg-[#fbfbfd]">
            {/* Navigation - Apple Style */}
            <nav className="fixed top-0 w-full z-50 bg-[#fbfbfd]/80 backdrop-blur-xl backdrop-saturate-150">
                <div className="max-w-[980px] mx-auto px-6 h-12 flex justify-between items-center">
                    <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                        ← Retour
                    </Link>
                    <Link
                        href="mailto:promandyyy@gmail.com"
                        className="text-sm font-semibold text-white bg-gray-900 px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Collaborer
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-28 pb-20 overflow-hidden">
                <div className="max-w-[980px] mx-auto px-6">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8"
                        >
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                                <Image
                                    src="/mandy_memoji.webp"
                                    alt="Mandy SDA"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gold-600 font-medium text-sm tracking-wide uppercase mb-4"
                        >
                            Media Kit 2025
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 tracking-[-0.06em] mb-6"
                        >
                            Mandy SDA
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-500 font-normal max-w-2xl mx-auto mb-12"
                        >
                            Créatrice de contenu lifestyle && voyages.
                            <br className="hidden md:block" />
                            <span className="text-gray-900">+980K abonnés</span> sur les réseaux.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <Link
                                href="mailto:promandyyy@gmail.com"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105"
                            >
                                <EnvelopeSimple weight="bold" className="w-5 h-5" />
                                Me contacter
                            </Link>
                            <Link
                                href="https://instagram.com/mandy_sda"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium border border-gray-200 hover:bg-gray-50 transition-all hover:scale-105"
                            >
                                <InstagramLogo weight="bold" className="w-5 h-5" />
                                Instagram
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Photo Slider - Marquee Style */}
            <section className="py-20 overflow-hidden relative">
                {/* Side Fades - Apple Style */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#fbfbfd] via-[#fbfbfd]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#fbfbfd] via-[#fbfbfd]/80 to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <div className="flex animate-scroll-photos whitespace-nowrap gap-6 py-4">
                        {[...Array(2)].map((_, idx) => (
                            <div key={idx} className="flex gap-6">
                                {photos.map((photo, i) => (
                                    <div
                                        key={i}
                                        className="w-[300px] md:w-[400px] aspect-[3/4] rounded-[2.5rem] overflow-hidden relative group flex-shrink-0 shadow-2xl shadow-gray-200/50"
                                    >
                                        <Image
                                            src={photo}
                                            alt={`Photo ${i + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section - Apple Style */}
            <section className="py-32 bg-black text-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <p className="text-gold-400 font-medium text-sm tracking-widest uppercase mb-4">
                            Audience
                        </p>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.06em]">
                            Des chiffres qui<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">
                                impressionnent.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Big Stats Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Instagram Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 rounded-[2.5rem] p-10 overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <InstagramLogo weight="fill" className="w-12 h-12 mb-6 opacity-90" />
                                <div className="text-7xl md:text-8xl font-black mb-2 tracking-[-0.07em]">273K</div>
                                <p className="text-xl font-medium text-white/80">Followers Instagram</p>
                                <div className="mt-8 flex gap-6">
                                    <div>
                                        <div className="text-3xl font-bold">4.7M</div>
                                        <p className="text-sm text-white/60">Top Vues</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">133K</div>
                                        <p className="text-sm text-white/60">Top Likes</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* TikTok Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-10 overflow-hidden border border-white/10 group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                            <div className="relative z-10">
                                <TiktokLogo weight="fill" className="w-12 h-12 mb-6 opacity-90" />
                                <div className="text-7xl md:text-8xl font-black mb-2 tracking-[-0.07em]">713K</div>
                                <p className="text-xl font-medium text-white/80">Followers TikTok</p>
                                <div className="mt-8 flex gap-6">
                                    <div>
                                        <div className="text-3xl font-bold">3.3M</div>
                                        <p className="text-sm text-white/60">Top Vues</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">216K</div>
                                        <p className="text-sm text-white/60">Top Likes</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Total Reach Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center py-12 border-t border-white/10"
                    >
                        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Portée Totale</p>
                        <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            +980K
                        </div>
                        <p className="text-xl text-gray-400 mt-4">abonnés cumulés</p>
                    </motion.div>
                </div>
            </section>

            {/* About Section - Enhanced */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative">
                                <Image
                                    src="/photos/photo (5).webp"
                                    alt="Mandy SDA"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -right-6 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
                            >
                                <div className="text-4xl font-black text-gray-900">2+</div>
                                <p className="text-sm text-gray-500 font-medium">ans d&apos;expérience</p>
                            </motion.div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <p className="text-gold-600 font-semibold text-sm tracking-widest uppercase mb-4">
                                À propos
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.06em] mb-8 leading-tight">
                                Créatrice de contenu passionnée par l&apos;authenticité.
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                                <p>
                                    Passionnée par les voyages et les rencontres, je capture et partage des moments authentiques avec ma communauté depuis plus de 2 ans.
                                </p>
                                <p>
                                    À travers mes contenus, je mets en avant des expériences uniques, des produits et des services avec <span className="text-gray-900 font-semibold">sincérité et créativité</span>.
                                </p>
                                <p>
                                    Mon objectif : créer des collaborations engageantes qui mettent véritablement en valeur chaque projet.
                                </p>
                            </div>

                            {/* Specializations */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {["Tourisme", "Lifestyle", "Mode", "Beauté", "Gastronomie"].map((tag, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.05 }}
                                        className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gold-50 hover:text-gold-700 transition-colors cursor-default"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Quick Stats */}
                            <div className="flex gap-10 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">+40</div>
                                    <p className="text-sm text-gray-500">Marques partenaires</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">+8M</div>
                                    <p className="text-sm text-gray-500">Vues cumulées</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">100%</div>
                                    <p className="text-sm text-gray-500">Authenticité</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Collaborations Section - Premium Editorial */}
            <section className="py-32 bg-gray-900 border-y border-white/5 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 mb-20 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <p className="text-gold-400 font-medium text-sm tracking-[0.3em] uppercase mb-4">Portefeuille</p>
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.08em] leading-none mb-6">
                                Collaborations
                            </h2>
                            <p className="text-xl text-gray-400 max-w-xl">
                                Une expertise multi-sectorielle au service de marques exigeantes. Plus de 40 partenaires nous ont déjà fait confiance.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex -space-x-4 mb-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-gold-500/10 flex items-center justify-center">
                                            <Sparkle weight="fill" className="text-gold-500 w-5 h-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest text-right italic">+40 Marques</p>
                        </div>
                    </div>
                </div>

                {/* Infinite Marquee of Brands */}
                <div className="relative mb-24 py-10 border-y border-white/5 bg-white/5 backdrop-blur-3xl rotate-[-1deg] scale-105">
                    <div className="flex overflow-hidden group">
                        <div className="flex animate-scroll whitespace-nowrap py-4">
                            {[...Array(2)].map((_, idx) => (
                                <div key={idx} className="flex items-center gap-16 px-8">
                                    {["Air Algérie", "Riwaya Travel", "Jil Voyage", "Tiffanie Draria", "Skin Bloom", "Le Carré", "La Table de Yemma", "Bchachou Travel", "Signature"].map((brand, i) => (
                                        <span key={i} className="text-4xl md:text-6xl font-black text-white/20 tracking-[-0.07em] hover:text-gold-500/50 transition-colors cursor-default select-none uppercase">
                                            {brand}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborations.map((collab, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
                                <div className="relative bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 h-full backdrop-blur-sm">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold-500/20 group-hover:rotate-6 transition-all duration-500">
                                        <collab.icon weight="fill" className="w-7 h-7 text-white group-hover:text-gold-400 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6 tracking-[-0.04em] flex items-center gap-2">
                                        {collab.sector}
                                    </h3>
                                    <ul className="space-y-4">
                                        {collab.brands.map((brand, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                                                <span className="text-lg font-medium tracking-[-0.04em] leading-none">{brand}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                    .animate-scroll-photos {
                        animation: scroll 80s linear infinite;
                    }
                    .animate-scroll:hover, .animate-scroll-photos:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* Process - Editorial Style */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <p className="text-gold-600 font-semibold text-sm tracking-[0.3em] uppercase mb-4">Methodologie</p>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-[-0.08em] mb-6">
                            Le Processus
                        </h2>
                        <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-gray-100" />

                        <div className="grid md:grid-cols-4 gap-12">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative group text-center md:text-left"
                                >
                                    {/* Circle with Icon */}
                                    <div className="relative mb-10 inline-block md:block">
                                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-[2rem] bg-gray-50 flex items-center justify-center text-3xl font-bold text-gray-900 border border-gray-100 group-hover:bg-gold-50 group-hover:border-gold-200 group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500 shadow-sm relative z-10">
                                            <step.icon weight="duotone" className="w-10 h-10 text-gray-400 group-hover:text-gold-600 transition-colors" />
                                        </div>
                                        {/* Step number badge */}
                                        <div className="absolute -top-3 -right-3 md:right-auto md:-left-3 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-lg z-20">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-[-0.05em] group-hover:text-gold-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed max-w-xs mx-auto md:mx-0">
                                        {step.desc}
                                    </p>

                                    {/* Progress indicator dot for desktop */}
                                    <div className="hidden md:block absolute top-[41px] left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 w-2.5 h-2.5 rounded-full bg-gray-200 ring-4 ring-white group-hover:bg-gold-500 transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom callout */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-24 p-8 rounded-3xl bg-gold-50/50 border border-gold-100/50 text-center"
                    >
                        <p className="text-gold-800 font-medium">
                            <span className="font-bold">Objectif :</span> Assurer une fluidité totale et des résultats mesurables pour chaque campagne.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-[#fbfbfd]">
                <div className="max-w-[980px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.06em] mb-4">
                            Tarifs
                        </h2>
                        <p className="text-xl text-gray-500">
                            Des packages adaptés à chaque besoin.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-3xl p-8 relative ${pkg.popular
                                    ? "bg-gray-900 text-white shadow-2xl ring-4 ring-gold-500/20"
                                    : "bg-white border border-gray-200"
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full tracking-wide">
                                        Populaire
                                    </div>
                                )}
                                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                                    {pkg.name}
                                </h3>
                                <div className="mb-8">
                                    <span className={`text-5xl font-bold ${pkg.popular ? "text-gold-400" : "text-gray-900"}`}>
                                        {pkg.price}
                                    </span>
                                    <span className={pkg.popular ? "text-gray-400" : "text-gray-500"}>€</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <CheckCircle
                                                weight="fill"
                                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-gold-400" : "text-gold-500"
                                                    }`}
                                            />
                                            <span className={pkg.popular ? "text-gray-300" : "text-gray-600"}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="mailto:promandyyy@gmail.com"
                                    className={`block w-full py-4 rounded-full text-center font-semibold transition-all hover:scale-105 ${pkg.popular
                                        ? "bg-gold-500 text-white hover:bg-gold-600"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                        }`}
                                >
                                    Choisir
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Unit Prices - Refined UI */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24"
                    >
                        <div className="text-center mb-12">
                            <span className="px-4 py-1.5 bg-gold-50 text-gold-700 text-xs font-bold uppercase rounded-full tracking-widest border border-gold-100 mb-4 inline-block">
                                Flexibilité
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900 tracking-[-0.05em]">À la carte</h3>
                            <p className="text-gray-500 mt-2">Choisissez précisément les services dont vous avez besoin.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {unitPrices.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-gray-100 p-6 rounded-[2rem] flex flex-col items-center text-center group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                                        <item.icon weight="duotone" className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">{item.name}</p>
                                    <p className="text-2xl font-bold text-gray-900">{item.price}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white">
                <div className="max-w-[680px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-[-0.06em] mb-8">
                            Prêt à collaborer ?
                        </h2>
                        <p className="text-xl text-gray-500 mb-12">
                            Discutons de votre projet et créons ensemble quelque chose d&apos;exceptionnel.
                        </p>
                        <Link
                            href="mailto:promandyyy@gmail.com"
                            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-gray-800 transition-all hover:scale-105 group"
                        >
                            <EnvelopeSimple weight="bold" className="w-6 h-6" />
                            promandyyy@gmail.com
                            <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="mt-8 text-gray-400 text-sm uppercase tracking-widest">
                            Au plaisir de collaborer ensemble
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-100">
                <div className="max-w-[980px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2025 Mandy SDA. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="https://instagram.com/mandy_sda" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <InstagramLogo weight="fill" className="w-5 h-5" />
                        </Link>
                        <Link href="https://tiktok.com/@mandy_sda" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                            <TiktokLogo weight="fill" className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
