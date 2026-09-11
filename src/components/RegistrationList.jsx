export default function RegistrationList({
  registrations
}) {
  return (
    <section className="registrations">
      <h2>
        Anmeldungen ({registrations.length})
      </h2>

      {registrations.length === 0 && (
        <p>
          Noch keine Anmeldungen vorhanden.
        </p>
      )}

      {registrations.map((registration) => (
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
        </article>
      ))}
    </section>
  );
}