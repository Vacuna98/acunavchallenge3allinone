"use client";

import NavBar from "@/app/components/NavBar";
import { fetchWakeUp } from "@/utils/service";
import { useState } from "react";

const WakeUp = () => {

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!name || !time) {
      setResult("Please enter a name and wake up time.");
      return;
    }

    const data = await fetchWakeUp(name, time);
    setResult(data);
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}
    >
      <main>
        <NavBar />

        <h1 className="text-5xl text-center font-bold mt-25">
          Wake Up Question
        </h1>

        <div className="flex flex-col items-center justify-center mt-10 gap-4">

          <input
            type="text"
            className="bg-white text-black border border-black p-2 rounded w-72"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            className="bg-white text-black border border-black p-2 rounded w-72"
            placeholder="What time did you wake up?"
            onChange={(e) => setTime(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-40"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <p className="text-2xl font-bold text-white">
            {result}
          </p>

        </div>

      </main>
    </div>
  );
};

export default WakeUp;