<<<<<<< HEAD
import Image from "next/image";
import AboutUs from "../components/AboutUs";
import Link from "next/link";

export default function Home() {
  return (
   <div>
     <AboutUs/>
   </div>
=======
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Trends from "@/components/Trends";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Trends />
      <Footer />
    </>

>>>>>>> 0fda8690dab4afbaa8eb2b62c309f872ad96f71f
  );
}
