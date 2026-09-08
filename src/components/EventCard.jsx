export default function EventCard(props) {
  return (
    <article
      className={`event-card
        ${props.online ? "online" : "onsite"}
        ${props.seats === 0 ? "sold-out" : ""}
        ${props.featured ? "featured" : ""}`}
    >
      <h2> {props.title} </h2>
      <p> {props.date} </p>
      <p> Schwierigkeit: {props.level} </p>
      <p> Beginn: {props.time} Uhr </p>
      <p> Dauer: {props.duration} UE</p>
      <p> Trainer: {props.speaker} </p>
      <p> Preis: {props.price} € </p>
      <p> {props.online ? "Online" : props.location} </p>
      <p> Kategorie: {props.category} </p>
      <p>
        freie Plätze: {props.seats} {props.seats === 0 && <i>(ausgebucht)</i>} <br />
        {props.seats > 0 && props.seats < 3 && (<small>Nur noch wenige Plätze</small>)}
      </p>
      <p> {props.featured && <strong>Empfohen</strong>} </p>

      <button disabled={props.seats === 0} >Details</button>
      <button type="button" disabled={!props.registrationOpen}>Registrieren</button>
    </article>
  );
}