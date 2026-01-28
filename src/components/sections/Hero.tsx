import { siteConfig } from "@/config/site";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden">

            {/* Purple circle at the top left */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] opacity-50 animate-pulse" />
            {/* Blue circle at the bottom right */}
            <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] opacity-40" />

            <div className="mx-auto relative z-10 space-y-8">
                {/* Badge Status */}
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium backdrop-blur-sm">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Open for opportunities
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight">
                    Hi, I&apos;m {siteConfig.name}. <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400">
                        {siteConfig.title}
                    </span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                    {siteConfig.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
                    <Link
                        href="#projects"
                        className="group px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all"
                    >
                        Explore Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="https://raisanstore.gumroad.com/l/modern-portfolio"
                        className="px-6 py-3 border border-white/20 text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </Link>
                </div>

                <div className="flex gap-4 pt-8 border-t border-white/10 mt-8 max-w-md">
                    {siteConfig.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}