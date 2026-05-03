"use client";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <button
      onClick={() => signIn()}
      className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98] cursor-pointer"
    >
      <FaGoogle className="text-red-600" size={18} />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
