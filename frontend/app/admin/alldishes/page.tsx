"use client";
import { useState } from "react";
import { AddDish } from "../_components/AddDish";
import { DishesCard } from "../_components/DishesCard";
import { DishesCategory } from "../_components/DishesCategory";

const Alldishes = () => {
  const [products, setProducts] = useState([]);

  const handleRemoveProd = (id:any) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // const prodAddHandler = (name, price) => {
  //   const newProd = {
  //     id: products.length ? products[products.length - 1].id + 1 : 1,
  //     name,
  //     price,
  //   };

  //   setProducts([...products, newProd]);
  // };

  return (
    <>
      <div className=" rounded-2xl shadow-xl mt-10 p-10 flex-col  flex justify-center gap-10  ">
        <DishesCategory />

        <div className="flex bg-white rounded-2xl p-2 justify-center gap-4">
          <div className="flex flex-wrap gap-8 justify-center w-full">
            <div className="w-[270.75px] h-[241px] items-center flex-col gap-5  flex justify-center border  border-red-500 border-dashed   rounded-2xl">
              <AddDish  />
              <div className="w-[154px]  text-center">
                Add new Dish to Salads
              </div>
            </div>
            {products.map((dish) => (
              <DishesCard
                key={dish}
                dish={dish}
                handleRemoveProd={handleRemoveProd}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      <div className="mt-5 ml-150"></div>
    </>
  );
};

export default Alldishes;
