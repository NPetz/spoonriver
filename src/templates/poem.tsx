/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect } from "react";

import Layout from "../components/Layout";
import PoemNavBtn from "../components/PoemNavBtn";
import LikeBtn from "../components/LikeBtn";
import useLocalStorage from "../hooks/useLocalStorage";
import ColorMode from "../components/ColorMode";

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
      <div
        sx={{
          width: ["95vw", "95vw", "85vw"],
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <article
          sx={{
            width: "100%",
          }}
        >
          <header
            id={poem.slug}
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <LikeBtn index={poem.order} favs={favs}></LikeBtn>
            <h1
              sx={{
                width: "100%",
                padding: "1rem",
                boxShadow: "shallowshade",
                color: "background",
                backgroundColor: "primary",
                fontFamily: "heading",
                fontSize: ["0.8rem", "1.2rem", "1.4rem"],
                zIndex: 2,
              }}
            >
              {poem.title}
            </h1>
          </header>

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
              fontSize: ["0.5rem", "1.4rem", "1.8rem"],
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
            {poem.text.replace("\n", "")}
          </p>
        </article>

        <div
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <PoemNavBtn path="/">🏠</PoemNavBtn>

          {previousPoem && (
            <PoemNavBtn path={`/${previousPoem.slug}`}>◀</PoemNavBtn>
          )}

          {nextPoem && <PoemNavBtn path={`/${nextPoem.slug}`}>▶</PoemNavBtn>}
          <ColorMode />
        </div>
      </div>
    </Layout>
  );
}
