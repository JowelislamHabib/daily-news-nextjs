"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/GoogleLogin";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const handleRegistrationFunc = async (userData) => {
    const { name, photo, email, password } = userData;

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
    });

    if (error) {
      alert(error.message);
    }
    if (data) {
      alert(
        "Registration successful! Please check your email to verify your account.",
      );
      router.push("/");
    }

    console.log(data, error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      {/* Registration Card */}
      <div className="max-w-xl w-full bg-base-100 p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Register your account
          </h2>
          <div className="divider mt-8"></div>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit(handleRegistrationFunc)}
        >
          {/* Your Name Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.photo.message}</small>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-gray-700">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
              {...register("email", { required: "Email is required" })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.email.message}</small>
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
              className="input input-bordered w-full bg-gray-50 focus:bg-white transition-all"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-sm"
                required
              />
              <span className="label-text text-gray-600">
                Accept{" "}
                <span className="font-bold text-gray-800">
                  Term & Conditions
                </span>
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button className="btn btn-neutral w-full text-white text-lg rounded-md mt-2">
            Register
          </button>
        </form>

        <div className="py-6">
          <GoogleLogin />
        </div>

        {/* Login Link */}
        <p className="text-center mt-8 text-gray-600 font-medium">
          Already Have An Account?{" "}
          <Link href="/login" className="text-red-900 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
