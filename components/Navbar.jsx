"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Pages", href: "/pages", active: false },
  { label: "Shop", href: "/shop", active: false },
  { label: "Blog", href: "/blog", active: false },
  { label: "Donation", href: "#donate", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-[22px]"
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-4">
        {/* Brand Logo: Wing/Hand Mark + Heart */}
        <Link href="/" className="flex items-center gap-2.5 text-white shrink-0">
          <svg
            viewBox="0 0 38 34"
            fill="none"
            className="w-8 h-7"
            aria-hidden="true"
          >
            {/* Coral-orange upper wing/hand strokes */}
            <path
              d="M9 28C8.5 20.5 13.5 11.5 24 6.5C21.5 11.5 17.5 15 12.5 17.5C18.5 16 23.5 12.5 26.5 8C25.5 14 21 18.5 14 21.5C19.5 20.5 24 17.5 26.5 13.5C24.5 20 18.5 24.5 9 28Z"
              fill="#EE7C46"
            />
            {/* Crisp white lower wing/hand curve */}
            <path
              d="M7.5 29.5C6.5 22 10.5 13 20 7.5C14.5 13 11.5 20 11.5 28C16.5 25.5 21 22.5 24.5 18C21.5 24 15.5 28 7.5 29.5Z"
              fill="#FFFFFF"
            />
          </svg>
          <span className="text-[22px] font-bold tracking-[-0.02em] leading-none">
              iBrain
          </span>
        </Link>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-[34px] text-[14px] font-medium text-white/95">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative pb-[3px] transition-opacity hover:opacity-80 ${
                item.active
                  ? "text-white after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-white"
                  : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls: Search Magnifier + Rectangular Blue DONATE CTA */}
        <div className="flex items-center gap-6 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Search"
            className="text-white hover:opacity-80 transition-opacity p-1 cursor-pointer"
          >
            <Search className="w-[18px] h-[18px] stroke-[2]" />
          </button>

          <Link
            href="#donate"
            className="hidden sm:inline-flex items-center justify-center h-[42px] px-[26px] bg-[#1976F3] hover:bg-[#1365D4] text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-colors"
          >
            DONATE
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="md:hidden p-1.5 text-white hover:bg-white/10 rounded"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Search Bar Dropdown */}
      {searchOpen && (
        <div className="mt-3 mx-6 sm:mx-10 lg:mx-14 max-w-md ml-auto bg-neutral-950/95 border border-white/15 px-4 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <Search className="w-4 h-4 text-white/60" />
            <input
              type="text"
              placeholder="Search causes, events, blog..."
              autoFocus
              className="w-full bg-transparent text-[13px] text-white placeholder:text-white/50 outline-none"
            />
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 mx-4 bg-neutral-950/95 backdrop-blur-md border border-white/10 p-5 space-y-3 text-white">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-1 text-sm font-medium hover:text-[#EE7C46]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#donate"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-2 py-3 bg-[#1976F3] text-white text-[11px] font-bold uppercase tracking-[0.14em]"
          >
            DONATE
          </Link>
        </div>
      )}
    </header>
  );
}