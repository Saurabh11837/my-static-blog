"use client";
import Footer from "@/app/component/Footer";
import Navbar from "@/app/component/Navbar";
import { useSearchParams } from "next/navigation";
import CommentSection from "./CommentSection";

export default function BlogDetail({ params }) {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const category = searchParams.get("category");
  const author = searchParams.get("author");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const date = searchParams.get("date");

  const words = title.split(" ");
  const half = Math.floor(words.length / 2);
  const firstHalf = words.slice(0, half).join(" ");
  const secondHalf = words.slice(half).join(" ");
  return (
    <>
      <Navbar />
      <div className="px-50 py-20 flex flex-col gap-4 items-center justify-center">
        <p className="text-blue-600 font-bold">Published on {date}</p>
        <h1 className="text-5xl font-bold text-center">
          {firstHalf}
          <br />
          {secondHalf}
        </h1>
        <p className="text-gray-400">{description}</p>
        <img src={image} alt={title} className="h-full" />
        <div className="w-full">
          <p className="font-bold items">
            {category} • {author} • {date}
          </p>
          <p className="text-5xl font-bold">{title}</p>
          <p>
            Lorem50 ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <CommentSection />
        </div>
      </div>


      {/* Footer add */}
      <Footer />
    </>
    
  );
}
