import Navbar from "./Navbar";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
];

export default function Hero() {
  return (
    <section id="home" className="relative">
      <Navbar />

      <div className="relative h-[640px] md:h-[720px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Modern luxury home at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/20 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 flex flex-col justify-center pt-24">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight max-w-2xl">
            <span className="italic font-light">Simplifying</span> Property Buying, Selling, And Renting
          </h1>
          <p className="text-white/80 mt-6 max-w-lg text-sm md:text-base leading-relaxed">
            Your life evolves, and your home should too. We design flexible living
            spaces that adapt to your current needs, ensuring comfort,
            functionality, and style at every stage of life.
          </p>

          <a
            href="#listing"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-white text-slate-900 text-sm font-semibold px-7 py-3.5 hover:bg-slate-100 transition-colors"
          >
            Explore Listings
          </a>
        </div>

        {/* Bottom-left: happy clients */}
        <div className="absolute left-6 md:left-10 bottom-8 flex items-center gap-3 z-10">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Happy client"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div className="text-white text-sm leading-tight">
            <p className="font-bold">50K+</p>
            <p className="text-white/80">Happy Clients</p>
          </div>
        </div>

        {/* Bottom-right: property card */}
        <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 bg-white rounded-2xl shadow-xl p-4 w-72 items-center gap-3 z-10">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 11l9-8 9 8M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-sm">Modern Family Home</p>
            <p className="text-xs text-slate-500 mb-2">1234 Maple Avenue, Greenfield, TX</p>
            <button className="w-full bg-slate-900 text-white text-xs font-semibold rounded-lg py-2">
              View Detail
            </button>
          </div>
        </div>

        {/* Arrows */}
        <div className="hidden md:flex absolute right-10 bottom-1/2 translate-y-1/2 flex-col gap-3 z-10">
          <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
