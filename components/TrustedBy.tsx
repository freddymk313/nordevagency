"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  const companies = [
    { name: "Google", logo: "/trusted/csbisounours.jpg", width: 60, height: 60 },
    { name: "Slack", logo: "/trusted/asunicaco.PNG", width: 60, height: 60 },
    { name: "Notion", logo: "/trusted/funda.png", width: 60, height: 60 },
    { name: "Figma", logo: "/trusted/metro.png", width: 80, height: 60 },
    { name: "Amazon", logo: "/trusted/pexels.png", width: 60, height: 60 },
    { name: "Microsoft", logo: "/trusted/urban.png", width: 120, height: 1500 },
  ];

  return (
    <section className="pb-10 overflow-hidden">
      <Marquee speed={50} gradient={true} gradientWidth={80}>
        {companies.map((c) => (
          <div key={c.name} className="flex-shrink-0 mx-8">
            <Image
              src={c.logo}
              alt={c.name}
              width={c.width}
              height={c.height}
              className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedBy;
