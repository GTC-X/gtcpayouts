// // app/page.tsx  (App Router)  — or pages/index.tsx if using Pages Router
// import AffiliatedForm from "./components/MainForm";
// import bgOverlay from "./assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build

// export default function HomePage() {
//   return (
//     <>
//       {/* Fixed overlay pinned to the bottom of the viewport */}
//       <div
//         aria-hidden="true"
//         className="fixed inset-x-0 bottom-0 z-10 pointer-events-none select-none"
//       >
//         <div
//           className="w-full h-[220px] md:h-[800px] bg-top bg-cover opacity-80"
//           style={{ backgroundImage: `url(${bgOverlay.src})` }}
//         />
//       </div>

//       {/* Page content */}
//       <section className="relative min-h-screen bg-[#F2F6F9]">
//         {/* Keep content above the overlay */}
//         <div className="relative z-20 container mx-auto py-10">
//           <AffiliatedForm />
//         </div>
//       </section>
//     </>
//   );
// }

// app/page.tsx  (App Router)  — or pages/index.tsx if using Pages Router
import AffiliatedForm from "./components/MainForm";
import bgOverlay from "./assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import FxOfferingSection from "./new/components/sectionOne";
import GtcCpaHero from "./new/components/banner";
import ReasonsFlipGrid from "./new/components/sectionTwo";
import ClientsSlider from "./new/components/sectionThree";
import FaqSection from "./new/components/sectionFour";
import PartnerCta from "./new/components/lastSection";
import CommonFooter from "./components/Footer";
import CommonHeader from "./components/Header";
import SliderModalPrime from "./components/SliderModal";

export const metadata = {
  title: "Uptp $1,850 CPA | GTC Payouts",
  description:
    "Other FX broker affiliate websites talk about “earning a stable income.” Forget stable. Think explosive! GTC Payouts gives you one of the highest CPA offers in the market. Isn’t it time you grew your Introducing Broker business with us?",
};

export default function HomePage() {
  return (
    <>
      <CommonHeader />
      <GtcCpaHero />
      <FxOfferingSection />
      <ReasonsFlipGrid />
      <ClientsSlider />
      <FaqSection />
      <PartnerCta />
      <CommonFooter />
      <SliderModalPrime isOpen={false} />
    </>
  );
}
