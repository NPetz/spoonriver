/** @jsx jsx */
import { jsx } from "theme-ui";

function PoemNavBtn({ children, path }) {
  return (
    <a
      sx={{
        display: "block",
        boxShadow: "shallowshade",
        backgroundColor: "background",
        textAlign: "center",
        color: "primary",
        fontSize: ["0.6rem", "1.0rem", "1.2rem"],
        fontFamily: "heading",
        textTransform: "uppercase",
        padding: "1rem",
        textDecoration: "none",
        transition: "all 0.2s",
        ":hover": {
          color: "background",
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
