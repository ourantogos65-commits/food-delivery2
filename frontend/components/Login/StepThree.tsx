import Link from "next/link";

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

        <Link href="/homePage">Go to homepage🏡</Link>
      </div>
    </div>
  );
};
