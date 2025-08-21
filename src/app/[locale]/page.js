import Image from "next/image";
import bgOverlay from "../[locale]/assets/bg-overlay.webp";
import AffiliatedForm from "./components/MainForm";

export default function HomePage() {
  return (
    <section className="relative min-h-screen bg-[#F2F6F9]">
      {/* Overlay pinned to viewport bottom */}
      <div
        className="fixed inset-x-0 bottom-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* MUST be relative + non-zero height when using fill */}
        <div className="relative w-full h-[220px] md:h-[800px]">
          <Image
            src={bgOverlay}
            alt="testing"
            fill
            priority           // <-- force eager load in prod
            sizes="100vw"
            className="object-cover object-top opacity-80"
          />
        </div>
      </div>

      {/* Content above */}
      <div className="relative z-10 container mx-auto py-10">
        <AffiliatedForm />
      </div>
    </section>
  );
}
