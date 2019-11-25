import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"


const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello!</h1>
            <p>I'm Mihai, a front end developer.</p>
            <p>Need a developer? <Link to="/contact">Contact Page</Link></p>
        </Layout>
    )
}

export default IndexPage;
