"use client ";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import ImgOne from "../public/carouselImgs/photo1.jpg";

const Carousel = () => {
  const slides = [
    {
      src: "carouselImgs/photo1.jpg",
    },
    {
      src: "/carouselImgs/photo2.jpg",
    },
    {
      src: "/carouselImgs/photo3.jpg",
    },
    {
      src: "/carouselImgs/photo4.jpg",
    },
    {
      src: "/carouselImgs/photo1.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  // style={{ backgroundImage: `url(${slides[2].src})` }}
  //
  return (
    <div className="bg-gray-200 w-screen h-[50vh] md:h-[70vh] lg:h-[80vh] -z-50">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-full bg-center bg-cover bg-no-repeat md:bg-cover md:bg-fixed bg duration-500 md:w-full ">
        <div className="flex h-full justify-between p-2 items-center">
          {/* Left arrow */}
          <div className="text-2xl text-gray-200 rounded-full p-2 bg-white/20 cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* <div className="h-screen w-screen">
            <Image
              src={slides[currentIndex].src}
              alt="logo"
              sizes="100vw"
              className="w-screen"
            />
          </div> */}
          {/* right arrow */}
          <div className="text-2xl text-gray-200 rounded-full p-2 bg-white/20 cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
