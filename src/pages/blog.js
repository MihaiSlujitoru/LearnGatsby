import React from 'react';
import Layout from "../components/layout"

import { Link, graphql, useStaticQuery } from 'gatsby';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node {
                        frontmatter{
                            title
                            date
                            id
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Post will show up here later on</p>

            <ul>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li id={edge.node.frontmatter.id} key={edge.node.frontmatter.id}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            <p>{edge.node.frontmatter.excerpt}</p>
                            <Link to={`/blog/${edge.node.fields.slug}`}>Read More...</Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default BlogPage