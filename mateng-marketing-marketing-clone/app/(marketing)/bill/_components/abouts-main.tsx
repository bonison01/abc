import React from "react";
import Link from "next/link";
import { Content } from "./content";
export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["900", "800", "700", "500", "400", "300", "200", "100", "600"],
});


export function AboutsMain() {
  return (
    <div className="w-full px-4 py-6 sm:w-3/6 flex flex-col items-center my-auto">
      <p
        className={cn(
          "text-blue-800 text-lg font-medium sm:font-semibold",
          poppinsFont.className
        )}
      >
        Quick links
      </p>
  );
}
