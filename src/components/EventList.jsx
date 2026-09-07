import EventCard from "./EventCard.jsx";

export default function EventList() {
  return (
    <section>
      <EventCard 
        title="React Grundlagen"
        date="12. September 2026"
        location="Raum 1"
      />

      <EventCard 
        title="JavaScript Workshop"
        date="19. September 2026"
        location="Raum 2"
      />
      
      <EventCard 
        title="HTML/CSS Grundlagen"
        date="12. September 2026"
        location="Raum 2"
      />

      <EventCard 
        title="PHP Grundlagen"
        date="26. September 2026"
        location="Raum 5"
      />
    </section>
  );
}