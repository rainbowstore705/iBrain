"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative w-full bg-[#000000] text-white pt-[96px] sm:pt-[110px] pb-[44px]">
      <div className="max-w-[1160px] mx-auto px-6 sm:px-10">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-start">
          {/* Left Column: CTA Heading */}
          <div className="md:col-span-5">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-bold leading-[1.12] tracking-[-0.025em] text-white">
              We need
              <br />
              solutions now!
            </h2>
          </div>

          {/* Middle Column: Address + Circular Social Icons */}
          <div className="md:col-span-4">
            <h3 className="text-[14px] font-bold text-white tracking-[-0.01em]">
              Address
            </h3>

            <div className="mt-[18px] text-[12.5px] leading-[1.72] text-[#A8A8A8]">
              <p>Germany —</p>
              <p>785 15h Street, Office 478</p>
              <p>Berlin, De 81566</p>
            </div>

            <div className="mt-[22px] flex items-center gap-[8px]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-[34px] h-[34px] rounded-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white flex items-center justify-center text-[12px] font-bold transition-colors"
              >
                f
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-[34px] h-[34px] rounded-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-[12px] h-[12px] fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="w-[34px] h-[34px] rounded-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-[12px] h-[12px] stroke-current"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-[34px] h-[34px] rounded-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-[12px] h-[12px] stroke-current"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Say Hello */}
          <div className="md:col-span-3">
            <h3 className="text-[14px] font-bold text-white tracking-[-0.01em]">
              Say Hello
            </h3>

            <div className="mt-[18px] space-y-[10px]">
              <div>
                <a
                  href="mailto:info@email.com"
                  className="text-[12.5px] text-[#C8C8C8] underline underline-offset-4 decoration-[#7A7A7A] hover:text-white transition-colors"
                >
                  info@email.com
                </a>
              </div>

              <div>
                <a
                  href="tel:+18408412569"
                  className="text-[14px] font-bold text-white hover:text-[#EE7C46] transition-colors"
                >
                  +1 840 841 25 69
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright Bar */}
        <div className="mt-[82px] sm:mt-[96px] pt-[24px] border-t border-[#1F1F1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#9E9E9E]">
          <div className="flex items-center gap-[22px]">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/team" className="hover:text-white transition-colors">
              Our Team
            </Link>
            <Link href="/contacts" className="hover:text-white transition-colors">
              Contacts
            </Link>
          </div>

          <p>iBrain © 2026. All Rights Reserved.</p>
        </div>
      </div>

      {/* Coral Scroll-to-Top Square Button on Bottom Right */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="hidden sm:flex fixed sm:absolute bottom-5 right-6 z-20 w-[34px] h-[34px] bg-[#EE7C46] hover:bg-[#E16B34] text-white items-center justify-center transition-colors cursor-pointer"
      >
        <ArrowUp className="w-[14px] h-[14px] stroke-[2.2]" />
      </button>
    </footer>
  );
}