import { FoodCardList } from "@/src/components/food/FoodCardList";
import { Container } from "@/src/components/ui/container";
const userhomepage = () => {
  return (
    <div className="flex w-[full] flex-col gap-5 items-center justify-center px-5 bg-gray-600 ">
      <Container />
      <FoodCardList />
      <FoodCardList />
      <FoodCardList />
    </div>
  );
};
export default userhomepage;
