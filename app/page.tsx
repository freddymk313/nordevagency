import Header from "@/components/Header"
import Hero from "@/components/Hero"
import TrustedBy from "@/components/TrustedBy"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
