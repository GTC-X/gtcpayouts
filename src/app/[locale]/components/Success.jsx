"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import "react-phone-number-input/style.css";
import * as Yup from "yup";

export default function SuccessPage() {
    const params = useSearchParams()
    const name = params.get('name')


    return (
        <div className="relative overflow-hidden font-[Poppins] text-[#0F172A]">
            {/* page container */}
            <div className="relative">
                {/* main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* left copy */}
                    <div className="lg:col-span-6 xl:col-span-7 text-center md:text-left">
                        <h1 className="mt-2 md:text-[76px] text-[50px] leading-[64px] md:leading-[96px] tracking-[-0.02em] font-bold">
                            <span className="text-[#b88857]">Thanks, {name || ""}</span>{" "}
                        </h1>

                        <p className="mt-4 max-w-[520px] md:text-[22px] md:leading-[32px] text-[16px] leading-[20px] text-[#04417B]">
                            Thanks for sending in your message.
                        </p>
                        <p className="mt-4 max-w-[520px] md:text-[22px] md:leading-[32px] text-[16px] leading-[20px] text-[#04417B]">
                            We’ll be taking a look at it shortly and will do our best to get back to you within the next 24 hours.
                        </p>
                        <p className="mt-4 max-w-[520px] md:text-[22px] md:leading-[32px] text-[16px] leading-[20px] text-[#04417B]">
                            Talk to you soon!
                        </p>
                        <p className="mt-6 max-w-[520px] font-semibold md:text-[22px] md:leading-[32px] text-[16px] leading-[20px] text-[#04417B]">
                            The GTC Payouts Team
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
