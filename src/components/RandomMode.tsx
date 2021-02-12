/** @jsx jsx */
import { jsx } from "theme-ui";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const wave = keyframes({ to: { transform: "rotateY(360deg)" } });

function RandomMode() {
  let [animated, setAnimated] = useState(false);

  function afterTimeout(el) {
    el.style.backgroundColor = "#40AD76";
    el.style.color = "#f1faee";
    el.style.transform = "scale(1.1)";
    setTimeout(() => {
      el.click();
    }, 1000);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  function toRandomPoem() {
    let n = getRandomInt(1, 214);
    let el = document.getElementById(n);
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    setTimeout(() => {
      afterTimeout(el);
    }, 1000);
  }

  return (
    <div
      sx={{
        display: "grid",
        placeItems: "center",
        height: ["42px", "42px", "50px"],
        width: ["126px", "126px", "150px"],
        backgroundColor: "luck",
        flexShrink: 0,
        cursor: "pointer",
        boxShadow: "shallowshade",
        animationName: animated ? wave : "none",
        animationDuration: "1s",
        animationFillMode: "backwards",
      }}
      onClick={() => {
        setTimeout(toRandomPoem, 1000);

        setAnimated(true);
      }}
    >
      🍀🎲🍀
    </div>
  );
}

export default RandomMode;
