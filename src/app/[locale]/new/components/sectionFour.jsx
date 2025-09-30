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
    { q: "What is the GTC Affiliate Program?", a: "It’s our CPA partnership program where you earn up to $1,850 per referral. It’s also one of the highest payouts in the industry." },
    { q: "Who can join the GTC Affiliate Program?", a: "Anyone with traffic, really. So, that includes affiliates, marketers, media buyers, website owners, influencers. If you can send traders, you can earn." },
    { q: "How much can I earn as a GTC Affiliate?", a: "There’s no cap. With CPA up to $1,850 per trader, your income depends on how much traffic you bring. We’ve already got some affiliates earning $280,000 per month in commission." },
    { q: "What makes GTC Affiliates different from other broker partner programs?", a: "Bigger payouts, faster withdrawals, global traffic acceptance, and top-tier promo tools that actually convert." },
    { q: "What commission structures does GTC Affiliates offer?", a: "We a focus on high-paying CPA deals for affiliates, coupled with up to 80% revenue share (Introducing Broker commissions/rebates) for IBs, we’ve got the right commission structure that’s geared at seeing your business grow. Simply pick the one that suits your business model." },
    { q: "What benefits will I get from joining GTC Affiliates?", a: "Instant payouts, exclusive bonuses, dedicated support, and access to traffic from 80+ countries." },
    { q: "How fast will I get paid?", a: "We process payouts instantly. Your money moves as fast as your traffic." },
    { q: "Do you provide marketing materials?", a: "Yes we do! We provide you with banners, landing pages, videos, widgets, and social media creatives. And all of them are fully optimised to convert and bring you commissions." },
    { q: "Is there a minimum traffic requirement to join?", a: "No. Whether you’re starting small or running big campaigns, we’ve got a deal for you." },
    { q: "Can I track my performance in real time?", a: "Absolutely. Our dashboard shows you every click, conversion, and commission in real time. Full transparency, zero guesswork." },
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
                    <div className="text-center lg:text-right max-w-[540px] lg:ml-auto">
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
