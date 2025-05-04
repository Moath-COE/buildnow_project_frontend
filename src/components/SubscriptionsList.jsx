import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import SubsCard from "./SubsCard";

export default function SubscriptionsList(props) {
  const [filters, setFilters] = useState("all");
  async function deleteSub(id) {
    const res = await fetch(props.BASE_URL + "api/subscriptions/" + id, {
      method: "DELETE",
    });
    if (res.status === 204) {
      props.setSubs((prev) => prev.filter((sub) => sub.id !== id));
    } else {
      alert("Subscription was not found");
    }
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Your Subscriptions</h1>
          <p className="text-accent/40">
            Manage all your subscription services
          </p>
        </div>
        <button
          type="button"
          className=" px-4 py-2 rounded-lg flex gap-2 text-sm cursor-pointer hover:bg-accent/10 items-center border border-border main-trans"
          onClick={props.togglePopup}
        >
          <FaPlus /> <span>Add new</span>
        </button>
      </div>
      <div className="filters">
        <input
          type="radio"
          id="all"
          name="filters"
          value="all"
          checked={filters === "all"}
          onChange={(e) => setFilters((prev) => e.target.value)}
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          id="monthly"
          name="filters"
          value="monthly"
          checked={filters === "monthly"}
          onChange={(e) => setFilters((prev) => e.target.value)}
        />
        <label htmlFor="monthly">Monthly</label>
        <input
          type="radio"
          id="yearly"
          name="filters"
          value="yearly"
          checked={filters === "yearly"}
          onChange={(e) => setFilters((prev) => e.target.value)}
        />
        <label htmlFor="yearly">Yearly</label>
      </div>
      <div
        style={{ alignItems: props.subs.length > 0 ? "start" : "center" }}
        className="flex justify-center flex-1 mt-2"
      >
        {props.subs.length > 0 ? (
          <ul className="flex flex-col gap-2 w-full h-full">
            {filters === "all" && props.subs.length > 0
              ? props.subs.map((sub) => {
                  return (
                    <SubsCard key={sub.id} sub={sub} deleteSub={deleteSub} />
                  );
                })
              : null}
            {filters === "monthly" && props.subs.length > 0
              ? props.subs
                  .filter((sub) => sub.cycle === "mn")
                  .map((sub) => {
                    return (
                      <SubsCard key={sub.id} sub={sub} deleteSub={deleteSub} />
                    );
                  })
              : null}
            {filters === "yearly" && props.subs.length > 0
              ? props.subs
                  .filter((sub) => sub.cycle === "yr")
                  .map((sub) => {
                    return (
                      <SubsCard key={sub.id} sub={sub} deleteSub={deleteSub} />
                    );
                  })
              : null}
          </ul>
        ) : (
          <p className="text-center text-accent/40">
            No subscriptions found
            <br /> Add your first subscription to get started
          </p>
        )}
      </div>
    </>
  );
}
