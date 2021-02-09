const data = require('./data/spoonRiver.json')



exports.createPages = ({ actions }) => {
    const { createPage } = actions

    data.forEach((poem) => {

        createPage({
            path: `/${poem.slug}`,
            component: require.resolve("./src/templates/poem.js"),
            context: { poem },
        })

    })

}