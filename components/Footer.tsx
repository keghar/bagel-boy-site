import Image from "next/image";
import FooterLogo from "../public/footerlogo.png";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Lilita_One } from "@next/font/google";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

function Footer() {
  return (
    <footer className={lilitaOne.className}>
      <div
        id="footer"
        className="bg-gray-600 w-screen overscroll-none flex text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-between pt-4 m-4 space-y-4 md:space-y-0">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#a6c3da] w-full md:m-none md:w-[30%] h-full">
            <span className="text-sm md:text-md lg:text-lg"> Hours:</span>
            <ul className="text-xs md:text-sm lg:text-md">
              <li>Monday 6am to 2pm</li>
              <li>Tuesday Closed</li>
              <li>Wednesday Closed</li>
              <li>Thursday 6am to 2pm</li>
              <li>Friday 6am to 2pm</li>
              <li>Saturday 6am to 2pm</li>
              <li>Sunday 6am to 2pm</li>
            </ul>
          </div>

          <div className="flex flex-col rounded-xl bg-[#a6c3da] p-4 w-full md:w-[30%] h-full md:mt-none md:order-last md:-mb-4 space-y-4">
            <div>
              <p className="text-center text-sm md:text-md lg:text-lg">
                Social Links
              </p>

              <div className="flex justify-center space-x-4">
                <SiFacebook />

                <SiInstagram />
              </div>
            </div>

            <div>
              <hr className="bg-gray-600 h-1" />
            </div>
            <div>
              <p className="text-center">Contact:</p>
              <div className="flex flex-col items-center">
                <AiFillMail />
                <span>bagelboyfoley@gmail.com</span>
              </div>
              <div className="flex flex-col items-center">
                <AiFillPhone />
                <span>251-555-5555</span>
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
