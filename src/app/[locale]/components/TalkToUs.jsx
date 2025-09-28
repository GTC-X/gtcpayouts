"use client"
import React, { useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function TalkToUs() {
    const btnText = "Talk to Us";

    return (
        <div className="relative overflow-hidden font-[Poppins] text-[#0F172A]">

            {/* page container */}
            <div className="relative">
                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* left copy */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <h1 className="mt-2 md:text-[76px] text-[56px]  leading-[96px] tracking-[-0.02em] font-bold">
                            <span className="text-[#03A7D9]">Talk to Us</span>{" "}
                        </h1>

                        <p className="mt-4 max-w-[520px] text-[22px] leading-[32px] text-[#04417B]">
                            If you’ve got a question about joining us as a Forex Affiliate or as an Introducing Broker, go ahead and send it over to us. Simply fill in the form and we’ll get back to you!
                        </p>
                    </div>

                    {/* right card with tabs */}
                    <div className="lg:col-span-6 xl:col-span-5">
                        <div className="rounded-[16px] bg-white border border-[#EEF2F7]"
                            style={{ boxShadow: "1px 6px 16px 0px #0000001A" }}
                        >
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
                                    <label className="block text-[14px] text-[#04417B] mb-1">Message</label>
                                    <textarea
                                        type="email"
                                        placeholder="Add text here..."
                                        rows={6}
                                        className="w-full  rounded-[8px] border border-[#E5E7EB] p-3 text-[14px] placeholder:text-[#A3AAB5] outline-none focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15"
                                    />
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
