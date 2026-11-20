"use client";

import { useState } from "react";

const PRESET_AMOUNTS = [10, 50, 100, 200];

export default function DonationBanner() {
  const [amountInput, setAmountInput] = useState("10");
  const [selectedPreset, setSelectedPreset] = useState(10);
  const [customActive, setCustomActive] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  function handlePresetClick(value) {
    setSelectedPreset(value);
    setCustomActive(false);
    setAmountInput(String(value));
    setSubmittedMessage("");
  }

  function handleCustomClick() {
    setSelectedPreset(null);
    setCustomActive(true);
    setAmountInput("");
    setSubmittedMessage("");
  }

  function handleInputChange(e) {
    const raw = e.target.value;
    setAmountInput(raw);
    setSubmittedMessage("");

    const numeric = Number(raw);
    if (PRESET_AMOUNTS.includes(numeric) && String(numeric) === raw.trim()) {
      setSelectedPreset(numeric);
      setCustomActive(false);
    } else {
      setSelectedPreset(null);
      setCustomActive(true);
    }
  }

  function handleDonate(e) {
    e.preventDefault();
    const numeric = Number(amountInput);
    if (!numeric || numeric <= 0) {
      setSubmittedMessage("Please enter a valid donation amount.");
      return;
    }
    setSubmittedMessage(
      `Donation amount of $${numeric} selected — ready to connect to your checkout or API.`
    );
  }

  return (
    <section
      id="donate"
      className="relative w-full min-h-[470px] sm:min-h-[510px] flex items-center justify-center overflow-hidden bg-[#262320] py-[110px] sm:py-[125px]"
    >
      {/* Full-Bleed Background Photo */}
      <img
        src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=85"
        alt="Community members supporting a brighter future"
        className="absolute inset-0 w-full h-full object-cover object-[50%_28%]"
      />

      {/* Dark Contrast Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 15, 14, 0.56) 0%, rgba(16, 15, 14, 0.62) 50%, rgba(16, 15, 14, 0.58) 100%)",
        }}
      />

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

      {/* Centered Donation Form Content */}
      <div className="relative z-20 max-w-[780px] mx-auto px-6 text-center text-white">
        <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-bold leading-[1.15] tracking-[-0.025em]">
          Every dollar counts: invest in a
          <br />
          brighter future
        </h2>

        <p className="mt-[12px] text-[12.5px] sm:text-[13px] text-white/90">
          Adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <form onSubmit={handleDonate} className="mt-[28px] flex flex-col items-center">
          {/* Currency Prefix + Amount Field */}
          <div className="inline-flex h-[38px] w-[156px] overflow-hidden shadow-sm">
            <span className="w-[38px] bg-[#1976F3] text-white text-[13px] font-bold flex items-center justify-center select-none">
              $
            </span>
            <input
              type="number"
              min="1"
              step="any"
              value={amountInput}
              onChange={handleInputChange}
              aria-label="Donation amount in dollars"
              className="w-[118px] bg-white text-[#111111] text-[13px] font-semibold text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          {/* Preset Amounts + Custom Amount */}
          <div className="mt-[14px] flex flex-wrap items-center justify-center gap-[8px]">
            {PRESET_AMOUNTS.map((amt) => {
              const isSelected = !customActive && selectedPreset === amt;
              return (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handlePresetClick(amt)}
                  className={`h-[34px] px-[14px] text-[11px] font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#EAF3FF] text-[#1976F3] ring-1 ring-[#1976F3]"
                      : "bg-white text-[#111111] hover:bg-neutral-100"
                  }`}
                >
                  ${amt}
                </button>
              );
            })}

            <button
              type="button"
              onClick={handleCustomClick}
              className={`h-[34px] px-[16px] text-[11px] font-bold transition-colors cursor-pointer ${
                customActive
                  ? "bg-[#EAF3FF] text-[#1976F3] ring-1 ring-[#1976F3]"
                  : "bg-white text-[#111111] hover:bg-neutral-100"
              }`}
            >
              Custom Amount
            </button>
          </div>

          {/* Primary Blue DONATE NOW Button */}
          <div className="mt-[18px]">
            <button
              type="submit"
              className="h-[40px] px-[26px] bg-[#1976F3] hover:bg-[#1365D4] text-white text-[10.5px] font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer"
            >
              DONATE NOW
            </button>
          </div>

          {submittedMessage && (
            <p className="mt-[14px] text-[12px] font-medium text-white bg-black/45 px-4 py-1.5">
              {submittedMessage}
            </p>
          )}
        </form>
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