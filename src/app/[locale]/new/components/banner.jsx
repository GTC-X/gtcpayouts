// import React from "react";
// // import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// /** Pixel-perfect hero (TailwindCSS) */
// export default function GtcCpaHero() {
//     return (
//         <div className="min-h-screen bg-white font-[Poppins] text-[#0F172A] relative overflow-hidden">
//             {/* faint chart background */}
//             <div className="absolute inset-0 pointer-events-none">
//                 {/* orange line chart wash */}
//                 <div
//                     className="absolute inset-0"
//                     style={{
//                         background:
//                             "radial-gradient(1200px 450px at 30% 60%, rgba(251,146,60,0.10) 0%, rgba(255,255,255,0) 60%)",
//                     }}
//                 />
//                 {/* blue vertical bars at right */}
//                 <div className="absolute right-0 top-0 w-full h-[72%] object-cover opacity-50">
//                     <img src="/banner-bg.png" alt="" />
//                 </div>
//             </div>

//             {/* header */}
//             <header className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pt-6 flex items-center justify-between">
//                 <img src="/logo-gtc-payouts.svg" alt="GTC Payouts" className="h-8 w-auto" />
//                 <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#0F172A]/70">
//                     <a className="hover:text-[#00B8D4]" href="#">Contact Us</a>
//                     <a className="hover:text-[#00B8D4]" href="#">Contact Us</a>
//                     <a className="hover:text-[#00B8D4]" href="#">Contact Us</a>
//                     <a className="hover:text-[#00B8D4]" href="#">About Us</a>
//                 </nav>
//             </header>

//             {/* main */}
//             <main className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pt-8 lg:pt-12">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
//                     {/* left copy */}
//                     <div className="lg:col-span-7">
//                         <p className="text-[18px] leading-[28px] text-[#0F172A]/70">Sign up as a</p>

//                         <h1 className="mt-1">
//                             <span className="block text-[64px] leading-[68px] sm:text-[68px] sm:leading-[72px] lg:text-[72px] lg:leading-[76px] font-extrabold text-[#00B8D4] tracking-[-0.02em]">
//                                 Up to
//                             </span>
//                             <span className="block text-[64px] leading-[68px] sm:text-[72px] sm:leading-[76px] lg:text-[78px] lg:leading-[82px] font-extrabold text-[#00B8D4] tracking-[-0.02em]">
//                                 $1,850 <span className="text-[#00B8D4]">CPA</span>
//                             </span>
//                         </h1>

//                         <p className="mt-4 max-w-[600px] text-[16px] leading-[26px] text-[#475569]">
//                             Other FX broker affiliate websites talk about “earning a stable income.” Forget stable. Think explosive!
//                             GTC Payouts gives you one of the highest CPA offers in the market. Isn’t it time you grew your Introducing
//                             Broker business with us?
//                         </p>

//                         <button
//                             type="button"
//                             className="mt-6 inline-flex items-center gap-2 h-[46px] px-6 rounded-full bg-[#F59E0B] text-white text-[15px] font-semibold shadow-[0_10px_20px_rgba(245,158,11,0.25)] hover:bg-[#ea9a0a] transition-colors"
//                         >
//                             Grow My Business
//                             {/* <HiOutlineArrowNarrowRight className="text-[18px]" /> */}
//                         </button>
//                     </div>

//                     {/* right image + currency bubbles */}
//                     <div className="lg:col-span-5 relative">
//                         <div className="relative">
//                             <img
//                                 src="/person2.png"
//                                 alt="Businessman"
//                                 className="w-[520px] max-w-full mx-auto select-none"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* stats strip */}
//                 <div className="mt-10 lg:mt-12">
//                     <div className="rounded-[12px] border border-[#E6ECF2] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] px-4 sm:px-6 lg:px-8 py-4">
//                         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#E6ECF2]">
//                             <Stat title="Over 175K" subtitle="Partners Worldwide" />
//                             <Stat title="Up To" subtitle="$1,850 CPA" />
//                             <Stat title="Over $2 Billion" subtitle="In Payouts" />
//                             <Stat title="Award-Winning" subtitle="IB Programme" />
//                             <Stat title="Over $3.3 Million" subtitle="Payouts a Month" />
//                         </div>
//                     </div>
//                     <p className="sr-only">Up to 80% in Rebates for IBs</p>
//                 </div>
//             </main>
//         </div>
//     );
// }

// function Stat({ title, subtitle }) {
//     return (
//         <div className="flex items-center justify-center py-3">
//             <div className="text-center">
//                 <div className="text-[12px] uppercase tracking-wide text-[#0F172A]/60">{subtitle}</div>
//                 <div className="text-[16px] font-semibold text-[#00B8D4] mt-0.5">{title}</div>
//             </div>
//         </div>
//     );
// }

"use client"
import React from "react";

