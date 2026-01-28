import { siteConfig } from "@/config/site";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-8 p-12 rounded-3xl bg-linear-to-b from-blue-900/10 to-transparent border border-white/5">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to start your next project?
          </h2>
          <p className="text-gray-400 text-lg">
            {siteConfig.contact.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href={`mailto:${siteConfig.contact.mail}`} 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </Link>
            <Link
              href={`tel:+${siteConfig.contact.code_country}${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all"
            >
              Schedule Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}