import React, { useState } from "react";
import { SectionHeader } from "./About";
import { personalInfo } from "./mock";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "./icons";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setNotice("Please fill out your name, email and message.");
      return;
    }
    setLoading(true);
    setNotice("");
    // Mock submission - store locally.
    const prev = JSON.parse(localStorage.getItem("contact_msgs") || "[]");
    prev.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("contact_msgs", JSON.stringify(prev));
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setNotice("Message sent. Thanks, I'll get back to you soon.");
    }, 700);
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="05 — Contact"
          title="Let's build something"
          subtitle="Have an opportunity, project, or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {infoItems.map((it) => {
              const Icon = it.icon;
              const body = (
                <div className="glass rounded-xl p-5 flex items-center gap-4 transition-colors">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                      {it.label}
                    </p>
                    <p className="text-sm text-zinc-100">{it.value}</p>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} className="block">
                  {body}
                </a>
              ) : (
                <div key={it.label}>{body}</div>
              );
            })}

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border bg-zinc-950/55 border-white/10 text-zinc-100 placeholder:text-zinc-600 h-12 px-4 outline-none focus:ring-2 focus:ring-emerald-500/60"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border bg-zinc-950/55 border-white/10 text-zinc-100 placeholder:text-zinc-600 h-12 px-4 outline-none focus:ring-2 focus:ring-emerald-500/60"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project, role, or idea..."
                rows={6}
                className="w-full rounded-xl border bg-zinc-950/55 border-white/10 text-zinc-100 placeholder:text-zinc-600 resize-none px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-zinc-500 font-mono">
                {notice || "Typical reply time - under 24h"}
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 text-zinc-950 font-semibold h-12 px-7 group disabled:opacity-70 transition-shadow shadow-lg shadow-emerald-950/25"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
