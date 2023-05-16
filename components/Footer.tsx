import Image from "next/image";
import FooterLogo from "../public/footerlogo2.png";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div
        id="footer"
        className="bg-[#fac113] w-screen overscroll-none flex text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-between pt-4 m-4 space-y-4 md:space-y-0">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#77c1e5] w-full md:m-none md:w-[30%] h-full">
            <span className="text-md md:text-lg lg:text-xl uppercase">
              Hours
            </span>
            <ul className="text-sm md:text-md lg:text-lg">
              <li>Monday 7am to 2pm</li>
              <li>Tuesday Closed</li>
              <li>Wednesday Closed</li>
              <li>Thursday 7am to 2pm</li>
              <li>Friday 7am to 2pm</li>
              <li>Saturday 8am to 2pm</li>
              <li>Sunday 8am to 2pm</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center rounded-xl bg-[#77c1e5] p-4 w-full md:w-[30%] h-full md:mt-none md:order-last md:-mb-4 space-y-4">
            <span className="text-center text-md md:text-lg lg:text-xl uppercase">
              Social Links
            </span>

            <div className="flex justify-center space-x-4">
              <Link href="https://www.facebook.com/bagelboyfoley">
                <SiFacebook className="text-xl" />
              </Link>

              <Link href="https://www.instagram.com/bagelboyfoley">
                <SiInstagram className="text-xl" />
              </Link>
              <Link href="https://www.tiktok.com/@bagelboyfoley">
                <SiTiktok className="text-xl" />
              </Link>
            </div>

            <div className="">
              <hr className="bg-gray-600 h-1" />
            </div>
            <div>
              <p className="text-center text-md md:text-lg lg:text-xl uppercase">
                Contact:
              </p>
              <div className="flex items-center justify-center">
                <AiFillMail />
                <Link href="mailto:bagelboyfoley@gmail.com">
                  <span className=" text-sm lg:text-lg">
                    - bagelboyfoley@gmail.com
                  </span>
                </Link>
              </div>
              <div className="flex items-center justify-center space-y-1">
                <AiFillPhone />
                <Link href="tel:251-555-5555">
                  <span className=" text-sm lg:text-lg">205-275-5502</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center basis-[34%] lg:order-2">
            <Image
              alt="Bagel Boy loves you logo"
              src={FooterLogo}
              className="min-w-md max-w-screen md:max-h-[full] rounded-xl"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
