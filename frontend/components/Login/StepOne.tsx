import Link from "next/link";
import { HandleOnInput } from "../ui/HandleOnInput";

type Props = {
  errors: any;
  setErrors: any;
  onclick: any;
};
export const LoginStepOne = ({ errors, setErrors, onclick }: Props) => {
  return (
    <div className=" flex flex-col gap-6  ">
      <div>
        <h1 className="text-2xl font-bold ">Log in </h1>
        <p className="text-gray-400  ">Log in to enjoy your favorite dishes.</p>
      </div>
      <HandleOnInput

        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        errors={errors}
        setErrors={setErrors}
      />
      <HandleOnInput
        id="pass"
        name="pass"
        type="password"
        placeholder="Password"
        errors={errors}
        setErrors={setErrors}
      />

      <p onClick={onclick}>Forget password?</p>
    </div>
  );
};
