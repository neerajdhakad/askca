import React from "react";
import Image from "next/image";
import about from "/public/img/about-us.svg";
import aboutUsBackground from "/public/img/about-us-bg.png";

function AboutUs() {
  return (
    <div id="about-us" className="relative bg-[#101010] text-white py-2 md:py-20">
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
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center my-14 md:my-20">
        <Image className="pl-0 md:pl-10 md:w-1/2" src={about} alt="about" />
        <div className="mx-12 my-10 md:my-0 md:mx-28">
          <h2 className="text-5xl text-center md:text-left md:text-6xl font-semibold md:w-1/2">
          About{" "}
            <span className="text-[#F49426]">US</span>
          </h2>
          <h6 className="text-base font-light text-center md:text-left text-md md:text-2xl my-5">
             Founded with the motive to revolutionize the world of trading and
             empowering people to grab the opportunities with minimal risks. We
             strive to cultivate a community of informed traders who thrive on
             our platform, where security, transparency, profitability and risk
             management converge seamlessly. We aspire to create a world where no
             one should be restricted from choosing trading as a full time
             profession merely due to lack of support.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
