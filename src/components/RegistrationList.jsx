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
          {title} ({filteredRegistrations.length})
        </h2>

        <form id="filter-form">
          <div>
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
          </div>

          <button type="submit">Filtern</button>
        </form>
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