import React from "react";
function FormHandler(){
  const participantNumber =() => Math.random;
  const ParticipantId =()=> participantNumber();
return (
    <form className="form-container">

    <h4> Welcome to My Front-end Second Semester Examination App</h4>
    <input type="text" placeholder="Enter Your Name">
  
    </input>
    <input type="email" placeholder="Enter Your Email">
  
    </input>
    <input type="password" placeholder="Enter Your Password">
    
    </input>

    <button type="submit" onClick={(e)=>{e.preventDefault()}}> Submit </button>
  </form> 
);
}

export default FormHandler;