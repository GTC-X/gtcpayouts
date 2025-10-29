"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";

export default function PartnerCta() {
  const router = useRouter();
  return (
    <section className="relative w-full">
      {/* Background image */}
      <img
        src="/last.png"  /* ⬅️ replace with your image path */
        alt=""
        className="md:h-[460px] h-[240px] w-full object-bottom object-cover"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#0B65A0]/85" />

      {/* Content */}
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full container flex-col items-center justify-center text-center">
          <h2 className="text-white md:font-extrabold font-semibold leading-[26px] tracking-tight md:leading-[66px] text-[20px] sm:text-[36px] md:text-[44px] lg:text-[50px]">
            <span className="md:block">Become a GTC Partner today and we’ll</span>
            <span className="md:block">empower your business to grow!</span>
          </h2>

          <button
            className="md:mt-16 mt-8 inline-flex justify-center w-full md:w-fit cursor-pointer h-[46px] items-center gap-2 rounded-[12px] bg-[#0c143a] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
            onMouseEnter={() => router.prefetch?.("/sign-up")} // prefetch on intent too
            onClick={() => router.push("/sign-up?source=affiliate")}
          >
            Grow My Business
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
