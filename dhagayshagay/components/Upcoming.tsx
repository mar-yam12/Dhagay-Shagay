
import React from "react";

const Upcoming = () => {
  return (
    <div className="w-full max-w-[1340px] h-[300px] sm:h-[35git pull origin main --allow-unrelated-histories0px] lg:h-[600px] bg-white relative rounded-[20px] lg:rounded-[30px] overflow-hidden mx-auto mt-10 mb-10">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover contrast-110 brightness-105"
          src="/images/upcoming.MP4"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-start p-4 sm:p-6 gap-4 sm:gap-6">
        {/* Top Right Text */}
        <div className="text-white text-xs sm:text-sm tracking-wide uppercase self-end">
          Experience the difference firsthand
        </div>

        {/* Main Heading Text */}
        <div className="text-white font-black text-[32px] sm:text-[50px] lg:text-[70px] leading-[32px] sm:leading-[50px] lg:leading-[70px] tracking-[-0.05em]">
          Your Beauty <br />
          Deserves to Be <br />
          Savored, Not <br />
          Rushed Past
        </div>

        {/* Button - Bottom Right */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
          <button className="w-[180px] sm:w-[200px] lg:w-[240px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#131313] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-between px-4 sm:px-5 lg:px-6 hover:bg-white hover:text-black transition group">
            SHOP NOW
            <span className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#C5F302] rounded-full flex items-center justify-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 text-black group-hover:translate-x-1 transition-transform"
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
    </div>
  );
};

export default Upcoming;




