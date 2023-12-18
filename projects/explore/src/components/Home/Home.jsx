import React from "react";
import lgImg from "../../assets/1000798_OIHFFD0.jpg";
import smImg from "../../assets/19962751_6202913.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="w-full hidden md:block" src={lgImg} alt="" />
        <img className="w-full md:hidden" src={smImg} alt="" />
      </div>
    </div>
  );
}
