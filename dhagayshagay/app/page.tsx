
import AboutUs from "../components/AboutUs";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trends from "../components/Trends";
import Upcoming from "@/components/Upcoming";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Trends />
      <Upcoming />
      <Footer />
    </>
  );
}
