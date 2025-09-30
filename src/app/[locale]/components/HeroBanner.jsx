"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";

/** Pixel-perfect hero (TailwindCSS) with background layers + bubbles */
export default function CommonHeroBanner({ data, page }) {
    const router = useRouter();
    return (
        <div className="relative overflow-hidden bg-white font-[Poppins] text-[#0F172A]">

            {/* ==== MAIN ==== */}
            <main className="relative z-20 mx-auto container pt-8 lg:pt-20">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* LEFT: copy */}
                    <div className=" pb-16">
                        <p className="text-[32px] font-semibold text-[#04417B]">{data?.heading1}</p>

                        <h1 className="mt-1">
                            <span className="block text-[64px] leading-[68px] sm:text-[68px] sm:leading-[72px] lg:text-[76px] my-2 font-extrabold text-[#ED8946] tracking-[-0.02em]" style={{ color: data?.titleColor }}>
                                {data?.title}
                            </span>
                        </h1>
                        <p className="text-[32px] font-semibold text-[#04417B]">{data?.heading2}</p>

                        <p className="mt-8 max-w-[600px] text-[20px] leading-[26px] text-[#04417B]">
                            {data?.para}
                        </p>

                        <button
                            type="button"
                            className="mt-10 inline-flex h-[46px] cursor-pointer items-center gap-2 rounded-[12px] bg-[#ED8946] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
                            onMouseEnter={() => router.prefetch?.("/sign-up")} // prefetch on intent too
                            onClick={() => router.push(`/sign-up?source=${page}`)}
                        >
                            {data?.btnText}
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
                        </button>
                    </div>

                    {/* RIGHT: person + bubbles */}
                    <div className="">
                        {/* Person image sits in front of bars/background */}
                        <img
                            src={data?.img || "/af-banner.svg"} // put your cut-out person here (transparent PNG)
                            alt="Businessman"
                            className="  left-[5%] bottom-0 right-0 z-20 mx-auto max-w-full select-none"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
