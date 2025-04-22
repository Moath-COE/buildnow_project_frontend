"use client";
import { useState } from "react";
import ChartSection from "./ChartSection";

export default function CostBreakdown(props) {
  const [chartFilters, setChartFilters] = useState("mn");

  return (
    <div className="col-span-3 row-span-3 border border-gray-300 rounded-lg insent-shadow-lg h-full p-6 flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cost Breakdown</h1>
          <p className="text-gray-500">Visualize your subscription costs</p>
        </div>
        <div>
          <div className="chartFilters">
            <input
              type="radio"
              id="chartMonthly"
              name="chartFilters"
              value="mn"
              checked={chartFilters === "mn"}
              onChange={(e) => setChartFilters((prev) => e.target.value)}
            />
            <label htmlFor="chartMonthly">Monthly</label>
            <input
              type="radio"
              id="chartYearly"
              name="chartFilters"
              value="yr"
              checked={chartFilters === "yr"}
              onChange={(e) => setChartFilters((prev) => e.target.value)}
            />
            <label htmlFor="chartYearly">Yearly</label>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-1"
        style={{ alignItems: props.subs.length > 0 ? "start" : "center" }}
      >
        {props.subs.length > 0 ? (
          <ChartSection
            titles={props.subs
              .filter((sub) => sub.cycle === chartFilters)
              .map((sub) => sub.title)}
            prices={props.subs
              .filter((sub) => sub.cycle === chartFilters)
              .map((sub) => sub.price)}
            cycle={chartFilters}
          />
        ) : (
          <p className="text-center text-gray-500">
            No subscriptions found
            <br /> Add your first subscription to see your cost breakdown
          </p>
        )}
      </div>
    </div>
  );
}
