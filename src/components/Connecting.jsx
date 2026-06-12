export default function Connecting() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-lg leading-tight">
          Connecting People With Perfect Properties
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-sm leading-relaxed">
          Urbanet is a leading real estate platform dedicated to connecting
          buyers, sellers, and renters with their perfect property.
        </p>
      </div>

      <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1600&q=80"
          alt="Modern wooden house surrounded by forest at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <button
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center group"
        >
          <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
