/** @jsx jsx */
import { jsx } from "theme-ui";
import LikeBtn from "../components/LikeBtn";

function PoemCard(props) {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        gap: "1rem",
        alignItems: "center",
        fontFamily: "heading",
      }}
    >
      {props.isFav == "true" && (
        <LikeBtn index={props.order} isFav={props.isFav}></LikeBtn>
      )}

      <a
        id={props.order}
        sx={{
          width: "100%",
          padding: 3,
          boxShadow: "shallowshade",
          backgroundColor: props.isBookmark
            ? "bookmarkBackground"
            : "background",
          color: props.isBookmark ? "bookmarkText" : "text",
          transition: "all 0.2s",
          display: "flex",
          flexWrap: "nowrap",
          textDecoration: "none",
          ":hover": {
            backgroundColor: "primary",
            color: "background",
          },
        }}
        href={`/${props.slug}#${props.slug}`}
      >
        <h2>{props.title}</h2>

        <span
          sx={{
            marginLeft: "auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          {props.order}
        </span>
      </a>
    </div>
  );
}

export default PoemCard;
