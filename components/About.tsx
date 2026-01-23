"use client";

import { Users, Star, Zap, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  const differences = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: t("difference.items.0.title"),
      desc: t("difference.items.0.desc")
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: t("difference.items.1.title"),
      desc: t("difference.items.1.desc")
    }
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-32 bg-[#FBFBFB] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-200/40 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gray-100/60 rounded-full blur-[80px] md:blur-[100px] translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-7 md:mb-24">
            <span className="inline-block px-4 py-1.5 mb-5 text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase bg-gray-100 rounded-full">
              {t("badge")}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-8 leading-[1.2] md:leading-[1.1]">
              {t("title.line1")}
              <br className="hidden md:block" />
              <span className="text-gray-400">{t("title.line2")}</span>
            </h2>

            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium px-2">
              {t.rich("intro", {
                strong: (chunks) => (
                  <span className="text-black font-semibold">{chunks}</span>
                )
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 md:gap-16 items-start">

            {/* LEFT */}
            <div className="lg:col-span-6 space-y-4 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {t("difference.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {t("difference.description")}
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {differences.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 md:gap-6 p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 md:gap-4">

                <div className="bg-white p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl md:text-4xl font-black text-black">25+</div>
                  <div className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {t("stats.projects")}
                  </div>
                </div>

                <div className="bg-black p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] shadow-xl text-center">
                  <div className="text-3xl md:text-4xl font-black text-white">98%</div>
                  <div className="text-[9px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                    {t("stats.satisfaction")}
                  </div>
                </div>

                <div className="col-span-2 bg-gray-50 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-black text-black" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg italic text-gray-700 mb-6">
                    “{t("testimonial.quote")}”
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-black" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs md:text-sm">
                        {t("testimonial.author")}
                      </div>
                      <div className="text-gray-500 text-[10px] md:text-xs uppercase">
                        {t("testimonial.role")}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
