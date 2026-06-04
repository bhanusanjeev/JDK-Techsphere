import LandingPage from "../components/LandingPage";
import CoreServices from "../components/CoreServices";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";

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