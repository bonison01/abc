import React from "react";

export function GoogleSheetsEmbed() {
  const handleButtonClick = () => {
    // Define your button click logic here
    alert("Button clicked!");
  };

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32">
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqhJ96Q5S2xKtvtwjqmytwZeOCZnkBBOP7eJfMgVmoIHbg1LA-V9YhCocI2_u7cwkRPvTqPcep34yx/pubhtml"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
