// app/page.tsx  (App Router)  — or pages/index.tsx if using Pages Router
import AffiliatedForm from "./components/MainForm";
import bgOverlay from "./assets/bg-overlay.webp"; // ✅ static import gives a hashed .src at build
import Meta from "./components/Meta";

export default function HomePage() {
  return (
    <>
      {/* Fixed overlay pinned to the bottom of the viewport */}
      <Meta title="Get Affiliated with Us - Join Our Network Today!" description="Join our affiliation program and connect with a network of professionals. Sign up now to start your journey with us!" />
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
      <section className="relative min-h-screen bg-[#F2F6F9]">
        {/* Keep content above the overlay */}
        <div className="relative z-20 container mx-auto py-10">
          <AffiliatedForm />
        </div>
      </section>
    </>
  );
}
