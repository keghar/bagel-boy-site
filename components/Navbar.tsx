import Image from "next/image";
import { Lilita_One } from '@next/font/google';
import Logo from '../public/bagel-boy-logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

const lilitaOne = Lilita_One(
{
    subsets: ['latin'],
    weight:'400'
}
);


function Navbar() {
  return (
    <nav className={lilitaOne.className}>
<div className="bg-sky-400">
        <div className='flex justify-center items-center w-full h-full px-5 pt-10'>
            <div className="hidden md:flex justify-center">
                <ul className="flex justify-end text-white text-2xl">
                    <li className="cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-120 ease-in duration-300">ABOUT</li>
                    <li className="ml-10 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-120 ease-in duration-300">MENU</li>
                </ul>
            </div>

            <div className="flex justify-items-center ml-5">
                 <Image className="" src={Logo} alt='logo' height={'200'} />
            </div>

            <div className="hidden md:flex justify-center text-2xl ml-5">
                <ul className="flex justify-start text-white ">
                    <li className=" cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-120 ease-in duration-300">CONTACT</li>
                    <li className="ml-10 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-120 ease-in duration-300">LOCATIONS</li>
                </ul>
                
            </div>
            <div className="text-white absolute right-4 top-4  md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar