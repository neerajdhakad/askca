import React from "react";
import FeatureCard from "./FeatureCard";
import a from "/public/img/Features/1.svg"
import b from "/public/img/Features/2.svg"
import c from "/public/img/Features/3.svg"
import d from "/public/img/Features/4.svg"
import e from "/public/img/Features/5.svg"

function OurFeatures() {
  return (
    <div id="features" className="bg-[#182729] text-white py-4 md:py-14">
      <h1 className="text-center text-white text-5xl font-semibold pt-12 pb-2">
        Our <span className="text-[#F49426]">Features</span>
      </h1>
      <p className="text-center text-base md:text-md font-light">
        Features designed for your needs
      </p>
      <div className="flex-col md:flex-row flex px-14 py-10 gap-10 md:gap-7 flex-wrap items-center justify-center">
        <FeatureCard title="First of our kind" description={"We are first of the kind to let you make money through paper trading"} source={e}/>
        <FeatureCard title="Zero Charge" description={"We do not charge even a penny from you"} source={a}/>
        <FeatureCard title="Robust" description={"A Robust platform with inbuilt risk management"} source={b}/>
        <FeatureCard title="Flexibility" description={"Trade from anywhere at your convenience"} source={c}/>
        <FeatureCard title="Insights and tools" description={"Access to exclusive insights and tools tailored for the modern trader’s journey"} source={d}/>
      </div>
    </div>
  );
}

export default OurFeatures;
