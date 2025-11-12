
import { FoodCardList } from "@/components/food/FoodCardList";
import { Navbar } from "@/components/layout/Navbar";

import { Container } from "@/components/ui/container";
import { getCategories } from "@/lib/getApi/getCategories";
import { getFoods } from "@/lib/getApi/getFoods";

const Userhomepage = async () => {
  const foods = await getFoods();
  console.log("foods", foods);
  const category = await getCategories();
  console.log(category);

  return (
    <div className="flex w-[full] flex-col gap-5 items-center justify-center px-5 bg-neutral-700 ">
      <div>
      <Navbar/>
        <Container />
     
        <FoodCardList foods={foods}  />
        <FoodCardList foods={foods}  />
        <FoodCardList foods={foods}  />
      </div>
    </div>
  );
};
export default Userhomepage;
