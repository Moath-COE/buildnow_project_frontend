"use client";
import { useState, useEffect } from "react";
import TotalSpends from "@/components/TotalSpends";
import UpcomingRenewals from "@/components/UpcomingRenewals";
import CostBreakdown from "@/components/CostBreakdown";
import SubscriptionsList from "@/components/SubscriptionsList";
import PotentialSavings from "@/components/PotentialSavings";
import AddNew from "@/components/AddNew";
import Navbar from "@/components/Navbar";

export default function Home() {
  const BASE_URL = "http://127.0.0.1:8000/";
  // const BASE_URL = "https://buildnow-project.onrender.com/";

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
      setSubs((prev) => result);
    }
    fetchData();

    return;
  }, []);

  return (
    <>
      <Navbar setPopup={setPopup} />
      <main className="lg:grid grid-cols-6  grid-rows-7 lg:gap-6 sm:gap-4 gap-2 container py-6 px-2 lg:px-0 flex-1 mx-auto relative flex flex-col">
        <div className="col-span-3 border border-gray-300 rounded-lg insent-shadow-lg h-full p-4 flex justify-between items-center row-span-1">
          <TotalSpends subs={subs} BASE_URL={BASE_URL} />
        </div>
        <div className="col-span-3 row-span-2 border border-gray-300 rounded-lg insent-shadow-lg h-full p-4 flex flex-col ">
          <UpcomingRenewals subs={subs} />
        </div>
        <div className="col-span-3 border row-span-6 border-border rounded-lg insent-shadow-lg h-full p-4 flex flex-col">
          <SubscriptionsList
            togglePopup={togglePopup}
            subs={subs}
            setSubs={setSubs}
            BASE_URL={BASE_URL}
          />
        </div>
        <div className="col-span-3 row-span-3 border border-gray-300 rounded-lg insent-shadow-lg h-full p-4 flex flex-col xl:min-h-auto">
          <CostBreakdown subs={subs} />
        </div>
        <div className="col-span-3 border border-gray-300 rounded-lg insent-shadow-lg h-full p-4 flex flex-col row-span-2">
          <PotentialSavings subs={subs} />
        </div>
        <AddNew
          togglePopup={togglePopup}
          popup={popup}
          setPopup={setPopup}
          setSubs={setSubs}
          BASE_URL={BASE_URL}
        />
      </main>
    </>
  );
}
