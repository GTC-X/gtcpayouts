import React from "react";

const ORANGE = "#F7994B";
const NAVY = "#04417B";
const TEAL = "#03A7D9";
const BODY = "#04417B";

function CircleIcon({ children }) {
    return (
        <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full"
            style={{ border: `2px solid ${ORANGE}`, color: ORANGE }}
        >
            {children}
        </span>
    );
}
export default function CommonEarningSection({ data }) {
    return (
        <section className="relative"
            style={{ background: "var(--Prime-Gradient, linear-gradient(135deg, var(--color-GTC-Prime-Navy, #003651) 0%, var(--color-GTC-Prime-Blue, #04417B) 35.1%, var(--color-GTC-Prime-Sky, #03A7D9) 100%))" }}
        >
            {/* subtle chart-ish lines */}
            <div className="pointer-events-none">
                <img
                    src="/section1bg.svg"
                    alt=""
                    className="absolute right-0 left-0 top-0 w-full bottom-0 h-full"
                />
            </div>
            <div className=" container relative mx-auto -top-20">
                {/* content */}
                <div className="rounded-2xl bg-white"
                    style={{
                        border: "1px solid #B4C5D2",
                        boxShadow: "1px 6px 16px 0px #0000001A"
                    }}
                >
                    <div className="px-6 py-8 sm:px-6 max-w-6xl mx-auto sm:py-16">
                        <h2
                            className="text-center font-semibold"
                            style={{ color: NAVY, fontSize: "32px", lineHeight: "28px" }}
                        >
                            {data?.title}
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
                            {/* Item 1 */}
                            {data?.cardData?.map((single, index) =>
                                <div className="flex items-center  flex-col gap-5" key={index}>
                                    <CircleIcon>
                                        {single?.icons}
                                    </CircleIcon>
                                    <div className="text-center">
                                        <div
                                            className="font-semibold"
                                            style={{ color: TEAL, fontSize: "22px", lineHeight: "32px" }}
                                        >
                                            {single?.title}
                                        </div>
                                        <p
                                            className="mt-1"
                                            style={{ color: BODY, fontSize: "20px", lineHeight: "32px" }}
                                        >
                                            {single?.desc}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}