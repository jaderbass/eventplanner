import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
    >
      {liked ? "Gefällt mir ✓" : "Gefällt mir"}
    </button>
  );
}

export default LikeButton;
