import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/Product";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Offers from "@/components/Offers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Product />
            <Testimonials />
            <Offers />
            <FAQ />
            <Footer />
        </main>
    );
}
