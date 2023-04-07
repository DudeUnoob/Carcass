import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Characterization from "../components/Characterization";
import Footer from "../components/Footer";
import HeroQualities from "../components/HeroQualities";
import { callGeoLocationAPI } from "../functions/callGeoLocationAPI";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    callGeoLocationAPI()
  }, [])

  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1568132930457-20ac2189f20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="My Journey. My Story."
        text="A king of 3 worlds"
        btnClass="show"
        buttonText="Journey"
        url="#destination"
      />
      <Characterization />
      <HeroQualities />
      <Footer />
    </>
  );
}

export default Home;
