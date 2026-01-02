"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

interface CheckoutFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CheckoutForm({ isOpen, onClose }: CheckoutFormProps) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            address: (form.elements.namedItem("address") as HTMLInputElement).value,
            postalCode: (form.elements.namedItem("postalCode") as HTMLInputElement).value,
            city: (form.elements.namedItem("city") as HTMLInputElement).value,
            country: (form.elements.namedItem("country") as HTMLSelectElement).value,
        };

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.url) {
                window.location.href = result.url;
            } else {
                console.error("No URL returned");
                setLoading(false);
            }
        } catch (error) {
            console.error("Checkout error:", error);
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101]"
                    >
                        <div className="bg-[#fcfbf9] rounded-2xl overflow-hidden shadow-2xl mx-4">
                            {/* Header */}
                            <div className="bg-[#e4d5c7] p-6 text-center relative">
                                <h3 className="text-xl font-medium text-white tracking-wide">Vos informations de contact</h3>
                                <button
                                    onClick={onClose}
                                    className="absolute top-1/2 -translate-y-1/2 right-4 text-white/80 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-8 space-y-4">
                                <div className="space-y-4">
                                    <input name="name" type="text" placeholder="Nom" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-white" />

                                    <input name="firstName" type="text" placeholder="Prénom" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-white" />

                                    <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-white" />

                                    <input name="address" type="text" placeholder="Adresse" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-white" />

                                    <input name="postalCode" type="text" placeholder="Code postal" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-white" />

                                    <input name="city" type="text" placeholder="Ville" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-white" />

                                    <div className="relative">
                                        <select name="country" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e4d5c7] focus:ring-1 focus:ring-[#e4d5c7] outline-none transition-all text-gray-700 bg-white appearance-none cursor-pointer">
                                            <option>France</option>
                                            <option>Algérie</option>
                                            <option>Canada</option>
                                            <option>Belgique</option>
                                            <option>Suisse</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Chargement..." : "Continuer vers le paiement"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
