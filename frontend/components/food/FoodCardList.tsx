import { Categorytype, FoodType } from "@/lib/types";
import { FoodCard } from "./FoodCard";
import Link from "next/link";

type Props = {
  foods: FoodType[];
 name:string
};

export const FoodCardList = ({ name, foods }: Props) => {
  return (
    <div className="flex p-10 flex-col gap-5  w-[1364px] ">
      <h2 className="text-3xl font-semibold text-background capitalize">
        {name}
      </h2>

      <div  className=" grid grid-cols-3 gap-5 ">
        
         {foods?.map((food) => (
<Link href={}>
<FoodCard  food={food} />
</Link>
          
        ))}
      
       
      </div>
    </div>
  );
};

