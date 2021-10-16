import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby";

const BlogDetail = (props) => {
    const data = useStaticQuery(graphql`
        query blogDetailList {
            allBlogJson {
                edges {
                    node {
                        title
                        pubDate
                        link
                        id,
                        content_encoded
                    }
                }
            }
        }
    `);
    
    const blogData = data.allBlogJson.edges.find(item => item.node.id === props.id) || {};
    const { title = [], content_encoded: content = [], link = [], pubDate  = []} = blogData.node;
    
    return (<div className="blog-detail">
        <Link to="/blog" className="back-link">Back to blogs</Link>
        <header>
            <div className="title-cont">
                <h1 className="blog-title">{title[0]}</h1>
                <div className="posted-on-text">Posted on {pubDate[0]}</div>
            </div>
            <a href={`${link[0]}`} target="_blank" rel="noopener noreferrer" className="medium-btn">Read in Medium</a>
        </header>
        <section className="blog-content" dangerouslySetInnerHTML={{__html: content[0]}} />
    </div>);
};

export default BlogDetail;
