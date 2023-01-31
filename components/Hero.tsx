import { Lilita_One } from "@next/font/google"
import Image from "next/image";
import HeroImg from "../public/hero-img.jpeg";

const lilitaOne = Lilita_One(
    {
        subsets: ['latin'],
        weight:'400'
    }
    );

const Hero = () => {
  return (
    <div className={lilitaOne.className}>
    <div 
 className="h-screen w-screen bg-[url('/hero-bg2.jpg')] bg-center bg-fixed bg-no-repeat bg-[length:200%] md:bg-[length:150%] lg:bg-[length:100%]">
  <div className="flex justify-center items-center bg-sky-500/20 h-screen w-screen pt-20">

  
        
        <div className="flex justify-around items-center px-5 md:flex flex-col">
            {/* <div className="relative">
            <Image src={HeroImg} alt='Image of delicious bagel sandwhich' className="rounded-xl" />
            </div> */}

    <div className="text-white drop-shadow-[2px_2px_2px_black] m-10">
        <h1 className='uppercase text-center text-2xl tracking-wider md:text-4xl'>Hand rolled bagels made fresh in Foley, AL</h1>
    </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Hero