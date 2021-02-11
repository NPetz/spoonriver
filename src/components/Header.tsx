/** @jsx jsx */
import { jsx } from "theme-ui";

function Header() {
  return (
    <h1
      id="title"
      sx={{
        fontFamily: "heading",
        width: "100%",
        textAlign: "center",
        color: "primary",
        cursor: "pointer",
        fontSize: ["3rem", "4rem", "5rem"],
        padding: 6,
        margin: 0,
        transition: "all 0.2s",
        ":hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      The Spoon River Anthology
    </h1>
  );
}

export default Header;
