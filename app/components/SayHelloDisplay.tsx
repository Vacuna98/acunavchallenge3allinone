import { Label } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SayHelloDisplay = () => {
    const { push } = useRouter();

    const [username, setUsername] = useState(" ");




    const handleSubmit = () => {

      if( username === " " || username === null || username === undefined)


      console.log(username)
      push(`./dashboard/${username}`)
    }

  return (
    <div>
         <div className="w-[350px]">
          
        </div>
    </div>
   
  )
}

export default SayHelloDisplay