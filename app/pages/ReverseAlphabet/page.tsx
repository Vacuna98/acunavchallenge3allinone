"use client"
import NavBar from '@/app/components/NavBar'
import { fetchReverseAlphabet } from '@/utils/service'
import { useState } from 'react'

//https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/ReverseItAlpha/${word}

const ReverseAlphabet = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!word.trim()) {
      setResult("Please enter letters only");
      return;
    }

    const data = await fetchReverseAlphabet(word);
    setResult(data);
  };



  return (
    <div  className= "h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}>
      <main className="">
        <NavBar></NavBar>
        <div className="text-5xl text-center font-bold mt-25">Reverse Alphabet</div>
         <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <input
            type="text"
            placeholder="Enter letters"
            className="bg-white text-black border border-black p-2 rounded w-72"
            onChange={(e) => setWord(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-40"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <p className="text-2xl font-bold text-white text-center max-w-md">
            Result: {result}
          </p>
        </div>
        
        
        
      </main>
    </div>
  )
}

export default ReverseAlphabet