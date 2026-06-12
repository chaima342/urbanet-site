const offers = [
  {
    title: "Property Buying",
    description:
      "Find your dream home from our extensive listings of verified properties.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    title: "Property Selling",
    description:
      "Sell your property quickly and efficiently with our market expertise.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
  },
  {
    title: "Property Renting",
    description:
      "Explore the best rental options that suit your lifestyle and budget.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    title: "Real Estate Consulting",
    description:
      "Get professional advice to make informed property decisions.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="listing" className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          What We Offer
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-sm leading-relaxed">
          We are redefining real estate with innovation and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div key={offer.title} className="flex flex-col">
            <div className="rounded-2xl overflow-hidden h-40 mb-[-2.5rem] relative z-0">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 bg-white rounded-2xl shadow-md mx-3 p-5">
              <h3 className="font-bold text-slate-900 mb-2">{offer.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
