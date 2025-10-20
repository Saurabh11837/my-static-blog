"use client";
import React, { useState } from "react";
import Blogpost from "@/app/component/Blogpost";
import LifeStyle01 from "@/app/component/asset/LifeStyle_01.webp";
import Startup01 from "@/app/component/asset/Startup_01.webp";
import Technology01 from "@/app/component/asset/Technology_01.webp";
import Technology02 from "@/app/component/asset/Technology_02.webp";
import Finance from "@/app/component/asset/Finance.webp";
import Startup02 from "@/app/component/asset/Startup_02.webp";
import Startup03 from "@/app/component/asset/Startup_03.webp";
import LifeStyle02 from "@/app/component/asset/Lifestyle_02.webp";

export const blogPosts = [
  {
    id: 1,
    title: "A detailed step by step guide to manage your lifestyle",
    category: "Lifestyle",
    author: "John Carter",
    description:
      "A simple step-by-step guide to managing your lifestyle effectively.",
    image: LifeStyle01,
    date: "Oct 15, 2025",
    content: [
      "1. Assess Your Current Lifestyle",
      "2. Focus on Health",
      "3. Set Clear Goals",
      "4. Create Daily Routines",
      "5. Manage Time Wisely",
      "6. Build Strong Relationships",
      "7. Keep Learning",
      "8. Celebrate Small Wins",
    ],
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
    content: [
      "1. Define your vision and mission clearly.",
      "2. Understand your target audience.",
      "3. Create a lean plan and milestones.",
      "4. Build a strong team.",
    ],
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
    content: [
      "1. Learn new frameworks.",
      "2. Practice coding daily.",
      "3. Join open source projects.",
    ],
  },
  {
    id: 4,
    title: "Taxes on Luxury Houses",
    category: "Finance",
    author: "David Green",
    description:
      "Luxury home taxes — what they mean for the market and your wallet.",
    image: Finance,
    date: "Sep 12, 2025",
    content: [
      "1. Understand luxury tax.",
      "2. Track market value.",
      "3. Consult professionals.",
    ],
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const categories = ["All", "Technology", "Lifestyle", "Startup", "Finance"];

  return (
    <main className="px-6 md:px-16 py-10">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-base px-4 py-1 border rounded-2xl cursor-pointer transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-700 text-white border-blue-700"
                : "text-gray-800 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <Blogpost posts={filteredPosts} />
      ) : (
        <p className="text-center text-gray-500 text-lg mt-20">
          🚫 No blogs found in this category.
        </p>
      )}
    </main>
  );
};

export default Blog;
