"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert(`Email Login Attempt:\nEmail: ${email}\nPassword: ${password}`);
    // TODO: Backend API call for manual login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center w-[90%] max-w-md border border-gray-200"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back 👋</h1>
        <p className="text-gray-500 mb-8">
          Sign in to access your personalized blog dashboard.
        </p>

        {/* Google SSO */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full
                     hover:shadow-[0_0_20px_rgba(66,133,244,0.5)] hover:scale-105 transition-all duration-300 ease-in-out
                     font-medium w-full mb-6 cursor-pointer"
        >
          <FcGoogle className="w-6 h-6" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <span className="h-px w-1/4 bg-gray-300"></span>
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <span className="h-px w-1/4 bg-gray-300"></span>
        </div>

        {/* Manual Login Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium
                       hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] hover:bg-blue-700 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-8">
          By signing in, you agree to our{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Terms of Service
          </span>{" "}
          &{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </motion.div>
    </div>
  );
}
