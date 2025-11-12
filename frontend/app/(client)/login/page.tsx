"use client";

import { LoginStepOne } from "@/components/Login/StepOne";
import { LoginStepTwo } from "@/components/Login/StepTwo";
import { LoginStepThree } from "@/components/Login/StepThree";
import { BackButton } from "@/components/ui/backButton";
import { NextButton } from "@/components/ui/nextButton";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState<{ email?: string; pass?: string }>({});

  const CurrentStep = [LoginStepOne, LoginStepTwo, LoginStepThree][
    currentIndex
  ];

  const validate = (formData: FormData) => {
    const email = formData.get("email")?.toString().trim();
    const pass = formData.get("pass")?.toString().trim();
    const newErrors: { email?: string; pass?: string } = {};

    if (currentIndex === 0) {
      if (!email || !email.includes("@")) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (!pass || pass.length < 4) {
        newErrors.pass = "Password must be at least 4 characters.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validate(data)) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full h-screen gap-10 items-center justify-center"
    >
      <div className="w-[416px] h-[376px] flex flex-col gap-5">
        <BackButton
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />

        <CurrentStep
          errors={errors}
          currentIndex={currentIndex}
          onClickNext={() => setCurrentIndex((prev) => prev + 1)}
        />

        <NextButton currentIndex={currentIndex} />

        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>

      <img
        src="/login.jpg"
        alt="Login illustration"
        className="w-[856px] h-[904px] rounded-2xl"
      />
    </form>
  );
}
