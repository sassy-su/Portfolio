import React from "react";
import { GraduationCap, MapPin } from "./icons";
import { aboutInfo, personalInfo } from "./mock";

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-2xl">
    <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-zinc-400 text-base md:text-lg">{subtitle}</p>
    )}
  </div>
);

export { SectionHeader };

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="01 — About"
          title="A bit about me"
          subtitle="Get to know who I am and what drives the work I do."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass rounded-3xl p-7 md:p-9 space-y-5 text-zinc-300 leading-relaxed">
            <p className="text-lg text-zinc-200">{aboutInfo.intro}</p>
            <p className="text-zinc-400">{aboutInfo.body}</p>

            <div className="flex items-center gap-2 text-sm text-zinc-500 pt-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              {personalInfo.location}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {aboutInfo.stats.map((s) => (
                <div
                  key={s.label}
                  className="metric-card rounded-2xl border border-white/10 p-5 transition-colors"
                >
                  <div className="font-display text-3xl font-bold text-emerald-400">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <h3 className="font-display text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-5">
                {aboutInfo.education.map((e, i) => (
                  <div
                    key={i}
                    className="relative pl-5 border-l border-white/10 hover:border-emerald-500/60 transition-colors"
                  >
                    <span className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                    <p className="font-medium text-zinc-100">{e.degree}</p>
                    <p className="text-sm text-zinc-400">{e.school}</p>
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      {e.duration} · {e.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
