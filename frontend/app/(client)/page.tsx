
"use client";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
      <Link href="/signup">signup</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};
export default HomePage;
