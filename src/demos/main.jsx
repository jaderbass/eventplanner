import { createRoot } from "react-dom/client";
import InteracionCard from "./InteractionCard";

function DemoApp() {
  return (
    <>
      <InteracionCard />
    </>
  );
}

const root = createRoot(
  document.querySelector("#root")
);

root.render(<DemoApp />);