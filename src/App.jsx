import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import BackToTop from "./components/BackToTop";

export default function App(){
  return(
    <div className="bg-black text-white">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Process/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <BackToTop />
<WhatsappButton />
    </div>
  )
}