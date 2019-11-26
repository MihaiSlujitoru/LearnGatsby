import React from 'react';
import Layout from "../components/layout"

import { Link, graphql, useStaticQuery } from 'gatsby';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPosts(sort: { fields: publishedDate, order: DESC }) {
                edges {
                  node {
                    id
                    blogTitle
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
                  }
                }
              }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Post will show up here later on</p>

            <ul>
                {data.allContentfulBlogPosts.edges.map((edge) => {
                    return (
                        <li key={edge.node.id}>
                            <h1>{edge.node.blogTitle}</h1>
                            <p>{edge.node.publishedDate}</p>
                            <Link to={`/blog/${edge.node.slug}`}>Learn More...</Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default BlogPage