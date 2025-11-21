import { FoodCardList } from "@/components/food/FoodCardList";

import { getFoods } from "@/lib/getApi/foods";
import { Navication } from "./_components/FoodNavication";

const FoodCardDetail = async () => {
  const foods = await getFoods();

  return (
    <div className="bg-neutral-700 h-screen">
      <Navication />
      <FoodCardList name="dsvj" foods={foods} />
    </div>
  );
};
export default FoodCardDetail;
