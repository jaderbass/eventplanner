import EventCard from "./EventCard.jsx";

const events = [
  {
    id: 1,
    title: "React Grundlagen",
    date: "12. September 2026",
    location: "Raum 1",
    speaker: "Anna Müller",
    price: 129,
    online: false,
  },
  {
    id: 2,
    title: "JavaScript Workshop",
    date: "19. September 2026",
    location: "Raum 2",
    speaker: "Robert Rabe",
    price: 149,
    online: true,
  },
  {
    id: 3,
    title: "HTML/CSS Grundlagen",
    date: "12. September 2026",
    location: "Raum 2",
    speaker: "Heribert Hüller",
    price: 109,
    online: true,
  },
  {
    id: 4,
    title: "PHP Grundlagen",
    date: "26. September 2026",
    location: "Raum 5",
    speaker: "Klausbernd Kummer",
    price: 199,
    online: false,
  },
  {
    id: 5,
    title: "TypeScript Grundlagen",
    date: "26. September 2026",
    location: "Raum 4",
    speaker: "Klausbernd Kummer",
    price: 129,
    online: false,
  },
]

export default function EventList() {
  return (
    <section className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          {...event}
        />
      ))}
    </section>
  );
}