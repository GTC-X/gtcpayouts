import React from "react";

export default function CommonFooter() {
    return (
        <footer className="w-full bg-white">
            <div className="mx-auto container">
                {/* Row */}
                <div className="grid grid-cols-2 gap-4 items-center py-8">
                    {/* Left: Logo */}
                    <a href="#" className="flex items-center">
                        {/* swap src with your asset */}
                        <img
                            src="/logogtcpay.png"
                            alt="GTC Payouts"
                            className="h-8 w-auto"
                        />
                    </a>

                    {/* Center: Links */}
                    {/* <nav className="flex items-center gap-10">
                        <a
                            href="#"
                            className="text-[12.5px] leading-none text-[#3F4E60] hover:text-[#0B65A0]"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="text-[12.5px] leading-none text-[#3F4E60] hover:text-[#0B65A0]"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="text-[12.5px] leading-none text-[#3F4E60] hover:text-[#0B65A0]"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="text-[12.5px] leading-none text-[#3F4E60] hover:text-[#0B65A0]"
                        >
                            Contact Us
                        </a>
                    </nav> */}

                    {/* Right: Copyright */}
                    <div className="flex justify-end">
                        <p className="text-[12.5px] leading-none text-[#0B65A0]">
                            © 2025 GTCpayouts. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
