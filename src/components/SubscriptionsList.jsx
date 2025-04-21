import { FaPlus } from "react-icons/fa6";

export default function SubscriptionsList(props) {
  return (
    <div className="col-span-4 border row-span-2 border-gray-300 rounded-lg insent-shadow-lg h-full p-6 flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Your Subscriptions</h1>
          <p className="text-gray-500">Manage all your subscription services</p>
        </div>
        <button
          type="button"
          className=" px-4 py-2 rounded-lg flex gap-2 text-sm cursor-pointer hover:bg-gray-100 items-center border border-gray-300 "
          onClick={props.togglePopup}
        >
          <FaPlus /> <span>Add new</span>
        </button>
      </div>
      <div className="filters">
        <input type="radio" id="all" name="filters" value="all" />
        <label for="all">All</label>
        <input type="radio" id="monthly" name="filters" value="monthly" />
        <label for="monthly">Monthly</label>
        <input type="radio" id="yearly" name="filters" value="yearly" />
        <label for="yearly">Yearly</label>
      </div>
      <div className="flex items-center justify-center flex-1">
        <p className="text-center text-gray-500">
          No subscriptions found
          <br /> Add your first subscription to get started
        </p>
      </div>
    </div>
  );
}
