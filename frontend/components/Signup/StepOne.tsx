import { Input } from "../ui/input";

export const StepOne = () => {
  return (
    <div className=" flex flex-col gap-6  ">
      <div>
        <h1 className="text-2xl font-bold ">Create your acccount </h1>
        <p className="text-gray-400  ">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <Input type="password" placeholder="Enter your email address" />
    </div>
  );
};
