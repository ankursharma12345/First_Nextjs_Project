"use client";

import { pizzas } from "@/components/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  // const [showBtn, setShowBtn] = useState(false);

  // const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
  //   if (e?.target instanceof HTMLElement && e.target.id === "price") {
  //     setShowBtn(true);
  //   } else if (e?.target instanceof HTMLElement && e.target.id === "btn") {
  //     setShowBtn(false);
  //   }
  // };
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className=" group w-full h-[60vh] border-b-2 border-r-2 border-red-500 md:w-1/3 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between odd:bg-amber-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%] object-contain">
              <Image src={item.img} alt="" fill />
            </div>
          )}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            {/* {!showBtn && (
              <h2 id="price" onMouseEnter={(e) => handleMouse(e)}>
                {item.price}
              </h2>
            )}
            {showBtn && (
              <button
                id="btn"
                onMouseLeave={(e) => handleMouse(e)}
                className="text-white rounded-md p-2 bg-red-500 uppercase"
              >
                Add to Cart
              </button>
            )} */}
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="text-white rounded-md p-2 bg-red-500 uppercase hidden group-hover:block">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
