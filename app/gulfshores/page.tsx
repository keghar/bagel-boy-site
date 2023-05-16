import Image from "next/image";
import HeroImg from "../../public/gulfshores.jpeg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutPhoto from "../../public/gs-about-img.jpeg";
import Footer from "@/components/Footer";

export default function Foley() {
  return (
    <>
      <Hero
        herotext="Bagel Boy Gulf Shores,
              AL"
        heroimg={HeroImg}
        heroalt="One Club Gulf shores, AL"
      />
      <About
        abouttext="Comming Soon! 
        4500 Gulf Shores Parkway, Gulf Shores, AL 36542"
        aboutimg={AboutPhoto}
        aboutalt="Bagel boy building in Foley Alabama"
      />
      <Footer />
    </>
  );
}
