"use client";
import React, { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Poppins, Dancing_Script } from "next/font/google";

// main navbar font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// only for "My Blog"
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
});

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
    setSearch(""); // clear input after search
  };

  return (
    <nav
      className={`${poppins.className} flex items-center justify-between px-10 py-4 bg-gray-100 text-gray-800 h-16 shadow-sm`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <BiMessageRoundedDetail className="h-10 w-10 font-bold text-gray-700" />
        <p className={`${dancing.className} text-2xl font-semibold text-gray-900`}>
          Welcome to my, My Blog
        </p>
      </div>

      {/* Right Section (Search Bar) */}
      <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search Blog..."
          className="search px-3 py-2 text-sm bg-white focus:outline-none text-gray-800 w-56 placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm transition-all duration-200"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
