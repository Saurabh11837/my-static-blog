"use client";
import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <BlogContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

// custom hook for easy access
export const useBlog = () => useContext(BlogContext);
