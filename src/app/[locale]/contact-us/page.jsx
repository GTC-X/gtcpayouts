import CommonFooter from "../components/Footer";
import CommonHeader from "../components/Header";
import bgOverlay from "../assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import TalkToUs from "../components/TalkToUs";

export const metadata = {
    title: 'Talk to Us | GTC Payouts',
    description: 'If you’ve got a question about joining us as a Forex Affiliate or as an Introducing Broker, go ahead and send it over to us. Simply fill in the form and we’ll get back to you!',
}

export default function page() {
    return (
        <>
            <section className="relative min-h-screen ">
                <CommonHeader />
                <div className="relative z-20 py-10">
                    <img
                        src="/bg-overlay.webp"
                        alt=""
                        className="absolute right-0 left-0 w-full object-none bottom-0 h-[92%] max-h-[780px] opacity-100 md:opacity-60"
                    />
                    <div className="container mx-auto ">
                        <TalkToUs />
                    </div>
                </div>
                <CommonFooter />
            </section>
        </>
    );
}
