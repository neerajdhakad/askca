import React from "react";
import FeatureCard from "./FeatureCard";

function OurFeatures() {
  return (
    <div className="bg-[#182729] text-white py-4 md:py-14">
      <h1 className="text-center text-white text-5xl font-semibold pt-12 pb-2">
        Our <span className="text-[#F49426]">Features</span>
      </h1>
      <p className="text-center text-md font-light">
        Features designed for your needs
      </p>
      <div className="flex-col md:flex-row flex px-14 py-10 gap-10 md:gap-7 flex-wrap items-center justify-center">
        <FeatureCard title="First of our kind" description={"We are first of the kind to let you make money through paper trading"}/>
        <FeatureCard title="0 Charge" description={"We do not charge even a penny from you"}/>
        <FeatureCard title="Robust" description={"A Robust platform with inbuilt risk management"}/>
        <FeatureCard title="Flexibility" description={"Trade from anywhere at your convenience"}/>
        <FeatureCard title="Insights and tools" description={"Access to exclusive insights and tools tailored for the modern trader’s journey"}/>
      </div>
    </div>
  );
}

export default OurFeatures;
