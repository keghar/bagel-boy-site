"use client";
import Carousel from "./Carousel";
import LinkToMenuSection from "./LinkToMenuSection";

import AboutPhoto from "../public/about-img.jpg";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

function About({ abouttext, aboutimg, aboutalt }: any) {
  return (
    <div>
      <div id="about" className="h-[100vh] bg-gray-200 p-4 md:p-8">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="relative h-full w-full flex-[0_1_50%]">
            <Image
              className="rounded-xl object-contain "
              src={aboutimg}
              alt={aboutalt}
              fill
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full flex-[0_1_50%]">
            <div className=" p-4 rounded-xl shadow-xl shadow-gray-400">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 text-center tracking-wider uppercase ">
                {abouttext}
              </p>
            </div>

            <div className="mt-5">
              <Link href="about">
                <ButtonLink name="learn more"></ButtonLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default About;

{
  /* <div className="w-full bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 px-4 py-2">
<span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] p-4 tracking-wide">
  Learn More
</span>
</div> */
}
