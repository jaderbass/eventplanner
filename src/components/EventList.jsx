import EventCard from "./EventCard.jsx";

export default function EventList() {
  return (
    <section>
      <EventCard 
        title="React Grundlagen"
        date="12. September 2026"
        location="Raum 1"
        speaker="Anna Müller"
        price={ 129 }
        online={ false }
      />

      <EventCard 
        title="JavaScript Workshop"
        date="19. September 2026"
        location="Raum 2"
        speaker="Robert Rabe"
        price={ 149 }
        online={ true }
      />
      
      <EventCard 
        title="HTML/CSS Grundlagen"
        date="12. September 2026"
        location="Raum 2"
        speaker="Heribert Hüller"
        price={ 109 }
        online={ true }
      />

      <EventCard 
        title="PHP Grundlagen"
        date="26. September 2026"
        location="Raum 5"
        speaker="Klausbernd Kummer"
        price={ 169 }
        online={ false }
      />
    </section>
  );
}