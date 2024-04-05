import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Embed the iframe here */}
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqhJ96Q5S2xKtvtwjqmytwZeOCZnkBBOP7eJfMgVmoIHbg1LA-V9YhCocI2_u7cwkRPvTqPcep34yx/pubhtml" width="100%" height="400"></iframe>
    </div>
  );
}
