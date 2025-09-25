const CommonHeader = () => {
    return (
        <div>
            {/* ==== HEADER ==== */}
            <header className="relative z-20 mx-auto flex container items-center justify-between pt-6 ">
                <img src="/logogtcpay.png" alt="GTC Payouts" className="h-8 w-auto" />
                <nav className="hidden items-center gap-8 text-[14px] text-[#0F172A]/70 md:flex">
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">Contact Us</a>
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">Contact Us</a>
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">Contact Us</a>
                    <a className="transition-colors hover:text-[#00B8D4]" href="#">About Us</a>
                </nav>
            </header>

        </div>
    )
}

export default CommonHeader