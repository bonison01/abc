import React, { useEffect, useRef } from "react";
import Link from "next/link";

export function AboutsMain() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const resizeIframe = () => {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
      };
      iframe.onload = resizeIframe;
      window.addEventListener("resize", resizeIframe);
      return () => {
        window.removeEventListener("resize", resizeIframe);
      };
    }
  }, []);

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Button to navigate to "/test" */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/test">
          <a>Test</a>
        </Link>
      </button>

      {/* Embedded Google Sheets iframe */}
      <div className="border border-gray-400 rounded-lg p-4 mt-8 w-full max-w-screen-lg">
        <iframe
          ref={iframeRef}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqhJ96Q5S2xKtvtwjqmytwZeOCZnkBBOP7eJfMgVmoIHbg1LA-V9YhCocI2_u7cwkRPvTqPcep34yx/pubhtml"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
        ></iframe>
      </div>
    </div>
  );
}
