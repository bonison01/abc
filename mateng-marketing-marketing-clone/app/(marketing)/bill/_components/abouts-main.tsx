import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div>
      <h1>Welcome to AboutsMain Component</h1>
      <p>This is a test component.</p>

      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqhJ96Q5S2xKtvtwjqmytwZeOCZnkBBOP7eJfMgVmoIHbg1LA-V9YhCocI2_u7cwkRPvTqPcep34yx/pubhtml"
          width="100%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ width: "100%", maxWidth: "100%" }}
        ></iframe>
      </div>

      {/* Button to navigate to "/test" */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/test">
          <a>Test</a>
        </Link>
      </button>
    </div>
  );
}

export default AboutsMain;
