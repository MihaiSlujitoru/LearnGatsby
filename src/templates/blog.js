import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPosts(slug: {eq: $slug}) {
            id
            blogTitle
            publishedDate(formatString: "MMMM Do, YYYY")
            content{
                json
              }
        }          
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPosts.blogTitle}</h1>
            <p>{props.data.contentfulBlogPosts.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPosts.content.json, options)}
        </Layout>
    )
}

export default Blog;