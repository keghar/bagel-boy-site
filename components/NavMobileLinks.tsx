"use client";

import { useState } from "react";
import { Lilita_One } from "@next/font/google";
import Link from "next/link";
import NavLinks from "./NavLinks";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

function NavMobileLinks() {
  const [open, closed] = useState(false);

  const handleDropdown = () => {
    closed(!open);
  };

  return (
    <div className={lilitaOne.className}>
      <div className="flex items-center text-center text-white text-2xl mt-20 pt-20">
        <ul className="flex flex-col content-between gap-6">
          <Link href="#about">
            <li>
              <NavLinks lable="About" />
            </li>
          </Link>
          <Link href="#about">
            <li>
              <NavLinks lable="Menu" />
            </li>
          </Link>
          <Link href="#footer">
            <li>
              <NavLinks lable="Contact" />
            </li>
          </Link>

          <li onClick={handleDropdown}>
            <NavLinks lable="Locations" />
            {open ? (
              <div>
                <Link href="foley">
                  <NavLinks lable="foley" />
                </Link>
                <NavLinks lable="partners" />
              </div>
            ) : (
              "   "
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMobileLinks;
