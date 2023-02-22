import { Lilita_One } from "@next/font/google";
import Link from "next/link";
import NavLinks from "./NavLinks";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

function NavMobileLinks() {
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
          <Link href="#about">
            <li>
              <NavLinks lable="Contact" />
            </li>
          </Link>
          <Link href="#about">
            <li>
              <NavLinks lable="Locations" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavMobileLinks;
