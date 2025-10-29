import CommonFooter from "@/app/[locale]/components/Footer";
import TalkToUs from "@/app/[locale]/components/TalkToUs";
import Link from "next/link";
import SuccessPage from "@/app/[locale]/components/Success";
import Image from "next/image";

export const metadata = {
    title: 'Thanks you | GTC Payouts',
    description: 'We’ll be taking a look at it shortly and will do our best to get back to you within the next 24 hours.',
}

export default function page() {
    return (
        <>
            <section className="relative min-h-screen flex flex-col">
                     <div className="container text-center flex flex-col justify-center items-center mb-0 md:mb-10 pt-10">
                     <Link href="/">
                                    <img
                                        src="/logogtcpay.png"
                                        alt="GTC Payouts"
                                        className="md:h-8 h-6 cursor-pointer w-auto"
                                        
                                    />
                                </Link>
                </div>
                <div className="relative flex-1 z-20 py-16">
                    <img
                        src="/bg-overlay.webp"
                        alt=""
                        className="absolute right-0 left-0 w-full object-none bottom-0 h-[92%] max-h-[780px] opacity-100 md:opacity-60"
                    />
                    <div className="container mx-auto ">
                        <SuccessPage />
                    </div>
                </div>
                  <div
      className={`bg-[#04417b] pb-10 z-30 py-12 md:py-14 xl:py-16 `}
    >
      
        <div className="container lg:flex justify-start items-center px-2">
        
          <div className="lg:basis-12/12 text-xs text-white text-opacity-70 space-y-3 leading-5">
            <p>
              {/* <span className="text-secondary">{t("footerNotice.yellow")}</span> */}
              The <span className="text-secondary">gtcaffiliates</span> website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, the Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu Company license number: 40354.
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
            </section>
        </>
    );
}
