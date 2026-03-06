"use client"
import NavBar from '@/app/components/NavBar'
import { fetchRestaurant } from '@/utils/service';
import { useState } from 'react'

//https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/ResurantPicker/${category}

const RestaurantPicker = () => {
  const[ category, setCategory] = useState("Mexican");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const data = await fetchRestaurant(category);
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
          <h1 className="text-5xl text-center font-bold mt-25">RestaurantPicker</h1>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white text-black border border-black p-2 rounded w-72"
          >
            <option value="Mexican">Mexican</option>
            <option value="Italian">Italian</option>
            <option value="Asian">Asian</option>
          </select>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded w-40"
          >
            Pick Restaurant
          </button>

          <p className="text-2xl font-bold text-white text-center max-w-md">
            Result: {result}
          </p>
        </div>

      </main>
    </div>
  )
}

export default RestaurantPicker