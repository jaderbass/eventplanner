import { useState } from "react";

export default function EventCard({
  id,
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
  registrationOpen,
  registrations
}) {

  // State-Werte
  const [showDetails, setShowDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // abgeleitete Werte
  const eventRegistrations = registrations.filter(
    registration =>
      String(registration.eventId) === String(id)
  );
  const participantsCount = eventRegistrations.reduce(
    (sum, registration) => sum + registration.participants,
    0
  );

  const freeSeats = seats - participantsCount;

  return (
    <article
      className={`event-card
        ${online ? "online" : "onsite"}
        ${seats === 0 ? "sold-out" : ""}
        ${featured ? "featured" : ""}
        ${favorite ? "favorite" : ""}`}
    >
      <h2>{title}
        {eventRegistrations.length !== 0 && (
          <sup className="badge text-bg-danger">{eventRegistrations.length}</sup>
        )}
        {favorite && (<sup className="badge text-bg-success">Favorit</sup>)}
      </h2>
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
            verfügbare Plätze: {seats} {freeSeats === 0 && <i>(ausgebucht)</i>} <br />
            {freeSeats > 0 && freeSeats < 3 && (<small>Nur noch wenige Plätze</small>)}
          </p>
          <p> Angemeldete Personen: {participantsCount}</p>
          <p> freie Plätze: {freeSeats}</p>
          <p> {featured && <strong>Empfohlen</strong>} </p>
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