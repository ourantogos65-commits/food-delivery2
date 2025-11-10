import { HandleOnInput } from "../ui/HandleOnInput";

type Props = {
  errors: any;
  setErrors: any;
};
export const StepTwo = ({ errors, setErrors }: Props) => {
  return (
    <div>
      <div className=" flex flex-col gap-4  ">
        <div>
          <h1 className="text-2xl font-bold ">Create a strong password </h1>
          <p className="text-gray-400  ">
            Create a strong password with letters, numbers.
          </p>
        </div>
        {/* <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm" /> */}
        <HandleOnInput
          id="pass"
          name="pass"
          type="password"
          placeholder="Your password"
          errors={errors}
          setErrors={setErrors}
        />
        <HandleOnInput
          id="Confirmpass"
          name="Confirmpass"
          type="password"
          placeholder="Confirm password"
          errors={errors}
          setErrors={setErrors}
        />
      </div>
    </div>
  );
};
