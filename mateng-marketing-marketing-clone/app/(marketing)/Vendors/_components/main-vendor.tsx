import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";

export function VendorsMain() {
  return (
    <div
      className={cn(
        "text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4",
        poppinsFont.className
      )}
    >
      <div className="font-medium text-xl sm:text-4xl w-[70%]">
        Today Pickup and Delivery Orders
      </div>
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR5nvl_cwV1z5dJBauP7pjS0WEUBNxKScCN5eD04zGd8DRKbSAGJ6rg828aGJHafjWEfdhTX5uXYg8z/pubhtml?gid=0&single=true" width="100%" height="400"></iframe>
    </div>
  );
}
