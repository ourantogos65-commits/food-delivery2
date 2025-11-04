import { Input } from "@/components/ui/input";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
      <div className="w-[416px] h-[376px] flex flex-col gap-5  ">
        <div>
          <h1 className="text-2xl font-bold ">Log in </h1>
          <p className="text-gray-400  ">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <Input type="password" placeholder="Enter your email address" />
        <Input type="password" placeholder="Password" />
        <Link
          href="/pages/home"
          className="bg-gray-200 mt-3 py-2 rounded-2xl text-center"
        >
          Let's Go
        </Link>

        <p className="text-center text-gray-400">
          Don’t have an account? <span className="text-blue-400">Sign up </span>
        </p>
      </div>
      <img src="./Login.jpg" className="w-[856px] h-[904px] rounded-2xl "></img>
    </div>
  );
};
export default LoginPage;
