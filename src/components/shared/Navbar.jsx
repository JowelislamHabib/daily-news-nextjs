"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/daily-news.png";
import NavLinks from "./NavLinks";
import { PiSignInDuotone } from "react-icons/pi";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const userLoggedIn = session?.user;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container navbar mx-auto px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="navbar-start">
          <Link href="/">
            <Image src={logo} width={100} height={50} alt="logo" />
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-gray-600 font-medium">
            <li>
              <NavLinks href="/politics">Politics</NavLinks>
            </li>
            <li>
              <NavLinks href="/about">About</NavLinks>
            </li>
            <li>
              <NavLinks href="/culture">Culture</NavLinks>
            </li>
            <li>
              <NavLinks href="/business">Business</NavLinks>
            </li>
          </ul>
        </div>

        {/* RIGHT */}

        <div className="navbar-end gap-6">
          {isPending ? (
            <span className="loading loading-spinner text-error"></span>
          ) : userLoggedIn ? (
            <div className="flex justify-center items-center gap-4">
              <p> Hello, {userLoggedIn?.name}</p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <Image
                      src={
                        userLoggedIn?.image ||
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/250px-Icon-round-Question_mark.svg.png"
                      }
                      alt={userLoggedIn?.name || "User"}
                      height={40}
                      width={40}
                      className="object-contain border border-2 border-neutral-200 p-1 rounded-full"
                    />
                  </div>
                </div>

                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                  <li>
                    <a>{userLoggedIn?.name}</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link href={"/"} onClick={async () => authClient.signOut()}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="btn bg-gray-900 hover:bg-red-700 text-sm font-medium text-white"
              >
                <PiSignInDuotone size={24} />
                Log In
              </Link>

              <button className="hidden md:inline-block btn btn-sm md:btn-md bg-red-900 hover:bg-red-700 text-white px-8 font-serif text-lg capitalize">
                Subscribe
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
