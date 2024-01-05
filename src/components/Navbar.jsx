import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-2xl font-semibold">pti.</p>
      </div>
      <div>
        <span className="flex items-center gap-1 bg-white rounded-md p-1">
          <CiSearch />
          <input placeholder="Search Audiobook" />
        </span>
        
        <div>
          <div>Menu</div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
