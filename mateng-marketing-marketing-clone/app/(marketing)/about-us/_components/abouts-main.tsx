import React from "react";
import Link from "next/link";

export function AboutsMain() {
  const instagram = process.env.INSTAGRAM_PAGE || "#";
  const facebook = process.env.FACEBOOK_PAGE || "#";
  const youtube = process.env.YOUTUBE_CHANNEL || "#";
  const linkedIn = process.env.LINKEDIN_PAGE || "#";

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      {/* Content component */}
      <Content />

      {/* Text description */}
      <div className="font-semibold text-lg sm:text-xl w-[70%] sm:pt-10">
        Learn more about our impactful work at Mateng.
      </div>

      {/* Social media links */}
      <div className="flex">
        <Link href={facebook}>
          <img src="/facebook.png" alt="Facebook" className="h-10 w-10 mr-4" />
        </Link>
        <Link href={instagram}>
          <img src="/instagram.png" alt="Instagram" className="h-10 w-10 mr-4" />
        </Link>
        <Link href={linkedIn}>
          <img src="/linkedin.png" alt="LinkedIn" className="h-10 w-10 mr-4" />
        </Link>
        <Link href={youtube}>
          <img src="/youtube.png" alt="YouTube" className="h-10 w-10 mr-4" />
        </Link>
      </div>

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
