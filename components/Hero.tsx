import { Lilita_One } from "@next/font/google";
import Image from "next/image";
import HeroImg from "../public/hero-img.jpeg";
import Button from "./Button";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className={lilitaOne.className}>
      <div className="h-full w-screen bg-[url('/hero-bg2.jpg')] bg-center md:bg-fixed bg-no-repeat bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%] shadow-xl shadow-gray-400">
        <div className="flex flex-col justify-center items-center bg-sky-500/20 h-screen w-screen">
          <div className=" text-gray-200 drop-shadow-[2px_2px_2px_black] m-10">
            <h1 className="uppercase text-center text-2xl tracking-wider md:text-4xl">
              Hand rolled bagels made fresh in Foley, AL
            </h1>
          </div>

          <div className="bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 py-2">
            <span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] p-4 tracking-wide">
              Order Online{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
