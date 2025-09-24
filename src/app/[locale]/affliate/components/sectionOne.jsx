import React from "react";

const ORANGE = "#F7994B";
const NAVY = "#0A2A47";
const TEAL = "#1AA5CF";
const BODY = "#516679";

function CircleIcon({ children }) {
    return (
        <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full"
            style={{ border: `2px solid ${ORANGE}`, color: ORANGE }}
        >
            {children}
        </span>
    );
}

function CheckSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

function GlobeSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            <path d="M2 12h20M12 2c3.5 3.3 3.5 16.7 0 20M12 2c-3.5 3.3-3.5 16.7 0 20" />
        </svg>
    );
}

function DollarSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1v22" />
            <path d="M17 5c0-1.657-2.239-3-5-3S7 3.343 7 5s2.239 3 5 3 5 1.343 5 3-2.239 3-5 3-5 1.343-5 3 2.239 3 5 3 5-1.343 5-3" />
        </svg>
    );
}

function FlashSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" />
        </svg>
    );
}

export default function FxOfferingSection() {
    return (
        <section className="relative overflow-hidden"
            style={{ background: "var(--Prime-Gradient, linear-gradient(135deg, var(--color-GTC-Prime-Navy, #003651) 0%, var(--color-GTC-Prime-Blue, #04417B) 35.1%, var(--color-GTC-Prime-Sky, #03A7D9) 100%))" }}
        >
            {/* subtle chart-ish lines */}
            <div className="pointer-events-none">
                <img
                    src="/section1bg.svg"
                    alt=""
                    className="absolute right-0 left-0 top-0 w-full bottom-0 h-full"
                />
            </div>
            <div className=" container mx-auto">
                {/* content */}
                  <div className="rounded-2xl bg-white shadow-[0_10px_24px_rgba(10,42,71,0.12)] ring-1 ring-[#E7EEF4]">
                    <div className="px-6 py-8 sm:px-10 sm:py-10">
                        <h2
                            className="text-center font-semibold"
                            style={{ color: NAVY, fontSize: "22px", lineHeight: "28px" }}
                        >
                            Start Earning as an Affiliate Today!
                        </h2>

                        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                            {/* Item 1 */}
                            <div className="flex items-start gap-3">
                                <CircleIcon>
                                    <CheckSvg />
                                </CircleIcon>
                                <div>
                                    <div
                                        className="font-semibold"
                                        style={{ color: TEAL, fontSize: "16px", lineHeight: "22px" }}
                                    >
                                        Apply &amp; Get Your Affiliate Link
                                    </div>
                                    <p
                                        className="mt-1"
                                        style={{ color: BODY, fontSize: "14px", lineHeight: "20px" }}
                                    >
                                        Go live instantly with no red tape.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-3">
                                <CircleIcon>
                                    <GlobeSvg />
                                </CircleIcon>
                                <div>
                                    <div
                                        className="font-semibold"
                                        style={{ color: TEAL, fontSize: "16px", lineHeight: "22px" }}
                                    >
                                        Promote Globally
                                    </div>
                                    <p
                                        className="mt-1"
                                        style={{ color: BODY, fontSize: "14px", lineHeight: "20px" }}
                                    >
                                        We accept traffic from 80+ countries, giving you unlimited reach.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-3">
                                <CircleIcon>
                                    <DollarSvg />
                                </CircleIcon>
                                <div>
                                    <div
                                        className="font-semibold"
                                        style={{ color: TEAL, fontSize: "16px", lineHeight: "22px" }}
                                    >
                                        Refer Traders. Earn Big CPA
                                    </div>
                                    <p
                                        className="mt-1"
                                        style={{ color: BODY, fontSize: "14px", lineHeight: "20px" }}
                                    >
                                        Up to $1,850 CPA per referral, one of the highest payouts in the industry.
                                    </p>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex items-start gap-3">
                                <CircleIcon>
                                    <FlashSvg />
                                </CircleIcon>
                                <div>
                                    <div
                                        className="font-semibold"
                                        style={{ color: TEAL, fontSize: "16px", lineHeight: "22px" }}
                                    >
                                        Instant Payouts. Zero Delays
                                    </div>
                                    <p
                                        className="mt-1"
                                        style={{ color: BODY, fontSize: "14px", lineHeight: "20px" }}
                                    >
                                        Withdraw your profits instantly through secure global payment systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function OfferCard({
    title,
    kicker,
    highlight,
    highlightColor,
    descTop,
    descBold,
    cta,
}) {
    return (
        <div className="rounded-[16px] bg-white text-[#0F172A] shadow-[0_12px_36px_rgba(0,0,0,0.10)] border border-white/80 px-6 sm:px-8 py-8 md:py-10">
            <h3 className="text-[20px] md:text-[32px] font-semibold text-[#04417B]">
                {title}
            </h3>

            <p className="mt-10 text-[20px] tracking-wide text-[#04417B]">{kicker}</p>
            <div
                className="mt-1 text-[28px] md:text-[32px] text-[#ed8946] font-extrabold leading-tight"
            >
                {highlight}
            </div>

            <p className="mt-10 text-[20px] leading-[28px] text-[#04417B]">
                {descTop}
            </p>

            <p className="mt-10 text-[22px] font-semibold text-[#04417B]">
                {descBold}
            </p>

            <button
                type="button"
                className="mt-10 inline-flex h-[46px] items-center gap-2 rounded-[12px] bg-[#ED8946] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
            >
                {cta}
                {/* <HiOutlineArrowNarrowRight className="text-[18px]" /> */}
            </button>
        </div>
    );
}
