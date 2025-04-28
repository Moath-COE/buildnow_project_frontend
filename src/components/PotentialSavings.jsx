import RenewalCard from "./RenewalCard";
import SavingsCard from "./SavingsCard";

export default function PotentialSavings(props) {
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Potential Savings</h1>
        <p className="text-gray-500">Monthly to Annual conversion</p>
      </div>
      <div
        className="flex items-center flex-1 flex-col gap-2"
        style={{ justifyContent: props.subs.length > 0 ? "start" : "center" }}
      >
        {props.subs.length > 0 ? (
          props.subs.map((sub) =>
            sub.cycle === "mn" ? <SavingsCard key={sub.id} sub={sub} /> : null
          )
        ) : (
          <p className="text-center text-gray-500">
            No subscriptions found
            <br /> Add your first subscription to see potential savings
          </p>
        )}
      </div>
    </>
  );
}
