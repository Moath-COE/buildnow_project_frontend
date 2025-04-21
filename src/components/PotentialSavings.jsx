export default function PotentialSavings() {
  return (
    <div className="col-span-2 border border-gray-300 rounded-lg insent-shadow-lg h-full p-6 flex flex-col row-span-2">
      <div>
        <h1 className="text-2xl font-bold">Potential Savings</h1>
        <p className="text-gray-500">Monthly to Annual conversion</p>
      </div>
      <div className="flex items-center justify-center flex-1">
        <p className="text-center text-gray-500">
          No subscriptions found
          <br /> Add your first subscription to see potential savings
        </p>
      </div>
    </div>
  );
}
