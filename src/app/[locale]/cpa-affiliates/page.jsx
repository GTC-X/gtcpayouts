import CommonEarningSection from "../components/EarningSection";
import CommonFlipCard from "../components/FlipCard";
import CommonFooter from "../components/Footer";
import CommonHeader from "../components/Header";
import CommonHeroBanner from "../components/HeroBanner";
import CommonLastBanner from "../components/LastBanner";
import CommonSlider from "../components/Slider";

export const metadata = {
    title: 'GTC Affiliates Earn Up To $1,850 CPA!',
    description: 'Join the GTC Affiliate Programme and earn up to $1,850 CPA per referral. One of the highest CPA offers in the world with instant payouts and global reach.',
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

export default function AffiliatePage() {
    const heroData = {
        heading1: "Earn Up To",
        title: "$1,850 CPA",
        heading2: "with GTC Affiliates",
        para: "Stop chasing small deals. At GTC Affiliates, we give affiliates one of the highest CPA offers in the market, up to $1,850 per referral. Global traffic accepted, instant payouts, and no caps. This is how you scale your affiliate business.  ",
        btnText: "Sign Up as an Affiliate",
        titleColor: "#0c143a"
    }
    const sliderData = {
        title1: "How Much You’ll Earn as a GTC   ",
        title2: "Affiliate",
        para: "Move the slider to see just how much you could be making with GTC’s monster CPA rates. The more traffic you bring, the more traders sign up, and the bigger your payouts grow.  "
    }
    const flipCardData = {
        title: "Why Should You Become a GTC Affiliate?",
        desc: "Calling All Forex Affiliates: Refer traders and get paid a massive $1,850 CPA for every trader you bring us.",
        btnText: "Grow My Business",
        CARDS: [
            {
                title: "Up to $1,850 CPA",
                band: "teal",
                bgColor: "bg-[#b88857]",
                color: "text-[#b88857]",
                icon: "/icons/flip-icon1.svg",
                back: "Earn one of the biggest CPA deals in the world. No caps, no gimmicks.",
            },
            {
                title: "Global Reach",
                band: "navy",
                bgColor: "bg-[#04417B]",
                color: "text-[#04417B]",
                icon: "/icons/flip-icon2.svg",
                back: "We accept traffic from South America, South East Asia, Africa, the CIS, MENA, and the GCC. Grow globally with GTC Affiliates.",
            },
            {
                title: "Instant Payouts",
                band: "orange",
                bgColor: "bg-[#0c143a]",
                color: "text-[#0c143a]",
                icon: "/icons/flip-icon3.svg",

                back: "Your commissions are available instantly. No delays, no excuses.",
            },
            {
                title: "Top-Tier Promo \n Tools",
                band: "navy",
                bgColor: "bg-[#04417B]",
                color: "text-[#04417B]",
                icon: "/icons/flip-icon4.svg",

                back: "High-converting banners, landing pages, videos, and social assets, all designed to turn clicks into traders.",
            },
            {
                title: "Real-Time \n Analytics",
                band: "orange",
                bgColor: "bg-[#0c143a]",
                color: "text-[#0c143a]",
                icon: "/icons/flip-icon5.svg",
                back: "Full dashboard tracking to monitor clicks, signups, conversions, and payouts in real time.",
            },
            {
                title: "Exclusive Affiliate Bonuses",
                band: "teal",
                bgColor: "bg-[#b88857]",
                color: "text-[#b88857]",
                icon: "/icons/flip-icon6.svg",
                back: "Boost your earnings with special promotions, loyalty perks, and VIP rewards.",
            },
        ]
    }

    const earningData = {
        title: "Start Earning as an Affiliate Today!  ",
        cardData: [
            {
                title: "Apply & Get Your Affiliate Link  ",
                desc: "Go live instantly with no red tape.",
                icons: "/icons/card-icon1.svg"
            },
            {
                title: "Promote Globally  ",
                desc: "We accept traffic from 80+ countries, giving you unlimited reach.  ",
                icons: "/icons/card-icon2.svg"
            },
            {
                title: "Refer Traders. Earn Big CPA  ",
                desc: "Up to $1,850 CPA per referral, one of the highest payouts in the industry.  ",
                icons: "/icons/card-icon3.svg"
            },
            {
                title: "Instant Payouts. Zero Delays  ",
                desc: "Withdraw your profits instantly through secure global payment systems.",
                icons: "/icons/card-icon4.svg"
            }
        ]
    }

    const lastSectionData = {
        title: "Become a GTC Affiliate today and unlock payouts that crush the competition!  ",
        btnText: "Grow My Business",
        bg: "last.png"
    }
    return (
        <>
            <CommonHeader />
            <CommonHeroBanner data={heroData} page="affiliate" />
            <CommonSlider data={sliderData} page="affiliate" />
            <CommonEarningSection data={earningData} page="affiliate" />
            <CommonFlipCard data={flipCardData} page="affiliate" />
            <CommonLastBanner data={lastSectionData} page="affiliate" />
            <CommonFooter />
        </>
    );
}
