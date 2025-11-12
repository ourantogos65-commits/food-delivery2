import Link from "next/link";
import { OrderDetail } from "../../../../components/cart/OrderDetail";

export const Navication=()=>{
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
          <OrderDetail />
          <Link href="/admin">
            <img src="/admin.jpg " className="rounded-full w-10 h-10" alt="" />
          </Link>
        </div>
      </div>
    );
}