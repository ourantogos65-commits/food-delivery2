"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

import { useState } from "react";

export const AddDish = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (e: any) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e: any) => {
    setPrice(Number(e.target.value));
  };

  function addDish() {
    console.log({ name, price });

    fetch("http://localhost:4000/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    });
  }

  return (
    <div className="relative ">
      <AlertDialog>
        <AlertDialogTrigger asChild className=" flex  ">
          <button className="rounded-full w-10 h-10 text-4xl  font-extralight text-background justify-center items-center  bg-[#EF4444] ">
            +
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[460px] h-[592px]">
          <AlertDialogHeader>
            <AlertDialogDescription className="flex flex-col gap-[24px]">
              <div className="flex justify-between ">
                <h1 className="text-2xl font-extrabold text-black">
                  Add new Dish to Appetizers
                </h1>
                <button className="rounded-full border w-10 h-10">x</button>
              </div>
              <div className="flex gap-5 ">
                <p>
                  Food Name
                  <p>
                    <Input value={name} onChange={nameChangeHandler} />
                  </p>
                </p>
                <p>
                  Food price
                  <p>
                    <Input
                      value={price}
                      type="number"
                      onChange={priceChangeHandler}
                    />
                  </p>
                </p>
              </div>
              {/* <p>
                Ingredients
                <blockquote>
                  <Input
                    className="h-[90px]"
                    type="text"
                    placeholder="List ing"
                  />
                </blockquote>
              </p>
              <p>
                Food image
                <blockquote>
                  <Input className="h-[138px]" type="file" />
                </blockquote>
              </p> */}
              <div className="w-full h-20 flex justify-end  ">
                <AlertDialogAction className="w-[93px] " onClick={addDish}>
                  Add Dish
                </AlertDialogAction>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
