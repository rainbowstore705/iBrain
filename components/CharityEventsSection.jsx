import Link from "next/link";
import { Calendar } from "lucide-react";

const EVENTS = [
  {
    id: "vaccines-and-immunisation",
    day: "15",
    monthYear: "Aug, 2026",
    title: "Vaccines and Immunisation",
    location: "New York",
    dateRange: "Aug 15, 2026 08:00 - Jan 5, 2027 17:00",
    priceLabel: "Free",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=85",
  },
];

function HandCaringHeartGlobeIllustration() {
  return (
    <svg
      viewBox="0 0 265 215"
      fill="none"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Heart-Shaped Earth on Right */}
      <path
        d="M158 34
           C142 18 114 20 98 38
           C82 56 84 86 104 108
           L158 164
           L212 108
           C232 86 234 56 218 38
           C202 20 174 18 158 34Z"
        fill="#A9CAFA"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Continents Inside Heart-Earth */}
      <path
        d="M172 34
           C182 32 195 36 202 45
           C208 53 206 64 198 70
           C192 75 194 84 200 90
           C206 96 203 108 194 115
           C186 121 177 118 174 108
           C171 98 165 92 162 82
           C159 70 164 42 172 34Z"
        fill="#39579E"
        stroke="#243C75"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M114 54
           C123 50 134 55 137 64
           C139 71 131 78 123 76
           C115 74 109 62 114 54Z"
        fill="#39579E"
        stroke="#243C75"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M175 51
           C181 49 188 52 190 57
           C192 61 186 65 180 64
           C174 63 171 54 175 51Z"
        fill="#66A6F5"
        stroke="#243C75"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Blue Sleeve & Orange Cuff */}
      <path
        d="M0 44L78 66L62 128L0 112V44Z"
        fill="#4F91EB"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M64 62L96 71L80 133L48 124L64 62Z"
        fill="#EE7C46"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Reaching Hand Cradle Under Heart-Earth */}
      <path
        d="M84 74
           L148 83
           C158 84 162 95 153 100
           L126 108
           L164 114
           C173 115 172 126 162 127
           L128 129
           L158 137
           C166 139 163 149 154 148
           L124 144
           L146 156
           C153 160 148 169 140 165
           L106 146
           L76 128
           Z"
        fill="#F4F8FF"
        stroke="#243C75"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CharityEventsSection() {
  return (
    <section className="relative w-full bg-white pt-[95px] sm:pt-[115px] pb-[70px] sm:pb-[85px] overflow-x-clip">
      {/* Left-Edge Hand & Heart-Earth Illustration */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none select-none absolute left-0 top-[24px] w-[265px] z-10"
      >
        <HandCaringHeartGlobeIllustration />
      </div>

      <div className="max-w-[1160px] mx-auto px-6 sm:px-10 relative z-20">
        {/* Top Row: Left Heading + Right Intro & View More Link */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-10 items-start">
          <div className="lg:col-span-5 lg:pl-[115px]">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-bold leading-[1.12] tracking-[-0.025em] text-[#111111]">
              Charity events
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <p className="max-w-[435px] text-[12.5px] leading-[1.65] text-[#7A7A7A]">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas
            </p>

            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#111111] hover:text-[#EE7C46] transition-colors shrink-0 pt-0.5"
            >
              <span>View More</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Event Item Row */}
        <div className="mt-[46px] lg:pl-[195px]">
          <div className="space-y-6">
            {EVENTS.map((event) => (
              <article
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 py-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
                  {/* Date Block */}
                  <div className="w-[74px] shrink-0">
                    <div className="text-[28px] sm:text-[31px] font-bold leading-none tracking-[-0.02em] text-[#111111]">
                      {event.day}
                    </div>
                    <div className="mt-1.5 text-[11px] text-[#7A7A7A]">
                      {event.monthYear}
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <Link
                    href={`/events/${event.id}`}
                    className="block w-full sm:w-[148px] h-[104px] sm:h-[92px] overflow-hidden bg-neutral-100 shrink-0 group"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  {/* Title, Location & Date Range */}
                  <div>
                    <h3 className="text-[16.5px] sm:text-[17.5px] font-bold leading-[1.3] tracking-[-0.01em] text-[#111111]">
                      <Link
                        href={`/events/${event.id}`}
                        className="hover:text-[#1976F3] transition-colors"
                      >
                        {event.title}
                      </Link>
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-[#6E6E6E]">
                      <span className="font-bold text-[#111111]">
                        {event.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#7A7A7A]">
                        <Calendar className="w-3.5 h-3.5 text-[#EE7C46] stroke-[2]" />
                        <span>{event.dateRange}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Price Tag */}
                <div className="sm:pr-2 shrink-0">
                  <span className="text-[14px] font-bold text-[#EE7C46]">
                    {event.priceLabel}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}