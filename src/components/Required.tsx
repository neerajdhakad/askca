import React from "react";
import { Button } from "./ui/button";
import Image from "next/image"; 
import required from '/public/img/required.svg'
import Register from "./modal/Register";

function Required() {
  return ( 
    <div className="bg-[#182729] h-fit text-white"> 
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="mx-12 my-10 md:my-0 md:mx-28 ">
        <h2 className="text-4xl md:text-6xl font-semibold  md:w-3/5">
        What’s required at{" "}
          <span className="text-[#F49426]">your end</span>
        </h2>
        <h6 className="text-md md:text-2xl my-5">
        Nothing much, show your interest by registering yourself by clicking on the Register now button and our team will get in touch with you.
        </h6>
        {/* <Button className="bg-[#F49426] text-black hover:bg-white font-semibold register">
             Register Now
           </Button> */}
           <Register/>
      </div>
      
      <Image className="hidden md:flex md:w-2/5" src={required} alt={"about"} />
    </div>
  </div>
  );
}

export default Required;
