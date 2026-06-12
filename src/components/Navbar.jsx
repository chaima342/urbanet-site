import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Listing", href: "#listing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-900">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 8v13h6v-7h6v7h6V8l-9-6z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-white text-xl font-bold tracking-tight">Urbanet</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-semibold px-6 py-2.5 hover:bg-slate-100 transition-colors"
        >
          Contact Agent
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm px-6 py-6 mx-4 rounded-2xl flex flex-col gap-4 text-white">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-semibold px-6 py-2.5"
          >
            Contact Agent
          </a>
        </div>
      )}
    </header>
  );
}
