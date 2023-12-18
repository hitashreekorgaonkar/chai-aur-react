import React from "react";
import { Link, NavLink } from "react-router-dom";
import rucksack from "../../assets/icons8-rucksack-60.png";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="w-full h-14 bg-blue-200 flex justify-between items-center px-0 sm:px-4">
        <Link to="/">
          <img width="60" src={rucksack} alt="" />
        </Link>
        <ul className="flex font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500" : "text-gray-700"
                } mx-[10px] cursor-pointer`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whyus"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500" : "text-gray-700"
                } mx-[10px] cursor-pointer`
              }
            >
              Why Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500" : "text-gray-700"
                } mx-[10px] cursor-pointer`
              }
            >
              Contact Us
            </NavLink>
          </li>
          {/* <li className="mx-[10px] cursor-pointer">Why Us</li>
        <li className="mx-[10px] cursor-pointer">Contact US</li> */}
        </ul>
        <div className="px-1 sm:px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
          Login/Signup
        </div>
        {/* <div className="sm:hidden">
          <Link className="text-4xl" to="http://">
            =
          </Link>
        </div> */}
      </nav>
    </header>
  );
}
