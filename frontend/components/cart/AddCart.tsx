
// "use client";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// const onClickButton = () => {
//   alert("Food is being added to the cart!");
// };

  
// export const AddCart = () => {
  
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [products, setProducts] = useState([]);
//   const nameChangeHandler = (e) => {
//     setName(e.target.value);
//   };
//   const priceChangeHandler = (e) => {
//     setPrice(Number(e.target.value));
//   };
  
//   const prodAddHandler = (name, price) => {
//     const newProd = {
//       id: products.length ? products[products.length - 1].id + 1 : 1,
//       name,
//       price,
//     };

//     setProducts([...products, newProd]);
//   };
//   return (
//     <div className="relative ">
//       <AlertDialog>
//         <AlertDialogTrigger asChild className=" flex  ">
//           <button className="rounded-full w-10 h-10 text-4xl  font-extralight text-background justify-center items-center  bg-[#EF4444] ">
//             +
//           </button>
//         </AlertDialogTrigger>
//         <AlertDialogContent className="w-[460px] h-[592px]">
//           <AlertDialogHeader>
//             <AlertDialogDescription className="flex flex-col gap-[24px]">
//              <div className="flex gap-5  justify-center  ">
//                 <img
//                   src="/food.png"
//                   alt="Food Detail"
//                   className="w-[377px] h-[364px]  object-cover rounded-lg"
//                 />
//                 <div className="mt-5 flex flex-col justify-between">
//                   <h1 className=" text-3xl font-bold text-red-500">
//                     Sunshine Sta
//                   </h1>
//                   <p className="mb-12 text-gray-600">
//                     Fluffy pancakes stacked with fruits, cream, syrup, and
//                     powdered sugar.
//                   </p>

//                   <div className="flex mt-20 justify-between">
//                     <h1 className="text-2xl text-black font-bold">
//                       <blockquote className="text-lg font-normal text-gray-800">
//                         total price
//                       </blockquote>{" "}
//                       $12.99
//                     </h1>
//                     <div className="flex gap-3 items-center ">
//                       {
//                         price>0 &&
//                           <button
//                         onClick={() => setPrice(price - 1)}
//                         className="w-8 border h-8 rounded-full"
//                       >-</button>
//                       }
                    
//                       <p>{price}</p>
//                       <button
//                         onClick={() => setPrice(price + 1)}
//                         className="border w-8 h-8 rounded-full text-center"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   </div>
//                   </div>
//               <div className="w-full h-20 flex justify-end  ">
//                 <AlertDialogAction
//                   className="w-[93px] "
//                   onClick={() => prodAddHandler(name, price)}
//                 >
//                   Add Dish
//                 </AlertDialogAction>
//               </div>
//             </AlertDialogDescription>
//           </AlertDialogHeader>

//           <AlertDialogFooter></AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

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
import { Button } from "@/components/ui/button";
import { useState } from "react";
const onClickButton = () => {
  alert("Food is being added to the cart!");
};
export const AddCart = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="relative">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="rounded-full w-11 h-11 text-4xl items-center mt-38 ml-76 absolute ">
            +
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[800px] h-[412px]">
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex gap-5  justify-center  ">
                <img
                  src="/food.png"
                  alt="Food Detail"
                  className="w-[377px] h-[364px]  object-cover rounded-lg"
                />
                <div className="mt-5 flex flex-col justify-between">
                  <h1 className=" text-3xl font-bold text-red-500">
                    Sunshine Sta
                  </h1>
                  <p className="mb-12 text-gray-600">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </p>

                  <div className="flex mt-20 justify-between">
                    <h1 className="text-2xl text-black font-bold">
                      <blockquote className="text-lg font-normal text-gray-800">
                        total price
                      </blockquote>{" "}
                      $12.99
                    </h1>
                    <div className="flex gap-3 items-center ">
                      {count > 0 && (
                        <button
                          onClick={() => setCount(count - 1)}
                          className="w-8 border h-8 rounded-full"
                        >
                          -
                        </button>
                      )}

                      <p>{count}</p>
                      <button
                        onClick={() => setCount(count + 1)}
                        className="border w-8 h-8 rounded-full text-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <AlertDialogAction onClick={onClickButton}>
                    Add to Cart
                  </AlertDialogAction>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
