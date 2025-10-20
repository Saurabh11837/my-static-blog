"use client";
import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Poppins, Dancing_Script } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
});

const Navbar = () => {
  return (
    <nav
      className={`${poppins.className} flex items-center justify-between px-10 py-4 bg-gray-100 text-gray-800 h-16 shadow-sm fixed top-0 w-full z-50`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 w-1/3">
        <BiMessageRoundedDetail className="h-10 w-10 font-bold text-gray-700" />
        <p
          className={`${dancing.className} text-2xl font-semibold text-gray-900`}
        >
          Welcome to my, My Blog
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-end items-center gap-6">
        <Link href="/" className="cursor-pointer hover:text-blue-600">
          Home
        </Link>
        <Link href="/profile" className="cursor-pointer hover:text-blue-600">
          See Profile
        </Link>
        <Link href="/addblog" className="cursor-pointer hover:text-blue-600">
          Add New Blog
        </Link>
        <Link href="/contact" className="cursor-pointer hover:text-blue-600">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
