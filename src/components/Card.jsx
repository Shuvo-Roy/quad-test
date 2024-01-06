import React from "react";

export default function Card({ item}) {
  return (
    <div className="flex flex-col items-center h-56 w-56">
      <div className="p-1 h-5/6 w-full  overflow-hidden">
        <img src={item.ImageUrl} alt={item.Name} className="h-full w-full object-cover rounded-xl"/>
      </div>
      <div>
        <h3 className="text-textCol">{item.Name}</h3>
      </div>
    </div>
  );
}
