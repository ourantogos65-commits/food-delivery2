import { useState } from "react";
import { FoodCardList } from "../food/FoodCardList";

export const FoodOrder = () => {
  const [count,setCount]=useState(0)
  return (
    <div className="bg-white w-full rounded-2xl p-5 flex flex-col gap-3">
      <h1>My cart</h1>
      <div className="flex gap-5">
        <img
          className="w-[124px] h-[120px] rounded-2xl"
          src="/food.png"
          alt=""
        />
        <div>
          <h1 className="text-red-500 font-extrabold">Sunshine Stackers </h1>
          <p>
            Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar.
          </p>
          <div className="flex gap-3 w-full">
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count +1)}>+</button>
            <span className="justify-between">hfjv</span>
          </div>
        </div>
      </div>
    </div>
  );
};
 