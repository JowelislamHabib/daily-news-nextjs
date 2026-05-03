"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import GoogleLogin from "@/components/GoogleLogin";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (loginData) => {
    console.log(loginData);
    const { email, password } = loginData;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }

    console.log(data, error, "login");
  };

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
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
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
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
