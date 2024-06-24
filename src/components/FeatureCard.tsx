import React from "react";
import { FaBeer } from "react-icons/fa";
import Image from "next/image"; 

type FeatureCardProps = {
  title: string;
  description: string;
  source:string
};

function FeatureCard({ title, description,source }: FeatureCardProps) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="card w-full h-full md:h-48 md:w-96 flex flex-col items-center justify-center text-center"> 
          <Image src={source} alt={"logo"} className="mb-3 h-10 w-10"/>
          <h6 className="text-3xl md:text-md pb-3 font-semibold">{title}</h6>
          <p className="text-base font-light md:text-xl px-7">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
