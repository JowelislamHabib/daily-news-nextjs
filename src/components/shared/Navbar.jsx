import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/daily-news.png";

const Navbar = () => {
  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="container navbar mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
            <Link
              href="/"
              className="text-3xl font-serif italic font-black tracking-tight text-black"
            >
              <Image src={logo} width={100} height={50} alt="logo" />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 text-gray-600 font-medium">
              <li>
                <Link href="/politics">Politics</Link>
              </li>
              <li>
                <Link href="/technology">Technology</Link>
              </li>
              <li>
                <Link href="/culture">Culture</Link>
              </li>
              <li>
                <Link href="/business">Business</Link>
              </li>
              <li>
                <Link href="/science">Science</Link>
              </li>
              <li>
                <Link href="/opinion">Opinion</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-6">
            <Link
              href="/signin"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Sign In
            </Link>
            <button className="btn btn-sm md:btn-md bg-[#990000] hover:bg-[#7a0000] text-white border-none rounded-none px-8 font-serif text-lg capitalize">
              Subscribe
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
