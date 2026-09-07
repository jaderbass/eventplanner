export default function EventCard(props) {
  return (
    <article>
      <h2> { props.title } </h2>
      <p> { props.date } </p>
      <p> { props.location } </p>
      <p> Trainer: { props.speaker } </p>
      <p> Preis: { props.price } € </p>
      <p> { props.online } </p>

      <button>Details</button>
    </article>
  );
}