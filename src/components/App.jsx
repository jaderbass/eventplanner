import Header from "./Header";
import Footer from "./Footer";
import EventList from "./EventList";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <EventList />
      </main>

      <Footer />
    </>
  );
}