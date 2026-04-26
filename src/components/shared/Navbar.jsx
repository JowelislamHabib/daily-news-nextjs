import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/daily-news.png";
import NavLinks from "./NavLinks";
import { PiSignInDuotone } from "react-icons/pi";

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
                <NavLinks href="/politics">Politics</NavLinks>
              </li>
              <li>
                <NavLinks href="/about" className="text-blue-700">
                  About
                </NavLinks>
              </li>
              <li>
                <NavLinks href="/culture">Culture</NavLinks>
              </li>
              <li>
                <NavLinks href="/business">Business</NavLinks>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-6">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
