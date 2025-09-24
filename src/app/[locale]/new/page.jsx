// app/page.tsx  (App Router)  — or pages/index.tsx if using Pages Router
import GtcCpaHero from "./components/banner";
import FooterBar from "./components/footer";
import PartnerCta from "./components/lastSection";
import FaqSection from "./components/sectionFour";
import FxOfferingSection from "./components/sectionOne";
import ClientsSlider from "./components/sectionThree";
import ReasonsFlipGrid from "./components/sectionTwo";

export default function HomePage() {
    return (
        <>
            <GtcCpaHero />
            <FxOfferingSection />
            <ReasonsFlipGrid />
            <ClientsSlider />
            <FaqSection />
            <PartnerCta />
            <FooterBar />
        </>
    );
}
