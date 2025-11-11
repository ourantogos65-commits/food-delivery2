"use client";

import { StepOne } from "@/components/Signup/StepOne";
import { StepThree } from "@/components/Signup/StepThree";
import { StepTwo } from "@/components/Signup/StepTwo";
import { BackButton } from "@/components/ui/backButton";
import { NextButton } from "@/components/ui/nextButton";
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUpPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});

  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  const validate = (data: FormData) => {
    const errors = {};

    const email = data.get("email");
    const pass = data.get("pass");
    const Confirmpass = data.get("Confirmpass");

    if (currentIndex === 0) {
      if (!email)
        errors.email = "Invalid email. Use a format like example@email.com";
    }
    
    if (currentIndex === 1) {
      if (!Confirmpass || Confirmpass !== pass)
        errors.Confirmpass = "Those password did’t match, Try again";
    }
    console.log(Confirmpass);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const localStorageCount = localStorage.getItem("currentindex");
    if (localStorageCount) {
      setCurrentIndex(Number(localStorageCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentindex", currentIndex);
  }, [currentIndex]);

  const onClickButton = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (!validate(data)) return;
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <form
      onSubmit={onClickButton}
      className="flex w-full h-screen  gap-10 items-center justify-center  "
    >
      <div className="w-[416px] h-[376px] flex flex-col gap-5  ">
        <BackButton
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
        <CurrentStep
          errors={errors}
          setErrors={setErrors}
          currentIndex={currentIndex}
        />

        <NextButton currentIndex={currentIndex} />

        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link href="/login" className="text-blue-400">
            Log in{" "}
          </Link>
        </p>
      </div>
      <img src="/login.jpg" className="w-[856px] h-[904px] rounded-2xl "></img>
    </form>
  );
};
export default SignUpPage;

//shadcn-s belen hook form ashigllav

// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const signUpSchema = z
//   .object({
//     username: z
//       .string()
//       .min(2, { message: "Username must be at least 2 characters." }),
//     email: z.string().email({ message: "Invalid email address." }),
//     password: z
//       .string()
//       .min(6, { message: "Password must be at least 6 characters." }),
//     confirmPassword: z.string().min(6, { message: "Confirm your password." }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// export default function SignUpForm() {
//   const form = useForm<z.infer<typeof signUpSchema>>({
//     resolver: zodResolver(signUpSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof signUpSchema>) {
//     console.log("Sign Up data:", values);
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-6 w-[400px] mx-auto p-6 border rounded-lg shadow"
//       >
//         <h2 className="text-2xl font-bold text-center">Sign Up</h2>

//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="Your username" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input type="email" placeholder="Enter your email address" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="********" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="confirmPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Confirm Password</FormLabel>
//               <FormControl>
//                 <Input type="password" placeholder="********" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit" className="w-full">
//           Sign Up
//         </Button>
//       </form>
//     </Form>
//   );
// }
