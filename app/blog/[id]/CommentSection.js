"use client";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CommentSection() {
  // initial dummy comments
  const [comments, setComments] = useState([
    {
      name: "Dev Kumar",
      text: "Honestly, I did not expect this to work, but it totally did. Saved my project!",
      time: "5 months ago",
    },
    {
      name: "GreatStack",
      text: "Hi! This blog is a must-read.",
      time: "5 months ago",
    },
    {
      name: "Sneha Patel",
      text: "Very well written! The examples were super helpful.",
      time: "4 months ago",
    },
    {
      name: "Arjun Singh",
      text: "Love how simply everything is explained. Keep it up!",
      time: "3 months ago",
    },
    {
      name: "Emily Rose",
      text: "This helped me understand the concept better. Thanks!",
      time: "2 months ago",
    },
  ]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return alert("Please fill out both fields!");

    const newComment = {
      name,
      text,
      time: "Just now",
    };

    // Add new comment to array (newest on top)
    setComments([newComment, ...comments]);

    // Reset form
    setName("");
    setText("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      {/* Comments Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Comments ({comments.length})
      </h2>

      {/* Comments List */}
      <div className="space-y-4 mb-10">
        {comments.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-start gap-3 hover:shadow-md transition-all duration-200"
          >
            <div className="bg-gray-100 p-2 rounded-full">
              <FiUser className="text-gray-600 text-xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{c.name}</p>
              <p className="text-gray-600 text-sm mt-1">{c.text}</p>
              <p className="text-gray-400 text-xs mt-1">{c.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Comment Form */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">
          Add your comment
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm font-medium"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Share Section */}
      <div className="mt-8 border-t border-gray-200 pt-5">
        <p className="text-sm text-gray-600 mb-3">
          Share this article on social media
        </p>
        <div className="flex gap-4 text-blue-600 text-lg">
          <a href="#" className="hover:text-blue-800 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-800 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-800 transition">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
