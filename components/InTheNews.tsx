import Image from "next/image";
import FoxNews from "../public/fox10logo.png";
import BestBaldwin from "../public/bestofbaldwin.jpeg";

function InTheNews() {
  return (
    <div className="h-[40vh] bg-gray-200 flex flex-col justify-around">
      <h3 className="text-gray-600 text-center"> In The News</h3>
      <div className="flex">
        <div className="h-60 w-full relative flex-[0_1_50%]">
          <Image
            className="object-contain"
            alt="Fox 10 News Logo"
            src={FoxNews}
            fill
          />
        </div>
        <div className="relative h-60 w-full flex-[0_1_50%]">
          <Image
            className="object-contain"
            alt="Best of baldwin logo"
            src={BestBaldwin}
            fill
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default InTheNews;
