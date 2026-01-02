"use client";

export default function Footer() {
    return (
        <footer className="py-12 bg-white border-t border-gray-100 text-center">
            <div className="text-gray-900 font-bold text-2xl mb-6 tracking-tight">Mandy.sda</div>
            <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors text-sm font-medium uppercase tracking-widest">Instagram</a>
                <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors text-sm font-medium uppercase tracking-widest">TikTok</a>
                <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors text-sm font-medium uppercase tracking-widest">Email</a>
            </div>
            <div className="text-xs text-gray-400 font-medium">
                &copy; {new Date().getFullYear()} Mandy Saada. Fait avec passion.
                <br />
                <span className="mt-2 block opacity-50">Design et développer par Wingo.</span>
            </div>
        </footer>
    );
}
