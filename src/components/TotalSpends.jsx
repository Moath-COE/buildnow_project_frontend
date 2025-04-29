import { useEffect, useState } from "react";

export default function TotalSpends(props) {
  const [total, setTotals] = useState(0);
  useEffect(() => {
    async function fetchTotal() {
      const res = await fetch(props.BASE_URL + "api/total", {
        method: "GET",
        cache: "no-store",
      });
      const result = await res.json();
      setTotals((prev) => result);
    }
    fetchTotal();
  }, [props.subs]);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Total Spends</h1>
        <p className="text-gray-500">Your total spends on all subscriptions</p>
      </div>
      <div
        className="flex  justify-center "
        style={{ alignItems: total > 0 ? "start" : "center" }}
      >
        {total > 0 ? (
          <p className="text-xl">
            <span>{total}</span> <strong>SAR</strong>
          </p>
        ) : (
          <p className="text-center text-gray-500">
            No subscriptions found
            <br /> Add your first subscription to see your total spend
          </p>
        )}
      </div>
    </>
  );
}
