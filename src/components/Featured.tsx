import React from "react";
import { featuredProducts } from "./data";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen flex flex-col h-[60vh] items-center justify-around p-4 hover:bg-fuchsia-50 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] gap-2 md:gap-2 lg:gap-4 "
          >
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-200 ">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* Text Container */}
            <div className="flex flex-1 flex-col gap-4 items-center text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
