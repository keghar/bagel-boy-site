"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Signup from "@/components/Signup";

import LinkToMenuSection from "@/components/LinkToMenuSection";
import InTheNews from "@/components/InTheNews";
import Footer from "@/components/Footer";
import HeroImg from "../public/hero-bg2.jpg";
import Carousel from "@/components/Carousel";
import AboutPhoto from "@/public/about-img.jpg";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero
        herotext="   Hand rolled, east coast style bagels with southern charm"
        heroimg={HeroImg}
      />
      <About
        abouttext="At Bagel Boy, our hole goal is to unite community and culture through food and collaboration."
        aboutimg={AboutPhoto}
        aboutalt="Owner holding tray of masive bagels bagels"
      />
      <Carousel />

      <LinkToMenuSection />
      <Signup />
      <InTheNews />
      <Footer />
      <div className="sm:hidden md:block">
        <BackToTop />
      </div>
    </>
  );
}
