/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

function ColorMode() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      sx={{
        display: "block",
        height: "3rem",
        width: "3rem",
        backgroundColor: "text",
        flexShrink: 0,
      }}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    ></div>
  );
}

export default ColorMode;
