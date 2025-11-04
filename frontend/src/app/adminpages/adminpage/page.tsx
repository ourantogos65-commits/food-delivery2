

"use client";

import { AdminOrder } from "@/components/admin/AdminOrder";
import { AllDishes } from "@/components/admin/AllDishes";
import Link from "next/link";
import { useState } from "react";

const AdminPage = () => {
  const childrens = {
    orders: <AdminOrder />,
    allDishes:<AllDishes/>
  };

  const [child, setChild] = useState(null);

  return (
    <div className="flex items-center justify-center w-full bg-gray-200 ">
      <div className="flex w-[1440px]  h-screen gap-5  ">
        <div className="w-[205px] bg-white h-screen flex flex-col gap-10">
          <div className="flex gap-3">
            <img
              src="./admin2.jpg"
              alt=""
              className="w-10 h-10 bg-amber-500 rounded-full "
            />
            <h1 className="text-gray-400">
              <blockquote className="font-bold text-black">NomiNom</blockquote>
              swift delivery
            </h1>
          </div>
          <div className="flex items-center flex-col gap-5">
            <button
              onClick={() => setChild(childrens.orders)}
              className="w-[165px] rounded-2xl  bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white "
            >
              Food menu
            </button>
            <button
              onClick={() => setChild(childrens.allDishes)}
              className="w-[165px] rounded-2xl bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white"
            >
              orders
            </button>
          </div>
        </div>
        <div className="flex flex-col  w-[1171px] h-[948px] bg-amber-100 m-2">
          <div className="justify-between flex px-5 p-3">
            <h1>
              Orders <blockquote className="text-gray-400">32 items</blockquote>
            </h1>
            <div className="flex gap-5">
              <p>date</p>
              <p>Change delivery state</p>
            </div>
          </div>
          <div>{child}</div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
