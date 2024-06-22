import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import hero from "/public/img/hero-section.jpg";

function HeroSection() {
  return (
    <div className="hero py-32 md:py-0 px-10 md:px-20 bg-[#101010] md:bg-transparent">
      <div className="hero-content h-full md:h-screen w-full md:w-1/2 text-white flex flex-col justify-center ">
        <h2 className="text-5xl md:text-7xl font-semibold ">
          Kickstart Your Trading <span className="text-[#F49426]">Journey</span>
        </h2>
        <h6 className="text-md md:text-xl my-5">
          If you aspire to make trading, a full-time profession, without risking
          capital, join us. We are here to upgrade your trading to a next level
          without risking your hard-earned capital.
        </h6>
        <Button className="bg-[#F49426] text-black font-semibold hover:bg-white register w-fit">
          Register Now
        </Button>
      </div>
      <div className="hidden md:block absolute inset-0">
        <Image
          src={hero}
          className="bg-img"
          alt="Background"
          layout="fill"
          fill={true}
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

export default HeroSection;
