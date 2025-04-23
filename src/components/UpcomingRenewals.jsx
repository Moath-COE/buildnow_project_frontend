import RenewalCard from "./RenewalCard";

export default function UpcomingRenewals(props) {
  // console.log(props.subs);

  function getRenewals() {
    return props.subs.filter((sub) => {
      const nextPayment = new Date(sub.next_payment);
      const today = Date.now();
      const timeDifferenceDays = Math.floor(
        (nextPayment - today) / (1000 * 60 * 60 * 24)
      );
      if (sub.cycle === "mn") {
        return timeDifferenceDays <= 6;
      } else if (sub.cycle === "yr") {
        return timeDifferenceDays <= 6;
      }
    });
  }
  return (
    <div className="col-span-3 row-span-2 border border-gray-300 rounded-lg insent-shadow-lg h-full p-6 flex flex-col ">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Upcoming Renewals</h1>
        <p className="text-gray-500">Subscriptions renewing soon</p>
      </div>
      <div
        className="flex  justify-center flex-1"
        style={{ alignItems: props.subs.length > 0 ? "start" : "center" }}
      >
        {props.subs.length > 0 ? (
          <ul className="flex flex-col gap-2 w-full h-full">
            {getRenewals().map((sub) => (
              <RenewalCard
                key={sub.id}
                sub={sub}
                days={
                  sub.cycle === "mn"
                    ? (new Date(sub.next_payment) - Date.now()) /
                      (1000 * 60 * 60 * 24)
                    : (new Date(sub.next_payment) - Date.now()) /
                      (1000 * 60 * 60 * 24)
                }
              />
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            No subscriptions found
            <br /> Add your first subscription to see upcoming renewals
          </p>
        )}
      </div>
    </div>
  );
}
