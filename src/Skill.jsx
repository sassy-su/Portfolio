import React from "react";
import { SectionHeader } from "./About";
import { skills } from "./mock";
import {
  Code2,
  Layers,
  Database,
  BrainCircuit,
  Wrench,
} from "./icons";

const groupIcon = {
  Languages: Code2,
  Frontend: Layers,
  "Backend & Databases": Database,
  "Core Concepts": BrainCircuit,
  "Tools & Other": Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="section-band py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="02 — Skills"
          title="Technical toolkit"
          subtitle="The stack I reach for when turning ideas into shipped products."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([group, items]) => {
            const Icon = groupIcon[group] || Code2;
            return (
              <div
                key={group}
                className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-zinc-100">
                    {group}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
