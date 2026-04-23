import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import { WhatsappBtn } from "@/components/WhatsappBtn"
import Pricing from "@/components/Pricing"
import TrustedBy from "@/components/TrustedBy"
import { Comparison } from "@/components/Comparison"
import Services from "@/components/Services"
import Process from "@/components/Process"

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <TrustedBy />
      <Comparison />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      <Pricing />
      {/* <Footer /> */}
      <WhatsappBtn />
    </>
  );
}
