import { FaPlus, FaTrash } from "react-icons/fa6";

export default function SubsCard({ sub, deleteSub }) {
  return (
    <li className="flex items-start justify-between px-4 py-2 w-full border border-border rounded-lg">
      <div className="flex flex-col justify-center  gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">{sub.title}</h3>
          <p
            className="text-sm px-2 py-0.5 rounded-md text-main"
            style={{
              backgroundColor:
                sub.cycle === "mn" ? "rgb(255, 86, 48)" : "rgb(54, 179, 126)",
            }}
          >
            {sub.cycle === "mn" ? "Monthly" : "Yearly"}
          </p>

          <span className="text-sm px-2 py-0.5 rounded-md text-main bg-border">
            {sub.category}
          </span>
        </div>
        <p className="text-accent/40">
          Description: <br />
          <span className="text-accent/70">{sub.description}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 items-end justify-start">
        <div className="flex items-center gap-2">
          <p>
            {sub.price} <strong>SAR </strong> /
          </p>
          <button
            type="button"
            className=" text-red-700 rounded-lg text-sm cursor-pointer"
            onClick={() => deleteSub(sub.id)}
          >
            <FaTrash />
          </button>
        </div>
        <p className="text-accent/60">next payment: {sub.next_payment}</p>
      </div>
    </li>
  );
}
