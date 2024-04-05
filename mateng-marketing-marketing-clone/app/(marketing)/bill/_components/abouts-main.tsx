import React from "react";
import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Button to navigate to "/test" */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/test">
          <a>Test</a>
        </Link>
      </button>

      {/* Google Sheets iframe */}
      <div className="border border-gray-400 rounded-lg p-4 mt-8">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqhJ96Q5S2xKtvtwjqmytwZeOCZnkBBOP7eJfMgVmoIHbg1LA-V9YhCocI2_u7cwkRPvTqPcep34yx/pubhtml"
          width="100%" // Set the width to 100% of the container
          height="400" // Set the desired height
          style={{ border: "none" }} // Hide iframe border
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}
