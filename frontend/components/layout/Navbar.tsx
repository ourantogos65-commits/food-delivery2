import Link from "next/link";
import { AppSidebar } from "../cart/CartInfo";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Sidebar } from "lucide-react";

export const Navication = () => {
  return (
    <div className="px-[88px] py-[3px] flex  justify-between w-full bg-black">
      <div className="flex w-[146px] items-center gap-3 ">
        <div className="w-[46px] h-[37.29px]  bg-red-300 " />
        <div className="flex flex-col ">
          <h1 className=" text-2xl text-red-400 ">
            <span className="text-white">Nom</span>Nom
          </h1>
          <p className="text-sm text-accent">swift delivery</p>
        </div>
      </div>
      
      <Link href="/adminpages/adminpage">
        <img src="/admin.jpg " className="rounded-full w-10 h-10" alt="" />
      </Link>
    </div>
  );
};
