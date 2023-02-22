"use client";

import Image from "next/image";
import { Lilita_One } from "@next/font/google";
import Logo from "../public/bagel-boy-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import NavMobileLinks from "./NavMobileLinks";
import NavLinks from "./NavLinks";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="absolute w-full">
      <div className={lilitaOne.className}>
        <div className="bg-sky-400">
          <div
            className={
              !nav
                ? "flex md:flex justify-center items-center w-full h-full mr-2"
                : "bg-sky-400 flex flex-col justify-between items-center w-full h-screen fixed z-50"
            }>
            {nav ? (
              <div onClick={handleNav}>
                <NavMobileLinks />
              </div>
            ) : (
              ""
            )}

            <div className="hidden md:flex justify-center md:flex-[0_1_30%]">
              <ul className="flex space-x-3 text-white text-xl lg:text-2xl">
                <Link href="/#about">
                  <li className="">
                    <NavLinks lable="About" />
                  </li>
                </Link>

                <Link href="/">
                  <li className="">
                    <NavLinks lable="Menu" />
                  </li>
                </Link>
              </ul>
            </div>

            <div className="flex justify-center">
              <Link href="/">
                <Image src={Logo} alt="logo" height={"200"} />
              </Link>
            </div>

            <div className="hidden md:flex-[0_1_30%] md:flex justify-center text-xl lg:text-2xl ">
              <ul className="flex space-x-3 text-white">
                <Link href={"/"}>
                  <li>
                    <NavLinks lable="contact" />
                  </li>
                </Link>

                <Link href={"/"}>
                  <li className="">
                    <NavLinks lable="Locations" />
                  </li>
                </Link>
              </ul>
            </div>

            <div
              onClick={handleNav}
              className="text-white absolute right-4 top-4  md:hidden">
              {!nav ? (
                <AiOutlineMenu
                  className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
                  size={25}
                />
              ) : (
                <AiOutlineClose
                  className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
                  size={25}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
