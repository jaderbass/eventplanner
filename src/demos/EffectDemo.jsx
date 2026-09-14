import { useState, useEffect } from "react";

export default function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(
    () => { document.title = `Zähler: ${count}`; },
    [count] // abhängiges Array (Dependency Array)
  );

  return (
    <section>
      <h2>useEffect() Demo</h2>

      <p>Zähler: {count}</p>

      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
    </section>
  );
}