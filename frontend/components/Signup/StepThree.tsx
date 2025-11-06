import Link from "next/link";
import { Input } from "../ui/input";

export const StepThree = () => {
  return (
    <div>
      {" "}
      <div className=" flex flex-col gap-6  ">
        <div>
          <h1 className="text-2xl font-bold ">Create a strong password </h1>
          <p className="text-gray-400  ">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm" />
        <Link href="/pages/homepage">Go to homepage🏡</Link>
      </div>
    </div>
  );
};
