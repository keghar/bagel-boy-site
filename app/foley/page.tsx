import Image from "next/image";
import FoleyClockTower from "../../public/foley_clock.jpeg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutPhoto from "../../public/about-img-foley.jpeg";
import Footer from "@/components/Footer";

export default function Foley() {
  return (
    <>
      <Hero
        herotext="Bagel Boy Foley,
              AL"
        heroimg={FoleyClockTower}
        heroalt="Clock tower Foley, AL"
      />
      <About
        abouttext="   515 N McKenzie St, Foley, AL 36535"
        aboutimg={AboutPhoto}
        aboutalt="Bagel boy building in Foley Alabama"
      />
      <Footer />
    </>
  );
}
