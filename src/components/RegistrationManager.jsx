import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

import events from "../data/events";
import RegistrationList from "./RegistrationList";

function RegistrationManager() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      participants: 1,
      eventId: ""
    });
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");

  let participantsCount = 0;

  for (const registration of registrations) {
    participantsCount += Number(registration.participants);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    let newValue = value;

    if (name === "participants") {
      newValue = Number(value);
    }

    if (name === "eventId") {
      newValue =
        value === ""
          ? ""
          : Number(value);
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie Ihren Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse an!");
      return;
    }

    if (formData.eventId === "") {
      setError("Bitte wählen Sie eine Veranstaltung aus!");
    }

    const newRegistration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants,
      eventId: formData.eventId
    }

    setRegistrations([
      ...registrations,
      newRegistration
    ]);

    setFormData({
      name: "",
      email: "",
      participants: 1,
      eventId: ""
    });
  }

  return (
    <section>
      <h2>Anmeldungen</h2>

      <RegistrationForm
        formData={formData}
        error={error}
        events={events}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h3>Aktuelle Anmeldungen</h3>

      <RegistrationList
        registrations={registrations}
        participantsCount={participantsCount}
      />

    </section>
  );
}

export default RegistrationManager;