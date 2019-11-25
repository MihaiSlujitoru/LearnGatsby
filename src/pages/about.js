import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>This is the about page</p>
            <p>Need a developer? <Link to="/contact">Contact Page</Link></p>
        </Layout>
    )
}

export default AboutPage;