export default function EventCard(props) {
  return (
    <article>
      <h2> { props.title } </h2>
      <p> { props.date } </p>
      <p> { props.location } </p>
      <button>Details</button>
    </article>
  );
}