
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allSpoonRiverJson {
            edges {
              node {
                id
                slug
                order
                text
                title
              }
              next {
                slug
                title
                order
              }
              previous {
                slug
                title
                order
              }
            }
        }
    }
  `)
  result.data.allSpoonRiverJson.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: require.resolve("./src/templates/poem.tsx"),
      context: {
        edge
      },
    })
  })
}