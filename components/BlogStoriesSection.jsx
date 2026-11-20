import Link from "next/link";

const STORIES = [
  {
    id: "thinking-of-planting-a-tree-for-earth-day",
    category: "BLOG",
    date: "Mar 10, 2021",
    title: "Thinking of planting a tree for Earth Day?",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "how-do-children-survive-in-africa-without-water",
    category: "BLOG",
    date: "Mar 11, 2021",
    title: "How do children survive in Africa without water?",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "how-global-volunteering-can-change-your-life",
    category: "BLOG",
    date: "Mar 13, 2021",
    title: "How global volunteering can change your life?",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=85",
  },
];

export default function BlogStoriesSection() {
  return (
    <section className="relative w-full bg-[#12B38D] overflow-x-clip py-[115px] sm:py-[135px]">
      {/* Subtle Organic Teal Blobs & White Hand-Drawn Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left darker teal blob */}
        <div
          className="absolute -top-8 -left-12 w-[235px] h-[145px] bg-[#0D9D7B]/75"
          style={{ borderRadius: "48% 52% 60% 40% / 55% 45% 55% 45%" }}
        />

        {/* Top-left hand-drawn white loop */}
        <svg
          viewBox="0 0 380 340"
          fill="none"
          className="hidden md:block absolute left-[4%] top-[44px] w-[290px] h-[255px] stroke-white/50"
          strokeWidth="1.2"
        >
          <path d="M275 268C225 235 160 220 112 182C65 144 65 74 115 36C165 -2 238 24 256 86C274 148 226 214 156 226C116 233 78 218 48 194" />
        </svg>

        {/* Top-right darker teal blob */}
        <div
          className="hidden sm:block absolute -right-14 top-[14px] w-[225px] h-[155px] bg-[#0D9D7B]/65 rotate-12"
          style={{ borderRadius: "52% 48% 44% 56% / 50% 60% 40% 50%" }}
        />

        {/* Bottom-left & bottom-right white sweeping curves */}
        <svg
          viewBox="0 0 1920 260"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 w-full h-[220px] stroke-white/50"
          strokeWidth="1.2"
        >
          <path d="M0 165C210 95 435 110 620 235" />
          <path d="M1145 255C1175 150 1255 95 1350 95C1435 95 1485 155 1525 255" />
          <path d="M1480 215C1630 140 1785 130 1920 175" />
        </svg>

        {/* Bottom-left & bottom-right subtle darker teal blobs */}
        <div
          className="hidden sm:block absolute left-[6%] -bottom-12 w-[230px] h-[125px] bg-[#0D9D7B]/60"
          style={{ borderRadius: "55% 45% 48% 52% / 45% 55% 45% 55%" }}
        />
        <div
          className="hidden sm:block absolute right-[12%] -bottom-10 w-[210px] h-[115px] bg-[#0D9D7B]/55"
          style={{ borderRadius: "46% 54% 58% 42% / 54% 46% 54% 46%" }}
        />
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

      {/* Main Content */}
      <div className="relative z-20 max-w-[1160px] mx-auto px-6 sm:px-10">
        <h2 className="text-center text-[34px] sm:text-[42px] lg:text-[46px] font-bold leading-[1.14] tracking-[-0.025em] text-white">
          Every mission has a
          <br />
          bigger story
        </h2>

        {/* 3 Blog Cards */}
        <div className="mt-[48px] sm:mt-[54px] grid grid-cols-1 md:grid-cols-3 gap-[28px] lg:gap-[32px]">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white flex flex-col justify-between shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
            >
              {/* Top Meta + Title */}
              <div className="px-[26px] pt-[24px] pb-[20px]">
                <div className="flex items-center gap-[8px] text-[10px] leading-none">
                  <span className="font-bold uppercase tracking-[0.06em] text-[#111111]">
                    {story.category}
                  </span>
                  <span className="text-[#B5B5B5]">•</span>
                  <span className="text-[#8E8E8E]">{story.date}</span>
                </div>

                <h3 className="mt-[10px] text-[17px] sm:text-[18px] font-bold leading-[1.3] tracking-[-0.015em] text-[#111111]">
                  <Link
                    href={`/blog/${story.id}`}
                    className="hover:text-[#12B38D] transition-colors"
                  >
                    {story.title}
                  </Link>
                </h3>
              </div>

              {/* Middle Photo */}
              <Link
                href={`/blog/${story.id}`}
                className="block h-[205px] sm:h-[215px] w-full overflow-hidden bg-neutral-100 group"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Bottom Arrow Strip */}
              <div className="px-[26px] py-[14px] bg-white">
                <Link
                  href={`/blog/${story.id}`}
                  aria-label={`Read more about ${story.title}`}
                  className="inline-flex items-center text-[13px] font-medium text-[#222222] hover:text-[#EE7C46] transition-colors"
                >
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Coral-Orange READ MORE Button */}
        <div className="mt-[44px] text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center h-[42px] px-[26px] bg-[#EE7C46] hover:bg-[#E16B34] text-white text-[10.5px] font-bold uppercase tracking-[0.14em] transition-colors"
          >
            READ MORE
          </Link>
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