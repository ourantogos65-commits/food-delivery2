import { useState } from "react";
import { FoodCardList } from "../food/FoodCardList";

export const FoodCart = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full  ">
      <div className="bg-white rounded-2xl p-5  ">
        <h1>My cart</h1>
        <div className="flex gap-5 pt-5">
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
              <button onClick={() => setCount(count + 1)}>+</button>
              <span className=" justify-end w-full flex">hfjv</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-5 w-full mt-5 bg-background flex flex-col gap-5">
        <h1>Payment info</h1>
        <div>
          <p className="flex justify-between">
            items
            <span>$25.98</span>
          </p>
          <p className="flex justify-between">
            shopping
            <span>$0.99</span>
          </p>
        </div>
        <p>total</p>
        <button className="w-full bg-red-500 rounded-2xl py-1">
          {" "}
          Checkout
        </button>
      </div>
    </div>
  );
};
