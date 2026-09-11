/* eslint-disable */
// @ts-nocheck




import { useState } from "react";

const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  console.log(count);
}

// Was erscheint beim ersten Klick in der Konsole und warum?
























<input
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
/>

// Warum braucht dieses Eingabefeld onChange?














{
  events.map((event) => (
    <EventCard
      key={event.id}
      title={event.title}
    />
  ))
}

// Wozu benötigt React hier key?





















<EventCard
  title="React Workshop"
  online={true}
/>

function EventCard({ title, online }) {
  return (
    <article>
      <h2>{title}</h2>
    </article>
  );
}

// Warum funktioniert title hier nicht?












{ online ? "Online" : { location } }

// Was ist hier falsch?






















<>
















  <button onClick={handleClick}>
    Variante 1
  </button>

  <button onClick={handleClick()}>
    Variante 2
  </button>

  {/* Was ist der Unterschied? */}





















  const [registration, setRegistration] = useState([]);


  registrations.push(registration);
  setRegistrations(registrations);

  // Was ist hier problematisch?





















  {
    events.map((event) => (
      <EventCard
        title={event.title}
      />
    ))
  }

// Was fehlt hier?



































  <input
    type="checkbox"
    onChange={(event) =>
      setNewsletter(event.target.value)
    }
  />



  {/* Was ist bei diesem Checkbox-Handler falsch? */}






















  <input
    type="number"
    value={participants}
    onChange={(event) =>
      setParticipants(event.target.value)
    }
  />

  {/* Was ist hier wichtig? */}











</>