"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import React from "react";
import AboutPhoto from "../../public/about-img.jpg";
import LinkToMenuSection from "@/components/LinkToMenuSection";
import Carousel from "@/components/Carousel";
import Signup from "@/components/Signup";

function AboutPage() {
  return (
    <div className="bg-gray-200">
      <div className="h-[35vh]"> </div>
      <About
        aboutimg={AboutPhoto}
        abouttext="Bagel Boy was born out of necessity and the love of baking. Plus we really missed having access to hot fresh bagels like they have in other cities! We saw a hole in the market and filled it with schmear."
      />
      <Carousel />
      <LinkToMenuSection />
      <Signup />
      <Footer />
    </div>
  );
}

export default AboutPage;
