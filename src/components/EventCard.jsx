function EventCard({
  title,
  date,
  location,
  eventType,
  seats,
  online
}) {
  return (
    <article className="event-card">
      <h3>{title}</h3>
      <p>Datum: {date}</p>
      <p>Ort: {location}</p>
      <p>Typ: {eventType}</p>
      <p>Freie Plätze: {seats}</p>
      <p>{online ? "Online" : "Vor Ort"}</p>
    </article>
  );
}

export default EventCard;