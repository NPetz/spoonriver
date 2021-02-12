/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

function PoemBox({ children, poem }) {
  useEffect(() => {
    let soundEnabled = false;

    let poemText = new SpeechSynthesisUtterance(poem.title + "." + children);

    soundEnabled ?? speechSynthesis.speak(poemText);
  });

  return (
    <div
      sx={{
        overflowY: "auto",
        width: "100%",
        flexGrow: 1,
        display: "grid",
        placeItems: "center",
        // justifyContent: "center",
        // overflowX: "hidden",
        boxShadow: "shallowshade",
        backgroundColor: "poemBackground",
        whiteSpace: "pre",
        color: "text",
        fontSmooth: "true",
        lineHeight: "body",
        fontFamily: "body",
        fontSize: ["2.8vw", "2.85vw", "2.73vw"],
        // fontSize: ["0.5rem", "1.4rem", "1.8rem"],
        padding: ["1rem", "2rem", "3rem"],
        margin: "0",
        "::-webkit-scrollbar": {
          width: "0.5em",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "background",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "text",
        },
      }}
    >
      <p
        sx={{
          margin: 0,
          padding: 0,
          width: "min-content",
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default PoemBox;
