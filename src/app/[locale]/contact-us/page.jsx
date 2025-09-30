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
            <div
                aria-hidden="true"
                className=" inset-x-0 absolute bottom-0 z-10 pointer-events-none select-none"
            >
                <div
                    className="w-full h-[220px] md:h-[800px] bg-top bg-cover opacity-60"
                    style={{ backgroundImage: `url(${bgOverlay.src})` }}
                />
            </div>
            <section className="relative min-h-screen ">
                <CommonHeader />
                <div className="relative z-20 container mx-auto py-10">
                    <TalkToUs />
                </div>
                <CommonFooter />
            </section>
        </>
    );
}
