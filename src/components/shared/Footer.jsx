import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";
import Image from "next/image";
import logo from "@/assets/daily-news.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Image
                src={logo}
                width={160}
                height={60}
                alt="Daily News Logo"
                className="h-auto w-auto max-h-12 object-contain filter invert"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted source for breaking news, expert analysis, and
              in-depth reporting from around the globe. Stay informed with the
              stories that matter.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-b border-red-900 pb-2 inline-block">
              Categories
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/category/01"
                  className="hover:text-red-500 transition-colors"
                >
                  Breaking News
                </Link>
              </li>
              <li>
                <Link
                  href="/category/02"
                  className="hover:text-red-500 transition-colors"
                >
                  International
                </Link>
              </li>
              <li>
                <Link
                  href="/category/04"
                  className="hover:text-red-500 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/category/05"
                  className="hover:text-red-500 transition-colors"
                >
                  Sports & Entertainment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-b border-red-900 pb-2 inline-block">
              Our Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Editorial Desk
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest border-b border-red-900 pb-2 inline-block">
              Subscribe
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates directly in your inbox.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border border-gray-700 rounded py-3 px-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="absolute right-2 top-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded transition-colors">
                <PiEnvelopeSimpleDuotone size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} DailyNews Portal. All rights reserved. Designed for
            truth and transparency.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium">
            <Link href="#" className="hover:text-white transition-colors">
              Advertise
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
