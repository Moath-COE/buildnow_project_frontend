import { FaPlus, FaTrash } from "react-icons/fa6";

export default function SubsCard({ sub, deleteSub }) {
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
    </li>
  );
}
