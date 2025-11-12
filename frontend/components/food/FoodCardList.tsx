import { Categorytype, FoodType } from "@/lib/types";
import { FoodCard } from "./FoodCard";
import Link from "next/link";

type Props = {
  foods: FoodType[];

};

export const FoodCardList = ({ foods}: Props) => {
  return (
    <div className="flex p-10 flex-col gap-5  w-[1364px] ">
      <Link href={`/fooddetail`} className="text-4xl text-background">name</Link>
      <div className=" grid grid-cols-3 gap-5 ">
        {foods?.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
};
