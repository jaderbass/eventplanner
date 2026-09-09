import { useState } from "react";

export default function Toggle() {
  const [visible, setVisible] = useState(false);

  return (
    <section>
      <h2>Boolean State</h2>

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ausblenden" : "Einblenden"}
      </button>

      {visible && (
        <p>Dieser Text ist sichtbar.</p>
      )}
    </section>
  );
}