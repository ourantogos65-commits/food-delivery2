import { DishesCategory } from "@/components/admin/DishesCategory";
import { FoodCardList } from "@/components/food/FoodCardList";
import { Navication } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/container";
const userhomepage = () => {
  return (
    <div className="flex w-[full] flex-col gap-5 items-center justify-center px-5  ">
      <div>
        <Navication />
        <Container />
        <DishesCategory />
        <FoodCardList />
        <FoodCardList />
        <FoodCardList />
      </div>
    </div>
  );
};
export default userhomepage;
