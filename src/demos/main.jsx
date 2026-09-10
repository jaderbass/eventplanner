import { createRoot } from "react-dom/client";
import BookingForm from "./BookingForm";

function DemoApp() {
  return (
    <>
      <BookingForm />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);