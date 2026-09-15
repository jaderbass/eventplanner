import { useState, useEffect, useRef } from "react";

export default function PreviousName() {
  const [name, setName] = useState("");
  const [currentName, setCurrentName] = useState("");

  const previousNameRef = useRef("");

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  function handleClick() {
    previousNameRef.current = currentName;
    setCurrentName(name);
    setName("");
  }

  return (
    <section>
      <p>
        Aktueller Name: {currentName} <br />
        Vorheriger Name: {previousNameRef.current}
      </p>
      <input
        type="text"
        name="name"
        value={name}
        ref={previousNameRef}
        onChange={event => setName(event.target.value)}
      /> <br />
      <button
        type="button"
        onClick={handleClick}
      >
        sende mal...
      </button>
    </section>
  );
}