"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const onClickButton = () => {
  alert("Food is being added to the cart!");
};

export const AddDish = ({ prodAddHandler }: { prodAddHandler: any }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div className="relative ">
      <AlertDialog>
        <AlertDialogTrigger asChild className=" flex  ">
          <button className="rounded-full w-10 h-10 text-4xl  font-extralight text-background justify-center items-center  bg-[#EF4444] ">
            +
          </button>
          
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[460px] h-[592px]">
          <AlertDialogHeader>
            <AlertDialogDescription className="flex flex-col gap-[24px]">
              <div className="flex justify-between ">
                <h1 className="text-2xl font-extrabold text-black">
                  Add new Dish to Appetizers
                </h1>
                <button className="rounded-full border w-10 h-10">x</button>
              </div>
              <div className="flex gap-5 ">
                <p>
                  Food Name
                  <blockquote>
                    <Input value={name} onChange={nameChangeHandler} />
                  </blockquote>
                </p>
                <p>
                  Food price
                  <blockquote>
                    <Input
                      value={price}
                      type="number"
                      onChange={priceChangeHandler}
                    />
                  </blockquote>
                </p>
              </div>
              <p>
                Ingredients
                <blockquote>
                  <Input
                    className="h-[90px]"
                    type="text"
                    placeholder="List ing"
                  />
                </blockquote>
              </p>
              <p>
                Food image
                <blockquote>
                  <Input className="h-[138px]" type="file" />
                </blockquote>
              </p>
              <div className="w-full h-20 flex justify-end  ">
                <AlertDialogAction
                  className="w-[93px] "
                  onClick={() => prodAddHandler(name, price)}
                >
                  Add Dish
                </AlertDialogAction>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );

  // "use client";

  // import { useForm } from "react-hook-form";
  // import { zodResolver } from "@hookform/resolvers/zod";
  // import { z } from "zod";
  // import {
  //   AlertDialog,
  //   AlertDialogAction,
  //   AlertDialogContent,
  //   AlertDialogDescription,
  //   AlertDialogHeader,
  //   AlertDialogTrigger,
  // } from "@/components/ui/alert-dialog";
  // import {
  //   Form,
  //   FormControl,
  //   FormDescription,
  //   FormField,
  //   FormItem,
  //   FormLabel,
  //   FormMessage,
  // } from "@/components/ui/form";
  // import { Button } from "@/components/ui/button";
  // import { Input } from "@/components/ui/input";
  // import { toast } from "sonner";

  // const formSchema = z.object({
  //   name: z.string().min(2, "Food name must be at least 2 characters."),
  //   price: z.coerce.number().positive("Price must be positive."),
  //   ingredients: z.string().min(5, "Ingredients must be at least 5 characters."),
  //   image: z.any().optional(),
  // });

  // export function AddDish() {
  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       name: "",
  //       price: 0,
  //       ingredients: "",
  //       image: undefined,
  //     },
  //   });

  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     console.log(values);
  //     toast("Dish added successfully!", {
  //       description: (
  //         <pre className="text-xs">{JSON.stringify(values, null, 2)}</pre>
  //       ),
  //     });
  //   }

  //   return (
  //     <AlertDialog>
  //       <AlertDialogTrigger asChild>
  //         <button className="rounded-full w-11 h-11 text-4xl bg-amber-200">
  //           +
  //         </button>
  //       </AlertDialogTrigger>

  //       <AlertDialogContent className="w-[460px] h-auto">
  //         <AlertDialogHeader>
  //           <AlertDialogDescription>
  //             <div className="flex justify-between">
  //               <h1 className="text-2xl font-extrabold mb-4">
  //                 Add new Dish to Appetizers
  //               </h1>
  //               <button className="rounded-full bg-gray-200 w-8 h-8  ">x</button>
  //             </div>

  //             <Form {...form}>
  //               <form
  //                 onSubmit={form.handleSubmit(onSubmit)}
  //                 className="space-y-8"
  //               >
  //                 <div className="flex gap-5">
  //                   <FormField
  //                     control={form.control}
  //                     name="name"
  //                     render={({ field }) => (
  //                       <FormItem>
  //                         <FormLabel>Food Name</FormLabel>
  //                         <FormControl>
  //                           <Input  placeholder="e.g. Caesar Salad" {...field} />
  //                         </FormControl>
  //                         <FormMessage />
  //                       </FormItem>
  //                     )}
  //                   />

  //                   <FormField
  //                     control={form.control}
  //                     name="price"
  //                     render={({ field }) => (
  //                       <FormItem>
  //                         <FormLabel>Price</FormLabel>
  //                         <FormControl>
  //                           <Input
  //                             type="number"
  //                             placeholder="e.g. 12.99"
  //                             {...field}
  //                             onChange={(e) =>
  //                               field.onChange(Number(e.target.value))
  //                             }
  //                           />
  //                         </FormControl>
  //                         <FormMessage />
  //                       </FormItem>
  //                     )}
  //                   />
  //                 </div>

  //                 <FormField
  //                   control={form.control}
  //                   name="ingredients"
  //                   render={({ field }) => (
  //                     <FormItem>
  //                       <FormLabel>Ingredients</FormLabel>
  //                       <FormControl>
  //                         <Input
  //                           placeholder="List ingredients..."
  //                           {...field}
  //                           className="h-[90px]"
  //                         />
  //                       </FormControl>

  //                       <FormMessage />
  //                     </FormItem>
  //                   )}
  //                 />

  //                 <FormField
  //                   control={form.control}
  //                   name="image"
  //                   render={({ field }) => (
  //                     <FormItem>
  //                       <FormLabel>Food Image</FormLabel>
  //                       <FormControl>
  //                         <Input
  //                           type="file"
  //                           onChange={(e) => field.onChange(e.target.files?.[0])}
  //                           className="h-[138px]"
  //                         />
  //                       </FormControl>
  //                       <FormMessage />
  //                     </FormItem>
  //                   )}
  //                 />

  //                 <div className="flex justify-end">
  //                   <Button type="submit">Add Dish</Button>
  //                 </div>
  //               </form>
  //             </Form>
  //           </AlertDialogDescription>
  //         </AlertDialogHeader>
  //       </AlertDialogContent>
  //     </AlertDialog>
  //   );
};
