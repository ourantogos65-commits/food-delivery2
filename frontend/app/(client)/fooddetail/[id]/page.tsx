import { FoodCardList } from "@/components/food/FoodCardList";
import { getCategoryById } from "@/lib/getApi/categories";



export const FoodCardDetail = async ({params}:{params:{id:string}}) => {
  const CategoryById = await getCategoryById(params.id);

  return (
    <div>
      <FoodCardList name="sdhl" foods={CategoryById} />
    </div>
  );
};
