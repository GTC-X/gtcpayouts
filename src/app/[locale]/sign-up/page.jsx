// app/page.tsx  (App Router)
import Footer from "@/app/components/Footer";
import bgOverlay from "../assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import CommonHeader from "../components/Header";
import AffiliatedForm from "../components/MainForm";
import CommonFooter from "../components/Footer";

const Page = () => {
  return (
    <>
    <CommonHeader />
      {/* Fixed overlay pinned to the bottom of the viewport */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 bottom-0 z-10 pointer-events-none select-none"
      >
        <div
          className="w-full h-[220px] md:h-[800px] bg-top bg-cover opacity-80"
          style={{ backgroundImage: `url(${bgOverlay.src})` }}
        />
      </div>

      {/* Page content */}
      <section className="relative bg-[#F2F6F9]">
        {/* Keep content above the overlay */}
        <div className="relative z-20 container mx-auto">
          <AffiliatedForm />
        </div>
      </section>
      <CommonFooter />
    </>
  );
};

export default Page;
