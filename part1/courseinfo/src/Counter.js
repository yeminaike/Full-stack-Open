import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState("0");

  const increasedByOne = () => setCounter(counter + 1);
  const decreasedByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <display counter={counter} />
      <button handleClick={decreasedByOne}>minus</button>
      <button handleClick={setToZero} text="zero" />
      <button handleClick={increasedByOne}>Test</button>
    </div>
  );
};

export default Counter;
