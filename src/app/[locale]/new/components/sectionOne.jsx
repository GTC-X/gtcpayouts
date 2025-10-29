"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";

export default function FxOfferingSection() {
    return (
        <section className="relative overflow-hidden"
            style={{ background: "var(--Prime-Gradient, linear-gradient(135deg, var(--color-GTC-Prime-Navy, #003651) 0%, var(--color-GTC-Prime-Blue, #04417B) 35.1%, var(--color-GTC-Prime-Sky, #b88857) 100%))" }}
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
                <div className="mx-auto px-5 max-w-5xl py-14 relative md:py-20 text-center text-white font-[Poppins]">
                    <h2 className="text-[24px] md:text-[40px] leading-tight font-semibold">
                        Our FX Affiliate & IB Offering
                    </h2>
                    <p className="md:mt-6 mt-3 text-[16px] md:text-[20px] leading-[20px] md:leading-[28px] text-white max-w-[760px] mx-auto">
                        Whether you’re an FX Affiliate or an Introducing Broker, we’ve got the offer
                        that’ll see your business grow.
                    </p>

                    {/* cards */}
                    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        <OfferCard
                            title="FX Affiliate Programme"
                            kicker="Up to"
                            highlight="$1,850 CPA"
                            highlightColor="#b88857" 
                            descTop="As a GTC Affiliate, you can earn up to 50% of the revenue that’s generated from all the traders you refer to us."
                            descBold="When your traders trade, you earn, and earn big!"
                            cta="Become a GTC Affiliate"
                            page="affiliate"
                        />
                        <OfferCard
                            title="IB Programme"
                            kicker="Up to"
                            highlight="80% in Rebates" 
                            highlightColor="#b88857" 
                            descTop="As a GTC IB, you can earn up to 80% of the revenue that’s generated from all the traders you refer to us."
                            descBold="Your traders move the markets & you collect the rewards."
                            cta="Become a GTC IB"
                            page="ib"
                        />
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
    page
}) {
    const router = useRouter()
    return (
        <div className="rounded-[16px] bg-white text-[#0F172A] shadow-[0_12px_36px_rgba(0,0,0,0.10)] border border-white/80 px-8 sm:px-8 py-8 md:py-10">
            <h3 className="text-[20px] md:text-[32px] font-semibold text-[#b88857]">
                {title}
            </h3>

            <p className="md:mt-10 mt-8 md:text-[20px] text-[14px] tracking-wide text-[#04417B]">{kicker}</p>
            <div
                className="mt-1 text-[25px] md:text-[32px] text-[#0c143a] font-extrabold leading-tight"
            >
                {highlight}
            </div>

            <p className="md:mt-10 mt-8 md:text-[20px] md:leading-[28px] text-[14px] text-[#04417B]">
                {descTop}
            </p>

            <p className="md:mt-10 mt-8 md:text-[22px] font-semibold text-[14px] text-[#04417B]">
                {descBold}
            </p>

            <button
                type="button"
                className="md:mt-10 mt-8 cursor-pointer inline-flex md:h-[46px] h-[36px] items-center gap-2 rounded-[12px] bg-[#b88857] px-6 md:text-[16px] text-[12px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
                onMouseEnter={() => router.prefetch?.("/sign-up")} // prefetch on intent too
                onClick={() => router.push(`/sign-up?source=${page}`)}

            >
                {cta}
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="translate-x-[1px]"
                    fill="none"
                >
                    <path
                        d="M9 6l6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {/* <HiOutlineArrowNarrowRight className="text-[18px]" /> */}
            </button>
        </div>
    );
}
