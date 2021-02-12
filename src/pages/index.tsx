/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PoemCard from "../components/PoemCard";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../components/Header";
import GoUp from "../components/GoUp";

const IndexPage = ({ data }) => {
  const [bookmark, setBookmark] = useLocalStorage("bookmark", "false");

  const [favs, setFavs] = useLocalStorage("favs", "false");

  useEffect(() => {
    window.addEventListener("dblclick", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  });

  return (
    <Layout>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          maxWidth: ["90vw", "80vw", "60vw"],
        }}
      >
        <Header />
        <GoUp />

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
