const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // 2. get markdown data
    const res = await graphql(`
        query {
            allContentfulBlogPosts {
                edges {
                  node {
                    slug
                  }
                }
            }
        }     
    `)
    // 3. create new pages
    res.data.allContentfulBlogPosts.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

}