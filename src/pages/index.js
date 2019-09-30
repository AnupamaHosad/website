import React from "react";
import SocialLinks from "../components/SocialLinks";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import "../styles/index.scss";

const App = () => {
    return (<div>
        <section className="section">
            <h1 className="section-title">About Me</h1>
            <div className="about-me">
                <img src="https://avatars2.githubusercontent.com/u/5268207?s=400&u=a8b97f444fae1d482bfb04eaeebdd3581294347a&v=4" className="profile-image" /> 
                <p className="profile-desc">
                    UI Engineer with over 5+ years of experience in using client side technologies like HTML, CSS, JavaScript and 
                    libraries / frameworks like jQuery, Backbone, React, Handlebars, Underscore, Require JS, Node JS, Bootstrap, Less and Grunt 
                    for building highly performant and scalable web applications. 
                    Having an extraordinary ability to go to details, she takes complete ownership in solving any problems 
                    and builds a deep understanding of the products she works on. She has also mentored and ramped up team members in various projects. 
                </p>
            </div>
        </section>
        <section className="section">
            <h1 className="section-title">Skills</h1>
            <Skills />
        </section>
        <section className="section">
            <h1 className="section-title">Projects</h1>
            <Projects />
        </section>
        <section className="section">
            <h1 className="section-title">Find me on</h1>
            <SocialLinks />
        </section>
    </div>);
}

export default App;

