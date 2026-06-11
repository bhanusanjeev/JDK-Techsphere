import LandingPage from "../components/home/LandingPage";
import CoreServices from "../components/home/CoreServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ContactSection from "../components/home/ContactSection";

const Home = () => {
  return (
    <>
      <LandingPage />

      <section id="services">
        <CoreServices />
      </section>

      <WhyChooseUs />

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;