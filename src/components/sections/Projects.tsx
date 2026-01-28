import { siteConfig } from "@/config/site";
import { Github, ExternalLink, Folder } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-black/5">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                        Selected Works
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        {siteConfig.projects.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteConfig.projects.item.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Folder Icon */}
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:text-blue-300 transition-colors">
                                    <Folder className="w-6 h-6" />
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    {project.repo && (
                                        <a href={project.repo} target="_blank" aria-label="Github Repo" className="text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" aria-label="Live Demo" className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}