import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TestimonialsSlider from "../components/TestimonialsSlider";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Contact />

      <TestimonialsSlider/>

      <Footer />
    </>
  );
}

export default Home;