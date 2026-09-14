import { useEffect } from "react";

export default function DeleteStorage(
  { setRegistrations }
) {
  function handleDeleteAll() {
    setRegistrations([]);
  }

  return (
    <button type="button" onClick={handleDeleteAll}>
      Alle Registrierungen löschen
    </button>
  );
}