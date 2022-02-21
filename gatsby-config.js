module.exports = {
  siteMetadata: {
    siteTitle: "Margaret Catter Development",
    defaultTitle: "Margaret Catter Development",
    siteTitleShort: "Margaret Catter Development",
    siteDescription: "Margaret Catter Development Homepage",
    siteUrl: "https://margaretcatter.dev",
    siteAuthor: "@mcatterdev",
    siteImage: "static/mainbanner.png",
    siteLanguage: "en",
    themeColor: "#8257E6",
    basePath: "/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: "@rocketseat/gatsby-theme-docs",
      options: {
        configPath: "src/config",
        docsPath: "src/docs",
        yamlFilesPath: "src/yamlFiles",
        repositoryUrl: "https://github.com/jpedroschmitz/rocketdocs",
        baseDir: "examples/gatsby-theme-docs",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Margaret Catter Development",
        short_name: "Margaret Catter Dev",
        start_url: "/",
        background_color: "#ffe2ea",
        display: "standalone",
        icon: "static/icon.png",
      },
    },
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "YOUR_ANALYTICS_ID",
    //   },
    // },
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://rocketdocs.netlify.app",
      },
    },
    "gatsby-plugin-offline",
  ],
};
