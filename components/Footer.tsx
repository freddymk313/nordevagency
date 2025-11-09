"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 relative overflow-hidden">
      {/* Éléments décoratifs doux */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-800/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Grille principale */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & description */}
          <div>
            <Link href="/">
              <div className="*flex items-center *space-x-3">
                {/* <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">N</span>
              </div> */}
                {/* <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Nordev Agency
              </span> */}

                <div className="lg:hidden">
                  <Image
                    src={"/logo/logo-1.jpg"}
                    height={48}
                    width={48}
                    alt={"logo image"}
                    // className="w-12 h-12 object-cover"
                    quality={100}
                  />
                </div>

                <div className="hidden lg:block">
                  <Image
                    src={"/logo/logo-2.jpg"}
                    height={230}
                    width={230}
                    alt={"logo image"}
                    // className="w-12 h-12 object-cover"
                    // quality={100}
                  />
                </div>
              </div>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed">
              Nous donnons vie à vos idées digitales à travers des expériences
              web et mobiles modernes, performantes et sur mesure.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 inline-block mr-1" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 inline-block mr-1" />
                  <span>Réalisations</span>
                </a>
              </li>
              <li>
                <a
                  href="#temoignages"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 inline-block mr-1" />
                  <span>Témoignages</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 inline-block mr-1" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-800" />
                <a
                  href="mailto:nordevagency@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  nordevagency@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-800" />
                <a
                  href="tel:+243991040032"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +243 991 040 032
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-800" />
                <span className="text-gray-600">Kinshasa, RDC</span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800">Nordev Agency</span>.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
