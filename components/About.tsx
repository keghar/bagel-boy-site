"use client";
import Carousel from "./Carousel";
import LinkToMenuSection from "./LinkToMenuSection";
import { Lilita_One } from "@next/font/google";
import AboutPhoto from "../public/about-img.jpg";
import Image from "next/image";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

function About() {
  return (
    <div className={lilitaOne.className}>
      <div id="about" className="h-[100vh] bg-gray-200 p-4 md:p-8">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="relative h-full w-full flex-[0_1_50%]">
            <Image
              className="rounded-xl object-contain"
              src={AboutPhoto}
              alt="Owner holding trey of bagels"
              fill
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full flex-[0_1_50%]">
            <div className=" p-4 rounded-xl shadow-xl shadow-gray-400">
              <p className="text-2xl md:text-4xl text-gray-600 text-center tracking-wider uppercase">
                Quick about section about the resturant and what you offer. Two
                sentences max will do.
              </p>
            </div>

            <div className="mt-5">
              <div className="w-full bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 px-4 py-2">
                <span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] p-4 tracking-wide">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default About;
