import { FoodType } from "@/lib/types";
import { FoodCard } from "./FoodCard";

type Props = {
  foods: FoodType[];
  title: string;
};
export const FoodCardList = ({ foods, title }: Props) => {
  return (
    <div className="flex p-10 flex-col gap-5  w-[1364px] ">
      <h1 className="text-4xl ">{title}</h1>
      <div className=" grid grid-cols-3 gap-5 ">
        {foods?.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
};
