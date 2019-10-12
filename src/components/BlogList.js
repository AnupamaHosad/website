import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby";

const BlogList = () => {
    const data = useStaticQuery(graphql`
        query blogList {
            allBlogJson {
                edges {
                    node {
                        title
                        pubDate
                        link
                        id
                    }
                }
            }
        }
    `);

    const { edges: posts } = data.allBlogJson;

    return (<div className="blog-list">
        <Link to="/" className="back-link">Back to home</Link>
        {posts.map(({ node = {} }) => {
            const { id, title, pubDate } = node;

            return (<div key={id} className="post-summary">
                <Link to={`/blog/${id}`} key={id}>
                    <header>
                        <h4 className="blog-title">{title[0]}</h4>
                        <div className="posted-on-text">Posted on {pubDate[0]}</div>
                    </header>
                </Link>
            </div>);
        })}
    </div>);
};

export default BlogList;