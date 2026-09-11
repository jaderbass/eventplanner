import { useState } from "react";
import RegistrationList from "./RegistrationList";

export default function RegistrationManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    eventId: ""
  });

  const [registrations, setRegistrations] = useState([]);

  const [error, setError] = useState("");
  const [successBooking, setSuccessBooking] = useState(null);

  function handleChange(event) {
    const {
      name,
      value,
      type
    } = event.target;

    setFormData({
      ...formData,
      [name]:
        type === "number"
          ? Number(value)
          : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccessBooking(null);

    if (formData.name.trim() === "") {
      setError("Bitte einen Namen eingeben.");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte eine E-Mail-Adresse eingeben.");
      return;
    }

    if (formData.eventId === "") {
      setError("Bitte eine Veranstaltung auswählen.");
      return;
    }

    if (formData.participants < 1) {
      setError(
        "Die Teilnehmerzahl muss mindestens 1 betragen."
      );
      return;
    }

    const registration = {
      id: Date.now(),
      ...formData
    };

    setRegistrations([
      ...registrations,
      registration
    ]);

    setSuccessBooking({
      name: formData.name,
      eventId: formData.eventId
    });

    setFormData({
      name: "",
      email: "",
      participants: 1,
      eventId: ""
    });
  }

  return (
    <section className="registration-manager">
      <h2>Event-Anmeldung</h2>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {successBooking && (
        <p className="success-message">
          Die Anmeldung für{" "}
          <strong>{successBooking.name}</strong>{" "}
          wurde erfolgreich erfasst.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          >
            <option value="" disabled>
              Bitte wählen
            </option>

            <option value="1">
              React Grundlagen
            </option>

            <option value="2">
              JSX und Komponenten
            </option>

            <option value="3">
              State und Events
            </option>
          </select>
        </div>

        <button type="submit">
          Anmeldung senden
        </button>
      </form>

      <RegistrationList registrations={registrations} />

    </section>
  );
}