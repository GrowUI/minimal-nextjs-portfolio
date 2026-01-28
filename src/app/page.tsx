import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";   // <--- Baru
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact"; // <--- Baru
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <div className="flex-1">
        <Hero />
        
        {/* Urutan Logis: Hero -> About/Skill -> Projects -> Contact */}
        <About />     
        <Projects />
        <Contact />
        
      </div>

      <Footer />
    </main>
  );
}