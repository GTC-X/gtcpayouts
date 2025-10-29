"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";

export default function CommonLastBanner({ data, page }) {
    const router = useRouter();
    const isAffiliate = page === "affiliate";
    return (
        <section className="relative w-full">
            {/* Background image */}
            <img
                src={data?.bg}  /* ⬅️ replace with your image path */
                alt=""
                className="md:h-[460px] h-[250px] w-full object-center object-cover"
            />

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-[#0B65A0]/85" />

            {/* Content */}
            <div className="absolute inset-0">
                <div className="mx-auto flex h-full container flex-col items-center justify-center text-center">
                    <h2 className="text-white font-semibold max-w-4xl tracking-tight leading-[26px] text-[20px]  md:leading-[56px] md:text-[44px] lg:text-[50px]">
                        {data?.title}
                    </h2>

                    <button
                        className={`md:mt-16 mt-8 inline-flex h-[46px] justify-center w-full md:w-fit cursor-pointer items-center gap-2 rounded-[12px] ${isAffiliate ? " bg-white" : "bg-[#0c143a]"} px-6 text-[16px] font-semibold ${isAffiliate ? "text-[#04417B]" : "text-white"} transition-colors ${isAffiliate ? " hover:bg-white" : "hover:bg-[#ea9a0a]"}`}
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
            </div>
        </section>
    );
}
