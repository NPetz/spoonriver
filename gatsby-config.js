module.exports = {
  siteMetadata: {
    title: "Spoon River",
    siteUrl: "https://eloquent-elion-8f88ca.netlify.app/"
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "poems",
        path: "./data/",
      },
      __key: "poems",
    },
  ],
};
