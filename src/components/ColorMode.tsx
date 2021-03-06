/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

function ColorMode() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
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
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      {colorMode === "default" ? "🌙" : "🌞"}
    </div>
  );
}

export default ColorMode;
