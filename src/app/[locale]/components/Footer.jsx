import React from "react";

export default function CommonFooter() {
    return (
        <>
        <section className="w-full bg-[#04417B] py-10 md:py-14">
            <div className="container mx-auto px-4 text-left flex flex-col space-y-2.5 text-white text-sm">
               <p> This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, the Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu Company license number: 40354.</p>
               <p><span className="text-secondary">GTC Global Ltd and GTC Global Trade Capital Co. Limited </span> belong to the GTC Financial Group which consists of a group of entities across the globe. </p>
               <p> Investing in derivative products carries significant risks and may not be suitable for all investors. Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.</p>
               <p><span className="text-secondary">GTC Global Ltd and GTC Global Trade Capital Co. Limited </span>do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulation.</p>
               <p>Each of the entities within the GTC Financial Group is managed separately. The financial products and services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited. </p>
               <p>The <span className="text-secondary">GTCPayouts.com</span> website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, the Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius.</p>

            </div>
            </section>
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
        </>
    );
}
