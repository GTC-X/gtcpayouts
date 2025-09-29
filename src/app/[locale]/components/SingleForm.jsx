"use client"
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import GtcSignupTabsCard from "./GtcSignupTabsCard";
export default function GtcSignupTabs() {
    const [tab, setTab] = useState("affiliate");
    const params = useSearchParams()
    const source = params.get("source");
    React.useEffect(() => {
        if (source === "ib") {
            setTab("ib");
        }
    }, [source])

    const isAffiliate = tab === "affiliate";
    const btnText = isAffiliate ? "Sign Up as an Affiliate" : "Sign Up as an IB";

    return (
        <div className="relative overflow-hidden w-full font-[Poppins] text-[#0F172A]">

            {/* page container */}
            <div className="relative mx-auto container  py-10 lg:py-12">

                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* left copy */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <p className="text-[32px] leading-[40px] text-[#04417B]">Sign up as a</p>
                        <h1 className="mt-2 text-[76px]  leading-[96px] tracking-[-0.02em] font-bold">
                            <span className="text-[#03A7D9]">GTC</span>{" "}
                            <span className="text-[#03A7D9]">Partner</span>
                        </h1>

                        <p className="mt-4 max-w-[520px] text-[22px] leading-[32px] text-[#04417B]">
                            Simply select whether you want to sign up as an Affiliate or as an IB. Either way, you’re in great hands
                            when you become a GTC Partner.
                        </p>

                        <p className="mt-6 text-[22px] leading-[32px] text-[#04417B]">
                            If you’re already a GTC Partner,{" "}
                            <a href="#" className="font-bold text-[#ED8946] hover:opacity-80">
                                sign in.
                            </a>
                        </p>
                    </div>

                    {/* right card with tabs */}
                    <div className="lg:col-span-6 xl:col-span-5">
                        <GtcSignupTabsCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
