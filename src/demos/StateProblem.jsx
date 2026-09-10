import { useState } from "react";

export default function StateProblem() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("count:", count);
  }

  return (
    <section>
      <h2>Problem</h2>

      <p>Zähler: {count}</p>

      <button onClick={handleClick}>
        Erhöhen
      </button>
    </section>
  );
}