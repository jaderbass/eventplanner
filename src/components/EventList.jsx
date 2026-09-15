import { useState } from "react";

import EventCard from "./EventCard.jsx";
import events from "../data/events.js";
import Search from "./Search.jsx";

export default function EventList(
  {
    registrations
  }
) {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("all");

  console.log(searchTerm);


  const filteredEvents =
    events.filter(event => {
      const matchesSearch =
        event.title
          .toLocaleLowerCase()
          .includes(
            searchTerm.toLocaleLowerCase()
          );

      const matchesType =
        eventType === "all" ||
        (eventType === "online" &&
          event.online) ||
        (eventType === "onsite" &&
          !event.online)

      return matchesSearch && matchesType;
    });


  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        eventType={eventType}
        setEventType={setEventType}
      />

      <p>Treffer: {filteredEvents.length}</p>
      {filteredEvents === 0 && (
        <p>keine passenden Treffer gefunden</p>
      )}
      <section className="event-list">

        {filteredEvents.map(event => (
          <EventCard
            key={event.id}
            {...event}
            registrations={registrations}
          />
        ))}
      </section>
    </>
  );
}