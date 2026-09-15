import { createRoot } from "react-dom/client";
import PreviousName2 from "./PreviousName2.jsx";

function DemoApp() {
  return (
    <>
      <PreviousName2 />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);