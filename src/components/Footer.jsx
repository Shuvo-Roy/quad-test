import React from "react";
import image from "../assets/Image2.png";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";
import { IoLogoGoogle, IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-Orange">
      <div className="m-auto lg:w-8/12 md:w-10/12 w-11/12 py-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-12">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between gap-1 bg-white rounded-md px-3 py-1 lg:w-8/12 md:w-8/12">
              <input
                placeholder="Enter your email"
                className="border-none hover:border-none outline-none"
              />
              <span className="flex gap-1 items-center justify-between lg:text-white md:text-white lg:bg-red md:bg-red text-red py-1 px-4 rounded-lg font-semibold">
                <button>Subscribe</button>
                <FaArrowRightLong />
              </span>
            </div>

            <div className="flex flex-col-reverse lg:flex-row md:flex-row justify-center lg:justify-start md:justify-start gap-8">
              <div className="flex flex-col items-center justify-center gap-2 lg:items-start md:items-start">
                <span className="font-bold text-3xl flex items-center justify-center">pti<p className="text-3xl text-red font-bold">.</p></span>
                <p>Copyright©Tirppo.All Right Reserved</p>
              </div>
              <div className="flex gap-2 items-end justify-center mb-4">
                <span className="bg-red lg:bg-white md:bg-white p-2 rounded-full">
                  <IoLogoGoogle className="text-xl text-white lg:text-red md:text-red"/>
                </span>
                <span className="bg-red lg:bg-white md:bg-white p-2 rounded-full">
                  <IoLogoTwitter className="text-xl text-white lg:text-red md:text-red"/>
                </span>
                <span className="bg-red lg:bg-white md:bg-white p-2 rounded-full">
                  <FaInstagram className="text-xl text-white lg:text-red md:text-red"/>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 invisible md:visible lg:visible">
        <div className="flex items-center justify-center">
            <img src={image} className="p-1 h-52" />
        </div>
          
        </div>
      </div>
    </footer>
  );
}
