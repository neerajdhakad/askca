import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import hero from "/public/img/hero-section.jpg";
import frame from "/public/img/hero-section-frame.png";
import phone from "/public/img/phone.png";
import Register from "./modal/Register"; 

function HeroSection() {
  return (
    <div className="hero relative pt-24 pb-8 md:pt-0 md:py-0 px-10 md:px-20 bg-[#101010] md:bg-transparent">
      <div className="hero-content relative z-10 h-full  w-full md:w-1/2 text-white flex flex-col items-center md:items-start justify-center md:pt-60 md:pb-60">
        <Image src={phone} alt={""} className="text-center md:hidden"></Image>
        <h2 className="text-center md:text-left my-4 md:my-0 text-5xl md:text-7xl font-semibold">
          Kickstart Your Trading<span className="text-[#F49426]">Journey</span>
        </h2>
        <h6 className="text-center font-light md:text-justify text-sm md:text-xl my-2 md:my-5">
          If you aspire to make trading, a full-time profession, without risking
          capital, join us. We are here to upgrade your trading to a next level
          without risking your hard-earned capital. 
        </h6>
        <span className="w-fit py-2">
          <Register />
        </span>
      </div>
      <div className="hidden md:block absolute inset-0 z-0">
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
{/* 
      <div className="hera-img hidden md:block absolute inset-0 z-0">
        <div> background image</div>
      </div> */}
      <div className="block md:hidden absolute inset-0 z-0">
        <Image
          src={frame}
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