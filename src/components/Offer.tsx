import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:justify-between bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col text-center items-center justify-center gap-8 p-6">
        <h1 className="text-white font-bold text-5xl lg:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Enjoy the perfect combo of a juicy, flavorful burger and crispy golden
          fries. Made with fresh ingredients and cooked to perfection, its the
          ultimate treat for any time of day.
        </p>
        <h1 className="text-yellow-500 font-bold text-5xl">
          <CountDown />
        </h1>
        <button className="bg-red-500 text-white rounded-md px-6 py-3 ">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
