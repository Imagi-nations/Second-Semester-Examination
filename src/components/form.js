import React from "react";
function FormHandler(){
  const participantNumber =() => Math.random(100);
  const participantId =()=> { return (<h1>{participantNumber}</h1>)};
return (
    <form className="form-container">

    <h4> Welcome to My Front-end Second Semester Examination App</h4>
    <input type="text" placeholder="Enter Your Name">
  
    </input>
    <input type="email" placeholder="Enter Your Email">
  
    </input>
    <input type="password" placeholder="Enter Your Password">
    
    </input>
    <button className="random-btn" onClick={{participantId}}> Click to reveal User-ID implemented with custom hook</button>

    <button type="submit" onClick={(e)=>{e.preventDefault()}}> Submit </button>
  </form> 
);
}

export default FormHandler;