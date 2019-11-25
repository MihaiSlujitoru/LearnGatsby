import React from 'react';

import Layout from "../components/layout"

import { graphql, useStaticQuery } from 'gatsby';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node {
                        frontmatter{
                            title
                            date
                        }
                        html
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
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default BlogPage