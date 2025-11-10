import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export const OrderDetail = () => {
  return (
    <div >
      <Popover> 
        <PopoverTrigger className="bg-white w-10 h-10 rounded-full"></PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
};
