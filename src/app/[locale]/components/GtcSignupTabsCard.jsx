"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AffiliatedForm from "./MainForm";
import IntroducingBrokerForm from "./IntroducingBroker";

/**
 * Props:
 *  - defaultTab: "affiliate" | "ib" (optional, defaults to "affiliate")
 *  - onTabChange?: (tab) => void
 */
export default function GtcSignupTabsCard({ defaultTab = "affiliate", onTabChange }) {
  const [tab, setTab] = useState(defaultTab);
  const params = useSearchParams();

  // Allow preselect via query (?source=ib)
  useEffect(() => {
    const source = params.get("source");
    if (source === "ib") setTab("ib");
  }, [params]);

  const isAffiliate = tab === "affiliate";

  const switchTab = (next) => {
    setTab(next);
    onTabChange?.(next);
  };

  return (
    <div
      className="rounded-2xl bg-white border border-[#EEF2F7] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden"
      role="region"
      aria-label="GTC signup"
    >
      {/* Tabs header */}
      <div
        className="flex items-stretch bg-[#F7FAFC]"
        role="tablist"
        aria-label="Choose signup type"
      >
        <TabButton
          id="tab-affiliate"
          controls="panel-affiliate"
          active={isAffiliate}
          onClick={() => switchTab("affiliate")}
        >
          Sign Up as an Affiliate
        </TabButton>

        <TabButton
          id="tab-ib"
          controls="panel-ib"
          active={!isAffiliate}
          onClick={() => switchTab("ib")}
        >
          Sign Up as an IB
        </TabButton>
      </div>

      {/* Divider (the thin orange line under the active tab per design) */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className={`h-[2px] bg-[#F59E0B] transition-all duration-300 ${
            isAffiliate ? "w-1/2 translate-x-0" : "w-1/2 translate-x-full"
          }`}
        />
      </div>

      {/* Panel area */}
      <div className="">
        {isAffiliate ? (
          <div
            id="panel-affiliate"
            role="tabpanel"
            aria-labelledby="tab-affiliate"
          >
            <AffiliatedForm />
          </div>
        ) : (
          <div id="panel-ib" role="tabpanel" aria-labelledby="tab-ib">
            <IntroducingBrokerForm />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- small tab button helper ---------- */
function TabButton({ id, controls, active, onClick, children }) {
  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      onClick={onClick}
      className={[
        "flex-1 px-5 md:px-6 py-4 text-[15px] md:text-[16px] leading-5 font-medium transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED8946]/40",
        active
          ? "text-[#ED8946] bg-white"
          : "text-[#B8C0CC] bg-[#EDF2F7]/60 hover:text-[#94A3B8]"
      ].join(" ")}
    >
      {children}
    </button>
  );
}
