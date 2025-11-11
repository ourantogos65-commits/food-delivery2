import { AddDish } from "./AddDish";
import { DishesCategory } from "./DishesCategory";

type Props = {
  dish: any;
  handleRemoveProd: any;
  prodAddHandler: any;
};

export const DishesCard = ({
  dish,
  handleRemoveProd,
  prodAddHandler,
}: Props) => {
  return (
  
      <div className="flex flex-col gap-5  ">
        <div className="p-3 bg-white border rounded-xl w-[270.75px] h-[241px]  ">
          <img
            src="/food.png"
            alt=""
            className="h-[129px] w-[238.75px] pl-2 rounded-xl "
          />
          <h3 className="font-semibold justify-between flex">
            {dish.name} <span>$ {dish.price}</span>
          </h3>
        </div>
        <button
          onClick={() => handleRemoveProd(dish.id)}
          className="px-4 py-1  bg-red-100 text-red-700 font-semibold rounded-full shadow-sm hover:bg-red-300  transition duration-500"
          title="Remove"
        >
          Remove
        </button>
      </div>
   
  );
};
