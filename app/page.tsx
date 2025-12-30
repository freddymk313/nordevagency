import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import { WhatsappBtn } from "@/components/WhatsappBtn"

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      {/* <Footer /> */}
      <WhatsappBtn />
    </>
  );
}
