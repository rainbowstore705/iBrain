"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

const SCALE_DURATION_MS = 4000;
const FADE_DURATION_MS = 900;

const SLIDES = [
  {
    id: "hope-future",
    headlineLine1: "Give New Hope for",
    headlineLine2: "a Better Future",
    ctaLabel: "READ MORE",
    ctaHref: "#mission",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=85",
    alt: "Children learning and smiling together",
    objectPosition: "50% 28%",
  },
  {
    id: "clean-planet",
    headlineLine1: "United Effort to",
    headlineLine2: "Save Our Planet",
    ctaLabel: "READ MORE",
    ctaHref: "#mission",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=2000&q=85",
    alt: "Volunteers working together for environmental action",
    objectPosition: "50% 30%",
  },
  {
    id: "brighter-tomorrow",
    headlineLine1: "Every Dollar Builds",
    headlineLine2: "a Brighter Tomorrow",
    ctaLabel: "DONATE NOW",
    ctaHref: "#donate",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=85",
    alt: "Community members coming together in support",
    objectPosition: "50% 25%",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const [animTick, setAnimTick] = useState(0);

  const totalSlides = SLIDES.length;

  const triggerSlide = useCallback(
    (index) => {
      const nextIdx = (index + totalSlides) % totalSlides;
      setActiveIndex(nextIdx);
      setAnimatingIndex(null);
      setAnimTick((t) => t + 1);
    },
    [totalSlides]
  );

  // Start the scale-up right after the slide mounts/resets at scale(1)
  useEffect(() => {
    let rafInner = 0;
    const rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(() => {
        setAnimatingIndex(activeIndex);
      });
    });

    const advanceTimer = setTimeout(() => {
      const nextIdx = (activeIndex + 1) % totalSlides;
      setActiveIndex(nextIdx);
      setAnimatingIndex(null);
      setAnimTick((t) => t + 1);
    }, SCALE_DURATION_MS);

    return () => {
      cancelAnimationFrame(rafOuter);
      cancelAnimationFrame(rafInner);
      clearTimeout(advanceTimer);
    };
  }, [activeIndex, animTick, totalSlides]);

  const currentSlide = SLIDES[activeIndex];

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#2b2623]">
      {/* Slides with Cross-Fade & Smooth Scale */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === activeIndex;
        const shouldScale = isActive && animatingIndex === idx;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
            }}
            className={`absolute inset-0 pointer-events-none ${
              isActive ? "z-[1]" : "z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                objectPosition: slide.objectPosition,
                transform: shouldScale ? "scale(1.1)" : "scale(1)",
                transition: shouldScale
                  ? `transform ${SCALE_DURATION_MS}ms ease-out`
                  : "none",
              }}
              className="w-full h-full object-cover will-change-transform"
            />
          </div>
        );
      })}

      {/* Film / Editorial Contrast & Warm-Charcoal Vignette Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(18, 15, 13, 0.36) 0%, rgba(18, 15, 13, 0.58) 100%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Left Vertical Social Strip */}
      <aside
        aria-label="Social links"
        className="hidden sm:flex flex-col items-center gap-[18px] fixed sm:absolute left-[26px] lg:left-[38px] top-[52%] -translate-y-1/2 z-20 text-white/90"
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-[13px] font-bold leading-none hover:text-white transition-colors"
        >
          f
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="hover:text-white transition-colors"
        >
          <svg className="w-[13px] h-[13px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Dribbble"
          className="hover:text-white transition-colors"
        >
          <svg
            className="w-[13px] h-[13px] stroke-current"
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
          className="hover:text-white transition-colors"
        >
          <svg
            className="w-[13px] h-[13px] stroke-current"
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
      </aside>

      {/* Previous / Next Slide Controls */}
      <button
        type="button"
        onClick={() => triggerSlide(activeIndex - 1)}
        aria-label="Previous slide"
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/35 bg-black/20 hover:bg-black/45 text-white z-20 absolute left-14 lg:left-20 top-1/2 -translate-y-1/2 transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => triggerSlide(activeIndex + 1)}
        aria-label="Next slide"
        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/35 bg-black/20 hover:bg-black/45 text-white z-20 absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 transition-colors cursor-pointer"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Center Display Headline & Coral CTA */}
      <div className="relative z-20 max-w-[960px] mx-auto px-6 text-center text-white -mt-4">
        <h1
          key={currentSlide.id}
          className="text-[38px] sm:text-[58px] lg:text-[72px] font-bold leading-[1.09] tracking-[-0.025em] [text-shadow:0_2px_24px_rgba(0,0,0,0.25)] transition-all duration-500"
        >
          {currentSlide.headlineLine1}
          <br />
          {currentSlide.headlineLine2}
        </h1>

        <div className="mt-[30px]">
          <Link
            href={currentSlide.ctaHref}
            className="inline-flex items-center justify-center h-[46px] px-[30px] bg-[#EE7C46] hover:bg-[#E16B34] text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-colors"
          >
            {currentSlide.ctaLabel}
          </Link>
        </div>

        {/* Slide Dots */}
        <div className="mt-7 flex items-center justify-center gap-2.5">
          {SLIDES.map((slide, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => triggerSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active ? "w-7 bg-[#EE7C46]" : "w-2 bg-white/60 hover:bg-white"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Circular Scroll Indicator */}
      <a
        href="#mission"
        aria-label="Scroll to next section"
        className="absolute bottom-[46px] left-1/2 -translate-x-1/2 z-20 w-[38px] h-[38px] rounded-full border border-white/75 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
      >
        <ArrowDown className="w-[14px] h-[14px] stroke-[2]" />
      </a>

      {/* Fibrous Torn-Paper Bottom Edge */}
      <div className="absolute -bottom-[1px] left-0 right-0 z-20 w-full overflow-hidden leading-none pointer-events-none select-none">
        <svg
          viewBox="0 0 1920 56"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[26px] sm:h-[36px] lg:h-[42px] block"
          aria-hidden="true"
        >
          <path
            d="M0 34L14 31L27 38L41 26L56 35L72 23L88 37L105 28L121 36L139 22L156 34L174 25L193 39L212 24L231 35L251 21L271 36L292 27L313 38L335 23L356 34L378 22L400 37L422 26L445 39L468 24L491 35L514 21L537 36L560 25L584 38L608 22L631 34L655 24L679 39L703 23L727 35L751 22L776 37L800 26L824 38L848 23L872 35L896 24L921 39L945 22L969 34L994 25L1018 38L1042 21L1067 35L1091 24L1116 39L1140 23L1165 35L1189 22L1214 37L1238 26L1263 38L1287 22L1312 35L1336 24L1361 39L1385 23L1410 35L1434 21L1459 37L1483 25L1508 38L1532 23L1557 35L1581 24L1606 39L1630 22L1655 34L1679 25L1704 38L1728 21L1753 35L1777 24L1802 39L1826 23L1851 35L1875 22L1898 36L1920 27V56H0V34Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}