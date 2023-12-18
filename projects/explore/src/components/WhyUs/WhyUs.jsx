import React from "react";
import expertGuide2 from "../../assets/expertGuide2.jpg";
import safeResponsible from "../../assets/safeResponsible.jpg";
import offbeatDestinations from "../../assets/offbeatDestinations.jpg";
import doorToDoorLug2 from "../../assets/doorToDoorLug2.jpg";
import learningLeisure from "../../assets/learningLeisure.jpg";

export default function Header() {
  return (
    <div className="bg-yellow-300">
      {" "}
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="">
          <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
              Why Us
            </p>
            <div className="w-56 h-1 border-b-4 border-b-green-600 rounded-2xl mt-2 md:mt-4 mb-12 "></div>
          </div>
        </div>

        <div className="w-[90%] h-auto flex flex-wrap justify-around">
          <div className="w-60 bg-white flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="" src={expertGuide2} alt="" srcset="" />
            <p className="text-2xl font-bold text-indigo-700 capitalize mt-4">
              Experts and Mentors
            </p>
          </div>
          <div className="w-60 bg-white flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="h-24" src={safeResponsible} alt="" srcset="" />
            <p className="text-2xl font-bold text-indigo-700 capitalize mt-1">
              Safe and responsible travelling
            </p>
          </div>

          <div className="w-60 bg-white flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="h-24" src={offbeatDestinations} alt="" srcset="" />
            <p className="text-2xl font-bold text-indigo-700 capitalize mt-5">
              Offbeat destination
            </p>
          </div>

          <div className="w-60 bg-white flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="" src={doorToDoorLug2} alt="" srcset="" />
            <p className="text-2xl font-bold text-indigo-700 capitalize mt-4">
              Learning with leisure
            </p>
          </div>

          <div className="w-60 bg-white flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img className="" src={learningLeisure} alt="" srcset="" />
            <p className="text-2xl font-bold text-indigo-700 capitalize mt-3">
              Door to door Tours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
