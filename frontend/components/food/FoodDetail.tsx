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

export const FoodCardDetail = () => {
  return (
    <div className="relative">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="rounded-full w-11 h-11 text-4xl items-center mt-38 ml-76 absolute "
            variant="outline"
          >
            +
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[800px]  max-w-full">
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex gap-6  justify-center ">
                <img
                  src="./fooddetail.png"
                  alt="Food Detail"
                  className="w-[377px] h-[364px]  object-cover rounded-lg"
                />
                <div className="mt-5">
                  <h1 className=" text-3xl font-bold text-red-500">
                    Sunshine Sta
                  </h1>
                  <p className="mt-2 text-gray-600">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
