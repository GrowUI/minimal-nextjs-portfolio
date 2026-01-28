import { siteConfig } from "@/config/site";
import { Code2, Globe, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {siteConfig.about.title}
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>{siteConfig.about.paragraphOne}</p>
              <p>
                {siteConfig.about.paragraphTwo}
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <h4 className="text-3xl font-bold text-white">2+</h4>
                <p className="text-sm text-gray-500">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">15+</h4>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">100%</h4>
                <p className="text-sm text-gray-500">Satisfied</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-6">
            {siteConfig.skills.map((group, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  {group.category === "Frontend" && <Globe className="w-4 h-4 text-blue-400" />}
                  {group.category === "Backend" && <Cpu className="w-4 h-4 text-purple-400" />}
                  {group.category === "Tools" && <Code2 className="w-4 h-4 text-emerald-400" />}
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 text-sm bg-black/30 text-gray-300 rounded-md border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}