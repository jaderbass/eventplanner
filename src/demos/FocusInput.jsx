import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <section>
      <h2>useRef Demo</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Name"
      />

      <button
        type="button"
        onClick={handleFocus}
      >
        Eingabefeld fokussieren
      </button>
    </section>
  );
}