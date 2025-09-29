import CommonEarningSection from "../components/EarningSection";
import CommonFlipCard from "../components/FlipCard";
import CommonFooter from "../components/Footer";
import CommonHeader from "../components/Header";
import CommonHeroBanner from "../components/HeroBanner";
import CommonLastBanner from "../components/LastBanner";
import CommonSlider from "../components/Slider";

export const metadata = {
    title: 'GTC’s Introducing Brokers Earn Up To 80% in Rebates',
    description: 'As a GTC Introducing Broker you can earn up to 80% in rebates, which is the biggest IB rebates scheme in the world! Grow your IB business with GTC!',
}

function CheckSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

function GlobeSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            <path d="M2 12h20M12 2c3.5 3.3 3.5 16.7 0 20M12 2c-3.5 3.3-3.5 16.7 0 20" />
        </svg>
    );
}

function DollarSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1v22" />
            <path d="M17 5c0-1.657-2.239-3-5-3S7 3.343 7 5s2.239 3 5 3 5 1.343 5 3-2.239 3-5 3-5 1.343-5 3 2.239 3 5 3 5-1.343 5-3" />
        </svg>
    );
}

function FlashSvg() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinejoin="round" />
        </svg>
    );
}

export default function HomePage() {
    const heroData = {
        heading1: "Earn Up To",
        title: "80% in Rebates",
        heading2: "as an Introducing Broker with GTC!",
        para: "Unlike other brokers where you’ll receive just a cut of the profits, at GTC you’re going to keep the lion’s share of revenue from every trader you refer. Instant payouts, global reach, zero caps.",
        btnText: "Sign Up as an IB",
        titleColor: "#03A7D9",
        img: "icons/ib-banner.svg",
    }
    const sliderData = {
        title1: "How Much You’ll Earn as a GTC",
        title2: " Introducing Broker",
        para: "Go ahead and move the slider to see how much you can earn as a GTC Introducing Broker by simply referring your traders to us."
    }
    const flipCardData = {
        title: "Why Should You Become a GTC Introducing Broker?",
        desc: "Calling All Introducing Brokers: Your traders trade, and you take the lion’s share, up to 80% of it.",
        btnText: "Grow My Business",
        CARDS: [
            {
                title: "80% Revenue Share",
                band: "teal",
                bgColor: "bg-[#03A7D9]",
                color: "text-[#03A7D9]",
                icon: "/icons/flip-icon1.svg",
                back: "Earn the highest rebates on the planet! Get 80% of every dollar your traders generate.",
            },
            {
                title: "Global Reach",
                band: "navy",
                bgColor: "bg-[#04417B]",
                color: "text-[#04417B]",

                icon: "/icons/flip-icon2.svg",
                back: "We accept traders from South America, South East Asia, China, Africa, the CIS, MENA, and the GCC. You’re not limited by geography. Scale globally. Grow your IB business with us!",
            },
            {
                title: "Instant Payouts",
                band: "orange",
                bgColor: "bg-[#ED8946]",
                color: "text-[#ED8946]",
                icon: "/icons/flip-3.svg",
                back: "Instant commission payouts. Your money moves as fast as you do. Simply make a withdrawal request and the funds will be on their way to you.",
            },
            {
                title: "Top-Tier Promo \n Tools",
                band: "navy",
                bgColor: "bg-[#04417B]",
                color: "text-[#04417B]",
               icon: "/icons/flip-icon4.svg",
                back: "High-converting banners, videos, landing pages, widgets, and social assets, which are all built to convert. If you need anything that’s tailored to you, simply ask your GTC Business Development Manager.",
            },
            {
                title: "Real-Time \n Analytics",
                band: "orange",
                bgColor: "bg-[#ED8946]",
                color: "text-[#ED8946]",
                  icon: "/icons/flip-icon5.svg",
                back: "Full dashboard tracking, so that you know what clicks, referrals, conversions, and revenues are coming your way. Plus it’s all in real time.",
            },
            {
                title: "Swap Free \n for Life",
                band: "teal",
                bgColor: "bg-[#03A7D9]",
                color: "text-[#03A7D9]",
                  icon: "/icons/flip-icon6.svg",
                back: "Every trader you refer receives lifetime Swap-Free trading with GTC. No overnight fees, no hidden charges — just pure trading freedom that keeps them active and keeps you earning.",
            },
        ]
    }

    const earningData = {
        title: "Start Earning as an IB Today!",
        cardData: [
            {
                title: "Apply & Get Your IB Link",
                desc: "Go live instantly with no red tape.",
                icons: "/icons/card-icon1.svg"
            },
            {
                title: "They Trade. You Earn",
                desc: "Earn up to 80% rebate from their generated revenue.",
                icons: "/icons/card-icon3.svg"
            },
            {
                title: "Refer Traders Globally",
                desc: "Bring your traders to GTC & build a limitless scale.",
                icons: "/icons/card-icon2.svg"
            },
            {
                title: "Instant Payouts. Withdraw Anytime",
                desc: "Instant Payouts. Withdraw Anytime",
                icons: "/icons/card-icon4.svg"
            }
        ]
    }

    const lastSectionData = {
        title: "Become a GTC Introducing Broker today and we’ll empower your business to grow!",
        btnText: "Grow My Business",
        bg: "ib-last.png"
    }
    return (
        <>
            <CommonHeader />
            <CommonHeroBanner data={heroData} page="ib" />
            <CommonSlider data={sliderData} page="ib" />
            <CommonEarningSection data={earningData} page="ib" />
            <CommonFlipCard data={flipCardData} page="ib" />
            <CommonLastBanner data={lastSectionData} page="ib" />
            <CommonFooter />
        </>
    );
}
