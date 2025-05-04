"use client";
import { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Canvas from "@/components/Canvas";
import LoadingUi from "@/components/LoadingUi";

export default function Home() {
  const [popup, setPopup] = useState(false);

  function togglePopup() {
    setPopup((prev) => !prev);
  }

  return (
    <>
      <Navbar setPopup={setPopup} />
      <main className="lg:grid grid-cols-6 h-full grid-rows-7 lg:gap-6 sm:gap-4 gap-2 container py-6 px-2 lg:px-0 flex-1 mx-auto relative flex flex-col">
        <Suspense fallback={LoadingUi}>
          <Canvas togglePopup={togglePopup} popup={popup} />
        </Suspense>
      </main>
    </>
  );
}
