import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogpost = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}> 
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              {post.category}
            </span>
            <h3 className="text-lg font-semibold mt-3 text-gray-800">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{post.description}</p>
            <div className="text-gray-400 text-xs mt-3 flex justify-between items-center">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogpost;
