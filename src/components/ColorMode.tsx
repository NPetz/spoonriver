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
        backgroundColor: "text",
        flexShrink: 0,
        cursor: "pointer",
        boxShadow: "shallowshade",
      }}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      <div
        sx={{
          height: ["21px", "21px", "25px"],
          width: ["21px", "21px", "25px"],
          backgroundColor: "background",
        }}
      ></div>
    </div>
  );
}

export default ColorMode;
