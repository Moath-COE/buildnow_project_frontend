import { LuCreditCard } from "react-icons/lu";

export default function RenewalCard({ sub, days }) {
  return (
    <li className="flex flex-col items-center justify-between w-full border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between w-full px-4 pt-4">
        <h3 className="text-lg font-bold">{sub.title}</h3>
        <p>
          {sub.price} <strong>SAR</strong>
        </p>
      </div>
      <p className="flex items-center justify-between gap-2 w-full border-t-[1px] border-dark-gray bg-border py-2 px-4 rounded-b-md">
        <span>Coming in:</span>{" "}
        <span className="font-bold">{Math.round(days)} days</span>
      </p>
    </li>
  );
}
