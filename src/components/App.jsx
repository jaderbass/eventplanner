import Header from "./Header";
import Footer from "./Footer";
import CourseList from "./CourseList";
import SpeakerCard from "./SpeakerCard";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Ihr(e) Trainer/in</h2>
        <SpeakerCard
          name="Anna Beispiel"
          specialField="React"
          company="WebDev GmbH"
          online={true}
        />
        <CourseList />
      </main>

      <Footer />
    </>
  );
}