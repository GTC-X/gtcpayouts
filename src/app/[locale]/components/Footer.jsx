import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./SocialIcon";

export default function CommonFooter() {
    return (
          <>
     
        <div
      className={`bg-[#04417b] pb-10 z-30 py-12 md:py-14 xl:py-16 `}
    >
      
        <div className="container lg:flex justify-start items-center px-2">
          <div className="lg:basis-3/12 lg:flex flex-wrap items-center justify-center md:pr-10 pb-5">
            <Link href="/" locale="en">
              <Image
                src="/log-white.png"
                width="209"
                height="32"
                alt="GTC Payouts"
                className="mx-auto md:m-0"
              />
            </Link>
            {/* <SocialIcon /> */}
           
           
          </div>
          <div className="lg:basis-9/12 text-xs text-white text-opacity-70 space-y-3 leading-5">
            <p>
              {/* <span className="text-secondary">{t("footerNotice.yellow")}</span> */}
              The <span className="text-secondary">GTCPayouts.com</span> website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, the Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu Company license number: 40354.
            </p>
            <p>
              <span className="text-secondary">
               GTC Global Ltd and GTC Global Trade Capital Co. Limited</span> belong to the GTC Financial Group which consists of a group of entities across the globe.
            </p>

            <p>Investing in derivative products carries significant risks and may not be suitable for all investors. Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.</p>
            <p>
              <span className="text-secondary">
                GTC Global Ltd and GTC Global Trade Capital Co. Limited </span> do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulation.
            </p>
          
          
           
            <p>
            
              Each of the entities within the GTC Financial Group is managed separately. The financial products and services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
            </p>
         
          </div>
        </div>
      </div>
      <div className="bg-[#012f4a] py-4">
        <p className="text-center text-white text-opacity-70 text-xs">
          © 2025 GTCpayouts. All rights reserved.
        </p>
      </div>
    
    </>

    );
}
