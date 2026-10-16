import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function RegistrationManager() {
  const [formData, setFormData] = useState({ name: "", email: "", participants: 1 });
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");

  let participantsCount = 0;

  for (const registration of registrations) {
    participantsCount += Number(registration.participants);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    const newValue =
      name === "participants"
        ? Number(value)
        : value;

    setFormData({
      ...formData,
      [name]: value
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
      setError("Bitte geben Sie eine E-Mail-SAdresse an!");
      return;
    }

    const newRegistration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants
    }

    setRegistrations([
      ...registrations,
      newRegistration
    ]);

    setFormData({
      name: "",
      email: "",
      participants: 1
    });
  }

  return (
    <section>
      <h2>Anmeldungen</h2>

      <RegistrationForm
        formData={formData}
        error={error}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h3>Aktuelle Anmeldungen</h3>

      <p>
        Anmeldungen: {" "} {registrations.length === 0
          ? "Noch keine Anmeldungen vorhanden."
          : registrations.length}
      </p>

      <p>
        Teilnehmer gesamt: {" "} {participantsCount}
      </p>

      <div className="registration-list">
        {registrations.map(
          (registration) => (
            <article
              key={registration.id}
              className="registration-card"
            >
              <h4>{registration.name}</h4>
              <p>{registration.email}</p>
              <p>Teilnehmer:{" "} {registration.participants}</p>
            </article>
          )
        )}
      </div>

    </section>
  );
}

export default RegistrationManager;