"use client";

const companies = [
  { name: "CS Bisounours", logo: "/trusted/csbisounours.jpg", desktop: 60 },
  { name: "Jexweb", logo: "/trusted/jexweb.png", desktop: 110 },
  { name: "Asunicaco", logo: "/trusted/asunicaco.png", desktop: 60 },
  { name: "Funda Online", logo: "/trusted/funda.png", desktop: 60 },
  { name: "Metro Travels", logo: "/trusted/metro.png", desktop: 80 },
  { name: "CCPS", logo: "/trusted/ccps.png", desktop: 46 },
  { name: "Pexelsinovation", logo: "/trusted/pexels.png", desktop: 60 },
];

export default function TrustedBy() {
  // duplication x2 → nécessaire pour un loop parfait
  const loop = [...companies, ...companies];

  return (
    <section
      id="trust"
      className="relative bg-background py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {loop.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                style={{ width: `${company.desktop}px` }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-green-accent/10 to-transparent" />
    </section>
  );
}