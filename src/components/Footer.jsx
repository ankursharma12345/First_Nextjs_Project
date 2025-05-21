import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-5 md:p-10 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between uppercase">
      <Link href="/" className="font-bold text-xl">
        Frosto
      </Link>
      <p>@All Rights Reserved</p>
    </div>
  );
};

export default Footer;
