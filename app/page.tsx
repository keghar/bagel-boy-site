// import Image from 'next/image'
import Hero from "@/components/Hero";
import { Lilita_One } from "@next/font/google";
import About from "@/components/About";
import Signup from "@/components/Signup";

import LinkToMenuSection from "@/components/LinkToMenuSection";
import InTheNews from "@/components/InTheNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <LinkToMenuSection />
      <Signup />
      <InTheNews />
      <Footer />
    </>
  );
}
