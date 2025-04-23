export default function SavingsCard({ sub }) {
  return (
    <li className="flex items-center justify-between px-2 py-1 w-full border border-gray-200 rounded-lg">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold">{sub.title}</h3>
        <p
          className="text-sm px-2 py-0.5 rounded-md text-white"
          style={{
            backgroundColor: sub.cycle === "mn" ? "#FF474C" : "#008000",
          }}
        >
          {sub.cycle === "mn" ? "Monthly" : "Yearly"}
        </p>
      </div>
      <p>
        You will save: {(sub.price * 12 - 0.6 * sub.price * 12).toFixed(2)}{" "}
        SAR/yr
      </p>
    </li>
  );
}
