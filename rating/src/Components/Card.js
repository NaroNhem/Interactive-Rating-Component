import React from "react";
import "./card.css";

export default function Card(props) {
    const {selectedNum, setSelectedNum, setIsSubmitted} = props;    
return (
<div className="card-component">
      <div className="rating-number">
        <img src="images/icon-star.svg" alt="icon-star"></img>
      </div>
      <h3>How did we do?</h3>
      <p>Please let us know how we did with your support request. All feedback is appreciate to help us improve our offering!</p>
      <div className="rating-number-container">
        {[1,2,3,4,5].map((number) => (<div className={
            number === selectedNum ? "rating-number-active" : "rating-number"
        } 
        onClick={() => setSelectedNum(number)}>{number}</div>))}
      </div>
        <button className="btn-primary" onClick={() => setIsSubmitted(true) }>Submit</button>
    </div>
    )
}