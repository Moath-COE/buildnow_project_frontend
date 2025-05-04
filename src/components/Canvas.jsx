"use client";
import { useState, useEffect } from "react";
import TotalSpends from "@/components/TotalSpends";
import UpcomingRenewals from "@/components/UpcomingRenewals";
import CostBreakdown from "@/components/CostBreakdown";
import SubscriptionsList from "@/components/SubscriptionsList";
import PotentialSavings from "@/components/PotentialSavings";
import AddNew from "@/components/AddNew";

export default function Canvas({ popup, togglePopup }) {
  const BASE_URL = "http://127.0.0.1:8000/";
  // const BASE_URL = "https://buildnow-project.onrender.com/";

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
      <div className="col-span-2 border border-dark-gray rounded-lg insent-shadow-lg h-full p-4 flex justify-between items-center row-span-1">
        <TotalSpends subs={subs} BASE_URL={BASE_URL} />
      </div>
      <div className="col-span-2 row-span-2 border border-dark-gray rounded-lg insent-shadow-lg h-full p-4 flex flex-col ">
        <UpcomingRenewals subs={subs} />
      </div>
      <div className="col-span-2 border border-dark-gray rounded-lg insent-shadow-lg h-full p-4 flex flex-col row-span-2">
        <PotentialSavings subs={subs} />
      </div>
      <div className="col-span-2 border row-span-6 border-dark-gray rounded-lg insent-shadow-lg p-4 flex flex-col">
        <SubscriptionsList
          togglePopup={togglePopup}
          subs={subs}
          setSubs={setSubs}
          BASE_URL={BASE_URL}
        />
      </div>
      <div className="col-span-4 row-span-5 border border-dark-gray rounded-lg insent-shadow-lg h-full p-4 flex flex-col xl:min-h-auto">
        <CostBreakdown subs={subs} />
      </div>
      <AddNew
        togglePopup={togglePopup}
        popup={popup}
        setSubs={setSubs}
        BASE_URL={BASE_URL}
      />
    </>
  );
}
