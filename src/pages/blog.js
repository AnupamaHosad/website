import React from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import { Router } from "@reach/router";
import "../styles/blog.scss";

const Blog = () => {
    return (
        <Router>
            <BlogDetail path="/blog/:id" />
            <BlogList path="/blog" />
        </Router>
    );
};

export default Blog;