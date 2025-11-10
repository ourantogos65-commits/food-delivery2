"use client";
type Props = {
  id: string;
  name: string;
  type: string;

  placeholder: string;
  errors: any;
  setErrors: any;
};
export const HandleOnInput = ({
  id,
  name,
  type,
  placeholder,
  errors,
  setErrors,
}: Props) => {
  return (
    <div className="flex flex-col  ">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-gray-300 w-full h-10 pl-2"
        onChange={() => setErrors({ ...errors, [name]: null })}
      />
      {errors[name] && <p className="text-red-600 ">{errors[name]}</p>}
    </div>
  );
};
