import { getCategories } from "@/lib/getApi/categories";
import { AddDish } from "./AddDish";
import { useEffect, useState } from "react";

export const DishesCategory = () => {
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setDishes(data);
    }
    fetchCategories();
  }, []);
  return (
    <div className="w-full flex flex-col gap-5 bg-white h-[176px] rounded-2xl p-5">
      <h1 className="font-bold text-2xl">Dishes category</h1>
      <div className="flex flex-wrap gap-3">
        {dishes.map((category) => (
          <button
            key={category._id}
            onClick={() => setSelectedCategory(category.name)}
            className={`border px-4 py-1 rounded-2xl ${
              selectedCategory === category.name
                ? "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
 