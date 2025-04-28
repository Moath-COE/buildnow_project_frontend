import { FaPlus } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";

export default function Navbar(props) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background bg-main">
      <nav className="container flex h-16 items-center justify-between py-4 mx-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Subscriptions Manager</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-accent px-4 py-2 rounded-lg text-main flex gap-2 text-sm cursor-pointer hover:bg-accent/80 items-center transition-all duration-200"
            onClick={props.setPopup}
          >
            <FaPlus /> <span>Add subscription</span>
          </button>
          <button
            type="button"
            className="border border-border p-2 rounded-lg text-lg cursor-pointer hover:bg-border transition-all duration-200"
          >
            <FiSun />
          </button>
        </div>
      </nav>
    </header>
  );
}
