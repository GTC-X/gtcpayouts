"use client"
import React, { useState } from "react";

/** Brand palette from your mock */
const COLORS = {
    navy: "#03A7D9",
    teal: "#03A7D9",
    orange: "#ED8946", // heading accent
    body: "#04417B",
    divider: "#E6EEF6",
};

const FAQS = [
    { q: "What is the GTC Affiliate Program?", a: "Short answer content goes here." },
    { q: "Who can join the GTC Affiliate Program?", a: "Short answer content goes here." },
    { q: "How much can I earn as a GTC Affiliate?", a: "Short answer content goes here." },
    { q: "What makes GTC Affiliates different from other broker partner programs?", a: "Short answer content goes here." },
    { q: "What commission structures does GTC Affiliates offer?", a: "Short answer content goes here." },
    { q: "What benefits will I get from joining GTC Affiliates?", a: "Short answer content goes here." },
    { q: "How fast will I get paid?", a: "Short answer content goes here." },
    { q: "Do you provide marketing materials?", a: "Short answer content goes here." },
    { q: "Is there a minimum traffic requirement to join?", a: "Short answer content goes here." },
    { q: "Can I track my performance in real time?", a: "Short answer content goes here." },
];

export default function FaqSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="bg-[#F2F6F9] relative">
            <div className="pointer-events-none">
                <img
                    src="/section4-bg.svg"
                    alt=""
                    className="absolute right-0 left-0 top-0 w-full bottom-0 h-full"
                />
            </div>
            <div className="mx-auto container relative py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.3fr] gap-10 lg:gap-14 items-center">
                    {/* Left intro */}
                    <div className="text-center lg:text-right max-w-[520px] lg:ml-auto">
                        <div className="text-[32px] leading-[22px] " style={{ color: COLORS.teal }}>
                            Our
                        </div>

                        <h2 className="mt-1 leading-[1.15]">
                            <span
                                className="block text-[40px] my-2 md:text-[34px] font-extrabold"
                                style={{ color: COLORS.orange }}
                            >
                                Frequently Asked
                            </span>
                            <span
                                className="block text-[32px] md:text-[28px]"
                                style={{ color: COLORS.teal }}
                            >
                                Questions
                            </span>
                        </h2>

                        <p
                            className="mt-5 text-[14.5px] md:text-[22px] leading-[32px]"
                            style={{ color: COLORS.body }}
                        >
                            We’ve received a few different questions over the years from Introducing Brokers &amp;
                            Forex Affiliates, and so we’ve added the most frequently asked questions here for you to view.
                        </p>
                    </div>

                    {/* Vertical divider */}
                    <div
                        className="hidden lg:block w-px h-full rounded"
                        style={{ backgroundColor: COLORS.divider }}
                    />

                    {/* Right accordion */}
                    <div className="w-full">
                        <ul className="space-y-2.5">
                            {FAQS.map((item, idx) => {
                                const isOpen = open === idx;
                                return (
                                    <li key={idx} className="rounded-[10px] border border-transparent">
                                        <button
                                            onClick={() => setOpen(isOpen ? null : idx)}
                                            className="w-full flex items-center justify-between gap-4 px-5 py-3.5"
                                        >
                                            <span
                                                className="text-[14.5px] md:text-[18px] font-semibold text-[#04417B] text-right w-full"
                                            >
                                                {item.q}
                                            </span>

                                            {/* Chevron (SVG) */}
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                className={`shrink-0 text-[${COLORS.navy}] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                                style={{ color: COLORS.navy }}
                                                aria-hidden
                                            >
                                                <path
                                                    d="M6 9l6 6l6-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>

                                        {/* Answer (animated height) */}
                                        <div
                                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out px-6 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p
                                                    className="pb-4 text-[16px] pr-6 text-right leading-[20px]"
                                                    style={{ color: COLORS.body }}
                                                >
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>

                                        {/* subtle separator like the mock */}
                                        <div
                                            className="mx-5 h-px"
                                            style={{ backgroundColor: COLORS.divider }}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
