import Image from "next/image";
import FoleyClockTower from "../../public/foley_clock.jpeg";

export default function Foley() {
  return (
    <div className="h-screen w-screen flex top-[50vh]">
      <Image
        className="object-cover object-bottom"
        alt="Foley clock tower"
        src={FoleyClockTower}
      />
    </div>
  );
}
