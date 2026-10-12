function SpeakerCard({
  name,
  specialField,
  company,
  online
}) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{specialField}</p>
      <p>{company}</p>
      <p>
        {online ? "Online verfügbar" : "Nur vor Ort"}
      </p>
    </article>
  );
}

export default SpeakerCard;