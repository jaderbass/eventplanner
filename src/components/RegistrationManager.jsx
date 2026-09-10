import { useState } from "react";

export default function RegistrationManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    eventId: ""
  });

  const [registrations, setRegistrations] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const {
      name,
      value,
      type
    } = event.target;

    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("");

    const registration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants,
      eventId: formData.eventId
    };

    setRegistrations([
      ...registrations,
      registration
    ]);

    setSuccessMessage(`Die Registrierung für ${formData.name} (${formData.email}) erfolgreich abgeschlossen.`);

    setFormData({
      name: "",
      email: "",
      participants: 1,
      eventId: ""
    });
  }

  return (
    <section>
      <h2>Anmeldung</h2>

      {successMessage && (
        <p className="alert success-message">
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="email">E-Mail-Adresse:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="participants">Teilnehmer:</label>
          <input type="number" name="participants" id="participants" value={formData.participants} onChange={handleChange} />
        </div>

        <div>
          <button type="submit">Registrieren</button>
        </div>

      </form>

      <section>
        <h2>Anmeldungen ({registrations.length})</h2>

        {registrations.length === 0 && (
          <p>Noch keine Anmeldungen vorhanden.</p>
        )}

        {
          registrations.map(
            (registration) => (
              <article key={registration.id}>
                <h3>{registration.name}</h3>

                <p>
                  {registration.email} <br />

                  Teilnehmer: {registration.participants} <br />

                  ID: {registration.eventId}
                </p>
              </article>
            )
          )
        }
      </section>
    </section>
  );
}