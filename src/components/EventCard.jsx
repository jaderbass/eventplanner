import { useState } from "react";

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
  const [showDetails, setShowDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <article
      className={`event-card
        ${online ? "online" : "onsite"}
        ${seats === 0 ? "sold-out" : ""}
        ${featured ? "featured" : ""}
        ${favorite ? "favorite" : ""}`}
    >
      <h2> {title} {favorite && (<sup className="badge text-bg-success">Favorit</sup>)} </h2>
      {showDetails && (
        <div className="event-details">
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
        </div>
      )}

      <button
        type="button"
        disabled={seats === 0}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Weniger anzeigen" : "Details anzeigen"}
      </button>

      <button
        type="button"
        disabled={!registrationOpen}
      >
        Registrieren
      </button>

      <button
        type="button"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite
          ? "Aus Favoriten entfernen"
          : "Als Favorit speichern"}
      </button>

    </article>
  );
}