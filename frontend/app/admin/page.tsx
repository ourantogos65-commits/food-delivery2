"use client";

import { AllDishes } from "@/app/admin/_components/AllDishes";
import { AdminNavbar } from "@/app/admin/_components/AminNavbar";
import { AdminOrder } from "./_components/FoodOrder";
import { useState } from "react";

const AdminLayout = () => {
  const childrens = {
    orders: <AdminOrder />,
    allDishes: <AllDishes />,
  };

  const [child, setChild] = useState(null);

  return (
    <div className="flex items-center justify-between w-full h-screen bg-gray-200 ">
      <div className="flex w-full  h-screen gap-5  ">
        <AdminNavbar
          alldishes={() => setChild(childrens.allDishes)}
          orders={() => setChild(childrens.orders)}
        />
        <div className="flex flex-col  w-full h-screen  m-3">
          <div className="  px-5 p-3">
            <div className="flex justify-end gap-5">
              <img src="/admin.jpg" alt="" className="w-10 rounded-full" />
            </div>
          </div>

          <div> {child}</div>
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;
