import Image from "next/image";
import FoxNews from "../public/fox10logo.png";
import BestBaldwin from "../public/bestofbaldwin.jpeg";
import GulfMedia from "../public/gulfMedia.jpg";

import StudioTen from "../public/studio10.png";
import Link from "next/link";

function InTheNews() {
  return (
    <section>
      <div className="h-full bg-gray-200 flex flex-col items-center p-4">
        <h3 className="text-gray-500 text-center text-xl mb-4">In The News</h3>
        <div className="flex flex-col items-center space-y-4">
          <Link href="https://www.fox10tv.com/2023/01/13/bagel-boy-features-classic-spicy-boy">
            <div className=" w-full max-w-md">
              <Image className="" alt="Fox 10 News Logo" src={StudioTen} />
            </div>
          </Link>
          <Link href="https://gulfcoastmedia.com/stories/alex-warners-bagel-boy-to-open-dine-in-eating-for-dope-food-fast-in-foley,156942">
            <div className=" w-full max-w-md">
              <Image className="" alt="Gulf Coast Media Logo" src={GulfMedia} />
            </div>
          </Link>
          <Link href="https://gulfcoastmedia.com/stories/have-no-fear-bagel-boy-is-here,129543?">
            <div className="max-w-xs">
              <Image
                src={BestBaldwin}
                alt="Best of baldwin logo"
                className=""
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InTheNews;
