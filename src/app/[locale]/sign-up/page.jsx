// app/page.tsx  (App Router)
import Footer from "@/app/components/Footer";
import bgOverlay from "../assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import CommonHeader from "../components/Header";
import AffiliatedForm from "../components/MainForm";
import CommonFooter from "../components/Footer";
import GtcSignupTabsCard from "../components/GtcSignupTabsCard";

const Page = () => {
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
          <GtcSignupTabsCard />
        </div>
        <CommonFooter />
      </section>

    </>
  );
};

export default Page;
