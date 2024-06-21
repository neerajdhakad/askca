import React from "react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
  <div className="">
    <div className="h-screen bg-[#101010] flex items-center justify-center bg-[url('/public/img/hero-section.jpg')]">
      {/* <div className=""> */}
        <div className="my-20 px-20 w-1/2 content text-white">
          <h2 className="text-5xl font-semibold">Kickstart Your Trading <span className="text-[#F49426]">Journey</span></h2>
          <h6 className="text-md my-5">
            If you aspire to make trading, a full-time profession, without
            risking capital, join us. We are here to upgrade your trading to a
            next level without risking your hard-earned capital.
          </h6>
          <Button className="bg-[#F49426] text-black font-semibold hover:bg-white">Register Now</Button>
        </div>
        <div className="image w-1/2 text-white">
          Image
        </div>
      {/* </div> */}
    </div>
    </div>
  );
}

export default HeroSection;
