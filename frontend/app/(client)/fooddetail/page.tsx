import { FoodCardList } from "@/components/food/FoodCardList";
import { getCategoryById } from "@/lib/getApi/getCategoryById";
import { getFoods } from "@/lib/getApi/getFoods";
import { Navication } from "./_components/FoodNavication";


const FoodCardDetail = async () => {
  const foods = await getFoods();

  return (
    <div className="bg-neutral-700 h-screen">
        <Navication/>
      <FoodCardList foods={foods} />
    </div>
  );
};
export default FoodCardDetail