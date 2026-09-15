export default function RegistrationForm({
  formData,
  events,
  onChange,
  onSubmit,
  inputRefs
}) {
  return (
    <form className="row section-content" onSubmit={onSubmit}>
      <div className="col">
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input
            ref={inputRefs.name}
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
            ref={inputRefs.email}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="col">
        <div>
          <label htmlFor="participants">
            Teilnehmer
          </label>
          <input
            ref={inputRefs.participants}
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
            ref={inputRefs.eventId}
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
      </div>
    </form>
  );
}