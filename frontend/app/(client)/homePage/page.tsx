import { FoodCardList } from "@/components/food/FoodCardList";
import { Navbar } from "@/components/layout/Navbar";

import { Container } from "@/components/ui/container";
import { getCategories } from "@/lib/getApi/categories";
import { getFoods } from "@/lib/getApi/foods";

const Userhomepage = async () => {
  const foods = await getFoods();
  console.log("foods", foods);
  const categories = await getCategories();

  return (
    <div className="flex w-full flex-col gap-5 items-center justify-center px-5 bg-neutral-700 ">
      <div>
        <Navbar />
        <Container />

        {categories.slice(0, 1).map((category: any) => (
          <FoodCardList
          
            key={category._id}
            foods={foods.filter((food) => food.categoryId === category._id)}
            name={category.name}
          />
        ))}

        {/* <FoodCardList foods={foods} />
        <FoodCardList foods={foods}  /> */}
      </div>
    </div>
  );
};
export default Userhomepage;
