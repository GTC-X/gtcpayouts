// app/page.tsx  (App Router)
import CommonHeader from "../../components/Header";
import CommonFooter from "../../components/Footer";
import GtcSignupTabsCardSixPercent from "../../components/SignUpSixPercent";

export const metadata = {
    title: 'Sign Up as a GTC IB | GTC Payouts',
    description: 'Earn up to 6% in Net Deposit on this limited time Offer!',
}

const Page = () => {
    return (
        <>
            <section className="relative min-h-screen ">
                  <div className="relative z-20 py-10">
                    <img
                        src="/bg-overlay.webp"
                        alt=""
                        className="absolute right-0 left-0 w-full object-none bottom-0 h-[92%] max-h-[780px] opacity-100 md:opacity-60"
                    />
                    <div className=" container mx-auto">
                        <GtcSignupTabsCardSixPercent />
                    </div>
                </div>
                <CommonFooter />
            </section>

        </>
    );
};

export default Page;
