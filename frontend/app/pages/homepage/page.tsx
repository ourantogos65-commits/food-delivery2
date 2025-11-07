import { DishesCategory } from "@/components/admin/DishesCategory";
import { FoodCardList } from "@/components/food/FoodCardList";
import { Navication } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/container";
import { getFoods } from "@/lib/getApi/getFoods";

const Userhomepage = async () => {
  const foods = await getFoods();

  console.log({ foods });

  return (
    <div className="flex w-[full] flex-col gap-5 items-center justify-center px-5  ">
      <div>
        <Navication />
        <Container />
        <DishesCategory />
        <FoodCardList foods={foods} title="Appetizers" />
        <FoodCardList foods={foods} title="Salads" />
        <FoodCardList foods={foods} title="Lunch favorites" />
      </div>
    </div>
  );
};
export default Userhomepage;
