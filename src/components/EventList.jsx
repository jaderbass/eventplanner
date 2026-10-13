import events from "../data/events";
import EventCard from "./EventCard";

function EventList() {
  return (
    <section>
      <h2>Veranstaltungen</h2>

      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            eventType={event.eventType}
            seats={event.seats}
            online={event.online}
          />
        );
      })}
    </section>
  );
}

export default EventList;