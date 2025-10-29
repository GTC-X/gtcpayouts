// "use client"
// import { Link, useRouter } from "@/i18n/navigation"

// const CommonHeader = () => {
//     const router = useRouter();
//     return (
//         <div className="w-full">
//             {/* ==== HEADER ==== */}
//             <header className="relative z-20 mx-auto flex container items-center justify-between py-6 w-full">
//                <Link href="/">
//                <img src="/logogtcpay.png" alt="GTC Payouts" className="h-8 cursor-pointer w-auto"
//                     onMouseEnter={() => router.prefetch?.("/")} // prefetch on intent too
//                     onClick={() => router.push("/")}
//                 />
//                </Link> 
//                 <nav className="hidden items-center gap-8 text-[14px] text-[#0F172A]/70 md:flex">

//                     <Link className="transition-colors hover:text-[#0c143a]" href="/cpa-affiliates"> CPA Affiliates</Link>
//                     <Link className="transition-colors hover:text-[#0c143a]" href="/introducing-broker">Introducing Broker</Link>
//                     <Link className="transition-colors hover:text-[#0c143a]" href="/contact-us">Contact Us</Link>
//                     <Link className="transition-colors hover:bg-[#0c143a] bg-secondary text-white font-medium px-4 py-2 rounded-lg" href="/sign-up">Sign Up</Link>
//                 </nav>
//             </header> 

//         </div>
//     )
// }

// export default CommonHeader

"use client";

import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";

const IB_PORTAL_URL = "https://mygtcfx.com";                  // TODO: confirm
const CPA_PORTAL_URL = "https://agents.gtcfx.com/v2/login/";  // confirmed

const locales = [
    { code: "en", label: "EN" },
    // { code: "ar", label: "AR" },
    // { code: "ku", label: "KU" },
];


const CommonHeader = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [open, setOpen] = useState("none");

    // Close all menus on outside click / Esc — no refs used
    useEffect(() => {
        const onClick = () => setOpen("none");
        const onKey = (e) => e.key === "Escape" && setOpen("none");
        window.addEventListener("click", onClick);
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("click", onClick);
            window.removeEventListener("keydown", onKey);
        };
    }, []);

    const toggle = (which) =>
        setOpen((prev) => (prev === which ? "none" : which));

    const switchLocale = (code) => {
        setOpen("none");
        router.push(pathname, { locale: code });
    };

    // Small UI helpers
    const Chevron = ({ open }) => (
        <svg
            className={`ml-1 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 01.94 1.17l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01.02-1.19z" />
        </svg>
    );

    const NavLinks = () => (
        <>
            <Link className="transition-colors hover:text-[#0c143a]" href="/cpa-affiliates">
                CPA Affiliates
            </Link>
            <Link className="transition-colors hover:text-[#0c143a]" href="/introducing-broker">
                Introducing Broker
            </Link>
            <Link className="transition-colors hover:text-[#0c143a]" href="/contact-us">
                Contact Us
            </Link>
            <Link
                className="transition-colors hover:bg-[#0c143a] bg-secondary text-white font-medium px-4 py-2 rounded-lg"
                href="/sign-up"
            >
                Sign Up
            </Link>

            {/* Login (dropdown) */}
            <div
                className="relative"
                onClick={(e) => e.stopPropagation()} // keep window listener from closing
            >
                <button
                    type="button"
                    onClick={() => toggle("login")}
                    className=" cursor-pointer rounded-lg hover:text-[#0c143a] transition-colors inline-flex items-center"
                    aria-haspopup="menu"
                    aria-expanded={open === "login"}
                >
                    Sign In <Chevron open={open === "login"} />
                </button>

                {open === "login" && (
                    <div
                        className="absolute right-0 mt-4 w-80 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-4 z-30 animate-[fadeIn_.12s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-sm text-center font-semibold text-[#0F172A] mb-4">
                            Sign In to your affiliate portal
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <a
                                href={IB_PORTAL_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-xl px-4 py-2 text-center font-medium bg-[#b88857] text-white shadow-sm hover:opacity-95"
                            >
                                IB Portal
                            </a>
                            <a
                                href={CPA_PORTAL_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-xl px-4 py-2 text-center font-medium bg-[#b88857] text-white shadow-sm hover:opacity-95"
                            >
                                CPA Portal
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Language (dropdown) */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    onClick={() => toggle("lang")}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-[#0F172A]/80 hover:bg-gray-50 inline-flex items-center"
                    aria-haspopup="menu"
                    aria-expanded={open === "lang"}
                >
                    {/* <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" d="M3 5h6M6 5s0 9 6 14M10 9H3m11-4h7m-3 0s0 9-6 14m2-10h7" />
                    </svg> */}
                    EN <Chevron open={open === "lang"} />
                </button>

                {open === "lang" && (
                    <div
                        className="absolute right-0 mt-2 w-32 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 z-30 animate-[fadeIn_.12s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {locales.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => switchLocale(l.code)}
                                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );

    return (
        <div className="w-full">
            {/* ==== HEADER ==== */}
            <header className="relative z-50 mx-auto flex container items-center justify-between py-6 w-full">
                <Link href="/">
                    <img
                        src="/logo-gtcaffiliates.webp"
                        alt="GTC Payouts"
                        className="md:h-9 h-6 cursor-pointer w-auto"
                        onMouseEnter={() => router.prefetch?.("/")}
                        onClick={() => router.push("/")}
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#0F172A]/70">
                    <NavLinks />
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#0c143a]"
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen("mobile");
                    }}
                    aria-label="Open menu"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            {/* Mobile drawer */}
            {open === "mobile" && (
                <div className="md:hidden" onClick={() => setOpen("none")}>
                    <div className="fixed inset-0 bg-black/30 z-40" />
                    <div
                        className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-[#0F172A]"></span>
                            <button onClick={() => setOpen("none")} aria-label="Close">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 6l12 12M6 18L18 6" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 text-[15px] text-[#0F172A]/80">
                            <Link href="/cpa-affiliates" onClick={() => setOpen("none")}>
                                CPA Affiliates
                            </Link>
                            <Link href="/introducing-broker" onClick={() => setOpen("none")}>
                                Introducing Broker
                            </Link>
                            <Link href="/contact-us" onClick={() => setOpen("none")}>
                                Contact Us
                            </Link>
                            <Link
                                className="bg-secondary text-white font-medium px-4 py-2 rounded-lg text-center"
                                href="/sign-up"
                                onClick={() => setOpen("none")}
                            >
                                Sign Up
                            </Link>

                            {/* Login quick actions */}
                            <div className="mt-2">
                                <p className="text-sm text-center font-semibold text-[#0F172A] mb-2">
                                    Sign In to your affiliate portal
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    <a
                                        href={IB_PORTAL_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-center rounded-lg px-4 py-2 font-medium 
                                         bg-[#b88857] text-white"
                                        onClick={() => setOpen("none")}
                                    >
                                        IB Portal
                                    </a>
                                    <a
                                        href={CPA_PORTAL_URL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-center rounded-lg px-4 py-2 font-medium 
                                         bg-[#b88857] text-white"
                                        onClick={() => setOpen("none")}
                                    >
                                        CPA Portal
                                    </a>
                                </div>
                            </div>

                            {/* Language picker */}
                            <div className="mt-4">
                                <p className="text-sm font-semibold text-[#0F172A] mb-2">Language</p>
                                <div className="flex gap-2">
                                    {locales.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                switchLocale(l.code);
                                                setOpen("none");
                                            }}
                                            className="px-3 py-2 rounded-lg border text-sm hover:bg-gray-50"
                                        >
                                            {l.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommonHeader;
