"use client";

import { Button } from "../../../components/ui/button";

 const AdminOrder = () => {
  const dishes = [
    { id: 1, name: "Pizza", price: 12 },
    { id: 2, name: "Burger", price: 8 },
    { id: 3, name: "Sushi", price: 15 },
    { id: 4, name: "Sushi", price: 15 },
    { id: 5, name: "Sushi", price: 15 },
  ];

  return (
    <div className="p-5 w-full  rounded-2x flex flex-col gap-5">
      <div className="p-4  bg-white rounded-2xl ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mb-4 ">
            Orders{" "}
            <blockquote className="text-lg text-gray-400">32items</blockquote>
          </h2>
          <div className="flex gap-2">
            <Button className="border rounded-4xl ">
              13 June 2023 - 14 July 2023
            </Button>
            <Button className="rounded-4xl border">
              Change delivery state
            </Button>
          </div>
        </div>

        <div className="flex flex-col">
          {dishes.map((dish) => (
            <div key={dish.id} className=" bg-white border  w-full h-[52px]  ">
              <h3 className="font-semibold">{dish.name}</h3>
              <p>${dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdminOrder