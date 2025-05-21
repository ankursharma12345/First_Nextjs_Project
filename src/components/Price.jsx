"use client";

import React, { useEffect, useState } from "react";

const Price = ({ price, options }) => {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);

  const handleClick = (e) => {
    if (e.currentTarget.id === "prev") {
      setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    } else if (e.currentTarget.id === "next") {
      setQuantity((prev) => (prev === 9 ? 9 : prev + 1));
    }
  };

  useEffect(() => {
    setTotal(
      quantity *
        (options ? price + options[selectedBtn].additionalPrice : price)
    );
  }, [selectedBtn, quantity, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Options Container */}
      <div className="flex gap-4 justify-evenly text-1xl">
        {options?.map((btn, index) => (
          <button
            className=" min-w-[6rem] p-3 ring-1 ring-red-400 rounded-md"
            key={btn.title}
            style={{
              background: selectedBtn === index ? "rgb(248 113 113)" : "white",
              color: selectedBtn === index ? "white" : "red",
            }}
            onClick={() => setSelectedBtn(index)}
          >
            {btn.title}
          </button>
        ))}
      </div>
      {/* Quantity and Add button container */}
      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-between w-full p-2 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button id="prev" onClick={handleClick}>
              {"<"}
            </button>
            <span>{quantity}</span>
            <button id="next" onClick={handleClick}>
              {">"}
            </button>
          </div>
        </div>
        {/* Add to cart button */}
        <button className="bg-red-500 p-3 w-56 text-white uppercase ring-1 ring-red-500 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
