import CommonFooter from "../components/Footer";
import CommonHeader from "../components/Header";
import bgOverlay from "../assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import TalkToUs from "../components/TalkToUs";
import SuccessPage from "../components/Success";

export const metadata = {
    title: 'Thanks you | GTC Payouts',
    description: 'We’ll be taking a look at it shortly and will do our best to get back to you within the next 24 hours.',
}

export default function page() {
    return (
        <>
            <section className="relative min-h-screen flex flex-col">
                <CommonHeader />
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
                <CommonFooter />
            </section>
        </>
    );
}
