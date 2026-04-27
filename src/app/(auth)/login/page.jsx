"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = (data) => {
    console.log(data);
  };
  console.log(errors, "errors");

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      {/* Login Card */}
      <div className="max-w-md w-full bg-base-100 p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Login your account
          </h2>
          <div className="divider mt-8"></div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>
          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Email address
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button className="btn btn-neutral w-full text-white text-lg rounded-md mt-4">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-8 text-gray-600 font-medium">
          Dont’t Have An Account ?{" "}
          <Link href="/register" className="text-red-900 hover:underline">
            Register
          </Link>
        </p>

        {/* Social Login Section (Optional) */}
        <div className="divider text-gray-400 text-xs uppercase mt-8">
          Or login with
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <button className="btn btn-outline btn-circle hover:bg-gray-100 border-gray-300">
            <FaGoogle className="text-xl text-blue-500" />
          </button>
          <button className="btn btn-outline btn-circle hover:bg-gray-100 border-gray-300">
            <FaGithub className="text-xl text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
