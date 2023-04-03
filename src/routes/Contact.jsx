import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
//import AboutImg from "../assets/2.jpg";
import ContactBg from "../assets/contact_bg.avif"
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={ContactBg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
