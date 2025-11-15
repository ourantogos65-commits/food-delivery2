
"use client";
import { useEffect, useState } from "react";
import { getFoods } from "@/lib/getApi/foods";

export const FoodCart = () => {
  const [foods, setFoods] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchFoods = async () => {
      const data = await getFoods();
   const foods=data.data
    };
    fetchFoods();
  }, []);
 

  if (!foods) return <p>Loading...</p>;

  const totalPrice = foods.price * count+0.99 ;

  return (
    <div className="w-full">
     
      <div className="bg-white rounded-2xl p-5">
        <h1>My cart</h1>

        <div className="flex gap-5 pt-5">
          <img
            className="w-[124px] h-[120px] rounded-2xl"
            src="/food.png"
            alt={foods.name}
          />

          <div>
            <h1 className="text-red-500 font-extrabold">{foods.name}</h1>
            <p>{foods.description}</p>

            <div className="flex gap-3 items-center mt-2">
              <button
                onClick={() => count > 1 && setCount(count - 1)}
                className="border w-8 h-8 rounded-full"
              >
                -
              </button>

              <p className="w-6 text-center">{count}</p>

              <button
                onClick={() => setCount(count + 1)}
                className="border w-8 h-8 rounded-full"
              >
                +
              </button>

              <p className="ml-4 font-bold">${foods.price * count}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-5 w-full mt-5 bg-background flex flex-col gap-5">
        <h1>Payment info</h1>

        <div>
          <p className="flex justify-between">
            items
            <span>${foods.price * count}</span>
          </p>
          <p className="flex justify-between">
            shipping
            <span>$0.99</span>
          </p>
        </div>

        <p className="flex justify-between text-lg font-bold">
          total
          <span>${totalPrice.toFixed(2)}</span>
        </p>

        <button className="w-full bg-red-500 rounded-2xl py-2 text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};
