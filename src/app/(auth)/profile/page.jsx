"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import {
  FaUserEdit,
  FaEnvelope,
  FaIdBadge,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-32 bg-linear-to-r from-red-200 to-red-700 w-full"></div>

          <div className="px-8 pb-8">
            <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-12 gap-6">
              <div className="avatar">
                <div className="w-32 rounded-lg ring ring-white ring-offset-base-100 ring-offset-4 shadow-lg bg-white">
                  <Image
                    height={40}
                    width={40}
                    src={
                      user?.image ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Profile"
                    className="object-contain border-2 border-gray-400 rounded-xl p-1 shadow-sm"
                  />
                </div>
              </div>

              {/* User Identity */}
              <div className="flex-1 text-center md:text-left mb-2">
                <h1 className="text-3xl font-bold text-gray-800">
                  {user?.name || "Anonymous User"}
                </h1>
                <p className="text-gray-500 font-medium">Member since 2026</p>
              </div>

              {/* Edit Button */}
              <button className="btn btn-neutral btn-sm md:btn-md gap-2 rounded-lg">
                <FaUserEdit /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-red-600" /> Security
              </h3>
              <div className="space-y-4">
                <div className="text-sm">
                  <p className="text-gray-400 uppercase text-[10px] font-bold tracking-widest">
                    Account Status
                  </p>
                  <span className="badge bg-green-600 py-2 badge-md text-white mt-1">
                    Verified
                  </span>
                </div>
                <div className="text-sm">
                  <p className="text-gray-400 uppercase text-[10px] font-bold tracking-widest">
                    Role
                  </p>
                  <p className="font-semibold text-gray-700">Subscriber</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Info Area */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <FaIdBadge className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Full Name
                    </p>
                    <p className="font-semibold text-gray-800">{user?.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Email Address
                    </p>
                    <p className="font-semibold text-gray-800">{user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link
                  href={"/"}
                  onClick={async () => authClient.signOut()}
                  className="btn btn-block text-gray-400 hover:bg-red-900 hover:text-white transition-colors"
                >
                  Logout from all devices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
