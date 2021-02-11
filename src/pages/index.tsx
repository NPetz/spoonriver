/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PoemCard from "../components/PoemCard";
import useLocalStorage from "../hooks/useLocalStorage";

const IndexPage = ({ data }) => {
  useEffect(() => {
    const bookmark = window.localStorage.getItem("bookmark");

    if (bookmark) {
      let el = window.document.getElementById(`${bookmark}`);
      let title = document.getElementById("title");
      title.addEventListener("click", () => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      });
    }
  });

  const [bookmark, setBookmark] = useLocalStorage("bookmark", "false");

  const [favs, setFavs] = useLocalStorage("favs", "false");

  return (
    <Layout>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <h1
          id="title"
          sx={{
            fontFamily: "heading",
            boxShadow: "shallowshade",
            width: ["90vw", "60vw", "46rem"],
            backgroundColor: "bookmarkBackground",
            textAlign: "center",
            color: "background",
            cursor: "pointer",
            padding: 4,
          }}
        >
          The Spoon River Anthology
        </h1>

        {data.allSpoonRiverJson.edges.map((edge) => {
          let order = edge.node.order;
          let id = edge.node.id;
          let slug = edge.node.slug;
          let title = edge.node.title;
          let isBookmark = bookmark == order;

          return (
            <PoemCard
              key={id}
              order={order}
              id={order}
              slug={slug}
              title={title}
              favs={favs}
              isBookmark={isBookmark}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allSpoonRiverJson {
      edges {
        node {
          title
          order
          slug
          id
        }
      }
    }
  }
`;
