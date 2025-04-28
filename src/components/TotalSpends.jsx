import { useEffect, useState } from "react";

export default function TotalSpends(props) {
  const [totals, setTotals] = useState({ total: 0, yearly: 0, monthly: 0 });
  useEffect(() => {
    async function fetchTotal() {
      const res = await fetch(props.BASE_URL + "api/total", {
        method: "GET",
        cache: "no-store",
      });
      const result = await res.json();
      setTotals((prev) => {
        return {
          ...prev,
          total: result,
        };
      });
    }
    fetchTotal();
    // async function fetchMonthly() {
    //   const res = await fetch(props.BASE_URL + "api/total/monthly", {
    //     method: "GET",
    //     cache: "no-store",
    //   });
    //   const result = await res.json();
    //   setTotals((prev) => {
    //     return {
    //       ...prev,
    //       monthly: result.total_spent__sum,
    //     };
    //   });
    // }
    // fetchMonthly();
    // async function fetchYearly() {
    //   const res = await fetch(props.BASE_URL + "api/total/yearly", {
    //     method: "GET",
    //     cache: "no-store",
    //   });
    //   const result = await res.json();
    //   setTotals((prev) => {
    //     return {
    //       ...prev,
    //       yearly: result.total_spent__sum,
    //     };
    //   });
    // }
    // fetchYearly();
    // return;
  }, [props.subs]);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Total Spends</h1>
        <p className="text-gray-500">Your total spends on all subscriptions</p>
      </div>
      <div
        className="flex  justify-center "
        style={{ alignItems: totals.total > 0 ? "start" : "center" }}
      >
        {totals.total > 0 ? (
          <p className="text-xl">
            <span>{totals.total}</span> <strong>SAR</strong>
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

{
  /* <div className="flex items-center justify-between w-full h-full mt-4 shadow-sm gap-2">
            <div className="flex-1 text-center flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-lg h-full">
              <h3 className="text-xl font-bold">Total spent</h3>
              <p className="text-lg font-bold">{totals.total} SAR</p>
            </div>
            <div className="flex-1 text-center flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-lg h-full">
              <h3 className="text-xl font-bold">Monthly Subs spent</h3>
              <p className="text-lg font-bold">{totals.monthly} SAR</p>
            </div>
            <div className="flex-1 text-center flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-lg h-full">
              <h3 className="text-xl font-bold">Yearly Subs spent</h3>
              <p className="text-lg font-bold">{totals.yearly} SAR</p>
            </div>
          </div> */
}
