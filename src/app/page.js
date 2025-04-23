"use client";
import { useState, useEffect } from "react";
import TotalSpends from "@/components/TotalSpends";
import UpcomingRenewals from "@/components/UpcomingRenewals";
import CostBreakdown from "@/components/CostBreakdown";
import SubscriptionsList from "@/components/SubscriptionsList";
import PotentialSavings from "@/components/PotentialSavings";
import AddNew from "@/components/AddNew";

export default function Home() {
  // const BASE_URL = "http://127.0.0.1:8000/";
  const BASE_URL = "https://buildnow-project.onrender.com";

  const [popup, setPopup] = useState(false);
  function togglePopup() {
    setPopup((prev) => !prev);
  }

  const [subs, setSubs] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(BASE_URL + "api/subscriptions", {
        method: "GET",
        cache: "no-store",
      });
      const result = await res.json();
      setSubs(result);
    }
    fetchData();

    return;
  }, []);

  return (
    <main className="grid grid-cols-6  grid-rows-7 gap-6 container py-6 flex-1 mx-auto relative">
      <SubscriptionsList
        togglePopup={togglePopup}
        subs={subs}
        setSubs={setSubs}
        BASE_URL={BASE_URL}
      />
      <UpcomingRenewals subs={subs} />
      <CostBreakdown subs={subs} />
      <TotalSpends subs={subs} BASE_URL={BASE_URL} />
      <PotentialSavings subs={subs} />
      <AddNew
        togglePopup={togglePopup}
        popup={popup}
        setPopup={setPopup}
        setSubs={setSubs}
        BASE_URL={BASE_URL}
      />
    </main>
  );
}
