"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [showCrossBtn, setShowCrossBtn] = useState(false);

  const user = false;

  const menus = [
    { id: 1, title: "HomePage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/working" },
    { id: 4, title: "Contact", url: "/contact" },
  ];

  return (
    <div>
      {!showCrossBtn ? (
        <Image
          src="/open.png"
          alt=""
          height={20}
          width={20}
          onClick={() => setShowCrossBtn(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          height={20}
          width={20}
          onClick={() => setShowCrossBtn(false)}
        />
      )}
      {showCrossBtn && (
        <div className="text-white w-full flex-col gap-8 bg-red-500 absolute left-0 top-24 h-[calc(100dvh-6rem)] flex items-center justify-center text-3xl z-10   ">
          {menus.map((items) => (
            <Link
              href={items.url}
              key={items.id}
              onClick={() => setShowCrossBtn(false)}
            >
              {items.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setShowCrossBtn(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setShowCrossBtn(false)}>
              Orders
            </Link>
          )}
          <CartIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;
