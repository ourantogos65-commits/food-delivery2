"use client";

import { StepOne } from "@/components/Signup/StepOne";
import { StepThree } from "@/components/Signup/StepThree";
import { StepTwo } from "@/components/Signup/StepTwo";
import { BackButton } from "@/components/ui/backButton";

import { NextButton } from "@/components/ui/nextButton";
import Link from "next/link";


const Page = () => {

  

  return (
    <div className="flex w-[full] h-screen  gap-10 items-center justify-center  ">
      <Link href="/pages/signup">signup</Link>
      <Link href="/pages/login">Login</Link>
    </div>
  );
};
export default Page;
