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
    <div className="flex p-10 flex-col gap-5  w-[1364px] ">
      <h1 className="text-4xl ">Appetizers</h1>
      <div className=" grid grid-cols-3 gap-5 ">
        {foods.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
};
