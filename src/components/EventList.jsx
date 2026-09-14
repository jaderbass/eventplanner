import EventCard from "./EventCard.jsx";
import events from "../data/events.js";

export default function EventList(
  {
    registrations
  }
) {
  return (
    <section className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          {...event}
          registrations={registrations}
        />
      ))}
    </section>
  );
}