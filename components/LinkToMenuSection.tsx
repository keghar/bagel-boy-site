import { Lilita_One } from "@next/font/google";
import Image from "next/image";
import HeroImg from "../public/hero-img.jpeg";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

function LinkToMenuSection() {
  return (
    <div className={lilitaOne.className}>
      <div className="bg-[#f4bc22] h-[50vh] md:h-[30vh] w-full flex flex-col justify-center items-center shadow-xl shadow-gray-400 p-10">
        <div>
          <h2 className="text-gray-600 text-center text-2xl tracking-widest uppercase md:text-3xl lg:text-4xl">
            Check out our delicious bagels, bagel sandwhiches, schmers and ice
            coffee
          </h2>
        </div>

        <div className="mt-5">
          <Link href="https://www.tableneeds.net/restaurants/bagelboy/bagelboy/order/www.tableneeds.net">
            <ButtonLink name="Menu"></ButtonLink>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LinkToMenuSection;

//   <div className="bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 px-4 py-2">
// <span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] p-4 tracking-wide">
// Menu
// </span>
// </div>
