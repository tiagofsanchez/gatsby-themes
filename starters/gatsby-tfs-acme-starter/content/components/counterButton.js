import React, { useState } from "react";

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Counter is: {counter}
    </button>
  );
};

export default CounterButton;