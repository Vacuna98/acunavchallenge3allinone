"use client";

import NavBar from "@/app/components/NavBar";
import { fetchOddEven } from "@/utils/service";
import { useState } from "react";

const OddEven = () => {

  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {

    if (!number) {
      setResult("Please enter a number.");
      return;
    }

    const data = await fetchOddEven(number);
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
          Odd or Even
        </h1>

        <div className="flex flex-col items-center justify-center mt-10 gap-4">

          <input
            type="number"
            placeholder="Enter a number"
            className="bg-white text-black border border-black p-2 rounded w-72"
            onChange={(e) => setNumber(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-40"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <p className="text-2xl font-bold text-white">
            Result: {result}
          </p>

        </div>

      </main>
    </div>
  );
};

export default OddEven;