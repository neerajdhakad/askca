import React from "react";
import Image from "next/image";
import about from "/public/img/about-us.svg";
import aboutUsBackground from "/public/img/about-us-bg.png";

function Effortless() {
  return (
    <div className="relative bg-[#101010] text-white py-0 md:py-20">
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src={aboutUsBackground}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          style={{opacity:'18%'}}
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center my-14 md:my-20 mx-5 md:mx-10">
        <Image className="pl-0 md:pl-10 md:w-1/2" src={about} alt="about" />
        <div className="mx-12 mt-10 md:my-0 md:mx-28">
          <h2 className="text-4xl text-center md:text-left md:text-6xl font-semibold md:w-1/2">
            Is making money so{" "}
            <span className="text-[#F49426]">Effortless?</span>
          </h2>
          <h6 className="text-base font-light text-center md:text-left md:text-2xl my-5">
            Yes, with us, it is possible. We will let you earn merely by using
            our paper trading platform with your skills,
            and earn in actual from the profits you make there.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Effortless;
