import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

export const Layout = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <div className="px-28 py-6">
        <Navbar />
      </div>
      <div className="w-[1440px] h-48 bg-sky-950 rounded-full blur-[150px]" />
      <Outlet />
    </div>
  );
};
