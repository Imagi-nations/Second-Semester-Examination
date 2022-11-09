import { React, useState } from "react";
import useCustomHook from "../Hooks/useCustomHook";
function Counter() {
 const userCustomHookResult = useCustomHook(0);
 const [value, setValue, handleDecrement, handleIncrement,handleReset] = userCustomHookResult;
 
  return (
    <>
      <h1 className="counter-container">{value}</h1>
      <div className="counter-label">
      <button className="increment-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
      <button className="decrement-btn" onClick={handleDecrement}>
        Decrement
      </button>
  
      </div>
      
    </>
  );
}
export default Counter;
