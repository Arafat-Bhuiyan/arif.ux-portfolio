import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { Footer } from "../pages/Shared/Footer";

export const Layout = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen relative overflow-x-hidden">
      {/* Navbar Container - Responsive Padding */}
      <div className="px-4 sm:px-10 lg:px-28 py-4 md:py-6">
        <Navbar />
      </div>

      {/* Decorative Background Glow - Responsive and Absolutely Positioned */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-32 md:h-48 bg-sky-950/40 rounded-full blur-[80px] md:blur-[150px] -z-10 pointer-events-none" />

      <main className="relative z-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
