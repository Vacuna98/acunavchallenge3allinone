"use client"
import NavBar from '@/app/components/NavBar'
import ResponseBox from '@/app/components/ResponseBox'
import { fetchMadLib } from '@/utils/service';
import { useState } from 'react'



const MadLib = () => {
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if(!noun.trim() || !verb.trim() || !place.trim()) {
      setResult("Please fill out all fields");
      return;
    }

    const data = await fetchMadLib(noun, verb, name, place);
    setResult(data);

  };


  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}
    >
      <main className="">
        <NavBar></NavBar>
        <div>
          <h1 className="text-5xl text-center font-bold mt-25">Mad Lib</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <input
            type="text"
            placeholder="Enter a noun"
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          />

          <input
            type="text"
            placeholder="Enter a verb"
            value={verb}
            onChange={(e) => setVerb(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          />

          <input
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          />

          <input
            type="text"
            placeholder="Enter a place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded w-40"
          >
            Submit
          </button>

          <p className="text-2xl font-bold text-white text-center max-w-xl px-4">
            Result: {result}
          </p>
        </div>
        
        
      </main>
    </div>
  );
};

export default MadLib