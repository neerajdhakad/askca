import React from "react";

function AboutUs() {
  return (
    <div className="h-screen bg-[#101010] text-white ">
      <div className="flex items-center justify-center px-14">
        <div className="image w-1/2"></div>
        <div className="about-us w-1/2 px-">
          <h1 className="my-2 text-white text-5xl font-semibold pt-12 pb-2">
            About <span className="text-[#F49426]">US</span>
          </h1>
          <p className="text-md font-light">
            Founded with the motive to revolutionize the world of trading and
            empowering people to grab the opportunities with minimal risks. We
            strive to cultivate a community of informed traders who thrive on
            our platform, where security, transparency, profitability and risk
            management converge seamlessly. We aspire to create a world where no
            one should be restricted from choosing trading as a full time
            profession merely due to lack of support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
