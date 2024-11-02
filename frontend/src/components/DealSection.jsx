import React from "react";
import deals from "../assets/deals.png";
const DealSection = () => {
  return (
    <section className="container mx-auto mt-12 px-2 py-2  overflow-hidden bg-[#fae9f1] flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={deals}
          className="max-h-[500px] xl:h-[500px] h-[300px] -bottom-10 lg:h-[400px] md:h-[300px] w-auto relative md:-bottom-4 object-cover"
          alt=""
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-3 px-1 items-center justify-center md:items-start md:justify-start ">
        <h1 className="font-medium text-xl">Get Up to 20% off</h1>
        <h2 className="text-5xl text-center md:text-start font-medium font-play">Deals of this month</h2>
        <p className="text-lg w-[400px] md:w-[500px] text-gray-500 leading-6 text-center md:text-start">
          Our Women's collection of trending products of the year. Discover the
          latest trends and styles for women.we have variety of categories of
          collection of trending products of the year.
        </p>
        <div className="flex gap-4">
          <p className="flex flex-col items-center justify-center text-xl font-medium ">
            <span className="bg-white rounded-full px-3 py-2">14</span>{" "}
            <span>Days</span>
          </p>
          <p className="flex flex-col items-center justify-center text-xl font-medium ">
            <span className="bg-white rounded-full px-3 py-2">23</span>{" "}
            <span>Hours</span>
          </p>
          <p className="flex flex-col items-center justify-center text-xl font-medium ">
            <span className="bg-white rounded-full px-3 py-2">12</span>{" "}
            <span>Minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
