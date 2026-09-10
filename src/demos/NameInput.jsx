import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <section>
      <h2>String State</h2>

      <label htmlFor="name">Name:</label>

      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <p>Hallo {name}</p>

    </section>
  );
}