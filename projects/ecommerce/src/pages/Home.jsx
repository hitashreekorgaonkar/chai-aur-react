import React from "react";
import doeImg from "../assets/9488999.png";
import doeImg2 from "../assets/cashew1.png";
import doeImg3 from "../assets/almond1.png";
import doeImg4 from "../assets/almond2.png";
import doeImg5 from "../assets/almond3.png";
import lgImg from "../assets/istockphoto3.jpg";
// import lgImg from "../../assets/1000798_OIHFFD0.jpg";
// import smImg from "../../assets/19962751_6202913.jpg";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center items-center bgPeach">
        <div className="hidden md:block">
          <img className="absolute top-14 left-40 h-32" src={doeImg} alt="" />
          <img className="absolute top-64 left-60 h-32" src={doeImg5} alt="" />
          {/* <img className="absolute top-6 right-7 h-32" src={doeImg3} alt="" /> */}
          <img className="absolute top-60 right-28 h-32" src={doeImg2} alt="" />
          <img className="absolute top-10 right-80 h-32" src={doeImg4} alt="" />
        </div>
        <img className="w-6/12" src={lgImg} alt="" />
        {/* <img className="w-full md:hidden" src={smImg} alt="" /> */}

        {/* <img className="w-full hidden md:block" src={lgImg} alt="" /> */}
      </div>
    </div>
  );
}
