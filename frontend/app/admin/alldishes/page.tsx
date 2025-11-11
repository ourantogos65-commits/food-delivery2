"use client";
import React, { Children, useState } from "react";

import Link from "next/link";
import { AddDish } from "../_components/AddDish";
import { DishesCard } from "../_components/DishesCard";
import { DishesCategory } from "../_components/DishesCategory";

const data = [
  { id: 1, name: "iPhone 17", price: 18999 },
  { id: 2, name: "Macbook", price: 1234 },
  { id: 3, name: "Car", price: 111111 },
];

const Alldishes = () => {
  const [products, setProducts] = useState(data);

  const handleRemoveProd = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const prodAddHandler = (name, price) => {
    const newProd = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price,
    };

    setProducts([...products, newProd]);
  };

  return (
    <>
      <div className=" rounded-2xl shadow-xl mt-10 p-10 flex-col  flex justify-center gap-10  ">
        <DishesCategory />

        <div className="flex bg-white rounded-2xl p-2 justify-center gap-4">
          <div className="flex flex-wrap gap-8 justify-center w-full">
            <div className="w-[270.75px] h-[241px] items-center flex justify-center border border-accent-foreground rounded-2xl">
              <AddDish prodAddHandler={prodAddHandler} />
            </div>
            {products.map((dish) => (
              <DishesCard
                key={dish.id}
                dish={dish}
                handleRemoveProd={handleRemoveProd}
                prodAddHandler={prodAddHandler}
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
