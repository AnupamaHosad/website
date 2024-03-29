/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        siteUrl: "https://anupamahosad.com/"
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://anupamahosad.com/",
                policy: [{ userAgent: "*", allow: "/" }]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `blog`,
              path: `${__dirname}/content/blog/`,
            },
        },
        "gatsby-transformer-json",
        {
			resolve: "gatsby-plugin-pdf",
			options: {
                allPages: true,
				// /* paths: ["/resume"], */
				outputPath: "exports",
                styleTagOptions: {
                    path: "./src/styles/main.css"
                }
			},
		}
    ]
}
