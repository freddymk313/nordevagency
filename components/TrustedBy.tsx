"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  const companies = [
    {
      name: "CS Bisounours",
      logo: "/trusted/csbisounours.jpg",
      mobile: 40,
      desktop: 60,
      width: 60,
      height: 60,
    },
    {
      name: "Jexweb",
      logo: "/trusted/jexweb.png",
      mobile: 70,
      desktop: 110,
      width: 110,
      height: 100,
    },
    {
      name: "Asunicaco",
      logo: "/trusted/asunicaco.png",
      mobile: 40,
      desktop: 60,
      width: 60,
      height: 60,
    },
    {
      name: "Funda Online",
      logo: "/trusted/funda.png",
      mobile: 40,
      desktop: 60,
      width: 60,
      height: 60,
    },
    {
      name: "Metro Travels",
      logo: "/trusted/metro.png",
      mobile: 55,
      desktop: 80,
      width: 70,
      height: 60,
    },
    {
      name: "CCPS",
      logo: "/trusted/ccps.png",
      mobile: 35,
      desktop: 46,
      width: 46,
      height: 50,
    },
    {
      name: "Pexelsinovation",
      logo: "/trusted/pexels.png",
      mobile: 40,
      desktop: 60,
      width: 60,
      height: 60,
    },
    {
      name: "Urban Design",
      logo: "/trusted/urban.png",
      mobile: 60,
      desktop: 250,
      width: 120, height: 1500
    },
  ];

  return (
    <>
      <section className="md:hidden pb-10 overflow-hidden">
        <Marquee speed={50} gradient={true} gradientWidth={80}>
          {companies.map((c) => (
            <div key={c.name} className="flex-shrink-0 mx-4 md:mx-8">
              <Image
                src={c.logo}
                alt={c.name}
                width={c.desktop}
                height={c.desktop}
                style={{
                  width: `${c.mobile}px`, // taille mobile
                  height: "auto",
                }}
                className={`md:!w-[${c.desktop}px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              />
            </div>
          ))}
        </Marquee>
      </section>

      <section className="hidden md:block pb-10 overflow-hidden">
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
    </>
  );
};

export default TrustedBy;
