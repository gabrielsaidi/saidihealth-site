"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

export default function NavbarFloating() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_10px_30px_rgba(35,40,85,0.1)] transition-all duration-300 z-100">
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Saidi-Logos-05.svg"
              alt="Saidi Health"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Nav Links — desktop */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href !== "/" &&
                  !link.href.startsWith("#") &&
                  pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-secondary font-bold border-b-2 border-secondary pb-0.5 transition-all duration-300"
                      : "text-primary/70 hover:text-primary transition-all duration-300"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-all duration-300 relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-bloom rounded-full"></span>
            </button>
            <Link
              href="#"
              className="hidden md:inline-flex bg-linear-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Sign In
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-200 flex flex-col bg-surface">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/Saidi-Logos-05.svg"
                alt="Saidi Health"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-primary hover:bg-primary/5 rounded-full transition-all duration-300"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Mobile links */}
          <nav className="flex flex-col gap-2 px-6 pt-8 grow">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href !== "/" &&
                  !link.href.startsWith("#") &&
                  pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-secondary-fixed text-on-secondary-fixed-variant"
                      : "text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile footer actions */}
          <div className="px-6 pb-10 flex flex-col gap-4">
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="w-full py-4 bg-linear-to-br from-primary to-primary-container text-white rounded-full font-bold text-center text-base hover:shadow-lg active:scale-95 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
