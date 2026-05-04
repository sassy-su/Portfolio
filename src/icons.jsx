import React from "react";

const paths = {
  ArrowRight: "M5 12h14M13 5l7 7-7 7",
  ArrowUp: "M12 19V5M5 12l7-7 7 7",
  ArrowUpRight: "M7 17 17 7M8 7h9v9",
  BrainCircuit: "M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3M9 8h6M9 12h6M9 16h6",
  Briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7ZM4 12h16",
  Calendar: "M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z",
  Code2: "M8 9 4 12l4 3M16 9l4 3-4 3M14 4l-4 16",
  Database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  Download: "M12 3v12M7 10l5 5 5-5M5 21h14",
  Folder: "M3 6h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z",
  Github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 3-.3 6-1.5 6-6.5A5 5 0 0 0 20 6.5c.2-.8.2-2-.2-3.5 0 0-1-.3-3.5 1.3A12 12 0 0 0 12 4c-1.5 0-3 .2-4.3.6C5.2 3 4.2 3.3 4.2 3.3 3.8 4.8 3.8 6 4 6.8A5 5 0 0 0 2.5 10c0 5 3 6.2 6 6.5-.6.6-.8 1.3-.8 2.5V22",
  GraduationCap: "M22 10 12 5 2 10l10 5 10-5ZM6 12v5c3 2 9 2 12 0v-5",
  Layers: "m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 18l9 5 9-5",
  Linkedin: "M6 9h4v12H6V9ZM8 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM14 9h4v2c.7-1.2 2-2.2 4-2.2 4 0 5 2.6 5 6V21h-4v-6c0-1.7-.5-3-2.3-3S18 13.3 18 15v6h-4V9Z",
  Mail: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
  MapPin: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  Menu: "M4 6h16M4 12h16M4 18h16",
  Phone: "M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.8 9.7a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z",
  Send: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z",
  Wrench: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.7 2.7-2-2 2.7-2.7Z",
  X: "M18 6 6 18M6 6l12 12",
};

const makeIcon = (name) =>
  function Icon({ className = "", ...props }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d={paths[name]} />
      </svg>
    );
  };

export const ArrowRight = makeIcon("ArrowRight");
export const ArrowUp = makeIcon("ArrowUp");
export const ArrowUpRight = makeIcon("ArrowUpRight");
export const BrainCircuit = makeIcon("BrainCircuit");
export const Briefcase = makeIcon("Briefcase");
export const Calendar = makeIcon("Calendar");
export const Code2 = makeIcon("Code2");
export const Database = makeIcon("Database");
export const Download = makeIcon("Download");
export const Folder = makeIcon("Folder");
export const Github = makeIcon("Github");
export const GraduationCap = makeIcon("GraduationCap");
export const Layers = makeIcon("Layers");
export const Linkedin = makeIcon("Linkedin");
export const Mail = makeIcon("Mail");
export const MapPin = makeIcon("MapPin");
export const Menu = makeIcon("Menu");
export const Phone = makeIcon("Phone");
export const Send = makeIcon("Send");
export const Wrench = makeIcon("Wrench");
export const X = makeIcon("X");
