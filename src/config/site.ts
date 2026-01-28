import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const siteConfig = {
  // Data Personal
  name: "Raissan Dev",
  title: "Frontend Developer & UI Enthusiast",
  description:
    "I build websites that are fast, accessible, and visually appealing. Specialist in Next.js and Tailwind CSS.",

  // Link Sosmed
  socials: [
    { name: "GitHub", href: "https://github.com/geusan", icon: Github },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/geusan",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:hello@geusan.dev", icon: Mail },
  ],

  // Navigasi
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ],

  // Projects
  projects: {
    desc: "Some selected projects I have worked on to solve real-world problems with code.",
    item: [
      {
        title: "Zenith Todo",
        description:
          "A desktop task management application built with Tauri and React. Uses local SQLite for maximum data privacy.",
        tech: ["Tauri", "React", "TypeScript", "SQLite"],
        link: "#", // Link to demo/website
        repo: "#", // Link to GitHub
      },
      {
        title: "Lapak Nusantara",
        description:
          "Marketplace platform with automatic payment features and a real-time analytics dashboard.",
        tech: ["Next.js", "Laravel", "Tailwind", "MySQL"],
        link: "#",
        repo: "#",
      },
      {
        title: "Rintis AI",
        description:
          "Futuristic landing page for a local AI startup. Focused on high performance and smooth animations.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        link: "#",
        repo: "#",
      },
      // To add another project, just copy the object above
    ],
  },

  // About
  about: {
    title: "More Than Just Code",
    paragraphOne:
      "My journey started with a curiosity about how a website works. Now, I help businesses grow through scalable digital solutions. I believe in clean code and user-centric design.",
    paragraphTwo:
      "When I'm not coding, I usually experiment with new technologies or contribute to open source projects.",
  },

  skills: [
    {
      category: "Frontend",
      items: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
      ],
    },
    {
      category: "Backend",
      items: ["Laravel", "Node.js", "PostgreSQL", "Supabase"],
    },
    {
      category: "Tools",
      items: ["Git", "Figma", "VS Code", "Vercel"],
    },
  ],

  // Contact
  contact: {
    desc: "I am always open to discussing new product ideas or collaboration opportunities.",
    mail: "hello@raissan.dev",
    phone: "1234567890",
    code_country: "62",
  }
};
