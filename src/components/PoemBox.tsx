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
    <p
      sx={{
        height: "70vh",
        overflowY: "auto",
        boxShadow: "shallowshade",
        backgroundColor: "poemBackground",
        whiteSpace: "pre",
        color: "text",
        fontSmooth: "true",
        lineHeight: "body",
        fontFamily: "body",
        fontSize: "2.73vw",
        // fontSize: ["0.5rem", "1.4rem", "1.8rem"],
        padding: ["0.5rem", "1rem", "2rem"],
        margin: "0",
        "::-webkit-scrollbar": {
          width: "0.5em",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "background",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "primary",
        },
      }}
    >
      {children}
    </p>
  );
}

export default PoemBox;
