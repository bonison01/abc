import React from "react";
import Link from "next/link";
import { Content } from "./content";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <button>
        <Link href="/test">
          <a className="text-blue-500 hover:text-blue-700">Test</a>
        </Link>
      </button>
    </div>
  );
}
