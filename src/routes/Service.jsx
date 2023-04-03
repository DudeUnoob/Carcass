import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import HeroQualities from "../components/HeroQualities";
import ServiceBG from "../assets/service_bg.jpg"

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        //heroImg={AboutImg}
        heroImg={"https://t4.ftcdn.net/jpg/01/41/81/09/240_F_141810986_qhU742v1rBR3Vlq2too7GYnliDFikYwR.jpg"}
        title="Service"
        btnClass="hide"
      />
      <HeroQualities />
      <Footer />
    </>
  );
}

export default Service;
