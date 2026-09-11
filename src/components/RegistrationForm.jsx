export default function RegistrationForm({
  formData,
  events,
  onChange,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="email">
          E-Mail
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="participants">
          Teilnehmer
        </label>

        <input
          type="number"
          id="participants"
          name="participants"
          min="1"
          value={formData.participants}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="eventId">
          Veranstaltung
        </label>

        <select
          id="eventId"
          name="eventId"
          value={formData.eventId}
          onChange={onChange}
        >
          <option value="" disabled>
            Bitte wählen
          </option>

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

      <button type="submit">
        Anmeldung senden
      </button>
    </form>
  );
}