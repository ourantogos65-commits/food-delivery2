import { FoodCardList } from "@/components/food/FoodCardList";
import { getCategoryById } from "@/lib/getApi/getCategoryById";


export const FoodCardDetail = async ({params}:{params:{id:string}}) => {
  const CategoryById = await getCategoryById(params.id);

  return (
    <div>
      <FoodCardList foods={CategoryById} />
    </div>
  );
};
