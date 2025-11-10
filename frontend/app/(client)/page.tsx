// "use client";
// import Link from "next/link";

// const Page = () => {
//   return (
//     <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
//       <Link href="/pages/signup">signup</Link>
//       <Link href="/pages/login">Login</Link>
//     </div>
//   );
// };
// export default Page;
// "use client";
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
//       <Link href="/pages/signup">signup</Link>
//       <Link href="/pages/login">Login</Link>
//     </div>
//   );
// };
// export default HomePage;
import { DishesCategory } from "../admin/_components/DishesCategory";
import { FoodCardList } from "@/components/food/FoodCardList";
import { Navication } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/container";
import { getFoods } from "@/lib/getApi/getFoods";

const Userhomepage = async () => {
    const foods = await getFoods();
 

  return (
    <div className="flex w-[full] flex-col gap-5 items-center justify-center px-5  ">
      <div>
        <Navication />
        <Container />
        <DishesCategory />
        <FoodCardList foods={foods} title="foods" />
        <FoodCardList foods={foods} title="Salads" />
        <FoodCardList foods={foods} title="Lunch favorites" />
      </div>
    </div>
  );
};
export default Userhomepage;
