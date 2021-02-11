/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

function ColorMode() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      sx={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        display: "block",
      }}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </button>
  );
}

export default ColorMode;
