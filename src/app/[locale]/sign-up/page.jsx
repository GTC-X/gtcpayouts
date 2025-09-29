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
    <CommonHeader />
    <section className="relative py-10 bg-[#F2F6F9]">
      {/* Fixed overlay pinned to the bottom of the viewport */}
      <div className="max-w-lg mx-auto">
<GtcSignupTabsCard />
      </div>
          </section>
      <CommonFooter />
</>
  );
};

export default Page;
