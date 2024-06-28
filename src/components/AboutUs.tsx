import React from "react";
import Image from "next/image";
import shivam from "/public/img/shivam.svg";
import aboutUsBackground from "/public/img/about-us-bg.png";

function AboutUs() {
  return (
    <div id="about-us" className="relative bg-[#101010] text-white py-2 md:py-20 mx-5 md:mx-0">
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
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center my-8 md:my-20 md:mx-10">
        <div className="pl-0 md:pl-10 flex flex-col items-center md:w-1/3">
          <Image className="" src={shivam} alt="about" />
          <p className="text-xl md:text-2xl mt-3 font-semibold">Shivam kumar Aggarwal</p>
          <p className="text-xl md:text-2xl font-semibold">Founder -<span className="text-[#F49426]">ASKCA</span> </p>
          <p className="text-xl md:text-xl font-semibold">CA,M.com (Finance & Taxation)</p>
        </div>
        <div className="md:mx-12 mt-10 md:my-0 md:w-2/3">
          <h2 className="text-5xl text-center md:text-left md:text-6xl font-semibold">
          About{" "}
            <span className="text-[#F49426]">US</span>
          </h2>
          <h6 className="text-base font-light text-center md:text-justify text-md md:text-2xl my-5">
             Founded with the motive to revolutionize the world of trading and
             empowering people to grab the opportunities with minimal risks. 
             <p className="py-2 md:py-4">We
             strive to cultivate a community of informed traders who thrive on
             our platform, where security, transparency, profitability and risk
             management converge seamlessly.</p> 
             <p className="pb-2 md:pb-4">We aspire to create a world where no
             one should be restricted from choosing trading as a full time
             profession merely due to lack of support.</p>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
