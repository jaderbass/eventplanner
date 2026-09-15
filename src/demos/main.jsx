import { createRoot } from "react-dom/client";
import FocusInput from "./FocusInput.jsx";

function DemoApp() {
  return (
    <>
      <FocusInput />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);