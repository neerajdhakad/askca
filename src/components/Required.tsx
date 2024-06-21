import React from "react";
import { Button } from "./ui/button";

function Required() {
  return (
    <div className="h-screen bg-[#182729] text-white flex items-center justify-center">
      <div className="flex items-center justify-center px-14">
        <div className="about-us w-1/2">
          <h1 className="my-2 text-white text-5xl font-semibold pt-12 pb-2">
            What’s required at <span className="text-[#F49426]">your end</span>
          </h1>
          <p className="text-md font-light pb-4">
            Nothing Much, show your interest by registering yourself through the
            button and our team will get in touch with you.
          </p>
          <Button className="bg-[#F49426] text-black hover:bg-white font-semibold rounded-lg">Register Now</Button>
        </div>
        <div className="image w-1/2"></div>
      </div>
    </div>
  );
}

export default Required;
