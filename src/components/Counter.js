import { React, useState } from "react";

function Counter() {
  let [value, setValue] = useState(0);

  const handleDecrement = () => setValue(value - 1);

  const handleIncrement = () => setValue(value + 1);

  const handleReset = () => setValue(0);

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
        Decreament
      </button>
      </div>
    </>
  );
}
export default Counter;
