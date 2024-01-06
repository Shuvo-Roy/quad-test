import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";

export default function Navbar() {
  const [istoggleItem, setToggleItem] = useState(false);
  const toggleItem = () => {
    setToggleItem(!istoggleItem);
  };

  return (
    <div className="bg-bgBack">
      <div className="grid grid-cols-5 items-center justify-between py-4 w-11/12 lg:w-9/12 md:w-10/12 m-auto">
        <div className="lg:col-span-1 md:col-span-1 col-span-1">
          <p className="text-3xl font-bold">pti.</p>
        </div>

        <div className="flex gap-2 lg:col-span-3 md:col-span-3 col-span-4">
          <span className="flex items-center gap-1 bg-white rounded-md p-1 w-full">
            <CiSearch className="text-red text-lg" />
            <input
              placeholder="Search Audiobook"
              className="border-none hover:border-none outline-none"
            />
          </span>

          <div className="bg-bgBack flex relative">
            <div className="">
              <div
                onClick={toggleItem}
                className="bg-white rounded-md px-3 py-1 flex items-center justify-between uppercase font-semibold w-40 cursor-pointer"
              >
                <p>Menu</p>
                <FaAngleDown className="text-red text-2xl" />
              </div>

              <div
                className={` ${
                  istoggleItem
                    ? "bg-white text-base list-none absolute w-full mt-2 rounded-md font-light z-10"
                    : "hidden"
                }`}
              >
                <ul className="h-full w-full py-1 bg-white rounded-lg text-lg">
                  <li className="px-4 py-1 hover:bg-bgBack">
                    <a href="">Home</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-bgBack">
                    <a href="">Details</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-bgBack">
                    <a href="">Category</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-bgBack">
                    <a href="">My Favorites</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-bgBack">
                    <a href="">Profile</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-bgBack">
                    <a href="">Log In/Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 invisible md:visible lg:visible flex justify-end items-center">
          <span className="bg-red p-1 rounded-full">
            <RiUserLine className="text-white text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
}
