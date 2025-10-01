"use client";
import React, { useEffect, useMemo, useState } from "react";

/** Brand colors used in the mock */
const BRAND = {
  teal: "#00B8D4",
  navy: "#0B4E8F",
  orange: "#F59E0B",
  grayText: "#5B6B79",
  cardBorder: "#DDE6EE",
};

const FEATURES = [
  {
    icon: "/icons/icon1.svg",
    title: "Swap-Free for Life",
    body: "Every GTC trading account comes with zero swap charges, forever. No exceptions, no fine print. Just pure trading freedom. Tell your traders about how we pass on the swap savings your clients make back to them and watch them smile.",
  },
  {
    icon: "/icons/icon2.svg",
    title: "Leverage Up to 1:2000",
    body: "Your traders can now push their trading strategies to the max with some of the highest leverage in the industry. It’s built for serious traders who want bigger opportunities. We also offer lower leverage if they want it.",
  },
  {
    icon: "/icons/icon3.svg",
    title: "Trusted Global Powerhouse",
    body: "GTC is a multi-regulated market leader, licensed under the SCA (UAE), FSC (Mauritius), FSCA (South Africa) & VFSC (Vanuatu), which gives your traders the trust and protection they deserve.",
  },

  // Add more items if you want the arrows/dots to paginate beyond one page
  {
    icon: "/icons/icon1.svg",

    title: "Lightning-Fast Deposits & Withdrawals",
    body: "When we say “instant,” we mean instant! Whether your traders are making deposits or withdrawing their funds, everything is instant. We know that your traders’ money moves as fast as their trades, and the markets never stop.",
  },
  {
    icon: "/icons/icon5.svg",

    title: "24/7 Multilingual Support",
    body: "No matter the time zone your traders are in, our outstanding Customer Care team is here to serve your traders in their language. They’re going to love how we treat them like actual human beings too.",
  },
  {
    icon: "/icons/icon6.svg",
    title: "Fuel Engagement with Trading Competitions",
    body: "GTC’s trading competitions are known worldwide for adding a level of gamification to trading. From demo to live trading competitions, your traders are going to love them. More importantly, the more they trade to win the competition, the more you earn in payouts.",
  },
  {
    icon: "/icons/icon7.svg",
    title: "GTC VIP is the Ultimate Loyalty Programme",
    body: "Every trade counts. With GTC VIP, your traders get rewarded for doing what they already do… trading. From supercars and gold bullion to dream holidays, top tech, and apartments in Dubai, this programme keeps them engaged, loyal, and hungry for more.",
  },
];

const chunk = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );

export default function ClientsSlider() {
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);

  // responsive per-view like the mock
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
      setPage(0);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = useMemo(() => chunk(FEATURES, perView), [perView]);
  const maxPage = Math.max(0, pages.length - 1);

  const go = (dir) => setPage((p) => Math.min(maxPage, Math.max(0, p + dir)));

  return (
    <section className="bg-white">
      <div className="mx-auto container  pt-5 md:pt-14 md:pb-14 pb-10">
        {/* heading */}
        <h2 className="text-[24px] leading-[32px] text-center md:text-left md:text-[40px] font-semibold md:leading-tight text-[#03A7D9]">
          Your clients are going to adore trading with GTC
        </h2>
        <p className="md:mt-2  mt-6 text-[16px] leading-[20px] text-center md:text-left md:text-[22px] md:leading-[32px] text-[#04417B] max-w-[880px]">
          We focus on putting your clients first. And yes, we know you hear that
          a lot, but it’s different at GTC, and your traders will tell you just
          how happy they are.
        </p>

        {/* slider */}
        <div className="relative mt-7 md:mt-20">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, gi) => (
                <div key={gi} className="w-full flex-none px-0">
                  <div
                    className={`
                      grid gap-6
                      ${perView === 3
                        ? "lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
                        : ""
                      }
                      ${perView === 2 ? "md:grid-cols-2 grid-cols-1" : ""}
                      ${perView === 1 ? "grid-cols-1" : ""}
                    `}
                  >
                    {group.map((f, i) => (
                      <Card key={i} {...f} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots (left) */}
          <div className=" flex md:justify-between items-center flex-col md:flex-row justify-center gap-4 md:mt-10 mt-5 ">
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === page ? "bg-[#ED8946]" : "bg-[#C8D3DD]"
                    }`}
                />
              ))}
            </div>

            {/* Arrows (right) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                disabled={page === 0}
                aria-label="Previous"
                className={`h-9 w-9 rounded-full grid place-items-center text-white transition
              ${page === 0
                    ? "bg-[#F3D9A8] cursor-not-allowed"
                    : "bg-[#ED8946] hover:bg-[#ec990b]"
                  }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6l-6 6l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => go(1)}
                disabled={page === maxPage}
                aria-label="Next"
                className={`h-9 w-9 rounded-full grid place-items-center text-white transition ${page === maxPage
                    ? "bg-[#F3D9A8] cursor-not-allowed"
                    : "bg-[#ED8946] hover:bg-[#ec990b]"
                  }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6l6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Card ----- */
function Card({ icon, title, body }) {
  return (
    <div
      className="rounded-[10px] border"
      style={{ borderColor: BRAND.cardBorder }}
    >
      <div className="px-5 py-8">
        <div className="flex items-center gap-2 text-[#03A7D9]">
          <div>
            <img src={icon} alt="" className="shrink-0" />
          </div>
          <h3 className="md:text-[16px] text-[13px] font-semibold text-[#03A7D9]">{title}</h3>
        </div>
        <p className="mt-3 md:text-[16px] text-[13px] leading-[20px] text-[#4D4D70]">{body}</p>
      </div>
    </div>
  );
}
