"use client"
import React from "react";

/**
 * Pixel-perfect Affiliate Earnings section
 * - Left metric: value
 * - Right metric: value * 3 (formatted as $)
 * - Slider with bubble, ticks (0, 50, 100, 150, 200, 250+)
 * TailwindCSS required.
 */
export default function CommonSlider({ data }) {
    const [value, setValue] = React.useState(210); // example default to match screenshot
    const min = 0;
    const max = 250;
    const step = 1;
    const base = 600

    const pct = ((Math.min(value, max) - min) / (max - min)) * 100;

    const payout = value * 3; // <-- as requested

    const getTotal = (value) => {
        if (value <= 29) {
            return value * base
        }
        if (value >= 30 && value <= 49) {
            return value * base + 5000
        }
        if (value > 49) {
            return (value * base) + 10000
        }
    }

    const fmt = (n) =>
        n.toLocaleString(undefined, { maximumFractionDigits: 0 });

    return (
        <section className="w-full bg-[#F2F6F9]">
            <div className="mx-auto container md:pt-16 pt-12 md:pb-44 pb-16">
                {/* Heading + sub copy */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                    <div className=" text-center md:text-left">
                        <h2 className="md:text-[32px] text-[24px] leading-[1.2] font-semibold text-[#04417B]">
                            {data?.title1}
                            <span className="md:block">{data?.title2}</span>
                        </h2>
                        <p className="mt-6 md:text-[22px] text-[16px] leading-[20px] md:leading-[32px] text-[#04417B] max-w-[540px]">
                            {data?.para}
                        </p>
                    </div>

                    {/* Slider side */}
                    <div className="pt-4 md:pt-2">
                        {/* Slider wrapper */}
                        <div className="relative w-full pt-8">
                            {/* Track background */}
                            <div className="h-2 w-full rounded-full bg-[#DDEAF2]" />

                            {/* Filled portion */}
                            <div
                                className="pointer-events-none absolute left-0 top-8 h-2 rounded-full bg-[#17A7D9]"
                                style={{ width: `calc(${pct}% )` }}
                            />

                            {/* Input range on top */}
                            <div className="absolute left-0 top-6 w-full">
                                <input
                                    type="range"
                                    min={min}
                                    max={max}
                                    step={step}
                                    value={value}
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    className="
                    w-full appearance-none bg-transparent
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:border
                    [&::-webkit-slider-thumb]:border-[#17A7D9]
                    [&::-webkit-slider-thumb]:shadow
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-white
                    [&::-moz-range-thumb]:border
                    [&::-moz-range-thumb]:border-[#17A7D9]
                  "
                                    aria-label="Estimated traders"
                                />
                            </div>

                            {/* Value bubble */}
                            <div
                                className="absolute -top-2 translate-x-[-50%]"
                                style={{ left: `calc(${pct}% )` }}
                            >
                                <div className="rounded-md bg-[#17A7D9] px-2.5 py-1 text-sm font-semibold text-white shadow">
                                    {fmt((value))}
                                </div>
                                <div className="mx-auto h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-[#17A7D9]" />
                            </div>

                            {/* Ticks */}
                            <div className="mt-4 flex items-center justify-between md:text-[12px] text-[10px] font-medium text-[#6E8192]">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                                <span>150</span>
                                <span>200</span>
                                <span>250+</span>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="mt-6 grid grid-cols-2 gap-6">
                            {/* Left metric */}
                            <div>
                                <div className="md:text-[40px] text-[24px] font-normal leading-none text-[#04417B]">
                                    {fmt(value)}
                                </div>
                                <div className="mt-1 md:text-[14px] text-[10px] font-normal tracking-wide text-[#04417B]">
                                    Total traders
                                    <span className="block">signed up</span>
                                </div>
                            </div>

                            {/* Right metric */}
                            <div className="text-right">
                                <div className="md:text-[40px] text-[24px] font-extrabold leading-none text-[#03A7D9]">
                                    ${fmt(getTotal(value))}
                                </div>
                                <div className="mt-1 md:text-[14px] text-[10px] font-normal tracking-wide text-[#04417B]">
                                    Your total payouts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
