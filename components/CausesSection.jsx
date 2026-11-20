import Link from "next/link";

const CAUSES = [
  {
    id: "clean-water-cambodia",
    badge: "NON-PROFIT",
    title: "Clean Water to Cambodia",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    raised: 3920,
    goal: 40000,
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "aid-starving-children",
    badge: "NON-PROFIT",
    title: "Aid for Starving Children",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    raised: 1060,
    goal: 50000,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "education-orphans",
    badge: "NON-PROFIT",
    title: "Education for Orphans",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    raised: 120,
    goal: 60000,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
  },
];

function formatAmount(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function CausesSection() {
  return (
    <section className="relative w-full bg-[#12B38D] overflow-x-clip py-[115px] sm:py-[135px]">
      {/* Subtle Organic Blobs & White Hand-Drawn Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left darker teal blob */}
        <div
          className="absolute -top-10 -left-16 w-[250px] h-[155px] bg-[#0D9D7B]/75"
          style={{ borderRadius: "48% 52% 60% 40% / 55% 45% 55% 45%" }}
        />

        {/* Mid-left vertical organic blob */}
        <div
          className="hidden sm:block absolute left-[-38px] top-[38%] w-[125px] h-[220px] bg-[#0D9D7B]/65 rotate-[18deg]"
          style={{ borderRadius: "55% 45% 48% 52% / 45% 58% 42% 55%" }}
        />

        {/* Top-right subtle blob */}
        <div
          className="hidden md:block absolute right-[10%] top-[68px] w-[110px] h-[150px] bg-[#0D9D7B]/45 -rotate-12"
          style={{ borderRadius: "50% 50% 45% 55% / 55% 45% 55% 45%" }}
        />

        {/* Top-right thin white hand-drawn loop */}
        <svg
          viewBox="0 0 360 280"
          fill="none"
          className="hidden md:block absolute right-[2%] top-[78px] w-[260px] h-[205px] stroke-white/55"
          strokeWidth="1.25"
        >
          <path d="M25 225C68 185 135 162 198 175C255 187 298 158 308 106C317 58 276 20 228 24C182 28 158 72 172 122C186 172 246 196 312 184" />
        </svg>

        {/* Bottom-left & bottom-right thin white sweeping lines */}
        <svg
          viewBox="0 0 1920 220"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 w-full h-[180px] stroke-white/50"
          strokeWidth="1.2"
        >
          <path d="M0 155C185 75 385 70 570 155" />
          <path d="M1380 185C1540 120 1720 115 1920 165" />
        </svg>
      </div>

      {/* Top Fibrous Torn-Paper White Edge */}
      <div className="absolute -top-[1px] left-0 right-0 z-20 w-full overflow-hidden leading-none pointer-events-none select-none">
        <svg
          viewBox="0 0 1920 56"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[24px] sm:h-[34px] lg:h-[40px] block"
          aria-hidden="true"
        >
          <path
            d="M0 0H1920V22L1901 31L1882 19L1862 34L1842 21L1821 33L1801 18L1780 35L1759 22L1738 32L1717 20L1696 36L1674 23L1653 33L1631 19L1610 35L1588 22L1566 34L1544 18L1522 33L1500 21L1478 36L1455 23L1433 34L1411 19L1388 35L1366 22L1343 33L1321 20L1298 36L1275 23L1253 34L1230 19L1207 35L1184 22L1162 33L1139 20L1116 36L1093 23L1070 34L1047 19L1024 35L1001 22L978 33L955 20L932 36L909 23L886 34L863 19L840 35L817 22L794 33L771 20L748 36L725 23L702 34L679 19L656 35L633 22L610 33L587 20L564 36L541 23L518 34L495 19L472 35L449 22L426 33L403 20L380 36L357 23L334 34L311 19L288 35L265 22L242 33L219 20L196 36L173 23L150 34L127 19L104 35L81 22L58 33L35 20L14 32L0 24V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1160px] mx-auto px-6 sm:px-10">
        <h2 className="text-center text-[36px] sm:text-[44px] lg:text-[48px] font-bold tracking-[-0.025em] text-white">
          You can save them
        </h2>

        <div className="mt-[48px] sm:mt-[56px] grid grid-cols-1 md:grid-cols-3 gap-[28px] lg:gap-[32px]">
          {CAUSES.map((cause) => {
            const percentage = Math.min(
              100,
              Math.max(2, Math.round((cause.raised / cause.goal) * 100))
            );

            return (
              <article
                key={cause.id}
                className="bg-white flex flex-col shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
              >
                {/* Top Photo */}
                <Link
                  href={`#donate?cause=${cause.id}`}
                  className="block h-[220px] sm:h-[235px] overflow-hidden bg-neutral-100 group"
                >
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Card Body */}
                <div className="px-[28px] pt-[26px] pb-[24px] flex-1 flex flex-col justify-between">
                  <div>
                    {/* Coral Badge */}
                    <span className="inline-block bg-[#EE7C46] text-white text-[9.5px] font-bold uppercase tracking-[0.12em] px-[8px] py-[4px] leading-none">
                      {cause.badge}
                    </span>

                    {/* Title */}
                    <h3 className="mt-[14px] text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-[#111111]">
                      <Link
                        href={`#donate?cause=${cause.id}`}
                        className="hover:text-[#12B38D] transition-colors"
                      >
                        {cause.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="mt-[10px] text-[12.5px] leading-[1.62] text-[#7A7A7A]">
                      {cause.description}
                    </p>
                  </div>

                  {/* Progress Bar & Raised / Goal Footer */}
                  <div className="mt-[26px]">
                    <div className="w-full h-[2.5px] bg-[#E5E7EB] overflow-hidden">
                      <div
                        className="h-full bg-[#1976F3] transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="mt-[12px] flex items-center justify-between text-[11px] leading-none">
                      <span className="font-bold text-[#111111]">
                        Raised: {formatAmount(cause.raised)}
                      </span>
                      <span className="font-normal text-[#6E6E6E]">
                        Goal: {formatAmount(cause.goal)}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom Fibrous Torn-Paper White Edge */}
      <div className="absolute -bottom-[1px] left-0 right-0 z-20 w-full overflow-hidden leading-none pointer-events-none select-none">
        <svg
          viewBox="0 0 1920 56"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-[24px] sm:h-[34px] lg:h-[40px] block"
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