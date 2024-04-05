import React from "react";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <h1>OKAY TEST</h1>
      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto mt-8">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/your-spreadsheet-id/pubhtml?widget=true&amp;headers=false"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutsMain;
