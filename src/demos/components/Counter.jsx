import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <p>Zähler: {count}</p>

      <button onClick={handleDecrease}>
        -1
      </button>

      <button onClick={handleReset}>
        reset
      </button>

      <button onClick={handleIncrease}>
        +1
      </button>
    </>
  );
}

export default Counter;