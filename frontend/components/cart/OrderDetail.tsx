"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { FoodOrder } from "./Order";
import { FoodCart } from "./Cart";
export const OrderDetail = () => {
  const children={
    order:<FoodOrder/>,
    cart:<FoodCart/>
}
  const [child,setChild]=useState(null)
  return (
    <div>
      <Popover>
        <PopoverTrigger className="bg-white w-10 h-10 rounded-full "></PopoverTrigger>
        <PopoverContent className="w-[535px]   bg-neutral-700">
          <div className="w-[471px] flex flex-col gap-8 items-center justify-center">
            <div className="bg-white w-full h-[36px] text-center flex rounded-4xl justify-between">
              <button
                onClick={() => setChild(children.cart)}
                className={`w-[227.5px] rounded-2xl hover:bg-[#EF4444] ${
                  setChild === "children.cart" ? "bg-amber-200" : null
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setChild(children.order)}
                className="w-[227.5px] rounded-2xl hover:bg-[#EF4444] "
              >
                Order
              </button>
            </div>
            <div className="w-full">{child}</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};



// "use client";
// import React, { Children, useState } from "react";

// import Link from "next/link";
// import { FoodCart } from "./Food";
// import { AddCart } from "./AddCart";

// export const OrderDetail = () => {
//   const [products, setProducts] = useState([]);

//   const handleRemoveProd = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   return (
//     <>
//       <div className=" rounded-2xl shadow-xl mt-10 p-10 flex-col  flex justify-center gap-10  ">
//         <div className="flex bg-white rounded-2xl p-2 justify-center gap-4">
//           <div className="flex flex-wrap gap-8 justify-center w-full">
//             <div className=" items-center flex-col gap-5  flex justify-center border  border-red-500 border-dashed   rounded-2xl">
//               <AddCart />
//             </div>
//             {products.map((dish) => (
//               <FoodCart
//                 key={dish.id}
//                 dish={dish}
//                 handleRemoveProd={handleRemoveProd}
//               />
//             ))}
//           </div>
//         </div>
//       </div>{" "}
//       <div className="mt-5 ml-150"></div>
//     </>
//   );
// };
