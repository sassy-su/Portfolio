import React, { useEffect, useState } from "react";
import { Menu, X, Code2 } from "./icons";
import { navLinks, personalInfo } from "./mock";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-zinc-950/70 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            {personalInfo.firstName}
            <span className="text-emerald-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 link-underline transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium h-9 px-4 transition-colors"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-zinc-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-zinc-300 hover:text-emerald-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-full h-10 rounded-md bg-emerald-500 text-zinc-950 font-medium"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
