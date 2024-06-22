import React from "react";
import Image from "next/image";
import hero from '/public/img/hero-section.jpg'
import about from '/public/img/about-us.svg'
function AboutUs() {
  return (
    <div className="bg-[#101010] text-white py-10 md:py-20"> 
    <div className="flex flex-col md:flex-row justify-center items-center my-14 md:my-20">
      <Image className=" md:w-2/5" src={about} alt={"about"} />
      <div className="mx-12 my-10 md:my-0 md:mx-28 ">
        <h2 className="text-4xl md:text-6xl font-semibold  md:w-3/5">
        About{" "}
          <span className="text-[#F49426]">US</span>
        </h2>
        <h6 className="text-md md:text-2xl my-5">
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
