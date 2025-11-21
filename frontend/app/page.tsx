// "use client";
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
//       <Link href="/signup">signup</Link>
//       <Link href="/login">Login</Link>
//     </div>
//   );
// };
// export default HomePage;

import { Navbar } from "@/components/layout/Navbar";
import { getCategories } from "@/lib/getApi/categories";
import { FoodCardList } from "@/components/food/FoodCardList";

const Userhomepage = async () => {
  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="flex flex-col gap-5 bg-neutral-700 min-h-screen">
      <Navbar />

      <div
        className="w-full h-150 bg-cover bg-center"
        style={{ backgroundImage: "url('/food.png')" }}
      ></div>

      {categories.map((cat) => (
        <FoodCardList key={cat._id} foods={cat.foods} name={cat.name} />
      ))}
    </div>
  );
};

export default Userhomepage;
