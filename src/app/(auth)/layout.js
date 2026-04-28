import Navbar from "@/components/shared/Navbar";
import React from "react";
import { merriweather } from "../layout";
const AuthLayout = ({ children }) => {
  return (
    <>
      <div className={`${merriweather.className}`}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
