/** @jsx jsx */
import { jsx } from "theme-ui";
import Bookmark from "./Bookmark";

import ColorMode from "./ColorMode";
import RandomMode from "./RandomMode";

function Header() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: "1rem",
      }}
    >
      <h1
        id="title"
        sx={{
          fontFamily: "display",
          width: "100%",
          textAlign: "center",
          color: "headerText",
          textShadow: "0px 0px 3px #242423, 0px 0px 30px rgba(0,0,0,0.1)",
          userSelect: "none",
          fontSize: ["2rem", "3rem", "4rem"],
          padding: ["1rem 2rem", "1rem 4rem", "1rem 6rem"],
          margin: 0,
          boxShadow: "0px 5px 3px -5px #242423, 0px -5px 3px -5px #242423 ",
          backgroundColor: "headerBackground",
          transition: "all 0.2s",
          ":hover": {
            color: "headerText",
            backgroundColor: "headerBackground",
          },
        }}
      >
        The Spoon River Anthology
      </h1>
      <div
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ColorMode />
        <RandomMode />
        <Bookmark />
      </div>
    </div>
  );
}

export default Header;
