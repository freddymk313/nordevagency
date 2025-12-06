"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  // const companies = [
  //   {
  //     name: "CS Bisounours",
  //     logo: "/trusted/csbisounours.jpg",
  //     width: 60,
  //     height: 60,
  //     mobile: 40,
  //   },
  //   {
  //     name: "Jexweb",
  //     logo: "/trusted/jexweb.png",
  //     width: 110,
  //     height: 100,
  //     mobile: 70,
  //   },
  //   {
  //     name: "Asunicaco",
  //     logo: "/trusted/asunicaco.png",
  //     width: 60,
  //     height: 60,
  //     mobile: 40,
  //   },
  //   {
  //     name: "Funda Online",
  //     logo: "/trusted/funda.png",
  //     width: 60,
  //     height: 60,
  //     mobile: 40,
  //   },
  //   {
  //     name: "Metro Travels",
  //     logo: "/trusted/metro.png",
  //     width: 80,
  //     height: 60,
  //     mobile: 55,
  //   },
  //   {
  //     name: "CCPS",
  //     logo: "/trusted/ccps.png",
  //     width: 46,
  //     height: 50,
  //     mobile: 35,
  //   },
  //   {
  //     name: "Pexelsinovation",
  //     logo: "/trusted/pexels.png",
  //     width: 60,
  //     height: 60,
  //     mobile: 40,
  //   },
  //   {
  //     name: "Urban Design",
  //     logo: "/trusted/urban.png",
  //     width: 120,
  //     height: 1500,
  //     mobile: 60,
  //   },
  // ];

  const companies = [
  {
    name: "CS Bisounours",
    logo: "/trusted/csbisounours.jpg",
    mobile: 40,
    desktop: 60,
  },
  {
    name: "Jexweb",
    logo: "/trusted/jexweb.png",
    mobile: 70,
    desktop: 110,
  },
  {
    name: "Asunicaco",
    logo: "/trusted/asunicaco.png",
    mobile: 40,
    desktop: 60,
  },
  {
    name: "Funda Online",
    logo: "/trusted/funda.png",
    mobile: 40,
    desktop: 60,
  },
  {
    name: "Metro Travels",
    logo: "/trusted/metro.png",
    mobile: 55,
    desktop: 80,
  },
  {
    name: "CCPS",
    logo: "/trusted/ccps.png",
    mobile: 35,
    desktop: 46,
  },
  {
    name: "Pexelsinovation",
    logo: "/trusted/pexels.png",
    mobile: 40,
    desktop: 60,
  },
  // {
  //   name: "Urban Design",
  //   logo: "/trusted/urban.png",
  //   mobile: 60,
  //   desktop: 250,
  // },
];


  return (
    <section className="pb-10 overflow-hidden">
      <Marquee speed={50} gradient={true} gradientWidth={80}>
        {companies.map((c) => (
          // <div key={c.name} className="flex-shrink-0 mx-4 md:mx-8">
          //   <Image
          //     src={c.logo}
          //     alt={c.name}
          //     width={c.width}
          //     height={c.height}
          //     style={{
          //       width: `${c.mobile}px`, // taille mobile personnalisée
          //       height: "auto",
          //     }}
          //     className="md:w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          //   />
          // </div>

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
  );
};

export default TrustedBy;
