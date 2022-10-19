import React from "react";
import { ReactDOM } from "react";

import css from ".//App.css";

function App() {
  const handleClick = (event) => {
    alert("Hello you clicked me");
  };
  return (
  <>
      <section className="counter-container">
        <div className="counter-label">0</div>
        <button className="action-btn">Increament</button>
        <button className="action-btn"> Decreament </button>
      </section>

      < div>
      <form className="form-container">
        <input type="text" placeholder="Enter Your Name">
      
        </input>
        <input type="email" placeholder="Enter Your Email">
      
        </input>
        <input type="password" placeholder="Enter Your Password">
        
        </input>

        <button type="submit"> Submit </button>
      </form>
      </div>
      </>
  );
}

export default App;
