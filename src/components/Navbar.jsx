import { FaPlus } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-background">
      <nav className="container flex h-16 items-center justify-between py-4 mx-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Subscription Manager</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-black px-4 py-2 rounded-lg text-white flex gap-2 text-sm cursor-pointer hover:bg-gray-800 items-center"
          >
            <FaPlus /> <span>Add subscription</span>
          </button>
          <button
            type="button"
            className="border border-gray-200 p-2 rounded-lg text-lg cursor-pointer hover:bg-gray-100"
          >
            <FiSun />
          </button>
        </div>
      </nav>
    </header>
  );
}
