import { useState } from "react";

import events from "../data/events.js";
import RegistrationList from "./RegistrationList";
import RegistrationForm from "./RegistrationForm";

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

  function handleDelete(id) {
    setRegistrations(
      registrations.filter(
        (registration) => registration.id !== id
      )
    )
  }

  return (
    <section className="registration-manager">
      <h2>Event-Anmeldung</h2>

      {error && (
        <p className="alert error-message">
          {error}
        </p>
      )}

      {successBooking && (
        <p className="alert success-message">
          Die Anmeldung für{" "}
          <strong>{successBooking.name}</strong>{" "}
          wurde erfolgreich erfasst.
        </p>
      )}

      <RegistrationForm
        formData={formData}
        events={events}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <RegistrationList
        formData={formData}
        events={events}
        registrations={registrations}
        title="Aktuelle Anmeldungen"
        onDelete={handleDelete}
      />

    </section>
  );
}