/** Pixel-perfect hero (TailwindCSS) with background layers + bubbles */
export default function GtcCpaHero() {
    return (
        <div className="relative overflow-hidden bg-white font-[Poppins] text-[#0F172A]">
            {/* ==== BACKGROUND LAYERS ==== */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Faint orange chart wash (top-left to mid) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(1200px 520px at 28% 58%, rgba(255,153,51,0.10) 0%, rgba(255,255,255,0) 65%)",
                    }}
                />

                <img
                    src="/banner-bg.png"
                    alt=""
                    className="absolute right-0 left-0 w-full bottom-0 h-[92%] max-h-[780px] opacity-60"
                    style={{ transform: "translateY(6%)" }}
                />
            </div>

            {/* ==== HEADER ==== */}
            <header className="relative z-20 mx-auto flex container items-center justify-between pt-6 ">
                <img src="/logogtcpay.png" alt="GTC Payouts" className="h-8 w-auto" />
                <nav className="hidden items-center gap-8 text-[14px] text-[#0F172A]/70 md:flex">
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">Contact Us</a>
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">Contact Us</a>
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">Contact Us</a>
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">About Us</a>
                </nav>
            </header>

            {/* ==== MAIN ==== */}
            <main className="relative z-20 mx-auto container pb-10 pt-8 lg:pb-20 lg:pt-20">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* LEFT: copy */}
                    <div className="lg:col-span-7">
                        <p className="text-[50px] text-[#04417B]">Up to</p>

                        <h1 className="mt-1">
                            <span className="block text-[64px] leading-[68px] sm:text-[68px] sm:leading-[72px] lg:text-[100px] lg:leading-[100px] font-extrabold text-[#03A7D9] tracking-[-0.02em]">
                                $1,850 <span className="text-[#00B8D4]">CPA</span>
                            </span>
                        </h1>

                        <p className="mt-4 max-w-[600px] text-[20px] leading-[26px] text-[#04417B]">
                            Other FX broker affiliate websites talk about “earning a stable income.” Forget
                            stable. Think explosive! GTC Payouts gives you one of the highest CPA offers in
                            the market. Isn’t it time you grew your Introducing Broker business with us?
                        </p>

                        <button
                            type="button"
                            className="mt-10 inline-flex h-[46px] items-center gap-2 rounded-[12px] bg-[#ED8946] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
                        >
                            Grow My Business
                        </button>
                    </div>

                    {/* RIGHT: person + bubbles */}
                    <div className=" lg:col-span-5">
                        {/* Person image sits in front of bars/background */}
                        <img
                            src="/person2.png" // put your cut-out person here (transparent PNG)
                            alt="Businessman"
                            className=" absolute left-[5%] bottom-0 right-0 z-20 mx-auto max-w-full select-none"
                            style={{ width: "82%" }}
                        />
                    </div>
                </div>

                {/* Stats strip */}
                <div className="mt-16 lg:mt-16">
                    <div className="rounded-[12px] border border-[#B4C5D2] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 divide-y divide-[#E6ECF2] sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
                            <Stat value={`Over <b class="text-[#03A7D9]">175K</b><br/> Partners Worldwide`} />
                            <Stat value={`Up To <br/> <b class="text-[#03A7D9]">$1,850</b> CPA`} />
                            <Stat value={`Over <b class="text-[#03A7D9]">$2 Billion</b> <br/> In Payouts`} />
                            <Stat value={`<b class="text-[#03A7D9]">Award-Winning</b> <br/> IB Programme`} />
                            <Stat value={`Over <b class="text-[#03A7D9]">$3.3 Million</b> <br/> Payouts a Month`} />
                        </div>
                    </div>
                    <p className="sr-only">Up to 80% in Rebates for IBs</p>
                </div>
            </main>
        </div>
    );
}

/* ----------------------------- helpers ----------------------------- */

function Stat({ value }) {
    return (
        <div className="flex items-center justify-center py-3">
            <div className="text-center">
                <div className="text-[14px] uppercase tracking-wide text-[#04417B]"
                    dangerouslySetInnerHTML={{ __html: value }}
                />
            </div>
        </div>
    );
}

/**
 * White circular badge with subtle lift + bobbing animation.
 * Provide your coin icon at `icon` path.
 */
function Bubble({ className = "", icon = "", size = 44, delay = "0s" }) {
    return (
        <div
            className={`
        ${className}
        z-20 grid place-items-center rounded-full bg-white shadow-[0_10px_26px_rgba(0,0,0,0.10)]
        ring-1 ring-black/5
        animate-[bob_4s_ease-in-out_infinite]
      `}
            style={{
                width: size,
                height: size,
                animationDelay: delay,
            }}
        >
            {/* If you don’t have SVGs yet, this circle will show empty white bubbles */}
            {icon ? (
                <img src={icon} alt="" className="h-[55%] w-[55%] object-contain" />
            ) : null}
        </div>
    );
}
