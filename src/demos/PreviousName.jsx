import { useState, useEffect, useRef } from "react";

export default function PreviousName() {
  const [name, setName] = useState("");

  const previousNameRef = useRef("");

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  return (
    <section>
      <p>
        Aktueller Name: {name} <br />
        Vorheriger Name: {previousNameRef.current}
      </p>
      <input
        type="text"
        name="name"
        value={name}
        ref={previousNameRef}
        onChange={event => setName(event.target.value)}
      />
    </section>
  );
}