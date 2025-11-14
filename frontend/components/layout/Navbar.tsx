"use client";
import { useState } from "react";
import { OrderDetail } from "../cart/OrderDetail";
import Link from "next/link";

export const Navbar = () => {
  const [login, setLogin] = useState(false);
  if (!login) {
    return (
      <div className="px-[88px] py-[3px] flex  justify-between w-full bg-black">
        <div className="flex w-[146px] items-center gap-3 ">
          <img src="/logo.svg" className="w-[46px] h-[37.29px]  "></img>
          <div className="flex flex-col ">
            <h1 className=" text-2xl text-red-400 ">
              <span className="text-white">Nom</span>Nom
            </h1>
            <p className="text-sm text-accent">swift delivery</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="bg-white w-[251px] h-[36px] rounded-2xl  p-1 flex">
            <p>Add Location</p>
          </div>
          <div className="w-[188px] h-[104px] rounded-2xl font-extrabold bg-white text-center pt-2">
            <h1>Test@gamil.com</h1>
            <button onClick={()=>setLogin(true)}>Login</button>
          </div>

          {/* <Link href="/admin">
          <img src="/admin.jpg " className="rounded-full w-10 h-10" alt="" />
        </Link> */}
        </div>
      </div>
    );
  }

  else {<div className="px-[88px] py-[3px] flex  justify-between w-full bg-black">
    <div className="flex w-[146px] items-center gap-3 ">
      <img src="/logo.svg" className="w-[46px] h-[37.29px]  "></img>
      <div className="flex flex-col ">
        <h1 className=" text-2xl text-red-400 ">
          <span className="text-white">Nom</span>Nom
        </h1>
        <p className="text-sm text-accent">swift delivery</p>
      </div>
    </div>
    <div className="flex gap-4 ">
      <OrderDetail />
      <Link href="/admin">
        <img src="/admin.jpg " className="rounded-full w-10 h-10" alt="" />
      </Link>
    </div>
  </div>}
  // <div className="px-[88px] py-[3px] flex  justify-between w-full bg-black">
  //   <div className="flex w-[146px] items-center gap-3 ">
  //     <img src="/logo.svg" className="w-[46px] h-[37.29px]  "></img>
  //     <div className="flex flex-col ">
  //       <h1 className=" text-2xl text-red-400 ">
  //         <span className="text-white">Nom</span>Nom
  //       </h1>
  //       <p className="text-sm text-accent">swift delivery</p>
  //     </div>
  //   </div>
  //   <div className="flex gap-4 ">
  // <div className="bg-white w-[251px] h-[36px] rounded-2xl  p-1 flex" >

  //   <p>Add Location</p>
  // </div>
  // <div   className="w-[188px] h-[104px] rounded-2xl font-extrabold bg-white text-center pt-2">
  //   <h1>Test@gamil.com</h1>

  // </div>

  //     {/* <Link href="/admin">
  //       <img src="/admin.jpg " className="rounded-full w-10 h-10" alt="" />
  //     </Link> */}
  //   </div>
  // </div>
};
