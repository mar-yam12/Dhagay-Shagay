import React from "react";
import Link from "next/link";
import Image from "next/image";
import man from "../public/images/man.jpg";
import women from "../public/images/women.jpg";
import button from "../public/images/button.jpg";

export const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen px-6 pt-28">
      {/* Heading Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 mb-12">
        <h1 className="text-black font-medium text-xl">About Us</h1>
        <h1 className="text-black font-extrabold font-Poppins text-3xl text-center md:text-left">
          FASHION THAT EMPOWERS
        </h1>
      </div>

      {/* Images Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <Image className="" src={man} alt="mans" width={300} height={300} />

        <Image className="" src={women} alt="womens" width={300} height={300} />
      </div>
      <div className="flex flex-col items-center justify-center pt-10 ">
        <button className="w-[200px] h-[60px] bg-[#131313]  text-white hover:bg-gray-800 rounded-full text-sm font-semibold tracking-wide flex items-center justify-between px-6 transition group cursor-pointer">
          SHOP NOW
          <span className="w-8 h-8 bg-[#C5F302] rounded-full flex items-center justify-center ml-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
