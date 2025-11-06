"use client";

import { LoginStepOne } from "@/components/Login/StepOne";
import { LoginStepTwo } from "@/components/Login/StepTwo";
import { BackButton } from "@/components/ui/backButton";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentStep = [LoginStepOne, LoginStepTwo][currentIndex];

  return (
    <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
      <div className="w-[416px] h-[376px] flex flex-col gap-5  ">
        <BackButton
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
        <CurrentStep onclick={()=>setCurrentIndex(currentIndex+1)}/>

   

        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link href="/pages/signup" className="text-blue-400">
            Sign up{" "}
          </Link>
        </p>
      </div>
      <img src="/login.jpg" className="w-[856px] h-[904px] rounded-2xl "></img>
    </div>
  );
};
export default LoginPage;
