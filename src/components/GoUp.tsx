/** @jsx jsx */
import { jsx } from "theme-ui";

function GoUp() {
  return (
    <div
      sx={{
        position: "fixed",
        left: "50%",
        bottom: 0,
        display: "grid",
        placeItems: "center",
        height: "50px",
        width: "200px",
        backgroundColor: "button",
        flexShrink: 0,
        cursor: "pointer",
        boxShadow: "shallowshade",
        zIndex: "3",
        transform: "translateX(-50%)",
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
