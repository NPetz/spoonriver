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
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          width: ["90vw", "24rem", "46rem"],
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
              }}
            >
              {poem.title}
            </h1>
          </header>

          <p
            sx={{
              width: "100%",
              boxShadow: "shallowshade",
              backgroundColor: "background",
              whiteSpace: "pre",
              color: "text",
              fontSmooth: "true",
              lineHeight: "body",
              fontFamily: "body",
              fontSize: ["0.6rem", "1rem", "1.2rem"],
              padding: ["1rem", "2rem", "4rem"],
              margin: "0",
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
            gap: "1rem",
          }}
        >
          {previousPoem && (
            <PoemNavBtn path={`/${previousPoem.slug}#${previousPoem.slug}`}>
              Previous
            </PoemNavBtn>
          )}

          <PoemNavBtn path="/">Home</PoemNavBtn>

          {nextPoem && (
            <PoemNavBtn path={`/${nextPoem.slug}#${nextPoem.slug}`}>
              Next
            </PoemNavBtn>
          )}
          <ColorMode />
        </div>
      </div>
    </Layout>
  );
}
