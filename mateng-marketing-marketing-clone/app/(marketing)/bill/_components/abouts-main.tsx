import React from "react";
import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <div className="border border-gray-400 rounded-lg p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/contact-us">
            <a>contact</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
