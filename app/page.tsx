"use client";
import Hero from "@/components/Hero";
import { Lilita_One } from "@next/font/google";
import About from "@/components/About";
import Signup from "@/components/Signup";

import LinkToMenuSection from "@/components/LinkToMenuSection";
import InTheNews from "@/components/InTheNews";
import Footer from "@/components/Footer";
import HeroImg from "../public/hero-bg2.jpg";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Hero
        herotext="   Hand rolled, east coast style bagels with southern charm in Foley,
              AL"
        heroimg={HeroImg}
      />
      <About
        abouttext="   Quick about section about the resturant and what you offer. Two
      sentences max will do."
      />
      <Carousel />

      <LinkToMenuSection />
      <Signup />
      <InTheNews />
      <Footer />
    </>
  );
}
