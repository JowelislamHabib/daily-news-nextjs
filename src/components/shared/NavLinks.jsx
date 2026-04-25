"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();
  console.log("path", pathname);
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-3 rounded-none border-red-900 text-red-900" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
