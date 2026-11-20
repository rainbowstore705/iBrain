"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Play, X } from "lucide-react";

const PILLARS = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing",
  "Tempor ididunt ut labore",
];

const STATS = [
  {
    id: "globe-heart",
    value: "26",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: (
      <svg
        viewBox="0 0 64 56"
        fill="none"
        className="w-[50px] h-[44px] stroke-[#EE7C46]"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="26" cy="24" r="16" />
        <ellipse cx="26" cy="24" rx="7.5" ry="16" />
        <line x1="10" y1="24" x2="42" y2="24" />
        <path d="M13 14.5C17 16.5 21.5 17.5 26 17.5C30.5 17.5 35 16.5 39 14.5" />
        <path d="M13 33.5C17 31.5 21.5 30.5 26 30.5C30.5 30.5 35 31.5 39 33.5" />
        <path
          d="M44 48C44 48 33 41 33 33.5C33 29.8 36 27 39.5 27C41.8 27 43.3 28.2 44 29.7C44.7 28.2 46.2 27 48.5 27C52 27 55 29.8 55 33.5C55 41 44 48 44 48Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "hands-heart",
    value: "458",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: (
      <svg
        viewBox="0 0 64 56"
        fill="none"
        className="w-[52px] h-[44px] stroke-[#EE7C46]"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 24V38C12 43.5 16.5 48 22 48H28" />
        <path d="M12 24C12 22 14.5 22 14.5 24V34" />
        <path d="M17.5 14V32" />
        <path d="M22.5 12V31" />
        <path d="M27.5 15V25" />

        <path d="M52 24V38C52 43.5 47.5 48 42 48H36" />
        <path d="M52 24C52 22 49.5 22 49.5 24V34" />
        <path d="M46.5 14V32" />
        <path d="M41.5 12V31" />
        <path d="M36.5 15V25" />

        <path d="M32 42C32 42 23.5 36.6 23.5 31C23.5 28.2 25.7 26 28.4 26C30.1 26 31.4 26.9 32 28.1C32.6 26.9 33.9 26 35.6 26C38.3 26 40.5 28.2 40.5 31C40.5 36.6 32 42 32 42Z" />
      </svg>
    ),
  },
  {
    id: "community-heart",
    value: "36",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt.",
    icon: (
      <svg
        viewBox="0 0 64 56"
        fill="none"
        className="w-[52px] h-[44px] stroke-[#EE7C46]"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="21" cy="18" r="4.5" />
        <path d="M14 48V31C14 27.5 17 25 20.5 25H23.5C25.5 25 27.2 25.9 28.3 27.3" />
        <circle cx="43" cy="18" r="4.5" />
        <path d="M50 48V31C50 27.5 47 25 43.5 25H40.5C38.5 25 36.8 25.9 35.7 27.3" />
        <path d="M25 25L29.5 19" />
        <path d="M39 25L34.5 19" />
        <path d="M32 18.5C32 18.5 27.5 15.6 27.5 12.6C27.5 11.1 28.7 10 30.1 10C31 10 31.7 10.5 32 11.2C32.3 10.5 33 10 33.9 10C35.3 10 36.5 11.1 36.5 12.6C36.5 15.6 32 18.5 32 18.5Z" />
      </svg>
    ),
  },
];

function HandHeartIllustration() {
  return (
    <svg
      viewBox="0 0 260 220"
      fill="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Shirt / Sleeve on Right */}
      <path
        d="M168 38L260 26V102L184 94L168 38Z"
        fill="#66A6F5"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Watch Band */}
      <path
        d="M156 34L174 28L196 98L178 104L156 34Z"
        fill="#2B478B"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Watch Dial / Buckle */}
      <ellipse
        cx="176"
        cy="66"
        rx="11"
        ry="15"
        transform="rotate(-17 176 66)"
        fill="#F28554"
        stroke="#243C75"
        strokeWidth="3.5"
      />

      {/* Unified Hand Silhouette (4 Spread Fingers + Thumb Pinched Toward Coin) */}
      <path
        d="M162 41
           C134 45 104 54 78 68
           C71 72 73 82 81 80
           L118 72
           L75 95
           C68 99 72 109 80 106
           L124 88
           L86 121
           C80 126 86 135 94 129
           L134 99
           L110 144
           C106 151 115 157 121 149
           L148 112
           L142 152
           C141 160 151 162 154 153
           L179 98
           Z"
        fill="#E9F2FF"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle Palm Crease Lines */}
      <path
        d="M148 64C143 74 143 86 147 97"
        stroke="#243C75"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M157 60C153 71 154 83 158 93"
        stroke="#243C75"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Heart Coin Below Hand */}
      <circle
        cx="154"
        cy="182"
        r="25"
        fill="#5C9DF2"
        stroke="#243C75"
        strokeWidth="3.5"
      />
      <circle
        cx="154"
        cy="182"
        r="18"
        fill="#A4CAFC"
        stroke="#243C75"
        strokeWidth="2.5"
      />
      <path
        d="M154 191.5
           C154 191.5 145.5 186.2 145.5 180.5
           C145.5 177.9 147.6 175.8 150.2 175.8
           C151.8 175.8 153.2 176.6 154 177.8
           C154.8 176.6 156.2 175.8 157.8 175.8
           C160.4 175.8 162.5 177.9 162.5 180.5
           C162.5 186.2 154 191.5 154 191.5Z"
        fill="#F28554"
        stroke="#243C75"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlanetSpotlight() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full bg-white pt-[70px] sm:pt-[90px] pb-[95px] sm:pb-[120px] overflow-x-clip">
      {/* Decorative Hand Dropping a Heart Coin on Bottom-Right */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none select-none absolute right-0 top-[435px] w-[260px] z-10"
      >
        <HandHeartIllustration />
      </div>

      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12 relative z-20">
        {/* Top Row: Left Two-Photo Collage + Right Editorial Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10 items-center">
          {/* Left 7 Columns: Side-by-Side Vertical Photos */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-5">
            <div className="h-[340px] sm:h-[430px] lg:h-[465px] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1000&q=85"
                alt="Plastic bottles and ocean debris on beach sand"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative h-[340px] sm:h-[430px] lg:h-[465px] overflow-hidden bg-neutral-200 group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=85"
                alt="Volunteer holding a Save The Planet cardboard sign"
                className="w-full h-full object-cover object-top"
              />
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Play planet campaign video"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <span className="w-[54px] h-[54px] rounded-full bg-white text-[#111111] flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105">
                  <Play className="w-[16px] h-[16px] fill-current ml-0.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right 5 Columns: Heading, Description, Checklist, Blue CTA */}
          <div className="lg:col-span-5 lg:pl-8">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-bold leading-[1.13] tracking-[-0.025em] text-[#111111]">
              United effort to
              <br />
              save our planet
            </h2>

            <p className="mt-[20px] max-w-[360px] text-[13px] leading-[1.68] text-[#7A7A7A]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>

            <ul className="mt-[24px] space-y-[11px]">
              {PILLARS.map((pillar) => (
                <li
                  key={pillar}
                  className="flex items-center gap-[10px] text-[13px] text-[#6E6E6E]"
                >
                  <Check className="w-[14px] h-[14px] text-[#EE7C46] stroke-[2.4] shrink-0" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>

            <div className="mt-[30px]">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-[42px] px-[26px] bg-[#1976F3] hover:bg-[#1365D4] text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-colors"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Coral-Icon Stats */}
        <div className="mt-[90px] sm:mt-[115px] max-w-[820px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="mb-[18px]">{stat.icon}</div>
              <div className="text-[46px] sm:text-[52px] font-bold leading-none tracking-[-0.03em] text-[#111111]">
                {stat.value}
              </div>
              <p className="mt-[16px] max-w-[195px] text-[12.5px] leading-[1.62] text-[#7A7A7A]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 rounded-lg overflow-hidden p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold">United Effort to Save Our Planet</h3>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close modal"
                className="p-1.5 rounded hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-neutral-900 rounded flex items-center justify-center text-sm text-neutral-400">
              Embed your campaign video URL or local MP4 player here.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}