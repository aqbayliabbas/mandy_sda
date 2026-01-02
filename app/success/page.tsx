"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Home } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (sessionId) {
            // Ideally, you'd verify the session on your backend here
            setStatus("success");
        }
    }, [sessionId]);

    return (
        <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[2.5rem] p-12 shadow-2xl border border-gray-100 flex flex-col items-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, delay: 0.2 }}
                        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8"
                    >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>

                    <h1 className="text-4xl font-bold mb-4 tracking-tight">Merci pour votre confiance !</h1>
                    <p className="text-xl text-gray-500 mb-8 font-light">
                        Votre paiement a été validé. Vous allez recevoir "Le Guide Ultime - Algérie" par email d'ici quelques instants.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 w-full">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-bold hover:bg-gray-200 transition-all border border-gray-200"
                        >
                            <Home className="w-5 h-5" />
                            Retour à l'accueil
                        </Link>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg">
                            <Download className="w-5 h-5" />
                            Télécharger le guide
                        </button>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-gray-400 font-medium"
                >
                    Un problème ? <a href="mailto:contact@mandy-sda.com" className="text-gold-600 hover:underline">Contactez-moi</a>
                </motion.p>
            </div>
        </section>
    );
}

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-[#fcfbf9] text-gray-900">
            <Navbar />
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
                </div>
            }>
                <SuccessContent />
            </Suspense>
        </main>
    );
}

