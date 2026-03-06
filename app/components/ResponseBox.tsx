"use client"
import { FloatingLabel } from "flowbite-react";
import { useState } from "react";
import { Button } from "flowbite-react";




interface ResponseBoxProps{
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onSubmit : () => void;
    result: string;
}
const ResponseBox = ({placeholder, value, onChange, onSubmit, result} : ResponseBoxProps) => {
   
    

  return (
    <div className="flex items-center justify-center mt-25">
  <div className="w-72 mx-1">
    <FloatingLabel
                  variant="outlined"
                  label={placeholder} 
                  value={value}
                  onChange={(e) => onChange(e.target.value)}  />
  </div>
    <div className="flex flex-wrap">
      <Button color="blue" className="h-13" onClick={onSubmit}>Submit</Button>
    </div>
    
</div>

  )
}

export default ResponseBox;