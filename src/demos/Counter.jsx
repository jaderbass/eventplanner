import { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <section>
      <h2>Counter</h2>

      <p>Aktueller Wert: {count}</p>

      <button onClick={handleIncrease}>
        Erhöhen
      </button>

      <button onClick={handleDecrease}>
        Verringern
      </button>

      <button onClick={handleReset}>
        Zurücksetzen
      </button>

    </section>
  );
}