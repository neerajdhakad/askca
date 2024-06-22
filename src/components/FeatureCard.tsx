import React from "react";
import { FaBeer } from "react-icons/fa";

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="card h-48 w-96 flex flex-col items-center justify-center text-center">
          <FaBeer className="mb-3" />
          <h6 className="text-3xl md:text-md pb-3 font-semibold">{title}</h6>
          <p className="text-xl md:text-sm px-7">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
