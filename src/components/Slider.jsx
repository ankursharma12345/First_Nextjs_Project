"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in India",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share your family ",
      image: "/slide3.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row ">
      {/* Text */}
      <div className="flex-1 items-center justify-center gap-8 font-bold flex flex-col text-red-500 bg-fuchsia-50">
        <h1 className="text-center justify-center text-5xl uppercase font-bold p-4 md:p-10 md:text-6xl lg:text-7xl">
          {slides[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 ">
          Order Now !
        </button>
      </div>
      {/* Image */}
      <div className="w-full relative flex-1">
        <Image
          src={slides[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
