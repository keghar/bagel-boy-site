"use client"

import Image from "next/image";
import { Lilita_One } from '@next/font/google';
import Logo from '../public/bagel-boy-logo.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import React, {useState} from 'react';
import Link from "next/link";
import NavMobileLinks from "./NavMobileLinks";
import NavLinks from "./NavLinks";

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
    <nav className="absolute z-10 top 0 w-full">
    <div className={lilitaOne.className}>
<div className="bg-sky-300">
        <div className={
            !nav ? (
                'flex md:flex justify-center items-center w-full h-full px-5 pt-5 ') : 
                ('flex flex-col justify-between items-center w-full h-screen ')
                
                }>
                    

                    {nav ? ( <div onClick={handleNav}>
                        <NavMobileLinks />
                        </div>
                        
                    ):('')}


            <div className="hidden md:flex justify-center">
               
                <ul className="flex justify-end text-white text-2xl">
                    
                    <Link href='/#about'> 
                    <li> 
                    <NavLinks lable='About' /> 
                    </li>
                    </Link>
                    
                    <Link href='/'>
                    <li className="ml-5"> 
                    <NavLinks lable='Menu' /> 
                    </li>
                    </Link>

                </ul>
            </div>


            <div className={!nav ?("md:flex justify-items-center ml-5") : ('')}>
                <Link href='/'><Image src={Logo} alt='logo' height={'200'} /></Link>
            </div>

            <div className="hidden md:flex justify-center text-2xl mx-5">

                <ul className="flex justify-start text-white">

                    <Link href={'/'}>
                    <li>
                    <NavLinks lable='contact'/> 
                    </li>
                    </Link>

                    <Link href={'/'}>
                    <li className="ml-5">
                    <NavLinks lable='Locations' />
                    </li>
                    </Link>

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
             </div>
             

    

    </nav>
  )
}

export default Navbar

