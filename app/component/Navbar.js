"use client";
import React, { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi"; // 👈 icons for hamburger menu
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`${poppins.className} flex items-center justify-between px-2 md:px-10 py-4 bg-gray-100 text-gray-800 h-16 shadow-sm fixed top-0 w-full z-50 flex-wrap`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <BiMessageRoundedDetail className="h-8 w-8 font-bold text-gray-700" />
        <p
          className={`${dancing.className} text-xl sm:text-2xl font-semibold text-gray-900 hidden md:inline-block`}
        >
          Welcome to 
        </p>
        <p className={`${dancing.className} text-xl sm:text-2xl font-semibold text-gray-900 `}>My Blog</p>
      </div>

      {/* Right Section (Desktop Menu) */}
      <div className=" ">

      
      <div className="hidden md:flex justify-end items-center gap-6">
        <Link href="#Home" className="cursor-pointer hover:text-blue-600">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none "
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center justify-center gap-4  md:hidden animate-slideDown">
          <Link
            href="#Home"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-600 text-lg"
          >
            Home
          </Link>
          <Link
            href="/profile"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-600 text-lg"
          >
            See Profile
          </Link>
          <Link
            href="/addblog"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-600 text-lg"
          >
            Add New Blog
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-gray-800 hover:text-blue-600 text-lg"
          >
            Contact Us
          </Link>
        </div>
        
      )}</div>
    </nav>
  );
};

export default Navbar;
