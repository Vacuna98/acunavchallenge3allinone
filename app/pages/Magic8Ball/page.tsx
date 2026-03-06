"use client"
import NavBar from '@/app/components/NavBar'
import { fetchMagic8Ball } from '@/utils/service'
import { useState } from 'react'


//https://allinoneva-aub7cfhac7efacdn.westus3-01.azurewebsites.net/api/Magic8Ball/${question}
const Magic8Ball = () => {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(""); 

  const handleSubmit = async () => {
    if(!question.trim()){
      setResult("Please enter a question");
      return;
    }

    const data = await fetchMagic8Ball(question);
    setResult(data);
  }
  
  
  return (
    <div  className= "h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/woodbackfround.jpg')" }}>
      <main className="">
        <NavBar></NavBar>
        <div>
            <h1 className="text-5xl text-center font-bold mt-25">Magic 8 Ball</h1>
        </div>
       
       <div className='flex flex-col items-center jusitfy-center mt-10 gap-4'>
        <input type="text" placeholder='Enter your question' className='bg-white text-black border border-black p-2 rounded w-72' onChange={(e) => setQuestion(e.target.value)} />
        <button className='bg-blue-600 text-white px-4 py-2 rounded w-40' onClick={handleSubmit}>Submit</button>
        <p className='text-2xl font-bold text-white text-center max-w-md'>Result: {result}</p>

       </div>
        
        
        
      </main>
    </div>
  );
};

export default Magic8Ball