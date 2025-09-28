"use client"
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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
                        <div className="rounded-[16px] bg-white border border-[#EEF2F7]"
                            style={{ boxShadow: "1px 6px 16px 0px #0000001A" }}
                        >
                            {/* tabs */}
                            <div className="flex rounded-t-[16px] overflow-hidden">
                                <button
                                    type="button"
                                    onClick={() => setTab("affiliate")}
                                    className={[
                                        "flex-1 px-6 py-4 text-[16px] transition-colors",
                                        isAffiliate
                                            ? "text-[#ED8946]  font-semibold border-b-2 border-[#F59E0B] bg-white"
                                            : "text-[#B2B2C1] font-normal bg-[#F1F5F9]",
                                    ].join(" ")}
                                >
                                    Sign Up as an Affiliate
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setTab("ib")}
                                    className={[
                                        "flex-1 px-6 py-4 text-[16px]  transition-colors",
                                        !isAffiliate
                                            ? "text-[#ED8946] font-semibold border-b-2 border-[#F59E0B] bg-white"
                                            : "text-[#B2B2C1] font-normal bg-[#F1F5F9]",
                                    ].join(" ")}
                                >
                                    Sign Up as an IB
                                </button>
                            </div>

                            {/* form */}
                            <div className="p-6 lg:p-7">
                                {/* First / Last */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[14px] text-[#04417B] mb-1">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="First Name (e.g., John)"
                                            className="w-full h-[42px] rounded-[8px] border border-[#E5E7EB] px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[14px] text-[#04417B] mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Last Name (e.g., Doe)"
                                            className="w-full h-[42px] rounded-[8px] border border-[#E5E7EB] px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15"
                                        />
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="mt-4">
                                    <label className="block text-[14px] text-[#04417B] mb-1">Mobile Number</label>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2 h-[42px] min-w-[110px] px-2 rounded-[8px] border border-[#E5E7EB] bg-white">
                                            <span className="text-[18px]">🇦🇪</span>
                                            <span className="text-[14px] text-[#111827] whitespace-nowrap">+971</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="50 123 4567"
                                            className="flex-1 h-[42px] rounded-[8px] border border-[#E5E7EB] px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mt-4">
                                    <label className="block text-[14px] text-[#04417B] mb-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="w-full h-[42px] rounded-[8px] border border-[#E5E7EB] px-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15"
                                    />
                                </div>

                                {/* Country */}
                                <div className="mt-4">
                                    <label className="block text-[14px] text-[#04417B] mb-1">Country of Residence</label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none w-full h-[42px] rounded-[8px] border border-[#E5E7EB] pl-10 pr-9 text-[14px] outline-none focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15"
                                            defaultValue="UAE (United Arab Emirates)"
                                        >
                                            <option>UAE (United Arab Emirates)</option>
                                            <option>Saudi Arabia</option>
                                            <option>Qatar</option>
                                            <option>Kuwait</option>
                                        </select>
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px]">🇦🇪</span>
                                        <svg
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Submit (disabled to match mock) */}
                                <button
                                    type="button"
                                    disabled
                                    className="mt-10 inline-flex w-full items-center justify-center gap-2 h-[46px] rounded-[10px] bg-[#EEF2F7] text-[#A0AEC0] font-medium text-[18px] cursor-not-allowed"
                                >
                                    {btnText}
                                    {/* <HiOutlineArrowNarrowRight className="text-[18px]" /> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
