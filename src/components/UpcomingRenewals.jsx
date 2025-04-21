export default function UpcomingRenewals() {
  return (
    <div className="col-span-3 border border-gray-300 rounded-lg insent-shadow-lg h-full p-6 flex flex-col row-span-2">
      <div>
        <h1 className="text-2xl font-bold">Upcoming Renewals</h1>
        <p className="text-gray-500">Subscriptions renewing soon</p>
      </div>
      <div className="flex items-center justify-center flex-1">
        <p className="text-center text-gray-500">
          No subscriptions found
          <br /> Add your first subscription to see upcoming renewals
        </p>
      </div>
    </div>
  );
}
