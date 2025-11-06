import Link from "next/link";
import { Input } from "../ui/input";

export const LoginStepThree = () => {
  return (
    <div>
      {" "}
      <div className=" flex flex-col gap-6  ">
        <div>
          <h1 className="text-2xl font-bold ">Create your acccount3 </h1>
          <p className="text-gray-400  ">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <Input type="password" placeholder="Enter your email address" />
        <Link href="/pages/homepage">Go to homepage🏡</Link>
      </div>
    </div>
  );
};
