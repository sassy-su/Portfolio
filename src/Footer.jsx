import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "./icons";
import { personalInfo } from "./mock";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold">
            {personalInfo.firstName}
            <span className="text-emerald-400">.</span>
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} - Crafted with care.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 font-mono ml-3"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
