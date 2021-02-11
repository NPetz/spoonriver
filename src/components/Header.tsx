/** @jsx jsx */
import { jsx } from "theme-ui";

function Header() {
  return (
    <h1
      id="title"
      sx={{
        fontFamily: "display",
        width: "100%",
        textAlign: "center",
        color: "primary",
        cursor: "pointer",
        fontSize: ["2rem", "3rem", "4rem"],
        padding: [2, 4, 6],
        margin: 0,
        backgroundColor: "bookmarkBackground",
        transition: "all 0.2s",
      }}
    >
      The Spoon River Anthology
    </h1>
  );
}

export default Header;
