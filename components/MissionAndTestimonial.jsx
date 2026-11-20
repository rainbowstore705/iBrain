export default function MissionAndTestimonial() {
  return (
    <section
      id="mission"
      className="w-full bg-white py-[110px] sm:py-[135px] lg:py-[150px]"
    >
      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-12 items-start">
        {/* Left Column: Heading + Lead Copy + Volunteer Attribution */}
        <div className="lg:col-span-5">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1.12] tracking-[-0.025em] text-[#111111]">
            Our work benefits
            <br />
            the public at large
          </h2>

          <p className="mt-[22px] max-w-[410px] text-[13.5px] leading-[1.7] text-[#6E6E6E]">
            Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing
            elit, sed do eiusm od tempor.
          </p>

          <div className="mt-[46px] flex items-center gap-[18px]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85"
              alt="Rojer Moore"
              className="w-[62px] h-[62px] rounded-full object-cover object-top shrink-0"
            />
            <div className="leading-tight">
              <div className="text-[14.5px] font-bold text-[#111111]">
                Rojer Moore
              </div>
              <div className="mt-1 text-[12px] font-normal text-[#8A8A8A]">
                Volunteer
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Two-Column Editorial Copy with Drop Cap */}
        <div className="lg:col-span-7 lg:pl-6 lg:pt-[84px] grid grid-cols-1 sm:grid-cols-2 gap-x-[46px] gap-y-[30px]">
          {/* Sub-column 1 */}
          <div className="space-y-[28px] text-[13.5px] leading-[1.68] text-[#6E6E6E]">
            <p className="clearfix">
              <span className="float-left mr-[12px] mt-[2px] text-[44px] font-bold leading-[0.88] text-[#111111] select-none">
                H
              </span>
              nsectetur adipiscing elit, sed do eiusm onsectetur adipiscing
              elit, eiusm od tempor ut labore. Od tempor ut sed do eiusm.
            </p>

            <p>
              Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing
              elit, sed do eiusm od tempor ut labore sed adipiscing do eiusm.
            </p>
          </div>

          {/* Sub-column 2 */}
          <div className="space-y-[28px] text-[13.5px] leading-[1.68] text-[#6E6E6E]">
            <p>
              Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing
              elit, sed do od tempor ut labore.
            </p>

            <p>
              Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing
              elit, sed do eiusm od tempor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}