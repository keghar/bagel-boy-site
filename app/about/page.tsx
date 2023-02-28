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
        abouttext="This is what we are about. We saw a need for handrolled fresh bagels in our local area. We opened in 2022 to provide delicous bagels in Foley, AL. Stop in to try our bagels and sandwhiches and iced coffee. "
      />
      <Carousel />
      <LinkToMenuSection />
      <Signup />
      <Footer />
    </div>
  );
}

export default AboutPage;
