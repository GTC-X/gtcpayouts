"use client"
import { Link, useRouter } from "@/i18n/navigation"

const CommonHeader = () => {
    const router = useRouter();
    return (
        <div className="w-full">
            {/* ==== HEADER ==== */}
            <header className="relative z-20 mx-auto flex container items-center justify-between pt-6 w-full">
                <img src="/logogtcpay.png" alt="GTC Payouts" className="h-8 cursor-pointer w-auto"
                    onMouseEnter={() => router.prefetch?.("/")} // prefetch on intent too
                    onClick={() => router.push("/")}
                />
                <nav className="hidden items-center gap-8 text-[14px] text-[#0F172A]/70 md:flex">
                    <Link href="/" className="transition-colors hover:text-[#00B8D4]">
                        Home                    </Link>
                    <Link className="transition-colors hover:text-[#00B8D4]" href="/cpa-affiliates">Affiliates</Link>
                    <Link className="transition-colors hover:text-[#00B8D4]" href="/introducing-broker">IB</Link>
                    <Link className="transition-colors hover:text-[#00B8D4]" href="/contact-us">Get in Touch</Link>
                    <Link className="transition-colors hover:bg-[#00B8D4] bg-secondary text-white font-medium px-4 py-2 rounded-lg" href="/sign-up">Sign Up</Link>
                </nav>
            </header>

        </div>
    )
}

export default CommonHeader