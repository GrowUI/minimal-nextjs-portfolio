import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        {/* Credits */}
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <span className="text-gray-700">|</span>
          <span className="text-gray-600">Built with GrowUI</span>
        </div>
      </div>
    </footer>
  );
}