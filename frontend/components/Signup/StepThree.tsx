import Link from "next/link";

export const StepThree = ({ currentIndex }: { currentIndex: any }) => {
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
       
        <div className="pb-5"></div>
      </div>
    </div>
  );
};
