/** @jsx jsx */
import { useEffect } from "react";
import { jsx } from "theme-ui";

function GoUp() {
  return (
    <div
      sx={{
        position: "fixed",
        right: "2em",
        bottom: "2em",
        display: "grid",
        placeItems: "center",
        height: ["42px", "42px", "50px"],
        width: ["42px", "42px", "50px"],
        backgroundColor: "button",
        flexShrink: 0,
        cursor: "pointer",
        boxShadow: "shallowshade",
        zIndex: "3",
      }}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      👆
    </div>
  );
}

export default GoUp;
