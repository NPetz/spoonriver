/** @jsx jsx */
import { useEffect } from "react";
import { jsx } from "theme-ui";

function Bookmark() {
  useEffect(() => {
    const bookmark = window.localStorage.getItem("bookmark");

    if (bookmark) {
      let el = window.document.getElementById(`${bookmark}`);
      let title = document.getElementById("bookmark");
      title.addEventListener("click", () => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      });
    }
  });

  return (
    <div
      id="bookmark"
      sx={{
        display: "grid",
        placeItems: "center",
        height: ["42px", "42px", "50px"],
        width: ["42px", "42px", "50px"],
        backgroundColor: "button",
        flexShrink: 0,
        cursor: "pointer",
        boxShadow: "shallowshade",
      }}
    >
      🔖
    </div>
  );
}

export default Bookmark;
