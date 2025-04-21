export default function AddNew(props) {
  return (
    <div
      style={{ display: props.popup ? "block" : "none" }}
      className="absolute flex flex-col bg-white rounded-lg p-6 border border-gray-200 w-[40vw] left-1/2 top-1/2 ml-[-20vw] mt-[-25%]"
    >
      <h1 className="text-2xl font-bold">Add New Subscription</h1>
      <p className="text-gray-500 mb-2">
        Enter the details of your subscription
      </p>
      <form action="#" className="grid grid-cols-2 grid-rows-4 gap-4 add_new">
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label>Service Name</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label>Price (ريال)</label>
          <input type="text" name="price" id="price" />
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label>Billing Cycle</label>
          <select name="cycle" id="cycle">
            <option value="mn" selected>
              Monthly
            </option>
            <option value="yr">Yearly</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label htmlFor="">Start Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label>Category</label>
          <select name="Category" id="Category">
            <option value="ent" selected>
              Entertainment
            </option>
            <option value="work">Work</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-2 row-span-1">
          <label htmlFor="description">Description (Optional)</label>
          <textarea name="description" id="description"></textarea>
        </div>
      </form>
      <div className="flex w-full justify-end items-center gap-4 mt-4">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-gray-200 flex gap-2 text-sm cursor-pointer hover:bg-gray-100 items-center"
          onClick={props.togglePopup}
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-black px-4 py-2 rounded-lg text-white flex gap-2 text-sm cursor-pointer hover:bg-gray-800 items-center"
        >
          Add subscription
        </button>
      </div>
    </div>
  );
}
