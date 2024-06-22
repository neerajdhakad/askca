import React from "react";
import Image from "next/image";
import about from "/public/img/about-us.svg";

function Effortless() {
  return (
    <div className="bg-[#101010] text-white py-10 md:py-20"> 
      <div className="flex flex-col md:flex-row justify-center items-center my-14 md:my-20">
        <Image className=" md:w-2/5" src={about} alt={"about"} />
        <div className="mx-12 my-10 md:my-0 md:mx-28 ">
          <h2 className="text-4xl md:text-6xl font-semibold  md:w-3/5">
            Is making money so{" "}
            <span className="text-[#F49426]">Effortless ?</span>
          </h2>
          <h6 className="text-md md:text-2xl my-5">
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
