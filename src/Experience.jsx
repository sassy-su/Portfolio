import React from "react";
import { SectionHeader } from "./About";
import { activities } from "./mock";
import { Briefcase } from "./icons";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="04 — Experience"
          title="Journey & activities"
          subtitle="Academic pursuits, side projects, and the habits shaping how I build."
        />

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-white/10 to-transparent" />

          <div className="space-y-10">
            {activities.map((a, i) => (
              <div
                key={i}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`pl-10 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 inline-block text-left w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-emerald-400" />
                      <span className="font-mono text-xs text-emerald-300">
                        {a.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {a.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">{a.org}</p>
                    <ul className="mt-4 space-y-2">
                      {a.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-400/60"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-zinc-950" />
                <span className="md:hidden absolute left-4 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-zinc-950" />

                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
