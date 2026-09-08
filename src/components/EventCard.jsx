export default function EventCard({
  title,
  date,
  level,
  time,
  duration,
  location,
  speaker,
  price,
  online,
  category,
  seats,
  featured,
  registrationOpen
}) {
  return (
    <article
      className={`event-card
        ${online ? "online" : "onsite"}
        ${seats === 0 ? "sold-out" : ""}
        ${featured ? "featured" : ""}`}
    >
      <h2> {title} </h2>
      <p> {date} </p>
      <p> Schwierigkeit: {level} </p>
      <p> Beginn: {time} Uhr </p>
      <p> Dauer: {duration} UE</p>
      <p> Trainer: {speaker} </p>
      <p> Preis: {price} € </p>
      <p> {online ? "Online" : location} </p>
      <p> Kategorie: {category} </p>
      <p>
        freie Plätze: {seats} {seats === 0 && <i>(ausgebucht)</i>} <br />
        {seats > 0 && seats < 3 && (<small>Nur noch wenige Plätze</small>)}
      </p>
      <p> {featured && <strong>Empfohen</strong>} </p>

      <button disabled={seats === 0} >Details</button>
      <button type="button" disabled={!registrationOpen}>Registrieren</button>
    </article>
  );
}