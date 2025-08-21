import Image from "next/image";
import bgOverlay from "./assets/bg-overlay.webp";
import AffiliatedForm from "./components/MainForm";

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-[1] pointer-events-none" aria-hidden="true">
        <div className="relative w-full h-[220px] md:h-[800px]">
          <Image
            src={bgOverlay}
            alt="hello"
            fill
            sizes="100vw"
            priority
            /* uncomment if using output:'export' or a proxy that breaks _next/image */
            // unoptimized
            className="object-cover object-top opacity-80"
          />
        </div>
      </div>

      <section className="relative min-h-screen bg-[#F2F6F9]">
        <div className="relative z-10 container mx-auto py-10">
          <AffiliatedForm />
        </div>
      </section>
    </>
  );
}
