
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";


export const LoginStepOne = ({onclick}:{onclick:any}) => {
  return (
    <div className=" flex flex-col gap-6  ">
      <div>
        <h1 className="text-2xl font-bold ">Log in </h1>
        <p className="text-gray-400  ">Log in to enjoy your favorite dishes.</p>
      </div>
      <Input type="password" placeholder="Enter your email address" />
      <Input type="password" placeholder="Password" />

      <p onClick={onclick}>Forget password?</p>
      <Link
        href="/pages/homepage "
        className="w-full bg-gray-900 rounded-sm py-1 text-center text-background"
      >
        Let's Go
      </Link>
    </div>
  );
};
