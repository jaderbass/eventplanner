function EventCard({
  title,
  date,
  location,
  eventType,
  seats,
  online,
  featured,
  registrationOpen
}) {
  return (
    <article className="event-card">
      <h3>{title}</h3>
      <p>Datum: {date}</p>
      <p>Ort: {online ? "Online" : location}</p>
      <p>Typ: {eventType}</p>
      <p>
        {seats > 0
          ? `Noch ${seats} Plätze verfügbar`
          : "Ausgebucht"}
      </p>
      {!registrationOpen && (
        <p>Anmeldung geschlossen</p>
      )}
      {featured && (
        <p className="event-card-featured">
          Empfehlung
        </p>
      )}
      <button disabled={seats === 0 || !registrationOpen}>
        Anmelden
      </button>
    </article>
  );
}

export default EventCard;