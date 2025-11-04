import { FoodCard } from "./FoodCard";

export const FoodCardList = () => {
  const foods = [
    { title: "gydf" },
    { title: "gdk" },
    { title: "gdk" },
    { title: "gdk" },
    { title: "gdk" },
    { title: "gdk" },
  ];

  return (
    <div className="flex w-[1264px] flex-col gap-3  ">
      <h1 className="text-4xl ">Appetizers</h1>
      <div className="flex flex-wrap gap-5">
        {foods.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
};
