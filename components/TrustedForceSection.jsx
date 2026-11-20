import Link from "next/link";

function DoveHeartIllustration() {
  return (
    <svg
      viewBox="0 0 190 150"
      fill="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Dove Body & Tail */}
      <path
        d="M52 84
           C36 80 22 86 12 94
           C23 93 34 94 42 98
           C28 100 18 106 11 112
           C23 111 35 111 45 113
           C35 116 28 121 24 126
           C36 123 50 119 64 118
           C76 126 95 129 114 123
           C132 117 143 101 146 84
           C153 81 160 77 166 73
           C159 71 154 69 150 67
           C151 56 144 46 133 45
           C124 44 116 50 114 58
           C102 64 90 72 78 80
           C68 85 59 86 52 84Z"
        fill="#EAF2FF"
        stroke="#243C75"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dove Wing Feathers */}
      <path
        d="M66 83
           C62 66 67 48 79 34
           C77 45 78 55 82 64
           C83 47 90 32 103 22
           C99 35 99 47 102 58
           C106 43 115 31 128 24
           C122 36 120 49 122 61
           C128 50 137 42 148 38
           C140 49 136 61 136 73
           C124 81 106 87 84 87
           C77 87 71 85 66 83Z"
        fill="#FFFFFF"
        stroke="#243C75"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Feather Texture Marks on Body */}
      <path
        d="M84 96C86 99 89 100 92 99M98 94C100 97 103 98 106 97M112 92C114 95 117 96 120 95M90 105C92 108 95 109 98 108M104 103C106 106 109 107 112 106M118 101C120 104 123 105 126 104"
        stroke="#243C75"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Eye & Beak */}
      <circle cx="137" cy="56" r="2.2" fill="#243C75" />
      <path
        d="M146 66L165 72L146 76"
        fill="#F6C88F"
        stroke="#243C75"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Ribbon & Heart Token Carried by Dove */}
      <path
        d="M156 75C162 82 166 88 168 95"
        stroke="#243C75"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="170"
        cy="107"
        r="13"
        fill="#66A6F5"
        stroke="#243C75"
        strokeWidth="2.4"
      />
      <circle
        cx="170"
        cy="107"
        r="9.2"
        fill="#B6D5FC"
        stroke="#243C75"
        strokeWidth="1.8"
      />
      <path
        d="M170 112.2
           C170 112.2 165.4 109.2 165.4 106.1
           C165.4 104.6 166.6 103.5 168 103.5
           C168.9 103.5 169.6 104 170 104.7
           C170.4 104 171.1 103.5 172 103.5
           C173.4 103.5 174.6 104.6 174.6 106.1
           C174.6 109.2 170 112.2 170 112.2Z"
        fill="#F28554"
        stroke="#243C75"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TrustedForceSection() {
  return (
    <section className="relative w-full bg-white pt-[110px] sm:pt-[135px] pb-[70px] sm:pb-[85px] overflow-x-clip">
      {/* Decorative Dove on Right Edge */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none select-none absolute right-0 top-[445px] w-[195px] z-10"
      >
        <DoveHeartIllustration />
      </div>

      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 relative z-20">
        {/* Main Two-Column Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-10 items-center">
          {/* Left Column: Portrait + Overlapping Black Callout Box */}
          <div className="lg:col-span-6 relative pb-6 sm:pb-0">
            <div className="w-full max-w-[445px] h-[430px] sm:h-[505px] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85"
                alt="Smiling woman in orange headwrap"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="mt-4 sm:mt-0 sm:absolute sm:right-0 lg:right-[14px] sm:bottom-[-26px] w-full sm:w-[228px] bg-[#0B0B0B] text-white px-[28px] py-[28px] shadow-lg">
              <p className="text-[20px] sm:text-[21px] font-bold leading-[1.24] tracking-[-0.015em]">
                Join us in
                <br />
                making a
                <br />
                difference
              </p>
            </div>
          </div>

          {/* Right Column: Heading, Lead Paragraph, Indented Note, Blue CTA */}
          <div className="lg:col-span-6 lg:pl-8">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1.12] tracking-[-0.025em] text-[#111111]">
              We are a trusted
              <br />
              force for good
            </h2>

            <p className="mt-[22px] max-w-[410px] text-[13.5px] leading-[1.65] text-[#4A4A4A]">
              Qadipiscing elit, sed do eiusmod tempor incididunt
              <br />
              ut labore eli sed do eiu.
            </p>

            <p className="mt-[22px] pl-[18px] border-l border-[#D4D4D4] max-w-[395px] text-[12px] leading-[1.68] text-[#8E8E8E]">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>

            <div className="mt-[30px]">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-[42px] px-[26px] bg-[#1976F3] hover:bg-[#1365D4] text-white text-[11px] font-bold uppercase tracking-[0.14em] transition-colors"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Partner / Sponsor Logo Strip */}
        <div className="mt-[105px] sm:mt-[125px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 items-center justify-items-center text-[#9A9A9A]">
          {/* 1. THE LINUX FOUNDATION */}
          <div className="flex items-center gap-2 select-none">
            <svg
              viewBox="0 0 28 28"
              className="w-7 h-7 fill-current shrink-0"
              aria-hidden="true"
            >
              <path d="M4 4H24V12H19V9H9V19H12V24H4V4ZM14 14H24V24H14V14Z" />
            </svg>
            <div className="leading-[1.05] text-left">
              <div className="text-[7px] font-bold uppercase tracking-[0.08em]">
                THE
              </div>
              <div className="text-[12px] font-extrabold tracking-[-0.03em]">
                LINUX
              </div>
              <div className="text-[6.5px] font-semibold uppercase tracking-[0.06em]">
                FOUNDATION
              </div>
            </div>
          </div>

          {/* 2. Circular Radial Mark */}
          <div className="select-none" aria-hidden="true">
            <svg viewBox="0 0 40 40" className="w-9 h-9 fill-current">
              <path d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C27.2 36 33.28 31.24 35.3 24.68L25.4 21.8C24.5 24.4 22.05 26.2 19.2 26.2C15.55 26.2 12.6 23.25 12.6 19.6C12.6 15.95 15.55 13 19.2 13C20.6 13 21.9 13.44 22.96 14.2L29.6 7.4C27.05 5.25 23.68 4 20 4ZM27.5 11.2L34.5 6.5L36.5 10.2L29.2 14.2L27.5 11.2Z" />
            </svg>
          </div>

          {/* 3. Amil */}
          <div className="select-none">
            <span className="font-serif italic text-[26px] font-semibold tracking-[-0.02em] leading-none">
              Amil
            </span>
          </div>

          {/* 4. Himalaya HERBAL HEALTHCARE */}
          <div className="flex flex-col items-center leading-none select-none">
            <span className="font-serif text-[18px] font-bold tracking-[-0.02em]">
              Himalaya
            </span>
            <span className="mt-1 text-[5.5px] font-bold uppercase tracking-[0.16em]">
              HERBAL HEALTHCARE
            </span>
          </div>

          {/* 5. Laurel Wreath Crest */}
          <div className="select-none" aria-hidden="true">
            <svg viewBox="0 0 48 40" className="w-11 h-9 fill-current">
              <path d="M16 33C10 29 7 22 9 14C10 10 13 7 16 5C14 9 14 14 16 18C15 14 16 10 19 7C18 11 19 16 21 20C18 24 16 28 16 33Z" />
              <path d="M32 33C38 29 41 22 39 14C38 10 35 7 32 5C34 9 34 14 32 18C33 14 32 10 29 7C30 11 29 16 27 20C30 24 32 28 32 33Z" />
              <path d="M18 35C22 36.5 26 36.5 30 35L28 32.5C25.3 33.4 22.7 33.4 20 32.5L18 35Z" />
            </svg>
          </div>

          {/* 6. green caravan */}
          <div className="relative flex flex-col items-start leading-none select-none">
            <span className="text-[16px] font-bold tracking-[-0.03em]">
              green
            </span>
            <span className="text-[15px] font-medium tracking-[-0.02em] -mt-0.5">
              caravan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}