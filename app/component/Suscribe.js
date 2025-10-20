"use client";
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address!");
      return;
    }
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <>
    <section className="h-50 w-full py-10 bg-white text-center flex flex-col gap-3">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
        Never Miss a Blog!
      </h2>

      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center max-w-md mx-auto border border-gray-300 rounded-md overflow-hidden"
      >
        <div className="h-10 flex w-full">
            <input
                type="email"
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" px-4 w-100  outline-none text-gray-700 focus-outline-none "
            />
            <button
                type="submit"
                className="bg-gray-800 h-11 text-white px-6 py-3 font-medium hover:bg-indigo-600 transition-colors cursor-pointer"
                >
                Subscribe
            </button>
        </div>
        
      </form>
    </section>
    </>
  );
};

export default Subscribe;
