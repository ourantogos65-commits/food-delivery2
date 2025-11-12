// "use client"

// import { FoodCardDetail } from "./FoodDetail";

// type Props = {
//   food: any;
// };

// export const FoodCard = ({ food }: Props) => {
//   return (
//     <div className="w-[397.33px] h-[342px] bg-white  rounded-lg  justify-center items-center flex flex-col gap-3 border">
//       <div className="w-[365.33px] border rounded-2xl h-[210px] ">
//         {/* <button
//           onClick={onClickButton}
//           className="rounded-full w-11 h-11 text-4xl items-center mt-38 ml-76 absolute "
//         >
//           +
//         </button> */}
//         <FoodCardDetail />
//       </div>

//       <div className="w-[365.33px]  flex flex-col gap-2 ">
//         <div className="flex justify-between text-3xl w-[365.33px] ">
//           <h1 className=" text-red-300">{food.foodName}</h1>
//         </div>
//         <p className="text-sm">sfvs</p>
//       </div>
//     </div>
//   );
// };
"use client";

import { FoodType } from "@/lib/types";
import { FoodCardDetail } from "./FoodDetail";
import { AddCart } from "../cart/AddCart";

type Props = {
  food: FoodType;
};

export const FoodCard = ({ food }: Props) => {
  return (
    <div className="w-[397.33px] h-[342px] bg-white  rounded-lg  justify-center items-center flex flex-col gap-3 border">
      <div className="w-[365.33px] border rounded-2xl h-[210px]">
        <button className="rounded-full w-11 h-11 text-4xl items-center mt-38 ml-76 absolute "></button>
        <AddCart />
      </div>

      <div className="w-[365.33px]  flex flex-col gap-2 ">
        <div className="flex justify-between text-3xl w-[365.33px] ">
          <h1 className=" text-red-300">{food.foodName}</h1>
        </div>
        <p className="text-sm">sfvs</p>
      </div>
    </div>
  );
};
