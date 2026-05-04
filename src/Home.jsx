import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "./icons";
import { personalInfo } from "./mock";

const Home = () => {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="hero-shell rounded-[2rem] bg-zinc-900/35 px-5 py-8 md:px-10 md:py-12 shadow-2xl shadow-black/30">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-3 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-200 mb-6 shadow-lg shadow-emerald-950/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for internships & full-time roles
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </span>
            </h1>
            <h2 className="mt-5 font-display text-2xl md:text-4xl text-zinc-200 font-semibold">
              {personalInfo.title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 text-zinc-950 h-12 px-7 font-semibold group shadow-xl shadow-emerald-950/30 hover:shadow-emerald-500/20 transition-shadow"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl h-12 px-7 border border-white/15 bg-white/7 hover:bg-white/12 text-zinc-100 hover:text-white transition-colors"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center justify-center rounded-xl h-12 px-5 text-zinc-300 hover:text-emerald-300 hover:bg-white/5 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <a
                href={personalInfo.github}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                based in {personalInfo.location}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-emerald-500/35 via-teal-500/10 to-sky-500/10 blur-3xl" />
              <div className="relative animate-float-slow">
                <div className="relative h-72 w-72 md:h-[22rem] md:w-[22rem] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center overflow-hidden shadow-2xl shadow-emerald-950/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_55%)]" />
                  <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-emerald-300/10 blur-2xl" />
                  <span className="relative font-display text-[10rem] md:text-[13rem] font-bold bg-gradient-to-br from-emerald-200 to-teal-500 bg-clip-text text-transparent leading-none select-none">
                    {personalInfo.profileInitial}
                  </span>
                  <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-zinc-950/80 border border-white/10 px-4 py-3 text-center text-[11px] font-mono text-emerald-300">
                    {"<Developer />"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
