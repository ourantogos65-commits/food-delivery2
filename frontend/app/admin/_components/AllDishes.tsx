"use client";

import { AlertDialog } from "@/components/ui/alert-dialog";
import { DishesCategory } from "./DishesCategory";
import { AddDish } from "./AddDish";

export const AllDishes = () => {
  // const dishes = [
  //   { id: 1, name: "Pizza", price: 12 },
  //   { id: 2, name: "Burger", price: 8 },
  //   { id: 3, name: "Sushi", price: 15 },
  //   { id: 4, name: "Sushi", price: 15 },
  //   { id: 5, name: "Sushi", price: 15 },
  // ];

  return (
    <div className="p-5 w-full  rounded-2x flex flex-col gap-5">
      <DishesCategory />
      
      <div className="bg-white rounded-2xl p-4 ">
        <h2 className="text-2xl  mb-4">Food Menu</h2>
        <div className="flex flex-wrap gap-5  ">
          <div className="p-3 bg-white border border-accent-foreground rounded-xl w-[270.75px] h-[241px] items-center justify-center ">
           
      
          </div>
          {/* <div  className="p-3 bg-white border rounded-xl w-[270.75px] h-[241px]  ">
           <img src="/food.png" alt=""  className="h-[129px] w-[238.75px] pl-2 rounded-xl "/>
            <h3 className="font-semibold">dish name</h3>
            <p>$ price</p>
          </div>
        */}
        </div>
      </div>
    </div>
  );
};
