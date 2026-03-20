"use client";

import Link from "next/link";

export default function NavbarFloating() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_10px_30px_rgba(35,40,85,0.1)] transition-all duration-300 z-[100]">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-primary flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">
              medical_services
            </span>
          </div>
          Saidi Health
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
          <Link
            href="/about"
            className="text-primary/70 hover:text-primary transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="text-primary/70 hover:text-primary transition-all duration-300"
          >
            Saidi FAQ
          </Link>
          <Link
            href="#contact"
            className="text-primary/70 hover:text-primary transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-primary/70 hover:text-primary transition-all duration-300"
          >
            Sign In
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-all duration-300 relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-bloom rounded-full"></span>
          </button>
          <Link
            href="/courses"
            className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            CE Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}
