import React, { useState } from "react"; 
import Card from "./Card";
import Submitted from "./Submitted"
import "./app.css";

export default function App(){
  const [selectedNum, setSelectedNum] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {/* <Card selectedNum={selectedNum}
      setSelectedNum={setSelectedNum}
      isSubmitted={isSubmitted}
      setIsSubmitted={setIsSubmitted}/>
      <Submitted selectedNum={selectedNum}/> */}
      {isSubmitted === true ? <Submitted selectedNum={selectedNum}/> : <Card selectedNum={selectedNum}
      setSelectedNum={setSelectedNum}
      isSubmitted={isSubmitted}
      setIsSubmitted={setIsSubmitted}/>}
    </>
  )
}