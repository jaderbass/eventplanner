import { useState, useEffect } from "react";

export default function NameEffect() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  useEffect(() => {
    document.title =
      name === ""
        ? "EventPlanner"
        : `Hallo ${name} (${name.length})`;
  }, [name]);

  return (
    <>
      <p>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} name="name" id="name" onChange={event => setName(event.target.value)} />
      </p>
      <p>
        <label htmlFor="lastname">Name:</label>
        <input type="text" value={lastname} name="lastname" id="lastname" onChange={event => setLastName(event.target.value)} />
      </p>
    </>
  );
}