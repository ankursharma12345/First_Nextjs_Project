import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex gap-4 items-center">
      <div className="relative h-8 w-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />{" "}
        {/* Either we can use height and width or fill property */}
      </div>
      <span>Cart (4)</span>
    </Link>
  );
};

export default CartIcon;
