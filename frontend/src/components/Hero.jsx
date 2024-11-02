import React from "react";
import bannerImg from "../assets/header.png";
const Hero = () => {
  return (
    <section className="container mx-auto relative h-[600px] bg-[#fae9f1] px-16 py-4 flex items-center justify-between overflow-hidden md:text-black text-white text-center md:text-start">
      <div className="relative z-30 flex flex-col gap-4 items-center justify-center md:items-start md:justify-start w-full md:max-w-[700px] ">
        <h4 className="text-2xl font-medium">Up to 20% Discount on</h4>
        <h1 className="font-play text-8xl  font-medium">Girl's Fashion</h1>
        <p className="text-xl text-neutral-500 w-2/3 leading-6 hidden md:flex">
          Discover the latest trends and styles for women. website. Explore the
          latest trends and styles for women. caters to everything from classic
        </p>
        <button className="uppercase text-lg px-5 py-3 mt-3 rounded-md bg-red-600 shadow text-white font-sans ">
          explore now
        </button>
      </div>
      <div className="absolute  -bottom-1 right-0">
        <img
          src={bannerImg}
          className="h-[500px] md:h-[600px]
        w-auto"
          alt="banner img"
        />
      </div>
    </section>
  );
};

export default Hero;
