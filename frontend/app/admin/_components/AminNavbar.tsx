type Props={
    alldishes:void
    orders:void
}


export const AdminNavbar = ({ alldishes,orders}:Props) => {
  return (
    <div className="w-[205px] p-5 bg-white h-screen flex flex-col gap-10">
      <div className="flex gap-3 pt-4">
        <img
          src="./admin2.jpg"
          alt=""
          className="w-10 h-10 bg-amber-500 rounded-full "
        />
        <h1 className="text-gray-400">
          <blockquote className="font-bold text-black">NomiNom</blockquote>
          swift delivery
        </h1>
      </div>
      <div className="flex items-center flex-col gap-5">
        <button
        onClick={alldishes}
        //   onClick={() => setChild(childrens.allDishes)}
          className="w-[165px] rounded-2xl  bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white "
        >
          Food menu
        </button>
        <button
        onClick={orders}
        //   onClick={() => setChild(childrens.orders)}
          className="w-[165px] rounded-2xl bg-gray-200 px-5 py-1 text-black text  hover:bg-black hover:text-white"
        >
          orders
        </button>
      </div>
    </div>
  );
};
