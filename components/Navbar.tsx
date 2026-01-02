"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 md:px-12 bg-white/70 backdrop-blur-xl border-b border-black/5"
        >
            <Link href="/" className="text-xl font-semibold tracking-tighter text-gray-900">
                Mandy<span className="text-gold-500">.sda</span>
            </Link>
        </motion.nav>
    );
}
