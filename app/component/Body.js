"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdCreateNewFolder } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Poppins, Dancing_Script } from "next/font/google";

import Image from "next/image";
import img from "../component/asset/saurabh4.jpg";
import Blog from "./Blog";
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

const Body = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
    setSearch(""); // clear input after search
  };

  return (
    <div className={`${poppins.className} flex`}>
      {/* ✅ Left Sidebar (no border, shadow added) */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-100 shadow-lg flex flex-col justify-between z-40">
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-8 gap-3">
          <div className="h-35 w-35 rounded-full border-4 border-gray-300 flex items-center justify-center bg-white text-gray-600 font-medium">
            {/* Profile */} <Image src={img} alt="profile pic" className="rounded-full"/>
          </div>
          <p className="text-gray-600 text-sm">So-rav Blog...</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10 flex flex-col gap-3 px-6">
          <button className="flex items-center gap-3 text-gray-700 hover:text-black hover:bg-gray-200 px-3 py-2 rounded-lg transition-all duration-200">
            <FaHome className="h-5 w-5" />
            <p>Home</p>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-black hover:bg-gray-200 px-3 py-2 rounded-lg transition-all duration-200">
            <CgProfile className="h-5 w-5" />
            <p>See Profile</p>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-black hover:bg-gray-200 px-3 py-2 rounded-lg transition-all duration-200">
            <MdCreateNewFolder className="h-5 w-5" />
            <p>Add New Blog</p>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-black hover:bg-gray-200 px-3 py-2 rounded-lg transition-all duration-200">
            <FaPhoneVolume className="h-5 w-5" />
            <p>Contact Us</p>
          </button>
        </nav>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mb-4">
          © 2025 My Blog
        </div>
      </aside>

      {/* ✅ Right Section */}
      <div className="flex-1 ml-64 min-h-screen bg-gray-50">
        {/* Top Navbar */}
        <header className="w-full  sticky top-0 z-30  flex items-center justify-between px-2 md:px-8 py-4 bg-gray-100 text-gray-800 h-16 shadow-sm">
          <div className="w-1/2 flex  items-center gap-2">
            <BiMessageRoundedDetail className="h-8 w-8 text-gray-700" />
            <p
              className={`${dancing.className} text-xl md:text-2xl font-semibold text-gray-900`}
            >
               Blogging Site
            </p>
          </div>

          {/* Search Section */}
          <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search Blog..."
              className="px-3 py-2 text-sm bg-white focus:outline-none text-gray-800 w-30 md:w-56 placeholder-gray-500"
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
        </header>

        {/* Main Content */}
        <main className=" w-full h-full  flex flex-col  items-center gap-5   ">
            <div className="mt-10 md:px-30 flex flex-col  items-center gap-5">
                <h1 className=" text-center  text-4xl md:text-5xl font-bold text-gray-700 mb-4">This is a{" "} 
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    blogging
                    </span>{" "}  <br></br>
                    platform.
                </h1>
                <p className="text-center text-gray-700 text-xs md:text-sm lg:text-base">
                    This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
                </p>

                {/* Searc blog */}
                <div className="border rounded h-10 w-1/2 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search Blog..."
                  className=" px-3 py-2  text-sm bg-white focus:outline-none text-gray-800  md:w-56 placeholder-gray-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
              onClick={handleSearch}
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 text-sm transition-all duration-200 cursor-pointer h-10 rounded-tr rounded-br"
            >
              Search
            </button>
                </div>
            </div>
            
            {/* Import Blog page */}
            <Blog/>
        </main>
      </div>
    </div>
  );
};

export default Body;
