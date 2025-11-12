import { AddDish } from "./AddDish";



export const DishesCategory = () => {
  const dishes = [{ title: "gdshvj" }, { title: "ghk" }, { title: "ghk" }];
  return (
    <div className="w-full flex flex-col gap-5 bg-white h-[176px] rounded-2xl p-5">
      <h1 className="font-bold text-2xl">Dishes category</h1>
      <div className="flex flex-wrap gap-3">
        {dishes.map((items, index) => {
          return (
            <div key={index}>
              <div className="border rounded-2xl py-1 px-5 flex gap-3">
                {items.title}{" "}
                <span className="bg-gray-800 rounded-4xl px-3 text-accent">
                  {" "}
                  1
                </span>
              </div>
            </div>
          );
        })}
       
      </div>
     
    </div>
  );
};
