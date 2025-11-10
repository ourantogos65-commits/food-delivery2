import { HandleOnInput } from "../ui/HandleOnInput";


type Props = {
  errors: any;
  setErrors: any;
};
export const StepOne = ({ errors, setErrors }: Props) => {
  return (
    <div className=" flex flex-col gap-6  ">
      <div>
        <h1 className="text-2xl font-bold ">Create your acccount </h1>
        <p className="text-gray-400  ">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      {/* <Input
        id="email"
        type="password"
        placeholder="Enter your email address"
      /> */}
      <HandleOnInput
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
};
