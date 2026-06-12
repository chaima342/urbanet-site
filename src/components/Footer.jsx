const columns = [
  {
    title: "Listing Properties",
    links: ["Apartment", "Houses", "Villa", "Penthouse"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQs", "Contact Support"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const socials = [
  {
    label: "X",
    path: "M18.244 2H21l-6.52 7.46L22 22h-6.59l-5.16-6.74L4.16 22H1.4l7.04-8.05L2 2h6.59l4.66 6.17L18.24 2z",
  },
  {
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.34 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.34-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.34-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.34 2.43-.4C9.29 2.21 9.67 2.2 12.89 2.2h-.89zM12 6.85a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7zm6.55-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
  },
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Newsletter / links */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-slate-900">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 8v13h6v-7h6v7h6V8l-9-6z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-xl font-bold">Urbanet</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Helping You Find the Perfect Home, Every Step of the Way.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold mb-4">{col.title}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe for Updates</h4>
          <p className="text-sm text-white/60 mb-4 leading-relaxed">
            Get the latest news and updates directly in your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white/10 rounded-full p-1.5 pl-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm placeholder:text-white/40 outline-none flex-1 text-white"
            />
            <button
              type="submit"
              className="bg-white text-slate-900 text-sm font-semibold rounded-full px-5 py-2 flex-shrink-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>2025 Urbanet. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
