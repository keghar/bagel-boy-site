import Image from "next/image";
import FooterLogo from "../public/footerlogo.png";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="bg-[#a6c3da] w-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-around pt-4 m-4">
        <div className="flex flex-col items-center p-4 rounded-xl bg-gray-200/30 w-full md:m-none md:w-[30%] h-full">
          <p className="text-sm"> Hours:</p>
          <ul className="text-xs">
            <li>Monday 6am to 2pm</li>
            <li>Tuesday Closed</li>
            <li>Wednesday Closed</li>
            <li>Thursday 6am to 2pm</li>
            <li>Friday 6am to 2pm</li>
            <li>Saturday 6am to 2pm</li>
            <li>Sunday 6am to 2pm</li>
          </ul>
        </div>

        <div className="flex flex-col rounded-xl bg-gray-200/30 p-4 w-full md:w-[30%] h-full mt-4 md:m-none">
          <div>
            <p className="text-center">Social Links</p>

            <div className="flex justify-center">
              <SiFacebook />

              <SiInstagram />
            </div>
          </div>

          <div>
            <hr />
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
      </div>
      <div className="space-x-4">
        <Image alt="Bagel Boy loves you logo" src={FooterLogo} />
      </div>
    </div>
  );
}

export default Footer;
