"use client";
import React, { useState } from "react";
import Image from "next/image";

import LifeStyle01 from "../component/asset/LifeStyle_01.webp";
import LifeStyle02 from "../component/asset/Lifestyle_02.webp";
import LifeStyle03 from "../component/asset/Lifestyle_03.webp";
import Startup01 from "../component/asset/Startup_01.webp";
import Startup02 from "../component/asset/Startup_02.webp";
import Startup03 from "../component/asset/Startup_03.webp";
import Technology01 from "../component/asset/Technology_01.webp";
import Technology02 from "../component/asset/Technology_02.webp";
import Technology03 from "../component/asset/Technology_03.webp";
import Finance from "../component/asset/Finance.webp";

import Blogpost from "./Blogpost";

const Blog = () => {
  // All blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "A detailed step by step guide to manage your lifestyle",
      category: "Lifestyle",
      author: "John Carter",
      description:
        "A simple step-by-step guide to managing your lifestyle effectively.",
      image: LifeStyle01,
      date: "Oct 15, 2025",
    },
    {
      id: 2,
      title: "How to create an effective startup roadmap idea",
      category: "Startup",
      author: "Elena Smith",
      description:
        "Creating an effective startup roadmap helps you plan an idea into architecture.",
      image: Startup01,
      date: "Oct 10, 2025",
    },
    {
      id: 3,
      title: "Learning new technology to boost your career in software",
      category: "Technology",
      author: "Michael Brown",
      description:
        "New skills = new opportunities. Learn how to grow as a software engineer.",
      image: Technology01,
      date: "Oct 5, 2025",
    },
    {
      id: 4,
      title: "Tips for getting the most out of apps and software",
      category: "Technology",
      author: "Sara Adams",
      description:
        "We use tons of apps daily — here’s how to make the most of them.",
      image: Technology02,
      date: "Sep 29, 2025",
    },
    {
      id: 5,
      title: "Enhancing your skills and capturing memorable moments",
      category: "Lifestyle",
      author: "Emily Clark",
      description:
        "In today’s fast world, balancing work and passion is the key.",
      image: LifeStyle02,
      date: "Sep 25, 2025",
    },
    {
      id: 6,
      title: "Maximizing returns by minimizing resources in your startup",
      category: "Startup",
      author: "Ryan Lewis",
      description:
        "Smart scaling: how startups achieve more with fewer resources.",
      image: Startup02,
      date: "Sep 20, 2025",
    },
    {
      id: 7,
      title: "Taxes on Luxury Houses",
      category: "Finance",
      author: "David Green",
      description:
        "Luxury home taxes — what they mean for the market and your wallet.",
      image: Finance,
      date: "Sep 12, 2025",
    },
    {
      id: 8,
      title: "The New Way of Study",
      category: "Startup",
      author: "Monica Lee",
      description:
        "Blending traditional study with new digital tools for better learning.",
      image: Startup03,
      date: "Sep 5, 2025",
    },
  ];

  // ✅ State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // ✅ Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // ✅ All categories list
  const categories = ["All", "Technology", "Music", "Lifestyle", "Fitness", "Food", "Startup", "Finance"];

  return (
    <main className="px-6 md:px-16 py-10">
  {/* Category Filter Buttons */}
  <div className="flex flex-row justify-center items-center gap-4 mb-10 flex-wrap">
    {categories.map((category) => (
      <p
        key={category}
        onClick={() => handleCategoryChange(category)}
        className={`text-base md:text-lg px-4 py-1 border rounded-2xl cursor-pointer transition-all duration-200
          ${
            selectedCategory === category
              ? "bg-blue-700 text-white border-blue-700 shadow-md"
              : "text-gray-800 hover:bg-gray-100"
          }`}
      >
        {category}
      </p>
    ))}
  </div>

  {/* Blog Posts Display */}
  {filteredPosts.length > 0 ? (
    <Blogpost posts={filteredPosts} />
  ) : (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Image
        src="/empty_state.svg" // optional custom image (place inside public folder)
        alt="No results"
        width={180}
        height={180}
        className="opacity-80 mb-6"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No blogs found
      </h2>
      <p className="text-gray-500 max-w-md">
        It seems there are no posts available in the <span className="font-medium text-blue-600">{selectedCategory}</span> category yet.  
        Please try selecting another category or check back later!
      </p>
    </div>
  )}
</main>

  );
};

export default Blog;
