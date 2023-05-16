import Image from "next/image";
import HeroImg from "../public/hero-bg2.jpg";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

const Hero = ({ heroimg, herotext, heroalt }: any) => {
  return (
    <div>
      <div className="h-full w-screen">
        <div className="h-screen w-[200%] left-[-50%] fixed -z-50 md:w-[150%] md:left-[-25%] lg:bottom-[10%] lg:left-[-25%] lg:w-[150%] xl:left-0 xl:w-full xl:bottom-[15%]">
          <Image className="" alt={heroalt} src={heroimg} />
        </div>
        <div className="flex flex-col justify-center items-center bg-sky-500/20 h-screen w-screen">
          <div className=" text-gray-200 drop-shadow-[2px_2px_2px_black] m-10">
            <h1 className="uppercase text-center text-2xl tracking-wider md:text-4xl">
              {herotext}
            </h1>
          </div>
          <div className=" flex space-x-5 pb-10  text-gray-200 drop-shadow-[2px_2px_2px_black] uppercase text-center text-lg md:text-xl">
            <div className="space-x-5 cursor-pointer">
              <Link href="foley">
                <span>Foley, AL</span>
              </Link>
              <Link href="gulfshores">
                <span>Gulf Shores, AL</span>
              </Link>
              <Link href="partners">
                <span>partners</span>
              </Link>
            </div>
          </div>
          <div className="flex space-x-10">
            <Link href="https://www.tableneeds.net/restaurants/bagelboy/bagelboy/order/menu">
              <ButtonLink name="Order Online" />
            </Link>

            <Link href="https://www.doordash.com/store/bagel-boy-foley-24386687">
              <ButtonLink name="Delivery" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// bg-[url('/hero-bg2.jpg')] bg-center md:bg-fixed bg-no-repeat bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%]

{
  /* <div className="bg-[#ec5558] rounded-2xl shadow-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 py-2">
<span className="text-gray-200 uppercase drop-shadow-[2px_2px_2px_black] p-4 tracking-wide">
  Order Online
</span>
</div> */
}
