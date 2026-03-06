"use client" 
import NavBar from '@/app/components/NavBar';
import { fetchAdd } from '@/utils/service';
import { useState } from 'react'

export default function AddingTwoNumbers() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (!num1 || !num2) {
      setResult("Please enter two numbers.");
      return;
    }

    const data = await fetchAdd(num1, num2);
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
          Add Two Numbers
        </h1>

        <div className="flex flex-col items-center justify-center mt-10 gap-4">

          <input
            type="number"
            className="bg-white text-black border border-black p-2 rounded w-72"
            placeholder="Enter first number"
            onChange={(e) => setNum1(e.target.value)}
          />

          <input
            type="number"
            className="bg-white text-black border border-black p-2 rounded w-72"
            placeholder="Enter second number"
            onChange={(e) => setNum2(e.target.value)}
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
}














//https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/AddingTwoNumbers/${num1}/${num2}
// const Adding = () => {
//   return (
//        <div
//       className="h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}
//     >
//       <main className="">
//         <NavBar></NavBar>
//         <div>
//           <h1 className="text-5xl text-center font-bold mt-25">Adding Two Numbers</h1>
//         </div>

//         <ResponseBox placeholder={"Enter your number"} value={''} onChange={function (value: string): void {
//           throw new Error('Function not implemented.');
//         } } onSubmit={function (): void {
//           throw new Error('Function not implemented.');
//         } } result={''}></ResponseBox>
//         <ResponseBox placeholder={"Enter your number"} value={''} onChange={function (value: string): void {
//           throw new Error('Function not implemented.');
//         } } onSubmit={function (): void {
//           throw new Error('Function not implemented.');
//         } } result={''}></ResponseBox>

//       </main>
//     </div>
//   );
// }

// export default Adding