"use client";
import Image from "next/image";

const TrustedBy = () => {
  const companies = [
    { name: "Google", logo: "/trusted/csbisounours.jpg", width: 80, height: 27 },
    { name: "Slack", logo: "/trusted/asunicaco.PNG", width: 70, height: 28 },
    { name: "Notion", logo: "/trusted/funda.png", width: 28, height: 28 },
    { name: "Figma", logo: "/trusted/metro.png", width: 60, height: 24 },
    { name: "Amazon", logo: "/trusted/pexels.png", width: 85, height: 26 },
    { name: "Microsoft", logo: "/trusted/urban.png", width: 120, height: 25 },
  ];

  return (
    <section className="py-10 *bg-white overflow-hidden">
      <div className="relative w-full">
        {/* Track du scroll */}
        <div className="flex w-[200%] animate-marquee">
          
          {/* Liste 1 */}
          <div className="flex items-center space-x-16 *w-1/2">
            {companies.map((c) => (
              <Image
                key={`first-${c.name}`}
                src={c.logo}
                alt={c.name}
                width={c.width}
                height={c.height}
                className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

          {/* Liste 2 (copie exacte pour boucle infinie) */}
          <div className="flex items-center space-x-16 w-1/2">
            {companies.map((c) => (
              <Image
                key={`second-${c.name}`}
                src={c.logo}
                alt={c.name}
                width={c.width}
                height={c.height}
                className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
