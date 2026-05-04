import React from "react";
import { SectionHeader } from "./About";
import { projects } from "./mock";
import { ArrowUpRight, Calendar, Folder } from "./icons";

const accentMap = {
  emerald: {
    border: "hover:border-emerald-500/50",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "from-emerald-500/30",
  },
  amber: {
    border: "hover:border-amber-500/50",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    ring: "from-amber-500/25",
  },
  sky: {
    border: "hover:border-sky-500/50",
    text: "text-sky-400",
    bg: "bg-sky-500/10",
    ring: "from-sky-500/25",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="03 — Projects"
          title="Featured work"
          subtitle="Recent products I've designed, engineered, and shipped end-to-end."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const a = accentMap[p.accent] || accentMap.emerald;
            return (
              <article
                key={p.id}
                className={`group relative glass rounded-3xl p-0 transition-all duration-300 hover:-translate-y-2 ${a.border}`}
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${a.ring} to-transparent blur-3xl opacity-60`}
                />
                <div className={`relative h-28 bg-gradient-to-br ${a.ring} to-transparent border-b border-white/5`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_35%)]" />
                  <span className="absolute left-6 top-6 text-[10px] font-mono uppercase tracking-[0.28em] text-white/45">
                    0{p.id}
                  </span>
                </div>
                <div className="relative p-6">
                  <div className="flex items-start justify-between -mt-11 mb-5">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.bg} border border-white/10 ${a.text} shadow-xl shadow-black/25`}
                    >
                      <Folder className="h-4 w-4" />
                    </span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open project"
                      className="p-2 rounded-xl text-zinc-500 hover:text-zinc-100 hover:bg-white/5 transition-colors"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-4">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                      <Calendar className="h-3 w-3" />
                      {p.date}
                    </span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-xs font-medium ${a.text}`}
                    >
                      Case study →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
