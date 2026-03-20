"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export default function NavbarSticky() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(35,40,85,0.06)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black text-primary-container tracking-tighter"
        >
          Saidi Health
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-medium tracking-tight text-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href === "/faq" && pathname === "/faq") ||
              (link.href === "/about" && pathname === "/about");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-primary-container transition-all"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 text-primary-container font-bold text-sm hover:bg-surface-container-low rounded-full transition-all active:scale-95 duration-200 ease-out">
            Login
          </button>
          <Link
            href="#"
            className="px-6 py-2.5 bg-primary-container text-white rounded-full font-bold text-sm transition-all hover:opacity-90 active:scale-95 duration-200 ease-out"
          >
            Book Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}
