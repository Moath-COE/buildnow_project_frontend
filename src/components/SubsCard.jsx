import { FaPlus, FaTrash } from "react-icons/fa6";

export default function SubsCard({ sub, deleteSub }) {
  return (
    <li className="flex items-center justify-between px-2 py-1 w-full border border-gray-200 rounded-lg">
      <div className="flex flex-col justify-center  gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">{sub.title}</h3>
          <p
            className="text-sm px-2 py-0.5 rounded-md text-white"
            style={{
              backgroundColor: sub.cycle === "mn" ? "#FF474C" : "#008000",
            }}
          >
            {sub.cycle === "mn" ? "Monthly" : "Yearly"}
          </p>

          <span className="text-sm px-2 py-0.5 rounded-md text-white bg-gray-200">
            {sub.category}
          </span>
        </div>
        <p className="text-gray-500">
          Description: <br />
          {sub.description}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-end">
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
        <p className="text-gray-500">next payment: {sub.next_payment}</p>
      </div>
    </li>
  );
}
