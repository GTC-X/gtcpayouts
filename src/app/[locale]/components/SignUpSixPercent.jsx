"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AffiliatedForm from "./MainForm";
import IntroducingBrokerForm from "./IntroducingBroker";
import FormSixPercent from "./FormSixPercent";
import Link from "next/link";
/**
 * Props:
 *  - defaultTab: "affiliate" | "ib" (optional, defaults to "affiliate")
 *  - onTabChange?: (tab) => void
 */
export default function GtcSignupTabsCardSixPercent() {

    return (
        <div className="relative overflow-hidden font-[Poppins] text-[#0F172A]">
            <div className="container text-center flex flex-col justify-center items-center mb-0 md:mb-10">
                     <Link href="#">
                                    <img
                                        src="/logogtcpay.png"
                                        alt="GTC Affiliates"
                                        className="md:h-8 h-6 cursor-pointer w-auto"
                                        onMouseEnter={() => router.prefetch?.("/")}
                                        onClick={() => router.push("/")}
                                    />
                                </Link>
                </div>

            {/* page container */}
            <div className="relative">
                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* left copy */}
                    <div className="lg:col-span-6 xl:col-span-7 text-center md:text-left">
                        <p className="mt-4 max-w-[520px] md:text-[22px] md:leading-[32px] text-[16px] text-[#04417B]">
                            Sign up as a
                        </p>
                        <h1 className="mt-0 md:text-[76px] text-[50px] text-[#b88857] leading-[64px]  md:leading-[96px] font-bold">
                            GTC  IB
                        </h1>

                        <p className="mt-4 max-w-[400px] md:text-[22px] md:leading-[32px] text-[16px] leading-[20px] text-[#04417B]">
                           Earn up to 6% in Net Deposit on this limited time Offer!
                        </p>

                     
                    </div>
                    <div className="lg:col-span-6 xl:col-span-5">
                        <div
                            className="rounded-2xl bg-white border border-[#EEF2F7] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden"
                            role="region"
                            aria-label="GTC signup"
                        >
                            <div className="">
                                <FormSixPercent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

