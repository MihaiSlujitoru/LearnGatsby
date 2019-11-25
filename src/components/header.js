import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerLogo}>
                <Link to="/">{
                    data.site.siteMetadata.title
                }</Link>
            </div>
            <nav className={headerStyles.headerNav}>
                <ul className={headerStyles.navItems}>
                    <li className={headerStyles.navItem}>
                        <Link
                            className={headerStyles.navItemLink}
                            activeClassName={headerStyles.navItemLinkActive}
                            to="/">Home
                        </Link>
                    </li>
                    <li className={headerStyles.navItem}>
                        <Link
                            className={headerStyles.navItemLink}
                            activeClassName={headerStyles.navItemLinkActive}
                            to="/about">About
                        </Link>
                    </li>
                    <li className={headerStyles.navItem}>
                        <Link
                            className={headerStyles.navItemLink}
                            activeClassName={headerStyles.navItemLinkActive}
                            to="/blog">Blog
                        </Link>
                    </li>
                    <li className={headerStyles.navItem}>
                        <Link
                            className={headerStyles.navItemLink}
                            activeClassName={headerStyles.navItemLinkActive}
                            to="/contact">Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;