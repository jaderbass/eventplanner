function RegistrationList({
  registrations,
  participantsCount
}) {
  if (registrations.length === 0) {
    return (
      <p>Noch keine Anmeldungen vorhanden</p>
    );
  }

  return (
    <>
      <p>
        Anmeldungen: {registrations.length}
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
              <p>{registration.eventId}</p>
              <p>Teilnehmer:{" "} {registration.participants}</p>
            </article>
          )
        )}
      </div>
    </>
  );
}

export default RegistrationList;