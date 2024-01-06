import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "../components/Card";

export default function Popular({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const filteredData = data.filter((item) => item.IsPopular);
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredData.length - 1 ? 0 : prev + 1));
  };

  //console.log(data)
  return (
    <div className="bg-bgBack">
      <div className="w-11/12 lg:w-9/12 md:w-10/12 m-auto pt-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xl p-2">Popular</p>
          </div>
          <div className="flex items-center justify-between gap-2">
          <span className="text-red invisible md:visible lg:visible">AddMore</span>
            <FaChevronLeft
              className="cursor-pointer text-lg"
              onClick={prevSlide}
            />
            <FaChevronRight
              className="cursor-pointer text-lg"
              onClick={nextSlide}
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * data.length}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {filteredData &&
              filteredData.map((item, index) => (
                <div key={item.Id} className="w-full h-full">
                  <Card item={item} type="popularity" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
