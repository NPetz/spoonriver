/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import Layout from "../components/Layout";
import PoemNavBtn from "../components/PoemNavBtn";
import LikeBtn from "../components/LikeBtn";
import ColorMode from "../components/ColorMode";
import PoemBox from "../components/PoemBox";

export default function Poem({ pageContext: { edge } }) {
  let poem = edge.node;
  let nextPoem = edge.next;
  let previousPoem = edge.previous;

  useEffect(() => {
    window.localStorage.setItem("bookmark", `${poem.order}`);
  });

  const [favs, setFavs] = useLocalStorage("favs", "false");

  return (
    <Layout>
      <article
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          padding: ["1rem 0.5rem ", "1rem ", "1rem "],
        }}
      >
        <header
          id={poem.slug}
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            position: "relative",
          }}
        >
          <LikeBtn
            index={poem.order}
            favs={favs}
            style={{
              position: "absolute",
              right: "5%",
              top: "-5%",
            }}
          ></LikeBtn>
          <h1
            sx={{
              width: "100%",
              padding: "1rem",
              boxShadow: "shallowshade",
              color: "headerText",
              backgroundColor: "primary",
              fontFamily: "heading",
              fontSize: ["0.8rem", "1.2rem", "1.4rem"],
              margin: "0",
            }}
          >
            {poem.title}
          </h1>
        </header>

        <PoemBox poem={poem}>{poem.text.replace("\n", "")}</PoemBox>

        <footer
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PoemNavBtn path="/">🏠</PoemNavBtn>

          {previousPoem && (
            <PoemNavBtn path={`/${previousPoem.slug}`}>◀</PoemNavBtn>
          )}

          {nextPoem && <PoemNavBtn path={`/${nextPoem.slug}`}>▶</PoemNavBtn>}
          <ColorMode />
        </footer>
      </article>
    </Layout>
  );
}
