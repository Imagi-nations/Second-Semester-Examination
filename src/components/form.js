import React from "react";
function FormHandler() {
  return (
    <form className="form-container">
      <h4> Welcome to My Front-end Second Semester Examination App</h4>
      <input type="text" placeholder="Enter Your Name"></input>
      <input type="email" placeholder="Enter Your Email"></input>
      <input type="password" placeholder="Enter Your Password"></input>
      <input type="int" placeholder="Enter User-ID "></input>
      <h4> You are Particpant number '[]'</h4>
      <button className="random-btn">
        {" "}
        Click to reveal User-ID implemented with custom hook
      </button>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}

export default FormHandler;
