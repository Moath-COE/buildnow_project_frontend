"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddNew(props) {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    cycle: "mn",
    start_date: new Date(),
    category: "ent",
    description: "",
  });

  async function submitForm() {
    const newSub = {
      ...form,
      start_date:
        `${form.start_date.getFullYear()}` +
        "-" +
        `${form.start_date.getMonth() + 1}` +
        "-" +
        `${form.start_date.getDate()}`,
    };
    const res = await fetch(props.BASE_URL + "api/subscriptions", {
      method: "POST",
      body: JSON.stringify(newSub),
    });
    if (res.status === 200) {
      const data = await res.json();
      props.setSubs((prev) => {
        return [...prev, data];
      });

      setForm((prev) => {
        return {
          title: "",
          price: 0,
          cycle: "mn",
          start_date: new Date(),
          category: "ent",
          description: "",
        };
      });
      props.setPopup((prev) => !prev);
    } else {
      alert("Subscription couldn't be added, " + res.statusText);
    }
  }

  return (
    <div
      style={{ display: props.popup ? "block" : "none" }}
      className="absolute flex flex-col bg-white rounded-lg p-6 border border-gray-200 w-[40vw] left-1/2 top-1/2 ml-[-20vw] mt-[-25%] shadow-lg"
    >
      <h1 className="text-2xl font-bold">Add New Subscription</h1>
      <p className="text-gray-500 mb-2">
        Enter the details of your subscription
      </p>
      <form
        action="#"
        className="grid grid-cols-2 grid-rows-4 gap-4 add_new"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label htmlFor="title">Service Name</label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={(e) => {
              setForm((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label htmlFor="price">Price (ريال)</label>
          <input
            type="number"
            step="0.01"
            name="price"
            pattern="^\d*(\.\d{0,2})?$"
            id="price"
            value={form.price}
            onChange={(e) => {
              setForm((prev) => {
                return {
                  ...prev,
                  price: parseFloat(e.target.value),
                };
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label htmlFor="cycle">Billing Cycle</label>
          <select
            name="cycle"
            id="cycle"
            value={form.cycle}
            onChange={(e) => {
              setForm((prev) => {
                return {
                  ...prev,
                  cycle: e.target.value,
                };
              });
            }}
          >
            <option value="mn">Monthly</option>
            <option value="yr">Yearly</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label htmlFor="date">Start Date</label>
          <DatePicker
            selected={form.start_date}
            onChange={(date) =>
              setForm((prev) => {
                return { ...prev, start_date: date };
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 row-span-1">
          <label htmlFor="category">Category</label>
          <select
            name="Category"
            id="Category"
            value={form.category}
            onChange={(e) => {
              setForm((prev) => {
                return {
                  ...prev,
                  category: e.target.value,
                };
              });
            }}
          >
            <option value="ent">Entertainment</option>
            <option value="wrk">Work</option>
            <option value="grc">Groceries</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 col-span-2 row-span-1">
          <label htmlFor="description">Description (Optional)</label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={(e) => {
              setForm((prev) => {
                return {
                  ...prev,
                  description: e.target.value,
                };
              });
            }}
          ></textarea>
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
          onClick={submitForm}
        >
          Add subscription
        </button>
      </div>
    </div>
  );
}
