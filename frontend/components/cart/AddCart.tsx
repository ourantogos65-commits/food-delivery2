
"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FoodType } from "@/lib/types";
import { useState } from "react";

type AddCartProps = {
  food: FoodType;
};

export const AddCart = ({ food }: AddCartProps) => {
  const [count, setCount] = useState(1); 


  const totalPrice = food.price * count;

  function addcart() {
    fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        foodId: food._id,
        count: count,
        totalPrice: totalPrice,
      }),
    });

 
  }

  return (
    <div className="relative">
      <AlertDialog>
        
        <AlertDialogTrigger asChild>
          <Button className="rounded-full w-11 h-11 text-4xl mt-38 ml-7 absolute">
            +
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="w-[800px] h-[412px]">
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex gap-5 justify-center">
                <img
                  src="/food.png"
                  alt={food.name}
                  className="w-[377px] h-[364px] object-cover rounded-lg"
                />

                <div className="mt-5 flex flex-col justify-between">
                  <h1 className="text-3xl font-bold text-red-500">
                    {food.name}
                  </h1>

                  <p className="mb-12 text-gray-600">Description</p>

                  <div className="flex mt-20 justify-between w-full">
                    <div>
                      <p className="text-lg text-gray-800">Total Price</p>
                      <h1 className="text-2xl font-bold text-black">
                        ${totalPrice}
                      </h1>
                    </div>

                    <div className="flex gap-3 items-center">
                      <button
                        onClick={() =>
                          setCount((p) => (p > 1 ? p - 1 : 1))
                        }
                        className="w-8 border h-8 rounded-full text-center"
                      >
                        -
                      </button>

                      <p className="w-6 text-center">{count}</p>

                      <button
                        onClick={() => setCount(count + 1)}
                        className="border w-8 h-8 rounded-full text-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <AlertDialogAction onClick={addcart}>
                    Add to Cart
                  </AlertDialogAction>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
