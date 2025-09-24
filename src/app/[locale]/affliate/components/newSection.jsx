"use client"
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

export default function AffiliateStartCard() {
    return (
        <section className="w-full bg-gradient-to-b from-[#0E6FA5] to-[#0A87B7] py-10">
            <div className="mx-auto max-w-5xl px-4">
                {/* Card */}
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
