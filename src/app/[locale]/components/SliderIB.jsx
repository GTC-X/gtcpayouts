"use client"
import React from "react";

export default function CommonSliderIB({ data, page }) {
    const [value, setValue] = React.useState(0);      // active referral clients (0..100)
    const [priceUnits, setPriceUnits] = React.useState(0); // units for avg volume slider (0..100)

    const min = 0;
    const max = 100;
    const step = 1;

    const basePerUnit = 8;               // <-- each unit = 8
    const price = priceUnits * basePerUnit;

    const pct = ((Math.min(value, max) - min) / (max - min)) * 100;
    const pctPriceUnits = ((Math.min(priceUnits, max) - min) / (max - min)) * 100;

    const getTotal = () => value * price;

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
                    <div className=" flex gap-2 justify-between items-center">
                        <div className=" md:pt-2 flex-[.9]">
                            {/* Slider 1: Active referral clients */}
                            <div className="text-[14px] font-normal tracking-wide text-[#04417B]">
                                Active referral clients:&nbsp;
                                <span className=" text-[14px] font-semibold">
                                    {fmt(value)} traders
                                </span>
                            </div>
                            <div className="relative w-full pt-8">
                                {/* Track background */}
                                <div className="h-2 w-full rounded-full bg-[#DDEAF2]" />

                                {/* Filled portion */}
                                <div
                                    className="pointer-events-none absolute left-0 top-8 h-2 rounded-full bg-[#17A7D9]"
                                    style={{ width: `calc(${pct}%)` }}
                                />

                                {/* Input range on top */}
                                <div className="absolute  left-0 top-6 w-full">
                                    <input
                                        type="range"
                                        min={min}
                                        max={max}
                                        step={step}
                                        value={value}
                                        onChange={(e) => setValue(Number(e.target.value))}
                                        className="cursor-pointer
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
                            </div>

                            {/* Slider 2: Avg trading volume per trader (units × 8) */}
                            <div className="mt-8">
                                <div className="text-[14px] font-normal tracking-wide text-[#04417B]">
                                    Average trading volume per trader:&nbsp;
                                    <span className=" text-[14px] font-semibold">
                                        {fmt(pctPriceUnits)} lots
                                    </span>
                                </div>
                                <div className="relative w-full pt-8">
                                    {/* Track background */}
                                    <div className="h-2 w-full rounded-full bg-[#DDEAF2]" />

                                    {/* Filled portion (use units %) */}
                                    <div
                                        className="pointer-events-none absolute left-0 top-8 h-2 rounded-full bg-[#17A7D9]"
                                        style={{ width: `calc(${pctPriceUnits}%)` }}
                                    />

                                    {/* Input range on top */}
                                    <div className="absolute left-0 top-6 w-full">
                                        <input
                                            type="range"
                                            min={min}
                                            max={max}
                                            step={step}
                                            value={priceUnits}
                                            onChange={(e) => setPriceUnits(Number(e.target.value))}
                                            className=" cursor-pointer
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
                                            aria-label="Average trading volume per trader (units)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Totals */}
                        <div className=" grid grid-cols-1 gap-6">
                            <div className="text-center">
                                <div className="md:text-[40px] text-[24px] font-extrabold leading-none text-[#03A7D9]">
                                    ${fmt(getTotal())}
                                </div>
                                <div className="mt-1 md:text-[14px] text-[10px] font-normal tracking-wide text-[#04417B]">
                                    Your monthly revenue will be
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
