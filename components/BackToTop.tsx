"use client";
import { useState, useEffect } from "react";
import bagelBoyBallon from "../public/bagel-boy-balloon.png";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 0);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={
        showGoTop
          ? "block fixed bottom-0 right-0 w-20 h-fit text-xs cursor-pointer"
          : "hidden"
      }
      onClick={handleScrollUp}>
      <img src="/bagel-boy-balloon.png" alt="Back to top" />
      <span>Back to top</span>
    </div>
  );
};

export default GoTopButton;
