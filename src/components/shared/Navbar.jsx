"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/daily-news.png";
import NavLinks from "./NavLinks";
import { PiSignOutDuotone, PiUserCircleDuotone } from "react-icons/pi";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const userLoggedIn = session?.user;

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-[80px] py-2 flex items-center justify-between">
          <div className="navbar-start">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src={logo}
                width={160}
                height={60}
                alt="Daily News Logo"
                className="h-auto w-auto max-h-12 object-contain"
                priority
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8 text-[15px] font-bold uppercase tracking-tight text-gray-500">
              <li className="hover:text-red-900 transition-colors">
                <NavLinks href="/category/06">Culture</NavLinks>
              </li>
              <li className="hover:text-red-900 transition-colors">
                <NavLinks href="/category/07">Business</NavLinks>
              </li>
              <li className="hover:text-red-900 transition-colors">
                <NavLinks href="/category/08">Sports</NavLinks>
              </li>
              <li className="hover:text-red-900 transition-colors">
                <NavLinks href="/about">About</NavLinks>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-3">
            {isPending ? (
              <span className="loading loading-spinner loading-sm text-red-900"></span>
            ) : userLoggedIn ? (
              <div className="flex items-center gap-4">
                <div className="hidden md:block text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                    Welcome back
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    {userLoggedIn?.name}
                  </p>
                </div>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="avatar hover:ring-2 ring-red-900 ring-offset-2 transition-all rounded-full"
                  >
                    <div className="w-10 h-10 rounded-full border border-gray-200">
                      <Image
                        src={
                          userLoggedIn?.image ||
                          "https://i.ibb.co/6NGp9vQ/user-placeholder.png"
                        }
                        alt={userLoggedIn?.name || "User"}
                        height={40}
                        width={40}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <ul className="menu dropdown-content bg-white rounded-xl mt-4 w-56 p-2 shadow-2xl border border-gray-100 z-50">
                    <li className="menu-title text-gray-400 uppercase text-[10px] font-black">
                      Account Settings
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="py-3 flex items-center gap-3 hover:bg-gray-50"
                      >
                        <PiUserCircleDuotone
                          size={20}
                          className="text-red-900"
                        />
                        <span className="font-semibold">My Profile</span>
                      </Link>
                    </li>
                    <div className="divider my-1"></div>
                    <li>
                      <Link
                        href="/"
                        onClick={async () => authClient.signOut()}
                        className="py-3 flex items-center gap-3 text-red-600 hover:bg-red-50"
                      >
                        <PiSignOutDuotone size={20} />
                        <span className="font-semibold">Sign Out</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="btn btn-ghost text-gray-600 hover:text-red-900 font-bold px-4"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="btn bg-red-900 hover:bg-gray-900 border-none text-white font-bold px-6"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
