"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";

/** ======= Section ======= */
export default function CommonFlipCard({ data, page }) {
    const router = useRouter();
    return (
        <section className="bg-white">
            <div className="container mx-auto pt-12 pb-14 md:pt-16 md:pb-20 font-[Poppins]">
                {/* heading */}
                <h2 className="text-center text-[#03A7D9] font-semibold text-[24px] md:text-[32px] leading-tight">
                    {data?.title}
                </h2>
                <p className="mt-8 text-center px-3 md:px-0  text-[#04417B] text-[16px] leading-[20px] md:leading-[32px] max-w-[780px] mx-auto">
                    {data?.desc}
                </p>

                {/* grid */}
                <div className="mt-8 md:mt-10 px-5 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {data?.CARDS?.map((c, i) => (
                        <FlipCard
                            key={i}
                            front={<FrontCard {...c} />}
                            back={<BackCard text={c.back} />}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 md:mt-12 text-center">
                    <button className=" inline-flex h-[46px] md:w-fit w-full justify-center cursor-pointer items-center gap-2 rounded-[12px] bg-[#ED8946] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
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

/** ======= Flip card (pure Tailwind 3D) ======= */
function FlipCard({ front, back }) {
    return (
        <div className="group outline-none" tabIndex={0}>
            <div
                className="
          relative h-[350px] sm:h-[400px] w-full
          [transform-style:preserve-3d] transform-gpu transition-transform duration-700
          hover:[transform:rotateY(180deg)]
          focus:[transform:rotateY(180deg)]
        "
            >
                {/* front */}
                <div
                    className="
            absolute inset-0 [backface-visibility:hidden]
            rounded-[16px] bg-white
            border border-[#EEF2F7]
          "
                    style={{
                        boxShadow: "1px 6px 16px 0px #0000001A",
                    }}
                >
                    {front}
                </div>

                {/* back */}
                <div
                    className="
            absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
            rounded-[16px] text-white
            bg-[#03A7D9]
             border border-transparent
            flex items-center justify-center px-6 text-center
          "
                    style={{
                        boxShadow: "1px 6px 16px 0px #0000001A",
                    }}
                >
                    {back}
                </div>
            </div>
        </div>
    );
}

/** ======= Card faces ======= */
function FrontCard({ title, icon, bgColor, color, band }) {
    const bandBg =
        band === "teal"
            ? "bg-[linear-gradient(135deg,#00B8D4_0%,#15A7CF_48%,transparent_48%)]"
            : band === "navy"
                ? "bg-[linear-gradient(135deg,#0B4E8F_0%,#0B6BB2_48%,transparent_48%)]"
                : "bg-[linear-gradient(135deg,#F59E0B_0%,#F39A0D_48%,transparent_48%)]";

    return (
        <div className="relative h-full rounded-[16px] overflow-hidden">
            {/* diagonal band */}
            <div
                className={` md:h-[200px] h-[180px] ${bgColor}  [clip-path:polygon(0%_0%,100%_0,100%_20%,100%_100%,0%_40%)]
 ${band}`}
            />

            <div className="relative flex flex-col justify-end px-6 pb-6">
                <div className="md:mb-6 mb-3">
                    <img src={icon} alt="" className=" shrink-0" />
                </div>
                <h3 className={`md:text-[26px] text-[24px] leading-[36px] ${color}`}>{title}</h3>
            </div>
        </div>
    );
}

function BackCard({ text }) {
    return (
        <p className="md:text-[22px] text-base leading-[20px] md:leading-[32px] text-white max-w-[90%]">{text}</p>
    );
}
