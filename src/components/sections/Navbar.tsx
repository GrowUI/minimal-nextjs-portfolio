import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-backdrop-filter:bg-black/20">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <Image
                        src="/icon.png" // File ada di folder public
                        alt="GrowUI Logo"
                        width={32}
                        height={32}
                        className="rounded-md"
                    />
                    <span className="font-bold text-white">{siteConfig.name}</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {siteConfig.navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/geusan"
                        target="_blank"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}