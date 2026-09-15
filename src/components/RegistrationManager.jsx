import { useState, useEffect, useRef } from "react";

import events from "../data/events.js";
import RegistrationList from "./RegistrationList";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationManager(
  {
    registrations,
    setRegistrations
  }
) {
  // useRef-Definition
  /* const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const eventIdInputRef = useRef(null);
  const participantsInputRef = useRef(null); */

  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    eventId: useRef(null),
    participants: useRef(null)
  }

  // useState-Definitionen
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    eventId: ""
  });
  const [error, setError] = useState("");
  const [successBooking, setSuccessBooking] = useState(null);

  // useEffect-Definition
  useEffect(() => {
    if (!successBooking) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setSuccessBooking(null);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [successBooking]);

  function handleChange(event) {
    const {
      name,
      value,
      type
    } = event.target;

    setSuccessBooking(null);

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
      inputRefs.name.current.focus();
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte eine E-Mail-Adresse eingeben.");
      inputRefs.email.current.focus();
      return;
    }

    if (formData.eventId === "") {
      setError("Bitte eine Veranstaltung auswählen.");
      inputRefs.eventId.current.focus();
      return;
    }

    if (formData.participants < 1) {
      setError("Die Teilnehmerzahl muss mindestens 1 betragen.");
      inputRefs.participants.current.focus();
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

    // Name-Feld soll den Fokus bekommen.
    // Das ? ist dafür zuständig, dass dies nur dann passiert, wenn nameInputRef.current NICHT null ist.
    nameInputRef.current?.focus();
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
        inputRefs={inputRefs}
      />

      <RegistrationList
        formData={formData}
        events={events}
        registrations={registrations}
        title="Anmeldungen"
        onDelete={handleDelete}
      />

    </section>
  );
}