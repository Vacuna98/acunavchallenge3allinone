"use client"
import NavBar from "@/app/components/NavBar";
import { fetchData } from "@/utils/service";
import { useEffect, useState } from "react";


export default function SayHello() {
  

  const [name, setName] = useState("");
  const [result, setResult] = useState<string>("");

  const handleSubmit = async () => {
    setResult(await fetchData(name));
  };



  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}
    >
      <main>
        <NavBar />

        <h1 className="text-5xl text-center font-bold mt-25">Say Hello</h1>

        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <input
            type="text"
            className="bg-white text-black border border-black p-2 rounded w-72"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded w-32"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <p className="text-2xl font-bold text-white">Result: {result}</p>
        </div>
      </main>
    </div>
  );
}

// interface SayHelloProps{
//     name: string;
// }

// //https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/HelloWorld/hello/${name}

// const SayHello = ({ params } : {params : Promise<{username : string}> }) => {
//   const { username } = await params;

//     const response = await fetch ("https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/HelloWorld/hello/${name}")
//     const data : SayHelloProps = await response.json();
//   // const [name, setName] = useState("");
//   // const [result, setResult] = useState("");

//   // const handleSubmit = async () => {
//   //     const data = await fetchData(`/api/HelloWorld/hello/${name}`);
//   //     console.log(data);
//   //     setResult(data);
//   //   }
  

//   return (
//     <div
//       className="h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}
//     >
//       <main className="">
//         <NavBar></NavBar>
//         <div>
//           <h1 className="text-5xl text-center font-bold mt-25">Say Hello</h1>
//         </div>
//          <div>
//       <h3 className="text-3xl font-extrabold">This chosen name is: <span className="text-blue-600">{username}</span></h3>
//       <p>Display data here</p>
      
//       </div>

//         {/* <ResponseBox 
//         placeholder = {"Enter your name?"}
//         value = {name}
//         onChange = {setName}
//         onSubmit = {handleSubmit}
//         result = {result}>

//         </ResponseBox> */}
//       </main>
//     </div>
//   );
// };

// export default SayHello;
