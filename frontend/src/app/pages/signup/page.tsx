"use client";

import { StepOne } from "@/components/Signup/StepOne";
import { StepThree } from "@/components/Signup/StepThree";
import { StepTwo } from "@/components/Signup/StepTwo";
import { BackButton } from "@/components/ui/backButton";

import { NextButton } from "@/components/ui/nextButton";
import Link from "next/link";

import { useState } from "react";

const SignUpPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  return (
    <div className="flex w-full h-screen  gap-10 items-center justify-center  ">
      <div className="w-[416px] h-[376px] flex flex-col gap-5  ">
        <BackButton
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
        <CurrentStep />

        <NextButton
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link href="/pages/login" className="text-blue-400">
            Log in{" "}
          </Link>
        </p>
      </div>
      <img src="/login.jpg" className="w-[856px] h-[904px] rounded-2xl "></img>
    </div>
  );
};
export default SignUpPage;
