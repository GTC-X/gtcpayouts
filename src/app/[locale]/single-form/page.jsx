import CommonFooter from "../components/Footer"
import CommonHeader from "../components/Header"
import GtcSignupTabs from "../components/SingleForm"
import bgOverlay from "../assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build

export const metadata = {
    title: 'Sign Up as a GTC Partner | GTC Payouts',
    description: 'Simply select whether you want to sign up as an Affiliate or as an IB. Either way, you’re in great hands when you become a GTC Partner.',
}
export default function page() {
    return (
        <>
            <div
                aria-hidden="true"
                className="fixed inset-x-0 bottom-0 z-10 pointer-events-none select-none"
            >
                <div
                    className="w-full h-[220px] md:h-[800px] bg-top bg-cover opacity-60"
                    style={{ backgroundImage: `url(${bgOverlay.src})` }}
                />
            </div>
            <section className="relative min-h-screen ">
                <CommonHeader />
                <div className="relative z-20 container mx-auto py-10">
                    <GtcSignupTabs />
                </div>
                <CommonFooter />
            </section>
        </>
    )
}

