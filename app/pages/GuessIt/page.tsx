"use client" 
import NavBar from '@/app/components/NavBar'
import { fetchGuessIt } from '@/utils/service'
import { useState } from 'react'


// https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/GuessIt/easy/${guess}
// https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/GuessIt/easy/${guess}

// https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/GuessIt/easy/${guess}


const GuessIt = () => {
  const[difficulty, setDifficulty] = useState("easy");
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!guess.trim()) {
      setResult("Please enter a guess");
      return;
    }

    const data = await fetchGuessIt(difficulty, guess);
    setResult(data);
  }
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}
    >
      <main className="">
        <NavBar></NavBar>
        <div>
          <h1 className="text-5xl text-center font-bold mt-25">Guess It</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <input
            type="number"
            placeholder="Enter your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded w-40"
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

export default GuessIt