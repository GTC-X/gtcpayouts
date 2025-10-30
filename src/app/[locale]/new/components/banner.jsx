"use client"
import { useRouter } from "@/i18n/navigation";
import React from "react";

export default function GtcCpaHero() {
    const router = useRouter()
    const [navigating, setNavigating] = React.useState(false);

    const go = React.useCallback(() => {
        setNavigating(true);
        // Next.js doesn't support push(url, { state }). Use a query string instead.
        router.push("/sign-up?source=affiliate");
    }, [router]);
    return (
        <>
            <div className="relative overflow-hidden bg-white font-[Poppins] text-[#0F172A]">
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(1200px 520px at 28% 58%, rgba(255,153,51,0.10) 0%, rgba(255,255,255,0) 65%)",
                        }}
                    />

                    <img
                        src="/banner-bg.png"
                        alt=""
                        className="absolute right-0 left-0 w-full object-none bottom-0 h-[92%] max-h-[780px] opacity-40 md:opacity-60"
                        style={{ transform: "translateY(6%)" }}
                    />
                </div>

                <main className="relative z-20 mx-auto container pt-8 lg:pb-20 lg:pt-20">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                        {/* LEFT: copy */}
                        <div className="lg:col-span-7 text-center md:text-left">
                            <p className="md:text-[50px] text-[24px] text-[#04417B]">Up to</p>

                            <h1 className="mt-1">
                                <span className="block text-[50px] leading-[64px]  md:text-[100px] md:leading-[100px] font-extrabold text-[#b88857] tracking-[-0.02em]">
                                    $1,850 <span className="text-[#0c143a]">CPA</span>
                                </span>
                            </h1>

                            <p className="mt-4 max-w-[600px]  hidden md:flex text-[20px] leading-[26px] text-[#04417B]">
                                Other FX broker affiliate websites talk about “earning a stable income.” Forget
                                stable. Think explosive! GTC Affiliates gives you one of the highest CPA offers in
                                the market. Isn’t it time you grew your Introducing Broker business with us?
                            </p>

                            <button
                                type="button"
                                onMouseEnter={() => router.prefetch?.("/single-form")} // prefetch on intent too
                                onClick={go}
                                disabled={navigating}
                                className="md:mt-10 mt-6 w-full md:w-fit justify-center inline-flex md:h-[46px] h-[36px] cursor-pointer items-center gap-2 rounded-[12px] bg-[#0c143a] px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#ea9a0a]"
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

                        {/* RIGHT: person + bubbles */}
                        <div className="hidden md:block lg:col-span-5">
                            {/* Person image sits in front of bars/background */}
                            <img
                                src="/person2.png" // put your cut-out person here (transparent PNG)
                                alt="Businessman"
                                className="absolute left-[16%] bottom-0 right-0 z-20 mx-auto max-w-full select-none"
                                style={{ width: "82%" }}
                            />
                        </div>
                        <div className="md:hidden block lg:col-span-5">
                            {/* Person image sits in front of bars/background */}
                            <img
                                src="/person2-mobile.png" // put your cut-out person here (transparent PNG)
                                alt="Businessman"
                                className=" left-[16%] h-[500px] bottom-0 right-0 z-20 mx-auto max-w-full select-none"

                            />
                        </div>
                    </div>

                    {/* Stats strip */}
                    <div className="md:mt-16 mt-6 hidden md:block lg:mt-16 relative z-50">
                        <div className="rounded-[12px] border border-[#B4C5D2] bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 divide-y divide-[#E6ECF2] sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-6">
                                <Stat value={`Over <b class="text-[#b88857]">175K</b><br/> Partners Worldwide`} />
                                <Stat value={`Up To <br/> <b class="text-[#b88857]">$1,850</b> CPA`} />

                                <Stat value={`Over <b class="text-[#b88857]">$2 Billion</b> <br/> In Payouts`} />
                                <Stat value={`<b class="text-[#b88857]">Award-Winning</b> <br/> IB Programme`} />

                                <Stat value={`Over <b class="text-[#04417B]">$5M </b> <br/> Payouts a Month`} />
                                <Stat value={`Over <b class="text-[#04417B]">Up To 80% in</b> <br/> Rebates for IBs`} />
                            </div>
                        </div>
                        <p className="sr-only">Up to 80% in Rebates for IBs</p>
                    </div>
                </main>
            </div>
            <div className=" container mx-auto text-center py-10 md:hidden block">
                <p className=" max-w-[600px] text-[16px] leading-[20px] text-[#04417B]">
                    Other FX broker affiliate websites talk about “earning a stable income.” Forget
                    stable. Think explosive! GTC Affiliates gives you one of the highest CPA offers in
                    the market. Isn’t it time you grew your Introducing Broker business with us?
                </p>
                <div className="grid grid-cols-1 mt-6 gap-y-6 lg:grid-cols-6">
                    <StatMobile value={`Over <b class="text-[#b88857] text-[18px]">175K</b> Partners Worldwide`} />
                    <StatMobile value={`Up To  <b class="text-[#b88857]">$1,850</b> CPA`} />

                    <StatMobile value={`Over <b class="text-[#b88857]">$2 Billion</b>  In Payouts`} />
                    <StatMobile value={`<b class="text-[#b88857]">Award-Winning</b>  IB Programme`} />

                    <StatMobile value={`Over <b class="text-[#04417B]">$5 Million</b>  Payouts a Month`} />
                    <StatMobile value={`Over <b class="text-[#04417B]">Up To 80% in</b>  Rebates for IBs`} />
                </div> 
            </div>
        </>
    );
}

/* ----------------------------- helpers ----------------------------- */

function Stat({ value }) {
    return (
        <div className="flex items-center justify-center py-3">
            <div className="text-center">
                <div className="text-[14px] tracking-wide text-[#04417B]"
                    dangerouslySetInnerHTML={{ __html: value }}
                />
            </div>
        </div>
    );
}

function StatMobile({ value }) {
    return (
        <div className="flex items-center border shadow rounded-[8px] border-[#D8E4ED] justify-center py-3"
        >
            <div className="text-center">
                <div className="text-[18px] leading-[20px] tracking-wide text-[#04417B]"
                    dangerouslySetInnerHTML={{ __html: value }}
                />
            </div>
        </div >
    );
}

/**
 * White circular badge with subtle lift + bobbing animation.
 * Provide your coin icon at `icon` path.
 */
function Bubble({ className = "", icon = "", size = 44, delay = "0s" }) {
    return (
        <div
            className={`
        ${className}
        z-20 grid place-items-center rounded-full bg-white shadow-[0_10px_26px_rgba(0,0,0,0.10)]
        ring-1 ring-black/5
        animate-[bob_4s_ease-in-out_infinite]
      `}
            style={{
                width: size,
                height: size,
                animationDelay: delay,
            }}
        >
            {/* If you don’t have SVGs yet, this circle will show empty white bubbles */}
            {icon ? (
                <img src={icon} alt="" className="h-[55%] w-[55%] object-contain" />
            ) : null}
        </div>
    );
}
