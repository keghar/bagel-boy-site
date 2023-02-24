import Image from "next/image";
import FoleyClockTower from "../../public/foley_clock.jpeg";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Foley() {
  return (
    <>
      <Hero
        herotext="Bagel Boy Foley,
              AL"
        heroimg={FoleyClockTower}
        heroalt="Clock tower Foley, AL"
      />
      <About abouttext="   We are located in foley al" />
    </>
  );
}
