"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNavbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();
  return (
    <div className="flex items-center justify-between w-full h-screen bg-gray-200 ">
      <div className="flex w-full  h-screen gap-5  ">
        <div className="w-[205px] p-5 bg-white h-screen flex flex-col gap-10">
          <div className="flex gap-3 pt-4">
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
            <Link href="/admin/alldishes">
              <button
                className={`${
                  currentPath === "/admin/alldishes " ? "bg-gray-800" : null
                } w-[165px] rounded-2xl  bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white `}
              >
                Food menu
              </button>
            </Link>
            <Link href="/admin/order">
              <button
                className={`${
                  currentPath === "/admin/order " ? "bg-gray-800" : null
                } w-[165px] rounded-2xl  bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white `}
              >
               Orders
              </button>
            </Link>

            {/* <button
          onClick={orders}
          //   onClick={() => setChild(childrens.orders)}
          className="w-[165px] rounded-2xl bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white"
        >
          orders
        </button> */}
          </div>
        </div>
        <div className="flex flex-col  w-full h-screen  m-3">
          <div className="  px-5 p-3">
            <div className="flex justify-end gap-5">
              <img src="/admin.jpg" alt="" className="w-10 rounded-full" />
            </div>
          </div>

          <div>{children} </div>
        </div>
      </div>
    </div>
  );
}
