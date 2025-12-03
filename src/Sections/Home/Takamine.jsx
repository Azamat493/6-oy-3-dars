import React from "react";
import IMG1095 from "../../assets/images/IMG1095.png";
const Takamine = () => {
  return (
    <section
      className="w-screen mt-[20px] md:mt-0 mx-auto h-[300px] sm:h-[400px] relative bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${IMG1095})` }}
    >
      <div className="max-w-[1400px] mx-auto w-full flex justify-center px-4">
        <div className="text-[#8f8f8f] text-left translate-x-2 sm:translate-x-8 md:translate-x-16 translate-y-4 sm:translate-y-6 md:translate-y-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-abeeze">
            Takamine
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 font-abeeze opacity-80">
            гитара
          </p>
          <p className="text-xs sm:text-sm mb-[2px] font-abeeze opacity-70">
            винтажная 12-струнная
          </p>
          <p className="text-xs sm:text-sm mb-2 sm:mb-4 font-abeeze opacity-70">
            GJ72CE-12BSB
          </p>
          <a
            href="#"
            className="inline-block bg-[rgba(216,119,0,0.74)] hover:bg-orange-600 text-white font-normal text-xs sm:text-sm font-abeeze py-1.5 sm:py-2 px-3 sm:px-6 rounded-[5px] transition duration-200"
          >
            подробнее
          </a>
        </div>
        <div className="absolute right-2 sm:right-6 md:right-12 lg:right-16 top-1/2 transform -translate-y-1/2 sm:block group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-white transition duration-300 group-hover:text-yellow-400 transform group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Takamine;
