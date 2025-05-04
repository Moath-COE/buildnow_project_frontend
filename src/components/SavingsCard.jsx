import { FaRegTrashCan, FaRegCalendar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { FiTag } from "react-icons/fi";

export default function SavingsCard({ sub }) {
  return (
    <li className="flex flex-col items-start justify-between w-full border border-dark-gray rounded-lg gap-2 main-trans hover:shadow-md">
      <div className="flex items-center justify-between px-4 pt-4 w-full">
        <h3 className="text-xl font-bold">{sub.title}</h3>

        <div className="flex flex-col gap-2 items-end justify-start">
          <p className="text-accent flex items-center justify-between w-full gap-4">
            <span className="flex items-center gap-1 text-accent/60">
              Current Price:
            </span>
            <span className="font-bold">{sub.price} SAR/mn</span>
          </p>
          <p className="text-accent flex items-center justify-between w-full gap-4">
            <span className="flex items-center gap-1 text-accent/60">
              Annual Price:
            </span>
            <span className="font-bold">
              {(sub.price * 0.6 * 12).toFixed(2)} SAR/yr
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full border-t-[1px] border-dark-gray bg-border py-2 px-4 rounded-b-md">
        <p>You will save: </p>
        <p className="text-lg font-extrabold">
          {(sub.price * 12 - sub.price * 0.6 * 12).toFixed(2)} SAR/yr
        </p>
      </div>
    </li>
  );
}
