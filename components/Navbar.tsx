"use client"

import Image from "next/image";
import { Lilita_One } from '@next/font/google';
import Logo from '../public/bagel-boy-logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import React, {useState} from 'react';
import Link from "next/link";

const lilitaOne = Lilita_One(
{
    subsets: ['latin'],
    weight:'400'
}
);

function Navbar() {

const [nav, setNav] = useState(false);

const handleNav = () => {
    setNav(!nav);
}

  return (
    <nav className={lilitaOne.className}>
<div className="bg-[#a6c6da]">
        <div className={
            !nav ? (
                'flex md:flex justify-center items-center w-full h-full px-5 pt-5') : ('flex flex-col justify-between items-center w-full h-screen')}>
                    

                    {nav ? (
                        <div className={lilitaOne.className}>
                        <div className="flex items-center text-center text-white text-2xl mt-20 pt-20">
                            <ul className="flex flex-col content-between gap-6">
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">ABOUT </li>
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">MENU</li>
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">CONTACT</li>
                                <li className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">LOCATIONS</li>
                            </ul>
                        </div>
                        </div>
                    ):('')}


            <div className="hidden md:flex justify-center">
                <ul className="flex justify-end text-white text-2xl">
                    <li className="cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-110 ease-in duration-300">ABOUT</li>
                    <li className="mx-5 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-110 ease-in duration-300">MENU</li>
                </ul>
            </div>


            <div className={!nav ?("md:flex justify-items-center ") : ('')}>
                 <Image src={Logo} alt='logo' height={'200'} />
            </div>

            <div className="hidden md:flex justify-center text-2xl mx-5">
                <ul className="flex justify-start text-white ">
                    <li className=" cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-110 ease-in duration-300">CONTACT</li>
                    <li className="ml-5 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:scale-110 ease-in duration-300">LOCATIONS</li>
                </ul>
                
            </div>
            
         
            <div onClick={handleNav} className="text-white absolute right-4 top-4  md:hidden">
                {!nav ? (
                <AiOutlineMenu className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ' size={25} />
                ) : ( 
                <AiOutlineClose className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ' size={25} /> )}
            </div> 

            </div>
             </div>
             

    

    </nav>
  )
}

export default Navbar

