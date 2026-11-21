
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import CallToAction from "../components/home/CallToAction";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <CallToAction />

      <div id="testimonials">
        <Testimonial />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
