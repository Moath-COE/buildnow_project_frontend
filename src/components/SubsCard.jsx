import { FaRegTrashCan, FaRegCalendar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { FiTag } from "react-icons/fi";

export default function SubsCard({ sub, deleteSub }) {
  return (
    <li className="flex flex-col items-start justify-between w-full border border-dark-gray rounded-lg gap-2 main-trans hover:shadow-md">
      <div className="flex flex-col items-start justify-between px-6 pt-6 w-full gap-2">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl font-bold">{sub.title}</h3>
          <button
            type="button"
            className=" text-red-500 rounded-lg text-sm cursor-pointer hover:bg-red-50 hover:text-red-600 h-8 w-8 text-center main-trans"
            onClick={() => deleteSub(sub.id)}
          >
            <FaRegTrashCan className="mx-auto" />
          </button>
        </div>
        <p className="text-accent/70">{sub.description}</p>
        <div className="flex justify-center gap-2">
          <p
            className="text-sm px-2 py-0.5 rounded-full text-main flex items-center gap-0.5 border-border border"
            style={{
              backgroundColor:
                sub.cycle === "mn"
                  ? "rgba(30, 64, 175, 0.1)"
                  : "rgba(22, 101, 52, 0.1)",
              color:
                sub.cycle === "mn" ? "rgb(30, 64, 175)" : "rgb(22, 101, 52)",
            }}
          >
            <LuCreditCard />
            {sub.cycle === "mn" ? "Monthly" : "Yearly"}
          </p>

          <p className="text-sm px-2 py-0.5 rounded-full text-accent bg-border flex items-center gap-0.5 border-border border">
            <FiTag /> {sub.category}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-end justify-start w-full">
          <p className="text-accent flex items-center justify-between w-full">
            <span className="flex items-center gap-1 text-accent/60">
              <FaRegClock /> <span> Next payment: </span>
            </span>
            <span className="font-bold">{sub.next_payment}</span>
          </p>
          <p className="text-accent flex items-center justify-between w-full">
            <span className="flex items-center gap-1 text-accent/60">
              <FaRegCalendar /> <span> Started on: </span>
            </span>
            <span className="font-bold">{sub.start_date}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full border-t-[1px] border-dark-gray bg-border py-4 px-6 rounded-b-md">
        <p>Price</p>
        <p className="text-lg font-extrabold">{sub.price} SAR</p>
      </div>
    </li>
  );
}
