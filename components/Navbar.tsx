"use client";

import Image from "next/image";

import Logo from "../public/bagel-boy-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Link from "next/link";
import NavMobileLinks from "./NavMobileLinks";
import NavLinks from "./NavLinks";
import { SiFacebook, SiInstagram } from "react-icons/si";

function Navbar() {
  const [open, closed] = useState(false);

  const handleDropdown = () => {
    closed(!open);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="absolute w-full">
      <div>
        <div className="bg-sky-300">
          <div
            className={
              !nav
                ? "flex md:flex justify-center items-center w-full h-full mr-2"
                : "bg-sky-300 flex flex-col justify-between items-center w-full h-screen fixed z-50"
            }>
            {nav ? (
              <div>
                <div className="flex items-center text-center text-white text-2xl mt-20 pt-20">
                  <ul className="flex flex-col content-between gap-6">
                    <Link href="about">
                      <li onClick={handleNav}>
                        <NavLinks lable="About" />
                      </li>
                    </Link>
                    <Link href="https://www.tableneeds.net/restaurants/bagelboy/bagelboy/order/www.tableneeds.net">
                      <li onClick={handleNav}>
                        <NavLinks lable="Menu" />
                      </li>
                    </Link>
                    <Link href="#footer">
                      <li onClick={handleNav}>
                        <NavLinks lable="Contact" />
                      </li>
                    </Link>

                    <li onClick={handleDropdown}>
                      <NavLinks lable="Locations" />
                      {open ? (
                        <div className="text-lg">
                          <div>
                            <Link href="foley">
                              <div onClick={handleNav}>
                                <NavLinks lable="foley" />
                              </div>
                            </Link>
                            <Link href="gulfshores">
                              <div onClick={handleNav}>
                                <NavLinks lable="gulf shores" />
                              </div>
                            </Link>
                            <Link href="partners">
                              <div onClick={handleNav}>
                                <NavLinks lable="partners" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <div className="flex justify-center space-x-4">
                        <Link href="https://www.facebook.com/bagelboyfoley">
                          <SiFacebook className="text-xl" />
                        </Link>

                        <Link href="https://www.instagram.com/bagelboyfoley">
                          <SiInstagram className="text-xl" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="hidden md:flex justify-center md:flex-[0_1_30%]">
              <ul className="flex space-x-3 text-white text-xl lg:text-2xl">
                <Link href="about">
                  <li className="">
                    <NavLinks lable="About" />
                  </li>
                </Link>

                <Link href="https://www.tableneeds.net/restaurants/bagelboy/bagelboy/order/www.tableneeds.net">
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
              <ul className="flex space-x-3 pr-3 text-white">
                <Link href={"/"}>
                  <li className="">
                    <NavLinks lable="contact" />
                  </li>
                </Link>

                <li onClick={handleDropdown}>
                  <NavLinks lable="Locations" />

                  {open ? (
                    <div className="absolute flex flex-col bg-sky-300 text-base">
                      <Link href="foley">
                        <NavLinks lable="foley" />
                      </Link>
                      <Link href="gulfshores">
                        <NavLinks lable="gulf shores" />
                      </Link>

                      <Link href="partners">
                        <NavLinks lable="partners" />
                      </Link>
                    </div>
                  ) : (
                    "   "
                  )}
                </li>
              </ul>
              <div></div>
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
