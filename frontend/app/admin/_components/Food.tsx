import { FoodType } from "@/lib/types";
import Link from "next/link";

type Props = {
  food: FoodType;
};
export const Food = ({ food }: Props) => {
  return (
    <Link
      href={"/pages/cart"}
      className="w-[397.33px] h-[342px] bg-white  rounded-lg  justify-center items-center flex flex-col gap-3 "
    >
      <div className="w-[365.33px] border rounded-2xl h-[210px]"></div>
      <div className="w-[365.33px]  flex flex-col gap-2 ">
        <div className="flex justify-between text-3xl w-[365.33px] ">
          <h1 className=" text-red-300">{food.title}</h1>
          <p>fdbfdb</p>
        </div>
        <p className="text-sm">sfvs</p>
      </div>
    </Link>
  );
};
