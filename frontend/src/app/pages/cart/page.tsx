import { FoodCart } from "@/components/cart/FoodChart";
import { Navication } from "@/components/layout/Navbar";
const detailPage = () => {
  return (
    <div className="m-0">
      <Navication />
      <div className="flex w-[full] p-5 h-screen flex-col gap-5 items-center justify-center  bg-gray-600 ">
        <FoodCart />
      </div>
    </div>
  );
};
export default detailPage;
