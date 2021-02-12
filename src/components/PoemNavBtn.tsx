/** @jsx jsx */
import { jsx } from "theme-ui";

function PoemNavBtn({ children, path }) {
  return (
    <a
      sx={{
        height: ["42px", "42px", "50px"],
        width: ["42px", "42px", "50px"],
        display: "grid",
        placeItems: "center",
        boxShadow: "shallowshade",
        backgroundColor: "button",
        color: "primary",
        fontSize: ["0.6rem", "1.0rem", "1.2rem"],
        textDecoration: "none",
        transition: "all 0.2s",
        ":hover": {
          color: "button",
          backgroundColor: "primary",
        },
      }}
      href={path}
    >
      {children}
    </a>
  );
}

export default PoemNavBtn;
