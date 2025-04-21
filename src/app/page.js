"use client";
import { useState } from "react";
import Image from "next/image";
import TotalSpends from "@/components/TotalSpends";
import UpcomingRenewals from "@/components/UpcomingRenewals";
import CostBreakdown from "@/components/CostBreakdown";
import SubscriptionsList from "@/components/SubscriptionsList";
import PotentialSavings from "@/components/PotentialSavings";
import AddNew from "@/components/AddNew";

export default function Home() {
  const [popup, setPopup] = useState(false);
  function togglePopup() {
    setPopup((prev) => !prev);
  }
  return (
    <main className="grid grid-cols-6  grid-rows-7 gap-6 container py-6 flex-1 mx-auto relative">
      <TotalSpends />
      <UpcomingRenewals />
      <CostBreakdown />
      <SubscriptionsList togglePopup={togglePopup} />
      <PotentialSavings />
      <AddNew togglePopup={togglePopup} popup={popup} />
    </main>
  );
}
