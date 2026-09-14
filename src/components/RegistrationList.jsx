import { useState } from "react";

export default function RegistrationList({
  events,
  registrations,
  title,
  onDelete
}) {
  const [selectedEventId, setSelectedEventId] = useState("all");

  const filteredRegistrations =
    selectedEventId === "all"
      ? registrations
      : registrations.filter(
        (registration) =>
          String(registration.eventId) ===
          selectedEventId
      );

  return (
    <section className="registrations">
      <header className="registrations-header">
        <h2>
          {title}
        </h2>
        <div className="info-wrapper">
          <p>
            <small>
              Registrierungen insgesamt: {registrations.length} <br />
              gefilterte Registrierungen: {filteredRegistrations.length}
            </small>
          </p>

          <form id="filter-form">
            <label htmlFor="eventFilter">Registrierungen filtern</label>
            <select
              id="eventFilter"
              value={selectedEventId}
              onChange={event => setSelectedEventId(event.target.value)}
            >
              <option value="all">Alle Veranstaltungen</option>
              {events.map(event => (
                <option
                  key={event.id}
                  value={event.id}
                >
                  {event.title}
                </option>
              ))}
            </select>
          </form>
        </div>
      </header>

      {registrations.length === 0 && (
        <p>
          Noch keine Anmeldungen vorhanden.
        </p>
      )}

      <div className="registration-list">
        {filteredRegistrations.map((registration) => (
          <article
            key={registration.id}
            className="registration-card"
          >
            <h3>{registration.name}</h3>
            <p>
              E-Mail: {registration.email} <br />
              Teilnehmer: {registration.participants} <br />
              Event-ID: {registration.eventId}
            </p>
            <button
              type="button"
              onClick={() => {
                onDelete(registration.id)
              }}
            >
              Löschen
            </button>
          </article>
        ))}
      </div>

    </section>
  );
}