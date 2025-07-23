
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Trends from "../components/Trends";
import Upcoming from "@/components/Upcoming";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Collections/>
      <Trends />
      <Upcoming />
    </>
  );
}
