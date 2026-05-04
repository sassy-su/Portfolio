import React from "react";
import Navbar from "./Nav";
import Hero from "./Home";
import About from "./About";
import Skills from "./Skill";
import Projects from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-[480px] glow-radial" />
      <div className="noise" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
