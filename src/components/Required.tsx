import React from "react";
import { Button } from "./ui/button";
import Image from "next/image"; 
import required from '/public/img/required.svg'
import Register from "./modal/Register";

function Required() {
  return ( 
    <div id="required" className="bg-[#182729] h-fit text-white"> 
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="mx-12 my-10 md:my-0 md:mx-10 ">
        <h2 className="text-4xl text-center md:text-left md:text-6xl font-semibold  md:w-3/5">
        What’s required at{" "}
          <span className="text-[#F49426]">your end</span>
        </h2>
        <h6 className="text-base font-light text-center md:text-left text-md md:text-2xl my-5">
        Nothing much, show your interest by registering yourself by clicking on the <span className="text-[#F49426] font-semibold">&quot;Register Now&quot;</span> button and our team will get in touch with you.
        </h6> 
           <div className="text-center md:text-left">
              <Register/>
           </div>
      </div>
      
      <Image className="hidden md:flex md:w-2/5" src={required} alt={"about"} />
    </div>
  </div>
  );
}

export default Required;
