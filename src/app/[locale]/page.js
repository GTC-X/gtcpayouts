import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AffiliatedForm from './components/MainForm';
import bgOverlay from "../../../public/bg-overlay.webp";


export default function HomePage() {
  return (
    <section className="relative bg-[#F2F6F9] min-h-screen">
      {/* Overlay image pinned to the bottom of the SCREEN */}
      <div
        className="fixed inset-x-0 bottom-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="relative w-full h-[220px] md:h-[800px]">
          <Image
            src={bgOverlay}  // <-- replace with your path
            alt=""
            fill
            className="object-cover object-top opacity-80"
          />
        </div>
      </div>

      {/* Content above the overlay */}
      <div className="relative z-10 container mx-auto py-10">
        <AffiliatedForm />
      </div>
    </section>
  );
}
